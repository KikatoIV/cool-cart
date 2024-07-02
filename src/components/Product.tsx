import React from "react";
import { ProductItem } from "../types/productItem";
import {
  AddToCartButton,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "../styles/productStyles";

interface ProductProps {
  product: ProductItem;
  onAddToCart: (product: ProductItem) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  const { title, thumbnail, price } = product;

  return (
    <ProductContainer>
      <ProductImage src={thumbnail} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>For just £{price}</ProductPrice>
      <AddToCartButton onClick={() => onAddToCart(product)}>
        Add to Cart
      </AddToCartButton>
    </ProductContainer>
  );
};

export default Product;
