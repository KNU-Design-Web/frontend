import styled from "@emotion/styled";

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    height: 100%;
    width: 100%;

    pointer-events: none;
`;

export const GridWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }
`;

export const GridButton = styled.button`
    aspect-ratio: 1;
    border: none;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    background-color: transparent;
    transition: background-color 0.1s ease;
    pointer-events: auto;

    &:hover {
        background-color: var(--color-light-green);
    }
    &:not(:hover) {
        transition-delay: 0.3s;
    }
`;
