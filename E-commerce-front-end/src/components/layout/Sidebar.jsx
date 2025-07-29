import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li><Link to="/admin" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
        <li><Link to="/admin/products" className="block p-2 hover:bg-gray-700 rounded">Products</Link></li>
        <li><Link to="/admin/add-product" className="block p-2 hover:bg-gray-700 rounded">Add Product</Link></li>
        <li><Link to="/admin/categories" className="block p-2 hover:bg-gray-700 rounded">Categories</Link></li>
        <li><Link to="/admin/add-category" className="block p-2 hover:bg-gray-700 rounded">Add Category</Link></li>
        <li><Link to="/admin/orders" className="block p-2 hover:bg-gray-700 rounded">Orders</Link></li>
        <li><Link to="/admin/users" className="block p-2 hover:bg-gray-700 rounded">Users</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;