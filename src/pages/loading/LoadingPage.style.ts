import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const LoadingCircleContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: fit-content;

    /* animation:
        Scale 2s infinite,
        FadeOut 2s infinite;

    @keyframes Scale {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(50);
        }
    }
    @keyframes FadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    } */
`;

export const LoadingCircle = styled.div`
    position: absolute;

    border-radius: 50%;

    &:nth-child(2n + 1) {
        background-color: var(--color-purple);
    }
    &:nth-child(2n) {
        background-color: var(--color-light-green);
    }

    &:nth-of-type(1) {
        width: 350px;
        height: 350px;
    }
    &:nth-of-type(2) {
        width: 280px;
        height: 280px;
    }
    &:nth-of-type(3) {
        width: 210px;
        height: 210px;
    }
    &:nth-of-type(4) {
        width: 140px;
        height: 140px;
    }
    &:nth-of-type(5) {
        width: 70px;
        height: 70px;
    }
`;
