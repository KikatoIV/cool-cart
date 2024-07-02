import React from "react";
import { ProductItem } from "../types/productItem";
import { AddToCartButton, ProductContainer, ProductImage, ProductPrice, ProductTitle } from "src/styles/productStyles";

interface ProductProps {
  product: ProductItem;
  onAddToCart: (product: ProductItem) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.thumbnail} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>For just £{product.price}</ProductPrice>
      <AddToCartButton onClick={() => onAddToCart(product)}>
        Add to Cart
      </AddToCartButton>
    </ProductContainer>
  );
};

export default Product;
