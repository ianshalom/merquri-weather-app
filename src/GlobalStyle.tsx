import { createGlobalStyle } from "styled-components";
import backgroundLight from "./assets/bg-light.png";

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
    background: url(${backgroundLight});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;

}

`;
export default GlobalStyle;
