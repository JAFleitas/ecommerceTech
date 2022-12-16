import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
import RouterApp from "./Routes/RouterApp";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
	font-size: 11px;
	font-weight: lighter;
	color: #242323dd;
  padding: 0;
  margin:0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <RouterApp />
      <GlobalStyle />
    </Wrapper>
  );
};

export default App;
