import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        /* box-shadow: ; */
    }

    body {
        /* background: ; */
        /* color: ; */
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        background: transparent;
        border: none;
    }
`