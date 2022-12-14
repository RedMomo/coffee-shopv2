import React from "react";
import ProductCard from "./ProductCard";

export default function Shop({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} products={products} />
      ))}
    </div>
  );
}