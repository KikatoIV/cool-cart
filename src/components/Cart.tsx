import React from "react";
import { ProductItem } from "../types/productItem";
import { CartContainer, CartTitle, EmptyCartMessage, CartItem, TotalPrice } from "src/styles/cartStyles";

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
            <h4>
              Price of all {product.title}'s is {" "}
              {( product.price * product.quantity).toFixed(2)}
            </h4>
            <div>
              <button onClick={() => onRemove(product)}>-</button>
              <span>{product.quantity}</span>
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
