import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar.jsx';
import DashboardCard from '../../components/admin/DashboardCard.jsx';
import Table from '../../components/common/Table.jsx';
import Badge from '../../components/common/Badge.jsx';

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch stats
const statsRes = await axios.get("http://localhost:8000/api/orders/dashboard/stats", {
  withCredentials: true,
});
        setStats(statsRes.data.data);

        // Fetch recent orders
       const ordersRes = await axios.get("http://localhost:8000/api/orders/admin/all", {
  withCredentials: true,
});
        setRecentOrders(ordersRes.data.data.slice(0, 5)); // show latest 5 orders
      } catch (err) {
        console.error('Error loading dashboard data:', err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button className="text-blue-600">Logout</button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard title="Total Products" value={stats.totalProducts} icon="📦" />
          <DashboardCard title="Total Orders" value={stats.totalOrders} icon="🛒" />
          <DashboardCard title="Total Users" value={stats.totalUsers} icon="👥" />
          <DashboardCard title="Revenue" value={`$${stats.totalRevenue.toFixed(2)}`} icon="💰" />
        </div>

        {/* Recent Orders Table */}
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <Table headers={['Order ID', 'Customer', 'Total', 'Status', 'Date']}>
          {recentOrders.map((order) => (
            <tr key={order._id} className="border-b">
              <td className="px-6 py-3">{order._id.slice(-6).toUpperCase()}</td>
              <td className="px-6 py-3">{order.user?.name || 'N/A'}</td>
              <td className="px-6 py-3">${order.totalAmount.toFixed(2)}</td>
              <td className="px-6 py-3">
                <Badge status={order.status}>{order.status}</Badge>
              </td>
              <td className="px-6 py-3">{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
