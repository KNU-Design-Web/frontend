import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

    height: 2000px;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;
    }
`;
