import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: #ECECEC;
  color: #333333; 
  border: 1px solid #ddd; 
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333333; 
`;

export const EmptyCartMessage = styled.p`
  margin-bottom: 1rem;
  color: #333333;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem; 
    border-radius: 0.25rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #333333;
    margin: 0;
  }

  h4 {
    font-size: 1.25rem;
    color: #666666;
    margin-right: 5rem;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #B18C5D;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  span {
    font-size: 1rem;
    color: #333333;
    padding: 0.5rem;
    marginRight: 10px
    min-width: 2rem;
    text-align: center;
  }
`;

export const TotalPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #333333;
`;