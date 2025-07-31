import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../common/Button.jsx';

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories")
      .then(res => setCategories(res.data.data))
      .catch(err => console.error("Failed to fetch categories", err));
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "primary" : "secondary"}
        onClick={() => onSelectCategory(null)}
      >
        All
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat._id}
          variant={selectedCategory === cat._id ? "primary" : "secondary"}
          onClick={() => onSelectCategory(cat._id)}
        >
          {cat.name}
        </Button>
      ))}
    </div>
  );
}


export default CategoryFilter;
