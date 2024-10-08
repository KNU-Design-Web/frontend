import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.ul`
    z-index: 2;

    width: 100%;
    max-width: 980px;

    margin: 0px auto;

    ${BREAKPOINT.TABLET} {
        margin-top: 60px;
    }
`;
