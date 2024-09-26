import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;

    width: 100%;
    min-width: 150px;
    aspect-ratio: 1/1;
`;

export const Image = styled.img`
    display: block;

    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Description = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;

    width: 100%;
    max-width: 0;
    height: 60px;

    padding: 5px 0px;

    background-color: var(--color-light-green);

    overflow: hidden;
    white-space: nowrap;

    color: #000;

    transition: max-width 0.4s ease-out;

    span {
        display: block;
        margin: 0px 35px;
    }

    ${BREAKPOINT.MOBILE} {
        padding: 16px 14px;
        height: fit-content;

        max-width: 100%;
        background-color: rgba(0, 0, 0, 0);

        span {
            margin: 6px 14px;
            color: #fff;
        }
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 0;

    display: block;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0);

    transition: background-color 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);

        ${Description} {
            max-width: 100%;
        }
    }

    ${BREAKPOINT.MOBILE} {
        &:hover {
            background-color: rgba(0, 0, 0, 0);
        }

        &::after {
            position: absolute;
            top: 0;
            left: 0;

            content: "";
            display: block;
            width: 100%;
            height: 100%;

            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));

            ${Description} {
                width: 100%;
            }
        }
    }
`;
