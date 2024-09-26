import { navItems } from "@/constants/navItems";

import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: grid;
    gap: 10px;

    margin: 0px auto;
    padding: 10px;

    max-width: 980px;

    // 전체 뷰포트 너비 - 좌우 네비게이션 너비 (60px) * 네비게이션 배열 크기
    width: calc(100vw - 60px * ${navItems.length});
    grid-template-columns: repeat(3, 1fr);

    ${BREAKPOINT.TABLET} {
        width: 100%;
    }
    ${BREAKPOINT.MOBILE} {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
`;
