import styled from "@emotion/styled";

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    height: 100%;
`;

export const GridWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns: repeat(26, 1fr);
    grid-template-rows: repeat(16, 1fr);
`;

export const GridButton = styled.button`
    aspect-ratio: 1;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-light-green);
    }
    &:not(:hover) {
        transition-delay: 0.3s;
    }
`;
