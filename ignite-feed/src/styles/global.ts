import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${({theme}) => theme.cores['gray700']};
        color: ${({theme}) => theme.cores['white']};
        -webkit-font-smoothing: antialiased;
        line-height: 160%;
    }
    
    body, textarea, button, input {
        font-family: ${({theme}) => theme.fonte['roboto']};
        font-weight: 400;
        line-height: 160%;
    }

    button {
        cursor: pointer;
    }
`