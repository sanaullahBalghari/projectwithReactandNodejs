// src/pages/user/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/user/ProductCard.jsx';
import CategoryFilter from '../../components/user/CategoryFilter.jsx';
import Pagination from '../../components/user/Pagination.jsx';
import Card from '../../components/common/Card.jsx';
import Spinner from '../../components/common/Spinner.jsx';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (selectedCategory) query.append('category', selectedCategory);
      if (price) query.append('price', price);
      if (inStockOnly) query.append('inStock', true);

      const response = await axios.get(`http://localhost:8000/api/products?${query.toString()}`);
      setProducts(response.data.data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, price, inStockOnly]);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 flex">
      {/* Sidebar Filters */}
      <div className="w-1/4 pr-4">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="mt-4">
            <h3 className="font-medium mb-1">Price Range</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">Up to ${price}</div>
          </div>

          <div className="mt-4">
            <h3 className="font-medium mb-1">Stock</h3>
            <label className="text-sm">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="mr-2"
              />
              In Stock Only
            </label>
          </div>
        </Card>
      </div>

      {/* Product Grid */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
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
