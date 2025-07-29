import React from 'react';
import OrderCard from '../../components/user/OrderCard.jsx';

function MyOrders() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <OrderCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default MyOrders;