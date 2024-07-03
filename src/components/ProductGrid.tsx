import React, { useCallback } from "react";
import { ProductItem } from "../types/productItem";
import { GridContainer } from "../styles/productGridStyles";
import Product from "./Product";
import { ProductGridProps } from "src/types/productGridProps";

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  const handleAddToCart = useCallback((product: ProductItem) => {
    onAddToCart(product);
  }, [onAddToCart]);

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <GridContainer>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </GridContainer>
  );
};

export default React.memo(ProductGrid);
