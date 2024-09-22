import styled from "@emotion/styled";

export const Wrapper = styled.div<{ active: boolean }>`
    flex: 1;
    width: 100%;

    max-width: ${(props) => (props.active ? "100%" : "0")};

    overflow: hidden;
    white-space: nowrap;

    will-change: flex-grow;
    will-change: max-width;
    transition: max-width 0.5s ease-in-out;
`;

export const Container = styled.div`
    min-height: 100vh;

    padding: 20px;
    border-right: 1px solid #000;
`;
