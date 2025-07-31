import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories")
      .then(res => setCategories(res.data.data))
      .catch(err => console.error("Category fetch error", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });

    try {
      await axios.post("http://localhost:8000/api/products", fd, {
        withCredentials: true,
      });
      navigate("/admin/products");
    } catch (err) {
      console.error("Product add failed", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <Input name="name" label="Product Name" onChange={handleChange} />
            <Input name="price" label="Price" type="number" onChange={handleChange} />
            <Input name="stock" label="Stock" type="number" onChange={handleChange} />

            <div className="mb-4">
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                rows="4"
                className="w-full border rounded p-2"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Category</label>
              <select name="category" className="w-full border rounded p-2" onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Product Image</label>
              <input type="file" name="image" onChange={handleChange} />
            </div>

            <Button variant="primary" type="submit">Add Product</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddProduct;
