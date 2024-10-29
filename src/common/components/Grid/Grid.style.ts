import styled from "@emotion/styled";

export const GridContainer = styled.div<{ rows: number; cols: number }>`
    position: absolute;
    z-index: -10;
    inset: 0;

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    grid-template-columns: repeat(${(props) => props.cols}, 1fr);

    /* overflow: hidden; */
    pointer-events: none;

    & > * {
        pointer-events: auto;
    }
`;

export const GridItem = styled.div`
    display: block;
    aspect-ratio: 1/1;

    background-color: transparent;
    transition: background-color 0.1s ease;

    &:hover {
        background-color: var(--color-light-green);
    }
    &:not(:hover) {
        transition-delay: 0.3s;
    }
`;
