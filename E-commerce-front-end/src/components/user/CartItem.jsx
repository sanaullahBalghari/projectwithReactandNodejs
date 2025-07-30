// src/components/user/CartItem.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import Button from "../common/Button";

function CartItem({ productId, images, name, price, quantity }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="flex items-center border-b py-4">
      <img
        src={
          images && images[0] ? images[0] : "https://via.placeholder.com/100"
        }
        alt={name}
        className="w-24 h-24 object-cover rounded"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/100";
          console.log(`Failed to load image: ${images && images[0]}`);
        }}
      />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">
          Rs {price} x {quantity}
        </p>
        <p className="text-gray-600 font-medium">
          Subtotal: Rs {(price * quantity).toFixed(2)}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <Button onClick={handleDecrease} variant="secondary">
            -
          </Button>
          <span>{quantity}</span>
          <Button onClick={handleIncrease} variant="secondary">
            +
          </Button>
        </div>
      </div>
      <Button variant="danger" onClick={() => removeFromCart(productId)}>
        Remove
      </Button>
    </div>
  );
}

export default CartItem;
