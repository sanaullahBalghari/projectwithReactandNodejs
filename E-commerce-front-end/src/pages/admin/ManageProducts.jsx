import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import AdminTable from '../../components/admin/AdminTable.jsx';
import Button from '../../components/common/Button.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ManageProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setProducts(res.data.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`, {
        withCredentials: true,
      });
      fetchProducts();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Products</h2>
          <Link to="/admin/add-product">
            <Button variant="primary">Add Product</Button>
          </Link>
        </div>

        <AdminTable
          headers={['ID', 'Name', 'Price', 'Stock', 'Actions']}
          data={products}
          renderRow={(product) => (
            <>
              <td className="px-6 py-3">{product._id}</td>
              <td className="px-6 py-3">{product.name}</td>
              <td className="px-6 py-3">${product.price}</td>
              <td className="px-6 py-3">{product.stock}</td>
            </>
          )}
          onEdit={(product) => `/admin/edit-product/${product._id}`}
          onDelete={(product) => handleDelete(product._id)}
        />
      </div>
    </div>
  );
}

export default ManageProducts;
