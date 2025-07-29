import React from 'react';
import Button from '../common/Button.jsx';

function CartItem({ name = 'Sample Product', price = 99.99, quantity = 1, image = 'https://via.placeholder.com/100' }) {
  return (
    <div className="flex items-center border-b py-4">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price}</p>
        <div className="flex items-center space-x-2 mt-2">
          <Button variant="secondary">-</Button>
          <span>{quantity}</span>
          <Button variant="secondary">+</Button>
        </div>
      </div>
      <Button variant="danger">Remove</Button>
    </div>
  );
}

export default CartItem;