import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import axios from 'axios';

function EditCategory() {
  const { id } = useParams(); // categoryId
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  //  Fetch existing category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/categories");
        const category = res.data.data.find(cat => cat._id === id);
        if (!category) throw new Error("Category not found");
        setName(category.name);
        setLoading(false);
      } catch (err) {
        setError("Failed to load category");
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id]);

  //  Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.put(`http://localhost:8000/api/categories/${id}`, { name }, {
        withCredentials: true,
      });
      navigate("/admin/categories");
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Edit Category</h2>
          <form onSubmit={handleUpdate}>
            <Input
              label="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <Button variant="primary" type="submit" className="mt-4">Update Category</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EditCategory;
