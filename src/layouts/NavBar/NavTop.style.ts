import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;

    width: 100%;
    height: 60px;

    display: none;
    ${BREAKPOINT.TABLET} {
        display: block;
    }
    ${BREAKPOINT.MOBILE} {
        display: block;
    }
`;

export const Item = styled.li<{ active: boolean }>`
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;

    padding: 0px 30px;
    border-bottom: 2px solid #000;

    background-color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const Header = styled(Item)`
    justify-content: space-between;
`;
