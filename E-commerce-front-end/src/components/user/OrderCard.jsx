import React from 'react';
import Card from '../common/Card.jsx';
import Badge from '../common/Badge.jsx';

function OrderCard({ orderId = '12345', items = 2, total = 199.98, status = 'pending' }) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Order #{orderId}</h3>
          <p className="text-gray-600">{items} Items</p>
          <p className="text-gray-600">Total: ${total}</p>
        </div>
        <Badge status={status}>{status}</Badge>
      </div>
    </Card>
  );
}

export default OrderCard;