import React from 'react';
import Card from '../common/Card.jsx';
import Badge from '../common/Badge.jsx';

function OrderCard({ order }) {
  if (!order) return null;

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Order #{order._id.slice(-6).toUpperCase()}</h3>
          <p className="text-gray-600">{order.items.length} Items</p>
         
            <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.product?.name || "Unnamed Product"} × {item.quantity}
              </li>
            ))}
          </ul>
          <p className="text-gray-600">Total: ${order.totalAmount.toFixed(2)}</p>
          <p className="text-gray-500 text-sm">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
        <Badge status={order.status}>{order.status}</Badge>
      </div>
    </Card>
  );
}

export default OrderCard;
