import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;

    width: 100%;
    height: 540px;

    overflow: hidden;

    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;

    padding: 20px 24px;

    background-color: var(--color-light-green);

    ${BREAKPOINT.MOBILE} {
        height: 740px;
        flex-direction: column;
    }
`;

export const Info = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${BREAKPOINT.MOBILE} {
        flex-direction: row;
    }
`;

export const Author = styled.div`
    p span {
        display: block;
        margin: 2px 0px;
    }
`;

export const Project = styled.div`
    flex: 1;
    flex-shrink: 0;

    display: flex;
    align-items: flex-end;

    ${BREAKPOINT.TABLET} {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
    ${BREAKPOINT.MOBILE} {
        justify-content: flex-end;
        height: 180px;
    }
`;

export const ProjectImgContianer = styled.div`
    position: relative;
`;

export const ProjectImg = styled.img`
    object-fit: cover;
    width: 240px;
    height: 240px;

    ${BREAKPOINT.TABLET} {
        width: 180px;
        height: 180px;
    }
    ${BREAKPOINT.MOBILE} {
        width: 180px;
        height: 180px;
    }
`;

export const ProjectLink = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;

    width: 32px;
    height: 32px;
    object-fit: cover;
`;

export const ProjectTitle = styled.div`
    margin: 0px 10px;

    ${BREAKPOINT.TABLET} {
        margin: 10px;
    }
    ${BREAKPOINT.MOBILE} {
        margin: 10px;
        display: none;
    }
`;

export const Profile = styled.img`
    display: block;

    width: 100%;
    max-width: 390px;
    object-fit: cover;
    height: 500px;

    ${BREAKPOINT.MOBILE} {
        max-width: 100%;
    }
`;
