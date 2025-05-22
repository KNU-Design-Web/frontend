import { BREAKPOINT } from "@/apps/styles/breakpoint";
import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    max-width: 980px;

    margin: 0px auto;

    padding: 22px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    ${BREAKPOINT.MOBILE} {
        margin-top: 60px;
    }
    ${BREAKPOINT.TABLET} {
        margin-top: 60px;
    }
`;
