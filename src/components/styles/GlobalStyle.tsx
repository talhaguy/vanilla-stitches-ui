import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font: 62.5% ${(props) => props.theme.FONTS.SERIF};
    }

    body {
        margin: 0;
    }
`;
