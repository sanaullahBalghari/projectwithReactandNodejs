import React from 'react';
import ProductCard from '../../components/user/ProductCard.jsx';
import CategoryFilter from '../../components/user/CategoryFilter.jsx';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-600 text-white p-8 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2">Discover the best products at unbeatable prices!</p>
      </div>
      <CategoryFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {[...Array(8)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;