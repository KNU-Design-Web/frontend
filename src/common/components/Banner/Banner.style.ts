import styled from "@emotion/styled";

export const Wrapper = styled.div`
    z-index: 1000;

    position: fixed;
    bottom: 0;
    left: 0;

    padding: 3px;

    width: 100%;
    height: 50px;

    background-color: var(--color-purple);
`;

export const Container = styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: clip;

    display: flex;

    & > span {
        display: inline-block;
        padding-right: 10px;
        animation: TextLoop 20s linear infinite;
    }

    @keyframes TextLoop {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;
