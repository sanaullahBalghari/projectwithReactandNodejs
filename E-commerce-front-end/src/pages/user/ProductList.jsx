// src/pages/user/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/user/ProductCard.jsx';
import CategoryFilter from '../../components/user/CategoryFilter.jsx';
import Pagination from '../../components/user/Pagination.jsx';
import Card from '../../components/common/Card.jsx';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data.data);
        console.log(response.data.data)
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/4 pr-4">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <CategoryFilter />
          <div className="mt-4">
            <h3 className="font-medium">Price Range</h3>
            <input type="range" min="0" max="1000" className="w-full" />
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Stock</h3>
            <label>
              <input type="checkbox" className="mr-2" /> In Stock
            </label>
          </div>
        </Card>
      </div>
      <div className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id} // Added id prop to match ProductCard
              image={product.images && product.images[0]}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductList;