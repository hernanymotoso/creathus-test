import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   border: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }


`;
