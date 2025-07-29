import React from 'react';
import Button from '../common/Button.jsx';

function CategoryFilter() {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home'];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <Button key={index} variant="secondary">{category}</Button>
      ))}
    </div>
  );
}

export default CategoryFilter;