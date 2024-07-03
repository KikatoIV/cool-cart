import styled from "styled-components";

export const AddToCartButton = styled.button`
  background-color: #b07b55;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #8e5f3f;
  }
`;

export const ProductContainer = styled.div`
  background-color: #f2e9e1;
  color: #333333;
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 22rem;
  margin-top: 0.75rem;
`;

export const ProductImage = styled.img`
  display: block;
  max-width: 400px;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  object-fit: none;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #333333;
`;

export const ProductPrice = styled.p`
  color: #333333;
  margin-bottom: 0.75rem;
`;
