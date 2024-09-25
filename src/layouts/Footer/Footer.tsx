import * as FooterStyles from "./Footer.style";
import { Text } from "@/fonts/Text";

export const Footer = () => {
    return (
        <FooterStyles.Wrapper>
            <FooterStyles.Container>
                <FooterStyles.Item>
                    <Text size="m" weight={700}>
                        40th Graduation Exhibition
                    </Text>
                    <Text size="m" weight={700}>
                        2024 Kyungpook National University
                    </Text>
                    <Text size="m" weight={700}>
                        합니다. 디자인
                    </Text>
                </FooterStyles.Item>

                <FooterStyles.Item>
                    <Text size="s" weight={500} color="#909090">
                        Instagram @knu_design_
                    </Text>
                    <Text size="s" weight={500} color="#909090">
                        T. 053-950-5694
                    </Text>
                    <Text size="s" weight={500} color="#909090">
                        https://vcd.knu.ac.kr
                    </Text>
                </FooterStyles.Item>
            </FooterStyles.Container>

            <FooterStyles.InfoContainer>
                <FooterStyles.InfoItem>
                    <Text size="s" weight={700}>
                        장소
                    </Text>
                    <Text size="s" weight={500}>
                        <span>북구 대학로 80 경북대학교</span> <span>대구캠퍼스 스페이스 나인</span>
                    </Text>
                </FooterStyles.InfoItem>
                <FooterStyles.InfoItem>
                    <Text size="s" weight={700}>
                        일시
                    </Text>
                    <Text size="s" weight={500}>
                        <span>2024. 10. 28 MON - </span>
                        <span>2024.11.09 SUN</span>
                    </Text>
                </FooterStyles.InfoItem>
                <FooterStyles.InfoItem>
                    <Text size="s" weight={700}>
                        오프닝
                    </Text>
                    <Text size="s" weight={500}>
                        2024. 10. 31 THU
                    </Text>
                </FooterStyles.InfoItem>
            </FooterStyles.InfoContainer>
        </FooterStyles.Wrapper>
    );
};
