import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

export const Wrapper = styled(NavLink)<{ active: boolean }>`
    position: relative;

    display: flex;
    align-items: center;

    width: 60px;
    height: 100vh;

    padding-top: 40px;
    border-right: 1px solid #000;

    writing-mode: vertical-rl;
    text-decoration: none;

    background-color: ${(props) => (props.active ? "var(--color-light-green)" : "transparent")};

    &::before {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

        content: "";
        display: block;
        width: 100%;
        height: 100%;

        transform: scaleY(0);
        transform-origin: top;
        background-color: var(--color-light-green);
    }

    &:hover::before {
        transform: scaleY(1);
        transition: transform 0.3s linear;
    }
`;
