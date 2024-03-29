import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   border: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }


`;
