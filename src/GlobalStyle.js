import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #397298;
    color: #d4eae6;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  color: #d4eae6;
  }

  a:hover{
    text-decoration: none;
    color: #fff;
    border-bottom: 1px solid #d4eae6;
  }
  .active{
    border-bottom: 1px solid #d4eae6;
    font-weight: bold;
  }

  .tab-list {
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    display: flex;
    padding: 0;
    justify-content: space-around;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
export default GlobalStyle;
