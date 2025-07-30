import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Table from '../../components/common/Table.jsx';
import Badge from '../../components/common/Badge.jsx';

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all admin orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/orders/admin/all', {
          withCredentials: true,
        });
        setOrders(res.data.data || []);
      } catch (err) {
        console.error('Error fetching admin orders:', err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <Table headers={['Order ID', 'Customer', 'Total', 'Status', 'Actions']}>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="px-6 py-3">{order._id.slice(-6).toUpperCase()}</td>
                <td className="px-6 py-3">
                  {order.user?.name || 'Unknown'}
                  <br />
                  <span className="text-xs text-gray-500">{order.user?.email}</span>
                </td>
                <td className="px-6 py-3">${order.totalAmount.toFixed(2)}</td>
                <td className="px-6 py-3">
                 <select
  value={order.status}
  className="border rounded p-1"
  onChange={async (e) => {
    const newStatus = e.target.value;
    try {
      await axios.patch(
        `http://localhost:8000/api/orders/admin/${order._id}/status`,
        { status: newStatus },
        { withCredentials: true }
      );

      // Optionally update UI locally
      setOrders((prev) =>
        prev.map((o) =>
          o._id === order._id ? { ...o, status: newStatus } : o
        )
      );
    } catch (err) {
      console.error('Status update failed:', err.response?.data?.message || err.message);
      alert('Failed to update order status');
    }
  }}
>
  <option value="Pending">Pending</option>
  <option value="Processing">Processing</option>
  <option value="Shipped">Shipped</option>
  <option value="Delivered">Delivered</option>
  <option value="Cancelled">Cancelled</option>
</select>

                </td>
                <td className="px-6 py-3">
                  <Badge status={order.status}>{order.status}</Badge>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
}

export default ManageOrders;
