import styled, { keyframes } from "styled-components";
const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
100%{
    transform: rotate(360deg);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-column: 2/7;
  background-color: #b5b4b832;
  margin-top: 45px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 320px));
  gap: 0.1rem;
  justify-content: center;
  align-content: start;
  justify-items: center;
  align-items: center;
  z-index: 1;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ContainerDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    display: grid;

    grid-template-columns: 1fr;

    grid-template-rows: 51px 1fr;
  }
`;
export const Spinner = styled.div`
  background: linear-gradient(to right, #232f3e 80%, #147ce5cc);
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: relative;
  animation: ${spin} 1s linear infinite;
  div {
    background: #f0f0f1;
    height: 80px;
    width: 80px;
    position: absolute;
    border-radius: 50%;
    margin: 10px;
  }
`;
