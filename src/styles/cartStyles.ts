import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.background};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const EmptyCartMessage = styled.p`
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
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

  h3 {
    font-size: 1rem;
  }

  button {
    background-color: #e53e3e;.
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  span {
    margin: 0 0.5rem;
  }
`;

export const TotalPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
`;