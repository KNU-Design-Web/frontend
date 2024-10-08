import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 540px;

    overflow: hidden;

    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;

    background-color: #fff;

    ${BREAKPOINT.MOBILE} {
        height: 740px;
    }
`;
