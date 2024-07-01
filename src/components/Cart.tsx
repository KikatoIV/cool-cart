import React from "react";
import styled from "styled-components";
import { ProductItem } from "../types/productItem";

interface CartProps {
  cart: ProductItem[];
  onAdd: (product: ProductItem) => void;
  onRemove: (product: ProductItem) => void;
}

const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.background};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const EmptyCartMessage = styled.p`
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 0.25rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  button {
    background-color: #e53e3e;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  span {
    margin: 0 0.5rem;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Cart: React.FC<CartProps> = ({ cart, onAdd, onRemove }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      {cart.length === 0 ? (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      ) : (
        cart.map((product) => (
          <CartItem key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <div>
              <button onClick={() => onRemove(product)}>-</button>
              <span>{product.price.toFixed(2)}</span>
              <button onClick={() => onAdd(product)}>+</button>
            </div>
          </CartItem>
        ))
      )}
      <TotalPrice>Total: £{totalPrice.toFixed(2)}</TotalPrice>
    </CartContainer>
  );
};

export default Cart;
