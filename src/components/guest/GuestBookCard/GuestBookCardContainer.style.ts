import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 0px 0px;

    ${BREAKPOINT.MOBILE} {
        grid-template-columns: repeat(2, 1fr);
    }
`;
