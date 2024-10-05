import { HorizontalLine } from "./HorizontalLine";
import { Title } from "@/fonts/Title";
import styled from "@emotion/styled";

export default function AboutPage() {
    return (
        <>
            <Title>ABOUT</Title>
            <ContentWrapper>
                <HeaderContent>
                    <Slog>
                        2024 KNUD <br /> GRADUATION EXHIBITION <br />
                        :합니다 디자인
                    </Slog>
                </HeaderContent>
                <BodyContent>
                    <Section>
                        <SetionTitle>‘합’니다. 디자인</SetionTitle>
                        <SetionContent>
                            ‘합’은 다양한 의미를 담고 있습니다.
                            <br />
                            <br /> 먼저, ‘+’ 기호로 상징되는 ‘합’은 서로 다른 요소들이 모여 새로운 형태, 결과를 이
                            <br />
                            루는 것을 나타냅니다. 우리가 정의하는 ‘합’은 개인의 개성과 창의적인 아이디어
                            <br />가 모여 하나의 전시회를 완성하는 과정을 뜻합니다.
                            <br />
                            <br />
                            또한, 기합의 소리인 ‘합’은 졸업 전시 참여자들의 사고가 모여 이루는 결단과
                            <br />
                            의지를 상징합니다.
                            <br />
                            <br />
                            이러한 의미를 담고 있는 [합니다. 디자인]의 ‘합’은 단순히 디자인 작업을 ‘하는’
                            <br /> 것에 그치지 않고, 22명의 디자인 전공 학생들이 모여 창출한 시너지를 통해 디자
                            <br />
                            인의 새로운 가능성을 열어가겠다는 의지와 포부를 담고 있습니다.
                        </SetionContent>
                    </Section>
                    <HorizontalLine />
                    <HorizontalLine />
                    <HorizontalLine />
                    <HorizontalLine />
                </BodyContent>
            </ContentWrapper>
        </>
    );
}

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderContent = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 230px; */
`;
const Slog = styled.h1`
    width: 980px;
    text-align: right;
    font-size: 50px;
    margin-top: 120px;
`;

const BodyContent = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

const Section = styled.div`
    width: 980px;
    display: flex;
    flex-direction: row;
`;

const SetionTitle = styled.div`
    font-size: 32px;
    width: 50%;
    box-sizing: border-box;
`;

const SetionContent = styled.div`
    font-size: 16px;
    width: 50%;
    box-sizing: border-box;
`;
