import styled from "styled-components";

export const GridContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  max-height: 600px;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const Frame = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
`;

export const ProductItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
`;