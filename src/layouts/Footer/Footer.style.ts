import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 100%;
    height: 360px;

    margin-bottom: 50px;
    border-top: 2px solid #000;
    border-right: 1px solid #000;
    padding: 50px 50px 80px 50px;

    background-color: #fff;

    ${BREAKPOINT.MOBILE} {
        height: 500px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;
        gap: 40px;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
        display: block;
    }
    &:first-child {
        text-align: left;
    }
    &:last-child {
        text-align: right;
    }
    ${BREAKPOINT.MOBILE} {
        &:last-child {
            text-align: left;
        }
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const InfoItem = styled.div`
    display: flex;

    span:first-child {
        width: 60px;
        flex-shrink: 0;
    }

    ${BREAKPOINT.MOBILE} {
        span:last-child {
            & > span {
                display: block;
            }
        }
    }
`;
