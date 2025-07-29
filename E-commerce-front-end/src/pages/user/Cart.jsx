import React from 'react';
import CartItem from '../../components/user/CartItem.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import { Link } from "react-router-dom";

<Link to="/checkout">
  <Button variant="primary">Proceed to Checkout</Button>
</Link>

function Cart() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-semibold">Total: $299.97</p>
         <Link to="/checkout">
  <Button variant="primary">Proceed to Checkout</Button>
</Link>
        </div>
      </Card>
    </div>
  );
}

export default Cart;