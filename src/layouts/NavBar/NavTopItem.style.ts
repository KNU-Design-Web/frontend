import { navItems } from "@/constants/navItems";

import styled from "@emotion/styled";

export const Item = styled.li<{ index: number; active: boolean }>`
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;

    border-bottom: 2px solid #000;

    background-color: var(--color-light-green);

    overflow: hidden;
    white-space: nowrap;
    max-width: ${(props) => (!props.active ? "0" : "100%")};

    will-change: max-width;
    transition: max-width 0.5s ease-in-out;
    transition-delay: ${(props) => {
        if (props.active) return `${0.1 * props.index}s`;
        else return `${(navItems.length - props.index) * 0.1}s`;
    }};

    &:hover {
        cursor: pointer;
    }
`;
