import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Header = styled.div`
    position: sticky;
    top: 0px;
    z-index: 5;

    width: 100%;
    height: 60px;

    border-bottom: 2px solid #000;

    display: flex;
    align-items: center;

    background-color: var(--color-purple);

    ${BREAKPOINT.MOBILE} {
        top: 60px;
    }
    ${BREAKPOINT.TABLET} {
        top: 60px;
    }
`;

export const PrevButton = styled.button`
    position: absolute;
    left: 0;

    display: flex;
    align-items: center;

    width: 35px;
    height: 100%;
    margin-left: 20px;

    background: none;

    svg {
        left: 0;
        width: 32px;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 980px;

    margin: 0px auto;

    span {
        display: block;
        color: #fff;
    }
    span:first-child {
        margin-left: 60px;
    }
    span:last-child {
        margin-right: 20px;
    }
`;

export const Body = styled.div`
    display: block;
    width: 100%;
    max-width: 980px;

    margin: 0px auto;
    margin-top: 60px;
    padding: 0px 22px;
    padding-bottom: 20px;

    ${BREAKPOINT.TABLET} {
        margin-top: 100px;
    }
    ${BREAKPOINT.MOBILE} {
        margin-top: 100px;
    }
`;

export const Image = styled.img`
    display: block;
    margin: 0px auto;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 40px auto;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;
        gap: 20px;

        margin: 30px 0px;
    }
    ${BREAKPOINT.TABLET} {
        flex-direction: column;
        gap: 20px;
    }
`;

export const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 980px;

    margin: 0px auto;
`;

export const AuthorContainer = styled.div`
    flex: 1;
    width: fit-content;
`;

export const Author = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: 0;

    span {
        display: block;
        width: fit-content;
        margin: 2px 0px;
    }
`;

export const HashTags = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 50%;

    ${BREAKPOINT.MOBILE} {
        width: 100%;
    }
    ${BREAKPOINT.TABLET} {
        width: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
    white-space: wrap;
`;
