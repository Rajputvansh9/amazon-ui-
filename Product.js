import React from 'react';

function Product({ title, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} width="100%" />
      <h4>{title}</h4>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Product;
