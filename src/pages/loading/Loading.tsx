import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Loading = () => {
    return (
        <LoadingWrapper>
            {[...Array(10).keys()].map((index) => (
                <Circle key={index} delay={`${index * 0.2}s`} />
            ))}
        </LoadingWrapper>
    );
};

const grow = keyframes`
  0% {
    transform: scale(0);
    
  }
  100% {
    transform: scale(100); 
    
  }
`;

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--color-purple);
    overflow: hidden;
    position: relative;
`;

const Circle = styled.div<{ delay: string }>`
    width: 10vmin;
    height: 10vmin;
    border-radius: 50%;
    /* background-color: var(--color-purple); */
    position: absolute;
    animation: ${grow} 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    animation-delay: ${(props) => props.delay};

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    &::before {
        width: 75%;
        height: 75%;
        background-color: var(--color-purple);
    }

    &::after {
        width: 50%;
        height: 50%;
        background-color: var(--color-light-green);
    }
`;
