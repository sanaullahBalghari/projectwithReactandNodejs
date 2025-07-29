import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import DashboardCard from '../../components/admin/DashboardCard.jsx';
import Table from '../../components/common/Table.jsx';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button className="text-blue-600">Logout</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard title="Total Products" value="150" icon="📦" />
          <DashboardCard title="Total Orders" value="320" icon="🛒" />
          <DashboardCard title="Total Users" value="500" icon="👥" />
          <DashboardCard title="Revenue" value="$12,345" icon="💰" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <Table headers={['Order ID', 'Customer', 'Total', 'Status']}>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-3">12345</td>
              <td className="px-6 py-3">John Doe</td>
              <td className="px-6 py-3">$199.99</td>
              <td className="px-6 py-3">Pending</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;