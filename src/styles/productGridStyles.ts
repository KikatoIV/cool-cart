import styled from "styled-components";

export const GridContainer = styled.div`
  border: 1px solid #eee;
  background-color: #fff;
  padding: 16px;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;

export const Frame = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  background-color: #EEAB46;
`;

export const ProductItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #EEA765;
`;