import React from "react";
import { useEffect, useState } from "react";
import { ProductItem } from "../types/productItem";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";
import { Container, ErrorMessage, Title } from "src/styles/indexStyles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts((prevProducts) => {
          const products = data.products.map((product: ProductItem) => ({
            ...product,
            quantity: 0,
          }));
          return products;
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };
  
    fetchProducts();
  }, []);

  const addToCart = (product: ProductItem) => {
    setCart(prevCart => {
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
    <>
      <Title>Cool Cart!!</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Container>
        <ProductGrid products={products} onAddToCart={addToCart} />
        <Cart cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
      </Container>
    </>
  );
};

export default Home;