import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    &:nth-child(6n + 1),
    &:nth-child(6n + 2),
    &:nth-child(6n + 3) {
        background-color: var(--color-light-green);
    }
    &:nth-child(6n),
    &:nth-child(6n + 4),
    &:nth-child(6n + 5) {
        background-color: var(--color-purple);
    }

    ${BREAKPOINT.MOBILE} {
        &:nth-child(4n + 1),
        &:nth-child(4n + 2) {
            background-color: var(--color-light-green);
        }
        &:nth-child(4n),
        &:nth-child(4n + 3) {
            background-color: var(--color-purple);
        }
    }
`;
