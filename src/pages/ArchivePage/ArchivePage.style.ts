import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Layout = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

    max-width: 970px;
    height: 2000px;

    margin: 0px auto;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;
    }
`;
