// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ onChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: 0,
    maxPrice: 10000,
    rating: 0,
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onChange(newFilters);
  };

  return (
    <div className="filter">
      <label>
        Category:
        <input type="text" name="category" value={filters.category} onChange={handleChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={filters.company} onChange={handleChange} />
      </label>
      <label>
        Min Price:
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} />
      </label>
      <label>
        Max Price:
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="number" name="rating" value={filters.rating} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <select name="availability" value={filters.availability} onChange={handleChange}>
          <option value="">All</option>
          <option value="InStock">In Stock</option>
          <option value="OutOfStock">Out of Stock</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
