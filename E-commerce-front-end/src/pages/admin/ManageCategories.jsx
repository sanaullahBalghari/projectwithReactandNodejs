import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar.jsx';
import AdminTable from '../../components/admin/AdminTable.jsx';
import Button from '../../components/common/Button.jsx';
import { Link } from 'react-router-dom';

function ManageCategories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/categories/${id}`, {
        withCredentials: true,
      });
      fetchCategories(); // refresh list
    } catch (error) {
      console.error("Failed to delete category", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Categories</h2>
          <Link to="/admin/add-category">
            <Button variant="primary">Add Category</Button>
          </Link>
        </div>
        <AdminTable
          headers={['ID', 'Name', 'Actions']}
          data={categories}
          renderRow={(cat) => (
            <>
              <td className="px-6 py-3">{cat._id}</td>
              <td className="px-6 py-3">{cat.name}</td>
            </>
          )}
          onEdit={(cat) => `/admin/edit-category/${cat._id}`}
          onDelete={(cat) => handleDelete(cat._id)}
        />
      </div>
    </div>
  );
}

export default ManageCategories;
