import { css } from "@emotion/react";

export const globalStyles = css`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }

    #root {
        display: flex;
    }

    :root {
        --font-size-2xl: 50px;
        --font-size-xl: 32px;
        --font-size-l: 30px;
        --font-size-m: 24px;
        --font-size-s: 20px;
        --font-size-xs: 16px;

        --color-purple: #9085ff;
        --color-light-green: #bbff00;
    }
`;
