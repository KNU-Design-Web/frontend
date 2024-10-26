import SUIT_BOLD from "@/assets/fonts/suit/SUIT-Bold.woff2";
import SUIT_EXTRA_BOLD from "@/assets/fonts/suit/SUIT-ExtraBold.woff2";
import SUIT_EXTRA_LIGHT from "@/assets/fonts/suit/SUIT-ExtraLight.woff2";
import SUIT_HEAVY from "@/assets/fonts/suit/SUIT-Heavy.woff2";
import SUIT_LIGHT from "@/assets/fonts/suit/SUIT-Light.woff2";
import SUIT_MEDIUM from "@/assets/fonts/suit/SUIT-Medium.woff2";
import SUIT_REGULAR from "@/assets/fonts/suit/SUIT-Regular.woff2";
import SUIT_SEMI_BOLD from "@/assets/fonts/suit/SUIT-SemiBold.woff2";
import SUIT_THIN from "@/assets/fonts/suit/SUIT-Thin.woff2";

import { css } from "@emotion/react";

export const fontStyles = css`
    @font-face {
        font-family: "SUIT";
        font-weight: 100;
        src: url(${SUIT_THIN}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 200;
        src: url(${SUIT_EXTRA_LIGHT}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 300;
        src: url(${SUIT_LIGHT}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 400;
        src: url(${SUIT_REGULAR}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 500;
        src: url(${SUIT_MEDIUM}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 600;
        src: url(${SUIT_SEMI_BOLD}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 700;
        src: url(${SUIT_BOLD}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 800;
        src: url(${SUIT_EXTRA_BOLD}) format("woff2");
    }
    @font-face {
        font-family: "SUIT";
        font-weight: 900;
        src: url(${SUIT_HEAVY}) format("woff2");
    }
`;
