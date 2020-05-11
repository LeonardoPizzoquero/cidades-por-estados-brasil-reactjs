import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: ${darken(0.2, 'rgb(94,245,154)')};
    background: linear-gradient(90deg, ${darken(
      0.2,
      'rgba(94,245,154,1)'
    )} 0%, ${darken(0.2, 'rgba(243,242,60,1)')} 100%);
  }

  button {
    cursor: pointer;
  }

  input, textarea, button {
    font-size: 16px;
  }
`;
