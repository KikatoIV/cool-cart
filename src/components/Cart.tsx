import React from "react";
import { ProductItem } from "../types/productItem";
import {
  CartContainer,
  CartTitle,
  EmptyCartMessage,
  CartItem,
  TotalPrice,
  QuantityControl,
} from "src/styles/cartStyles";

interface CartProps {
  cart: ProductItem[];
  onAdd: (product: ProductItem) => void;
  onRemove: (product: ProductItem) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onAdd, onRemove }) => {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

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
            <QuantityControl>
              <h4>Sub total {(product.price * product.quantity).toFixed(2)}</h4>
              <button onClick={() => onRemove(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => onAdd(product)}>+</button>
            </QuantityControl>
          </CartItem>
        ))
      )}
      <TotalPrice>Total: £{totalPrice.toFixed(2)}</TotalPrice>
    </CartContainer>
  );
};

export default Cart;
