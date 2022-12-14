import React from "react";

export default function ProductCard({ product }) {
  function handleAddToCart(product) {
    console.log("Added to cart", product);
  }

  function handleMoreDetails() {
    console.log("More details", product);
  }

  return (
    <div>
      {product.seasonal ? 
        <div></div> 
        : 
        null}
      {/* {product.bestseller ? 
        <div>Bestseller</div> 
        : 
        null} */}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <button onClick={() => handleMoreDetails}>More Details</button>
      {/* test above without the () => and see what happens */}
      {product.inStock ? 
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button> 
        : 
        <div>Out of stock</div>}
    </div>
  );
}