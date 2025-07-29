import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Table from '../../components/common/Table.jsx';
import Badge from '../../components/common/Badge.jsx';

function ManageOrders() {
  const orders = [
    { id: '12345', customer: 'John Doe', total: 199.99, status: 'pending' },
    { id: '12346', customer: 'Jane Smith', total: 299.99, status: 'shipped' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>
        <Table headers={['Order ID', 'Customer', 'Total', 'Status', 'Actions']}>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-6 py-3">{order.id}</td>
              <td className="px-6 py-3">{order.customer}</td>
              <td className="px-6 py-3">${order.total}</td>
              <td className="px-6 py-3">
                <select className="border rounded p-1">
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
              <td className="px-6 py-3">
                <Badge status={order.status}>{order.status}</Badge>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ManageOrders;