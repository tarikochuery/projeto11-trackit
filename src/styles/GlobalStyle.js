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

  a:any-link {
    color: inherit;
  }

  .CircularProgressbar {
    width: 100%;
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: #3e98c7;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #3e98c7;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
    fill: #3e98c7;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
`;