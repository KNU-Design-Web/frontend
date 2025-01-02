import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Layout = styled.div`
    display: flex;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;
    }
`;
