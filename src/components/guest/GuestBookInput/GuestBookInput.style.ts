import { BREAKPOINT } from "@/styles/breakpoint";

import { GuestBookInputProps } from "./GuestBookInput";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;

    ${BREAKPOINT.TABLET} {
        height: 40px;
    }
    ${BREAKPOINT.MOBILE} {
        height: 40px;
    }
`;
export const FromContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 60px;

    ${BREAKPOINT.TABLET} {
        height: 40px;
    }
    ${BREAKPOINT.MOBILE} {
        height: 40px;
    }
`;

export const Label = styled.label``;

export const Input = styled.input<Omit<GuestBookInputProps, "label">>`
    display: block;
    width: ${(props) => props.width};
    height: 100%;

    margin: 0 0 0 10px;
    outline: none;

    font-size: var(--font-size-m);
`;
