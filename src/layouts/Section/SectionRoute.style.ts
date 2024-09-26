import styled from "@emotion/styled";

export const Wrapper = styled.div<{ active: boolean }>`
    flex: 1;
    width: 100%;

    max-width: ${(props) => (props.active ? "100%" : "0")};
    will-change: flex-grow;
    will-change: max-width;
    transition: max-width 0.3s ease-in-out;

    // TODO: 애니메이션 최적화 필요

    /* transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: left;
    will-change: transform;
    transition: transform 0.5s ease-in-out; */

    /* max-width: ${(props) => (props.active ? "100%" : "0")};

    transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: left;

    clip-path: ${(props) => (props.active ? "inset(0 0 0 0)" : "inset(0 100% 0 0)")};

    will-change: clip-path;
    transition:
        transform 0.1s ease-in-out,
        max-width 0.5s ease-in-out,
        clip-path 0.3s ease-in-out; */

    overflow: hidden;
    white-space: nowrap;

    overflow-y: scroll;
    // 스크롤바 숨기기
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
    position: relative;

    min-height: 100vh;

    /* padding: 20px; */
    border-right: 1px solid #000;
`;
