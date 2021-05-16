import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     border: 0;
     outline: 0;
     box-sizing: border-box;

     font-family: 'Lato', sans-serif;
     font-weight: 300;
     flex-wrap: wrap;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;