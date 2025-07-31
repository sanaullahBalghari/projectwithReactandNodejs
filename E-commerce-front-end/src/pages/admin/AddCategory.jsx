import React, { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8000/api/categories', { name }, {
        withCredentials: true,
      });
      navigate('/admin/categories');
    } catch (err) {
      console.error("Category add error:", err);
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Add New Category</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <Button variant="primary" type="submit" className="mt-4">Add Category</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddCategory;
