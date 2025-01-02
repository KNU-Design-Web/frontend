import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Grid = styled.div<{ direction: "row" | "column" }>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
    gap: 10px;

    margin: 20px 0px;
    padding: 0px 22px;

    &:nth-child(1) {
        padding-right: 5px;
    }
    &:nth-child(2) {
        padding-left: 5px;
    }

    ${BREAKPOINT.MOBILE} {
        margin: 70px 0px;
        &:nth-child(1) {
            margin-bottom: 5px;
            padding: 0px 22px;
        }
        &:nth-child(2) {
            margin-top: 5px;
            padding: 0px 22px;
        }
    }

    ${BREAKPOINT.MOBILE_SMALL} {
        padding: 0px 10px;
    }
`;
