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
  *::-webkit-scrollbar {
    -webkit-appearance: none;
}
*::-webkit-scrollbar:vertical {
    width:8px;
}
*::-webkit-scrollbar-button:increment {
    display: none;
} 
*::-webkit-scrollbar:horizontal {
    height: 2px;
   
}
*::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 15px;
    border: 2px solid #f1f2f3;
}
*::-webkit-scrollbar-track {
    border-radius: 15px;  
}
*::-webkit-scrollbar-button {
    display: none;
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
