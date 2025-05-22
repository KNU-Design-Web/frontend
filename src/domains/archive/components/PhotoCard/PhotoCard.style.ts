import { BREAKPOINT } from "@/apps/styles/breakpoint";

import styled from "@emotion/styled";

export const ImageWrapper = styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    overflow: hidden;
`;

export const Image = styled.img`
    display: block;
    object-fit: cover;

    width: 100%;

    ${BREAKPOINT.MOBILE} {
        height: 620px;
    }
    ${BREAKPOINT.MOBILE_SMALL} {
        max-width: 410px;
        height: 620px;
    }
`;
