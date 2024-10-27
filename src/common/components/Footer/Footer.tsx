import * as FooterStyles from "./Footer.style";
import { Text as _Text } from "@/common/components/Text/Text";
import styled from "@emotion/styled";

export const Footer = () => {
    return (
        <FooterStyles.Wrapper>
            <FooterStyles.Container>
                <FooterStyles.Item>
                    <Ltext size="m" weight={700}>
                        40th Graduation Exhibition
                    </Ltext>
                    <Ltext size="m" weight={700}>
                        2024 Kyungpook National University
                    </Ltext>
                    <Ltext size="m" weight={700}>
                        합니다. 디자인
                    </Ltext>
                </FooterStyles.Item>

                <FooterStyles.Item>
                    <Stext size="s" weight={500} color="#909090">
                        Instagram @knu_design_
                    </Stext>
                    <Stext size="s" weight={500} color="#909090">
                        T. 053-950-5694
                    </Stext>
                    <Stext size="s" weight={500} color="#909090">
                        https://vcd.knu.ac.kr
                    </Stext>
                </FooterStyles.Item>
            </FooterStyles.Container>

            <FooterStyles.InfoContainer>
                <FooterStyles.InfoItem>
                    <Stext size="s" weight={700}>
                        장소
                    </Stext>
                    <Stext size="s" weight={500}>
                        <span>북구 대학로 80 경북대학교</span> <span>대구캠퍼스 스페이스 나인</span>
                    </Stext>
                </FooterStyles.InfoItem>
                <FooterStyles.InfoItem>
                    <Stext size="s" weight={700}>
                        일시
                    </Stext>
                    <Stext size="s" weight={500}>
                        <span>2024. 10. 28 MON - </span>
                        <span>2024.11.09 SUN</span>
                    </Stext>
                </FooterStyles.InfoItem>
                <FooterStyles.InfoItem>
                    <Stext size="s" weight={700}>
                        오프닝
                    </Stext>
                    <Stext size="s" weight={500}>
                        2024. 10. 31 THU
                    </Stext>
                </FooterStyles.InfoItem>
            </FooterStyles.InfoContainer>
        </FooterStyles.Wrapper>
    );
};

const Ltext = styled(_Text)`
    @media (max-width: 430px) {
        font-size: 20px;
    }
`;

const Stext = styled(_Text)`
    @media (max-width: 430px) {
        font-size: 16px;
    }
`;
