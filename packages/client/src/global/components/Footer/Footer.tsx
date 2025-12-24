import * as FooterStyles from "./Footer.style";

export const Footer = () => {
    return (
        <FooterStyles.Wrapper>
            <FooterStyles.Container>
                <FooterStyles.LeftContainer>
                    <FooterStyles.Item>
                        <FooterStyles.Ltext size="m" weight={700}>
                            40th Graduation Exhibition
                        </FooterStyles.Ltext>
                        <FooterStyles.Ltext size="m" weight={700}>
                            2024 Kyungpook National University
                        </FooterStyles.Ltext>
                        <FooterStyles.Ltext size="m" weight={700}>
                            합니다. 디자인
                        </FooterStyles.Ltext>
                    </FooterStyles.Item>

                    <FooterStyles.Item>
                        <FooterStyles.Stext size="s" weight={500} color="#909090">
                            Instagram @knu_design_
                        </FooterStyles.Stext>
                        <FooterStyles.Stext size="s" weight={500} color="#909090">
                            T. 053-950-5694
                        </FooterStyles.Stext>
                        <FooterStyles.Stext size="s" weight={500} color="#909090">
                            https://vcd.knu.ac.kr
                        </FooterStyles.Stext>
                    </FooterStyles.Item>
                </FooterStyles.LeftContainer>

                <FooterStyles.RightContainer>
                    <FooterStyles.InfoItem>
                        <FooterStyles.Stext size="s" weight={700}>
                            장소
                        </FooterStyles.Stext>
                        <FooterStyles.Stext size="s" weight={500}>
                            <span>북구 대학로 80 경북대학교</span> <span>대구캠퍼스 스페이스 나인</span>
                        </FooterStyles.Stext>
                    </FooterStyles.InfoItem>
                    <FooterStyles.InfoItem>
                        <FooterStyles.Stext size="s" weight={700}>
                            일시
                        </FooterStyles.Stext>
                        <FooterStyles.Stext size="s" weight={500}>
                            <span>2024. 10. 29 TUE - </span>
                            <span>2024.11.08 SAT</span>
                        </FooterStyles.Stext>
                    </FooterStyles.InfoItem>
                    <FooterStyles.InfoItem>
                        <FooterStyles.Stext size="s" weight={700}>
                            오프닝
                        </FooterStyles.Stext>
                        <FooterStyles.Stext size="s" weight={500}>
                            2024. 10. 29 TUE
                        </FooterStyles.Stext>
                    </FooterStyles.InfoItem>
                </FooterStyles.RightContainer>
            </FooterStyles.Container>
        </FooterStyles.Wrapper>
    );
};
