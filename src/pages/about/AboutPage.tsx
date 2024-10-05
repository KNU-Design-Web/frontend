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
                        <SectionTitle>‘합’니다. 디자인</SectionTitle>
                        <SectionContent>
                            ‘합’은 다양한 의미를 담고 있습니다.
                            <br />
                            <br /> 먼저, ‘+’ 기호로 상징되는 ‘합’은 서로 다른 요소들이 모여 새로운 형태, 결과를 이 루는
                            것을 나타냅니다. 우리가 정의하는 ‘합’은 개인의 개성과 창의적인 아이디어 가 모여 하나의
                            전시회를 완성하는 과정을 뜻합니다.
                            <br />
                            <br />
                            또한, 기합의 소리인 ‘합’은 졸업 전시 참여자들의 사고가 모여 이루는 결단과 의지를 상징합니다.
                            <br />
                            <br />
                            이러한 의미를 담고 있는 [합니다. 디자인]의 ‘합’은 단순히 디자인 작업을 ‘하는’ 것에 그치지
                            않고, 22명의 디자인 전공 학생들이 모여 창출한 시너지를 통해 디자 인의 새로운 가능성을
                            열어가겠다는 의지와 포부를 담고 있습니다.
                        </SectionContent>
                    </Section>

                    <HorizontalLine />
                    <Section>
                        <SectionTitle>Visual identity</SectionTitle>
                        <SectionContent>
                            비주얼 아이덴티티는 직관적이고 기하학적인 형태를 통해 졸업 전시회의 핵심 주제인 '합'을
                            효과적으로 전달하고자 하였습니다.
                            <br />
                            <br />
                            '합'을 중심으로 구성된 기하학적 패턴은 다양한 개개인의 창의성과 아이디어가 결합되어 하나의
                            큰 형태를 이루는 모습을 상징적으로 표현하였습니다. 원형과 직선이 반복되는 기하학적 형태는
                            규칙 속에서의 변주를 보여주며, 각각의 개체가 독립적이지만 동시에 하나의 큰 틀 안에서
                            조화롭게 어우러지는 과정을 시각적으로 드러냅니다.
                            <br />
                            <br />
                            포스터 중앙에 배치된 "합니다. 디자인"이라는 문구는 졸업 전시회의 핵심 메시지를 상징적으로
                            담고 있으며, '합니다'라는 능동적 표현은 22명의 디자인 전공 학생들이 모여 협력하고, 창의적
                            에너지를 결합하여 디자인의 새로운 가능성을 열어가겠다는 의지를 나타냅니다.
                            <br />
                            <br />
                            포스터의 비주얼 아이덴티티에서 특히 주목할 부분은 미로처럼 보이는 기하학적인 패턴입니다.
                            미로는 디자인 과정에서의 복잡성과 탐구를 상징하며, 다양한 사고와 아이디어들이 복잡하게
                            얽히고설켜서 최종적으로 하나의 결론에 도달하는 과정을 비유적으로 표현하고 있습니다. 미로는
                            단순히 혼란과 복잡함을 나타내는 것이 아니라, 창의적인 사고 속에서 방향을 찾고 문제를
                            해결하는 디자인 사고의 핵심적인 과정을 상징합니다.
                            <br />
                            <br />
                            포스터의 패턴은 창의적인 사고 과정과 해결의 여정을 시각적으로 표현하며, 개개인의 개성과
                            다양한 아이디어를 결합해 새로운 가능성을 탐구하는 과정을 상징적으로 담아내고자 현재의 형태를
                            도출하였습니다.
                        </SectionContent>
                    </Section>
                    <HorizontalLine />
                    <Section>
                        <SectionTitle>예술대학장 인사말</SectionTitle>
                        <SectionContent></SectionContent>
                    </Section>
                    <Section>
                        <SectionTitle>학과장 인사말</SectionTitle>
                        <SectionContent></SectionContent>
                    </Section>
                    <Section>
                        <SectionTitle>지도교수</SectionTitle>
                        <SectionContent></SectionContent>
                    </Section>
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

const SectionTitle = styled.div`
    font-size: 32px;
    width: 50%;
    box-sizing: border-box;
`;

const SectionContent = styled.div`
    font-size: 16px;
    width: 50%;
    box-sizing: border-box;
    white-space: pre-wrap;
`;
