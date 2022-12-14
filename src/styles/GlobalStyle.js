import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    font-family: 'Lexend Deca', sans-serif
  }
`;