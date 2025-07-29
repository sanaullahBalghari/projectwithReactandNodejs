import React from 'react';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';

function ProductDetails() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <div className="flex flex-col md:flex-row">
          <img src="https://via.placeholder.com/400" alt="Product" className="w-full md:w-1/2 rounded-lg" />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">Sample Product</h2>
            <p className="text-gray-600 mt-2">$99.99</p>
            <p className="text-gray-600 mt-2">In Stock: 50</p>
            <p className="text-gray-700 mt-4">This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className="mt-4">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;