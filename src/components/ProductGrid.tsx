import React from "react";
import styled from "styled-components";
import { ProductItem } from "../types/productItem";
import Product from "./Product";

interface ProductGridProps {
  products: ProductItem[];
  onAddToCart: (product: ProductItem) => void;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <GridContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
