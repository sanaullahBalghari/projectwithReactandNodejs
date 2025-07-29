import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">eCommerce</Link>
        <div className="flex space-x-4">
          <Link to="/products" className="hover:text-blue-200">Products</Link>
          <Link to="/cart" className="hover:text-blue-200">Cart</Link>
          <Link to="/orders" className="hover:text-blue-200">Orders</Link>
          <Link to="/admin" className="hover:text-blue-200">Admin</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
          <Link to="/register" className="hover:text-blue-200">Register</Link>
          <Button variant="secondary">Profile</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;