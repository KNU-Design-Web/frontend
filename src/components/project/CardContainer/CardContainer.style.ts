import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: grid;
    gap: 10px;

    margin: 0px auto;

    width: 50%;
    min-width: 980px;
    grid-template-columns: repeat(3, 1fr);

    ${BREAKPOINT.MOBILE} {
        min-width: 410px;
        grid-template-columns: repeat(2, 1fr);
    }
`;
