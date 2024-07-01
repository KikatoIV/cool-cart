import React from "react";
import { useEffect, useState } from "react";
import { ProductItem } from "../types/productItem";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";
import ThemeToggle from "../components/ThemeToggle";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (product: ProductItem) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: ProductItem) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Container>
      <Title>Products</Title>
      <ThemeToggle />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <CartContainer>
        <Cart cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
      </CartContainer>
    </Container>
  );
};

const CartContainer = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default Home;