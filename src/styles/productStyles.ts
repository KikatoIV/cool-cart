import styled from "styled-components";

export const AddToCartButton = styled.button`
background-color: #4299e1;
color: #ffffff;
padding: 0.75rem 1rem;
border-radius: 0.25rem;
cursor: pointer;

&:hover {
  background-color: #3182ce;
}
`;

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;