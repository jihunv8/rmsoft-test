import { createGlobalStyle } from 'styled-components';
import { initialCSS } from './initialCSS';

const GlobalStyle = createGlobalStyle`
  ${initialCSS}

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
