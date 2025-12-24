import { BREAKPOINT } from "@/core/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 0px 0px;

    ${BREAKPOINT.MOBILE} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${BREAKPOINT.MOBILE_SMALL} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
