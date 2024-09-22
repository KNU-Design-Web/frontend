import { SizeProp } from "@/styles";

import styled from "@emotion/styled";

export interface TextProps extends React.ComponentProps<"span"> {
    size?: "xs" | "s" | "m" | "l" | "xl" | "2xl" | SizeProp;
    weight?: 400 | 500 | 600 | 700 | 800 | 900;
    family?: "suit" | "pretendard" | string;
    color: "purple" | "lightgreen" | string;
}

export const Text = styled.span<TextProps>`
    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "var(--font-size-xs)";
            case "s":
                return "var(--font-size-s)";
            case "m":
                return "var(--font-size-m)";
            case "l":
                return "var(--font-size-l)";
            case "xl":
                return "var(--font-size-xl)";
            case "2xl":
                return "var(--font-size-2xl)";
            case undefined:
                return "var(--font-size-m)";
            default:
                return props.size;
        }
    }};

    font-weight: ${(props) => props.weight};

    font-family: ${(props) => {
        switch (props.family) {
            case undefined:
                return "SUIT";
            default:
                return props.family;
        }
    }};

    color: ${(props) => {
        switch (props.color) {
            case "purple":
                return "var(--color-purple)";
            case "lightgreen":
                return "var(--color-light-green)";
            default:
                return props.color;
        }
    }};
`;
