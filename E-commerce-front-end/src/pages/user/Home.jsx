import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/user/ProductCard.jsx';
import CategoryFilter from '../../components/user/CategoryFilter.jsx';
import Spinner from '../../components/common/Spinner.jsx';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // ✅ category state

  console.log("Selected category:", selectedCategory);
const fetchProducts = async () => {
  try {
    const url = selectedCategory
      ? `http://localhost:8000/api/products?category=${selectedCategory}`
      : `http://localhost:8000/api/products`;

    const res = await axios.get(url);
    setProducts(res.data.data);
  } catch (error) {
    console.error('Failed to fetch products', error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchProducts(); // ✅ re-fetch when category changes
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-4">
      {/* Banner */}
      <div className="bg-blue-600 text-white p-10 rounded-lg mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Welcome to Our Store</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the best products at unbeatable prices. Shop with confidence!
          </p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/045/729/459/non_2x/a-young-man-stands-with-arms-outstretched-holding-multiple-shopping-bags-he-is-looking-at-the-camera-with-a-neutral-expression-png.png"
          alt="Shopping Banner"
          className="w-52 md:w-64 lg:w-80"
        />
      </div>

      {/* Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Products */}
      {loading ? (
        <div className="flex justify-center mt-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.images?.[0]}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No products available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
