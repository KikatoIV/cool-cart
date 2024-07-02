import React, { useRef, useEffect } from "react";
import { ProductItem } from "../types/productItem";
import { GridContainer } from "../styles/productGridStyles";
import Product from "./Product";

interface ProductGridProps {
  products: ProductItem[];
  onAddToCart: (product: ProductItem) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef<number>(0);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTop = scrollPosition.current;
    }
  }, [products]);

  const handleAddToCart = (product: ProductItem) => {
    console.log(gridRef.current)
    if (gridRef.current) {
      scrollPosition.current = gridRef.current.scrollTop;
    }
    onAddToCart(product);
  };

  return (
    <GridContainer ref={gridRef}>
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

export default ProductGrid;
