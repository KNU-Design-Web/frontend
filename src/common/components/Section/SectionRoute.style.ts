import styled from "@emotion/styled";

export const Wrapper = styled.div`
    flex: 1;
    width: 100%;

    overflow: hidden;
    white-space: nowrap;

    overflow-y: scroll;

    // 스크롤바 숨기기
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    min-height: 100vh;

    /* padding: 20px; */
    border-right: 1px solid #000;
`;
