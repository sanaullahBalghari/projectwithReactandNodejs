import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';

function ProductCard({ id, image, name, price, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link to={`/product/${id}`}>
        <img
          src={image || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">${price}</p>
          <p className="text-sm text-gray-500 mt-2">
            {description?.substring(0, 100) || "No description available"}
          </p>
          <Button className="mt-2 w-full">View Details</Button>
        </div>
      </Link>
    </Card>
  );
}

export default ProductCard;
