// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetail;
