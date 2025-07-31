import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import axios from 'axios';

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    image: null,
  });

  // Fetch product and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          axios.get(`http://localhost:8000/api/products/${productId}`),
          axios.get(`http://localhost:8000/api/categories`),
        ]);
        const data = productRes.data.data;
        setProduct(data);
        setCategories(categoryRes.data.data);

        setForm({
          name: data.name,
          price: data.price,
          stock: data.stock,
          description: data.description,
          category: data.category._id,
          image: null, // don't prefill file
        });
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };
    fetchData();
  }, [productId]);

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
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val) formData.append(key, val);
    });

    try {
      await axios.patch(
        `http://localhost:8000/api/products/${productId}`,
        formData,
        { withCredentials: true }
      );
      navigate("/admin/products");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <Input name="name" label="Product Name" value={form.name} onChange={handleChange} />
            <Input name="price" label="Price" type="number" value={form.price} onChange={handleChange} />
            <Input name="stock" label="Stock" type="number" value={form.stock} onChange={handleChange} />

            <div className="mb-4">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Product Image</label>
              <input type="file" name="image" onChange={handleChange} />
            </div>

            <Button variant="primary" type="submit">Update Product</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EditProduct;
