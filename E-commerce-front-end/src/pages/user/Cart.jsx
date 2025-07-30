import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/user/CartItem';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, fetchCart, error, loading } = useCart();
  const cartItems = cart?.items || []; // 

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {loading && <p className="text-gray-600 text-center">Loading cart...</p>}
        {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

        {!loading && cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.product._id}
                productId={item.product._id}
                name={item.product.name}
                price={item.product.price}
                images={item.product.images}
                quantity={item.quantity}
              />
            ))}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <Link to="/checkout">
                <Button variant="primary">Proceed to Checkout</Button>
              </Link>
            </div>
          </>
        ) : (
          !loading && <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </Card>
    </div>
  );
}

export default Cart;
