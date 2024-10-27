import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Container = styled.div`
    aspect-ratio: 1/1;
    padding: 30px;

    display: flex;
    flex-direction: column;
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

export const CardTo = styled.p`
    display: flex;
    align-items: center;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;
export const CardContent = styled.p`
    width: 100%;
    flex: 1;

    overflow-y: scroll;
    text-overflow: ellipsis;
    white-space: pre-line;
    -webkit-line-clamp: 3;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const CardFrom = styled.p`
    display: flex;

    align-items: center;
    justify-content: right;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;
