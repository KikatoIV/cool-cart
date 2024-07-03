import React, { useEffect, useState } from "react";
import { ProductItem } from "../types/productItem";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import { Container, ErrorMessage, Title } from "../styles/indexStyles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const initialProducts = data.products.map((product: ProductItem) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(initialProducts);
        setFilteredProducts(initialProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setError("Failed to load cart from storage.");
      }
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: ProductItem[]) => {
    try {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
      setError("Failed to save cart changes.");
    }
  };

  const addToCart = (product: ProductItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      }
    });
  };

  const removeFromCart = (product: ProductItem) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleSearch = (query: string) => {
    if (query === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Title>Cool Cart</Title>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Container>
        <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        <Cart cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
      </Container>
    </>
  );
};

export default Home;
