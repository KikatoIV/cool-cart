import React from "react";
import { useEffect, useState } from "react";
import { ProductItem } from "../types/productItem";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";
import { Container, Title } from "src/styles/indexStyles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productsWithQuantity = data.products.map((product: ProductItem) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);
      });
  }, []);

  const addToCart = (product: ProductItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product: ProductItem) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Container>
      <Title>Products</Title>
      <ThemeToggle />
      <ProductGrid products={products} onAddToCart={addToCart} />
        <Cart cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
    </Container>
  );
};

export default Home;