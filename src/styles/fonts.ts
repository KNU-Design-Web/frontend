import SUITE_BOLD from "@/assets/fonts/suite/SUITE-Bold.woff2";
import SUITE_EXTRA_BOLD from "@/assets/fonts/suite/SUITE-ExtraBold.woff2";
import SUITE_LIGHT from "@/assets/fonts/suite/SUITE-Light.woff2";
import SUITE_MEDIUM from "@/assets/fonts/suite/SUITE-Medium.woff2";
import SUITE_REGULAR from "@/assets/fonts/suite/SUITE-Regular.woff2";
import SUITE_SEMI_BOLD from "@/assets/fonts/suite/SUITE-SemiBold.woff2";

import { css } from "@emotion/react";

export const fontStyles = css`
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_EXTRA_BOLD}) format("woff2");
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_SEMI_BOLD}) format("woff2");
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_BOLD}) format("woff2");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_MEDIUM}) format("woff2");
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_REGULAR}) format("woff2");
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "SUIT";
        src: url(${SUITE_LIGHT}) format("woff2");
        font-weight: 400;
        font-style: normal;
    }
`;
