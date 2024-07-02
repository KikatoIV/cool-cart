import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.background};
max-width: 1200px;
margin: 0 auto;
padding: 1rem;
`;

export const Title = styled.h1`
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
`;