import React from 'react';
import ProductCard from '../../components/user/ProductCard.jsx';
import CategoryFilter from '../../components/user/CategoryFilter.jsx';
import Pagination from '../../components/user/Pagination.jsx';
import Card from '../../components/common/Card.jsx';

function ProductList() {
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
            <label><input type="checkbox" className="mr-2" /> In Stock</label>
          </div>
        </Card>
      </div>
      <div className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductList;