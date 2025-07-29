import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home.jsx';
import ProductList from './pages/user/ProductList.jsx';
import ProductDetails from './pages/user/ProductDetails.jsx';
import Cart from './pages/user/Cart.jsx';
import Checkout from './pages/user/Checkout.jsx';
import MyOrders from './pages/user/MyOrders.jsx';
import Login from './pages/user/Login.jsx';
import Register from './pages/user/Register.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import ManageProducts from './pages/admin/ManageProducts.jsx';
import ManageCategories from './pages/admin/ManageCategories.jsx';
import ManageOrders from './pages/admin/ManageOrders.jsx';
import ManageUsers from './pages/admin/ManageUsers.jsx';
import AddProduct from './pages/admin/AddProduct.jsx';
import AddCategory from './pages/admin/AddCategory.jsx';
import Navbar from './components/layout/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/categories" element={<ManageCategories />} />
          <Route path="/admin/orders" element={<ManageOrders />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;