import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Noto Sans, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    height: 100vh;
    background: url(${({ theme }) => theme.background.backgroundImage});
    background-size: stretch;
    background-position: top;
    background-repeat: no-repeat;
    display: flex;
    justify-content:center;
    color: ${({ theme }) => theme.colors.primary.default}
}

`;
export default GlobalStyle;
