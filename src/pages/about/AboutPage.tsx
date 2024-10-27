import React, { useState, useRef } from "react";

import manage from "@/assets/img/Manage.webp";
import map from "@/assets/img/Map.svg";
import editor from "@/assets/img/editor.webp";
import gA from "@/assets/img/gA.webp";
import gB from "@/assets/img/gB.webp";
import web from "@/assets/img/web.webp";

import { HorizontalLine } from "./HorizontalLine";
import { Text } from "@/common/components/Text/Text";
import { Title } from "@/common/components/Title/Title";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import styled from "@emotion/styled";

export default function AboutPage() {
    const underTablet = useMediaQuery("(max-width: 1024px)");
    const TableToMobile = useMediaQuery("(max-width: 640px) and (min-width: 430px)");
    const isMobile = useMediaQuery("(max-width: 430px)");
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };
    return (
        <>
            {underTablet ? <></> : <Title>ABOUT</Title>}
            <ContentWrapper>
                <HeaderContent>
                    {TableToMobile ? (
                        <Slog>
                            2024 KNUD <br /> GRADUATION <br />
                            EXHIBITION <br />
                            :합니다 디자인
                        </Slog>
                    ) : (
                        <Slog>
                            2024 KNUD <br /> GRADUATION EXHIBITION <br />
                            :합니다 디자인
                        </Slog>
                    )}
                </HeaderContent>
                <BodyContent>
                    <Section>
                        <SectionTitle>‘합’니다 디자인</SectionTitle>
                        <SectionContent>
                            ‘합’은 다양한 의미를 담고 있습니다. 먼저, ‘+’ 기호로 상징되는 ‘합’은 서로 다른 요소들이 모여
                            새로운 형태, 결과를 이루는 것을 나타냅니다. 우리가 정의하는 ‘합’은 개인의 개성과 창의적인
                            아이디어가 모여 하나의 전시회를 완성하는 과정을 뜻합니다. 또한, 기합의 소리인 ‘합’은 졸업
                            전시 참여자들의 사고가 모여 이루는 결단과 의지를 상징합니다.
                            <br />
                            <br />
                            이러한 의미를 담고 있는 [합니다디자인]의 ‘합’은 단순히 디자인 작업을 ‘하는’ 것에 그치지않고,
                            <br />
                            <br />
                            22명의 디자인 전공 학생들이 모여 창출한 시너지를 통해 디자인의 새로운 가능성을 열어가겠다는
                            의지와 포부를 담고 있습니다.
                        </SectionContent>
                    </Section>

                    <HorizontalLine />
                    <Section>
                        {TableToMobile ? (
                            <SectionTitle>
                                Visual
                                <br />
                                identity
                            </SectionTitle>
                        ) : (
                            <SectionTitle>Visual identity</SectionTitle>
                        )}
                        <SectionContent>
                            비주얼 아이덴티티는 직관적이고 기하학적인 형태를 통해 졸업 전시회의 핵심 주제인 ‘합’을
                            효과적으로 전달하고자 하였습니다. ‘합’을 중심으로 구성된 기하학적 패턴은 다양한 개개인의
                            창의성과 아이디어가 결합되어 하나의 큰 형태를 이루는 모습을 상징적으로 표현하며 원형과
                            직선의 반복은 규칙 속에서의 변주를 보여줍니다. 각각의 개체는 독립적이지만 동시에 하나의 큰
                            틀 안에서 조화롭게 어우러지는 과정을 시각적으로 드러냅니다.
                            <br />
                            <br />
                            포스터 중앙에 배치된 [합니다디자인] 문구는 졸업 전시회의 핵심 메시지를 상징하며,
                            ‘합니다’라는 능동적 표현은 22명의 디자인 전공 학생들이 모여 협력하고 창의적 에너지를 결합해
                            디자인의 새로운 가능성을 열어가려는 의지를 나타냅니다.
                            <br />
                            <br />
                            특히 주목할 부분은 미로처럼 보이는 기하학적인 패턴입니다. 미로는 디자인 과정의 복잡성과
                            탐구를 상징하며, 다양한 사고와 아이디어들이 얽혀 최종적으로 하나의 결론에 도달하는 과정을
                            비유적으로 표현하고 있습니다. <br />
                            결론적으로, 포스터의 패턴은 창의적인 사고 과정과 해결의 여정을 시각적으로 표현하며, 개개인의
                            개성과 다양한 아이디어를 결합해 새로운 가능성을 탐구하는 과정을 담아내어 현재의 형태를
                            도출하였습니다.
                        </SectionContent>
                    </Section>
                    <HorizontalLine />
                    <Section>
                        <SectionTitle>예술대학장 인사말</SectionTitle>
                        <SectionContent>
                            이 세상에 태어난 누구에게나 원석이 있습니다. 이 원석을 잘 갈고 닦아서 저마다의 반짝이는 보석
                            을 만드는 과정이 인생이 아닌가 합니다. 각자의 크고 작은 원석을 가슴에 품고 디자인을 염심히
                            공부한 학생들이 저마다의 반짝이는 보석이 되는 과정을 함께 하였습니다. 빛나는 광채를 가진 학
                            생도 있고 심오한 깊이를 가진 학생도 있으며 아직은 빛을 모으고 있는 학생도 있습니다. 원석의
                            가치를 찾아내고 꾸준히 노력하여 보석이 되어가는 이 모든 과정을 도와주신 부모님과 교수님들
                            에게 감사의 말씀을 전합니다. 오롯이 혼자 일수 없는 세상에서 홀로서기가 가능하도록 용기주시
                            고 격려해 주신 선후배를 비롯한 모든 분들에게도 학생들과 함께 감사를 드립니다.
                            <br />
                            <br />긴 시간동안 고통스러운 창작의 시간을 보낸 학생 여러분들의 노력과 열정 덕분에 훌륭한
                            졸업작 품전과 멋진 작품집을 완성할 수 있게 된점에 대해서도 깊은 감사를 드립니다. 당장 세상에
                            내놓 아도 부끄럽지 않은 실력을 갖춘 제자들이 새삼 자랑스러운 순간입니다.
                            <InfoSection>
                                <InfoTitle>예술대학 학과장</InfoTitle>
                                <InfoContent>조철희</InfoContent>
                                <InfoDate>2024년 10월</InfoDate>
                            </InfoSection>
                        </SectionContent>
                    </Section>
                    <Section>
                        <SectionTitle>학과장 인사말</SectionTitle>
                        <SectionContent>
                            ‘합’ 여러분들의 뜨거운 기합 소리가 전시장을 가득 채우고 있는 듯합니다.
                            <br /> <br />
                            그동안 졸업전시회를 준비하느라 최선을 다한 여러분들이 자랑스럽고 고마운 마음입니다. 이번
                            전시회를 준비하는 과정에서 힘든 시간도 많았을 것입니다. 힘들고 지쳤던 모든 기억들은 더
                            어려운 일에 도전하기 위한 연습이었다고 생각하고 지금까지 해온 것처럼 자신감과 열정으로
                            새로운 무대인 사회로 진출하는 멋진 디자이너가 되셨으면 합니다.
                            <br /> <br />
                            이번 전시회의 슬로건인 ‘합니다 디자인’처럼 이제 여러분은 ‘디자인 전공’이라는 자격과 도구를
                            지니게 되었습니다. 앞으로 이 도구에 날을 세우고, 자신을 설레게 하는 것에 열정을 담아 다듬어
                            나아가십시오. 앞으로 사회생활을 시작하며 힘들고 외로울 때도 있을 것입니다. 그럴때면 좀 더
                            적극적이고 성실하게 임하는 여러분들이 되었으면 하는 바람입니다. 아울러 디자인 전공자로서
                            이번 졸업전시회를 소중하게 생각하고 이 일이 가능하도록 묵묵히 지원해 주신부모님, 함께 고민해
                            주신 교수님들, 그리고 디자인학과 선후배들, 주변에 도와주신 모든 분들께 감사하는 마음을
                            가졌으면 합니다.
                            <br /> <br />
                            지난 4년이라는 시간 동안 정도 들고 익숙했던 학교를 떠나 거칠고 가슴 설레는 세계로 나가려는
                            여러분들을 응원합니다. 짧은 시간이었지만 여러분들과 공부하며 즐거웠습니다. 여러분들의
                            졸업전시회를 진심으로 축하합니다.
                            <InfoSection>
                                <InfoTitle>디자인학과장</InfoTitle>
                                <InfoContent>이재민</InfoContent>
                                <InfoDate>2004년 10월</InfoDate>
                            </InfoSection>
                        </SectionContent>
                    </Section>
                    <HorizontalLine />
                    <Section>
                        <SectionTitle>지도교수</SectionTitle>
                        <SectionContent>
                            <GridContent>
                                <GridItem>
                                    <ItmeTitle>경북대학교 디자인학과 교수</ItmeTitle>
                                    <ItemName>조철희</ItemName>
                                </GridItem>
                                <GridItem>
                                    <ItmeTitle>경북대학교 디자인학과 교수</ItmeTitle>
                                    <ItemName>김성년</ItemName>
                                </GridItem>
                                <GridItem>
                                    <ItmeTitle>경북대학교 디자인학과 교수</ItmeTitle>
                                    <ItemName>이경용</ItemName>
                                </GridItem>
                                <GridItem>
                                    <ItmeTitle>경북대학교 디자인학과 교수</ItmeTitle>
                                    <ItemName>안지선</ItemName>
                                </GridItem>
                                <GridItem>
                                    <ItmeTitle>경북대학교 디자인학과 교수</ItmeTitle>
                                    <ItemName>이재민</ItemName>
                                </GridItem>
                            </GridContent>
                        </SectionContent>
                    </Section>
                    <HorizontalLine />
                    <Section>
                        {TableToMobile ? (
                            <SectionTitle>
                                졸업준비위원회
                                <br />
                                대표인사말
                            </SectionTitle>
                        ) : (
                            <SectionTitle>졸업준비위원회 대표인사말</SectionTitle>
                        )}
                        <SectionContent>
                            이번 졸업전시회는 디자인학과 22명의 졸업생들이 오랜 시간 동안 쌓아온 노력과 열정을 한데 모아
                            선보이는 중요한 자리입니다. 이 전시회는 단순한 작품 전시 이상의 의미를 지니고 있으며, 우리가
                            학업을 마치고 이제 사회 속에서 디자이너로서 첫걸음을 내딛을 준비가 되었음을 알리는 상징적인
                            순간입니다. 이 자리에 서기까지 우리는 수많은 난관과 도전을 마주했지만, 그 모든 과정은 우리를
                            더욱 단단하고 자랑스럽게 하는 중요한 밑거름이 되었습니다. 매 프로젝트마다 우리는 자신의
                            한계를 뛰어넘기 위해 끊임없이 노력해왔습니다. 이러한 과정 속에서 우리는 단순히 기술적 역량을
                            넘어 창의적인 사고와 문제 해결 능력, 그리고 협업의 중요성을 체득했습니다.
                            <br />
                            <br />
                            이제 우리는 그 모든 경험을 바탕으로 사회 속에서 디자이너로서 새로운 여정을 시작하려 합니다.
                            우리가 걸어갈 길은 무궁무진한 가능성으로 가득 차 있으며, 그 여정에서 우리가 쌓아온 경험과
                            배움은 강력한 무기가 될 것입니다. 모두의 미래가 더욱 빛나길 바라며, 각자의 자리에서 훌륭한
                            디자이너로 성장하기를 기대합니다.
                            <br />
                            <br />
                            그럼, 2024년도 디자인학과 졸업전시회 {"<합니다 디자인>"}의 시작을 알립니다.
                            <InfoSection>
                                <InfoTitle>
                                    졸업전시준비위원회 <br />
                                    위원장
                                </InfoTitle>
                                <InfoContent>구지원</InfoContent>
                                <InfoDate>2004년 10월</InfoDate>
                            </InfoSection>
                        </SectionContent>
                    </Section>
                    <Section>
                        <SectionTitle>졸업구성원</SectionTitle>
                        <SectionContent>
                            <ChartContent>
                                <ChartItem>
                                    <ChartTitle>기획팀</ChartTitle>
                                    <Memebers>구지원 황수정 문예림 정유정 김정은 손희주</Memebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartTitle>그래픽 A팀</ChartTitle>
                                    <Memebers>문예림 김도연 오연수 원민주 최장익 심유진</Memebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartTitle>그래픽 B팀</ChartTitle>
                                    <Memebers>정유정 허연주 유다빈 이시훈 한영욱</Memebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartTitle>편집팀</ChartTitle>
                                    <Memebers>김정은 김현민 전하연 전유나 한지원</Memebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartTitle>웹팀</ChartTitle>
                                    <Memebers>손희주 김경민 김수린 최민지</Memebers>
                                </ChartItem>
                            </ChartContent>
                        </SectionContent>
                    </Section>
                    <Section>
                        {isMobile ? (
                            <ScrollableContent>
                                <TeamCard>
                                    <TeamImg src={manage} loading="lazy" />
                                    <TeamInfo>
                                        <TeamInfoTitle>기획팀</TeamInfoTitle>
                                        <TeamInfoMemeber>구지원 황수정 문예림 정유정 김은정 손희주</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg src={gA} loading="lazy" />
                                    <TeamInfo>
                                        <TeamInfoTitle>그래픽 A팀</TeamInfoTitle>
                                        <TeamInfoMemeber>문예림 김도연 오연수 원민주 최장익 심유진</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg src={gB} loading="lazy" />
                                    <TeamInfo>
                                        <TeamInfoTitle>그래픽 B팀</TeamInfoTitle>
                                        <TeamInfoMemeber>정유정 허연주 유다빈 이시훈 한영욱</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg src={editor} loading="lazy" />
                                    <TeamInfo>
                                        <TeamInfoTitle>편집팀</TeamInfoTitle>
                                        <TeamInfoMemeber>김정은 김현민 전하연 전유나 한지원</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg src={web} loading="lazy" />
                                    <TeamInfo>
                                        <TeamInfoTitle>웹팀</TeamInfoTitle>
                                        <TeamInfoMemeber>손희주 김경민 김수린 최민지</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                            </ScrollableContent>
                        ) : (
                            <ScrollableContainer
                                ref={scrollContainerRef}
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                            >
                                <ScrollableContent>
                                    <TeamCard>
                                        <TeamImg src={manage} loading="lazy" />
                                        <TeamInfo>
                                            <TeamInfoTitle>기획팀</TeamInfoTitle>
                                            <TeamInfoMemeber>구지원 황수정 문예림 정유정 김은정 손희주</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg src={gA} loading="lazy" />
                                        <TeamInfo>
                                            <TeamInfoTitle>그래픽 A팀</TeamInfoTitle>
                                            <TeamInfoMemeber>문예림 김도연 오연수 원민주 최장익 심유진</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg src={gB} loading="lazy" />
                                        <TeamInfo>
                                            <TeamInfoTitle>그래픽 B팀</TeamInfoTitle>
                                            <TeamInfoMemeber>정유정 허연주 유다빈 이시훈 한영욱</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg src={editor} loading="lazy" />
                                        <TeamInfo>
                                            <TeamInfoTitle>편집팀</TeamInfoTitle>
                                            <TeamInfoMemeber>김정은 김현민 전하연 전유나 한지원</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg src={web} loading="lazy" />
                                        <TeamInfo>
                                            <TeamInfoTitle>웹팀</TeamInfoTitle>
                                            <TeamInfoMemeber>손희주 김경민 김수린 최민지</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                </ScrollableContent>
                            </ScrollableContainer>
                        )}
                    </Section>
                    <HorizontalLine />
                    <Section>
                        <SectionTitle>Offline Exhibtion</SectionTitle>
                        <SectionContent>
                            <ChartContent>
                                <ChartItem>
                                    <ChartItemTitle>장소</ChartItemTitle>
                                    <ChartItemMemebers>
                                        북구 대학로 80 경북대학교 대구캠퍼스 스페이스 나인
                                    </ChartItemMemebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartItemTitle>일시</ChartItemTitle>
                                    <ChartItemMemebers>2024. 10. 29 THU -2024. 11. 08 SAT</ChartItemMemebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartItemTitle>오프닝</ChartItemTitle>
                                    <ChartItemMemebers>2024. 10. 28 MON</ChartItemMemebers>
                                </ChartItem>
                            </ChartContent>
                        </SectionContent>
                    </Section>
                    <Section>
                        <SectionImg src={map} loading="lazy" />
                    </Section>
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
    pointer-events: none;
`;

const HeaderContent = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Slog = styled.h1`
    width: 980px;
    text-align: right;
    font-size: 50px;
    margin-top: 120px;
    line-height: 1.5;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 10px;
    }

    @media (max-width: 640px) {
        font-size: 28px;
    }
`;

const BodyContent = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
    width: 980px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 10px;
    }

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

const SectionTitle = styled(Text)`
    width: 50%;
    box-sizing: border-box;
    white-space: pre-wrap;
    font-size: 30px;
    line-height: 1.5;

    @media (max-width: 640px) {
        width: 25%;
        font-size: 20px;
    }

    @media (max-width: 430px) {
        width: 100%;
    }
`;

const SectionContent = styled(Text)`
    width: 50%;
    box-sizing: border-box;
    white-space: pre-wrap;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 16px;
    line-height: 1.5;

    @media (max-width: 640px) {
        width: 75%;
    }
    @media (max-width: 430px) {
        width: 100%;
    }
`;

const SectionImg = styled.img`
    width: 100%;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: left;
`;

const InfoTitle = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
`;

const InfoContent = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
`;

const InfoDate = styled(Text)`
    font-size: 20px;
    line-height: 1.5;
`;

const GridContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 30px;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

const GridItem = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const ItmeTitle = styled(Text)`
    font-size: 20px;
    line-height: 1.5;
`;
const ItemName = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
`;

const ChartContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ChartItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 6px;
    }
`;

const ChartTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    width: 140px;
    line-height: 1.5;
`;

const Memebers = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    white-space: pre-wrap;
    width: 340px;
    line-height: 1.5;
`;

const ChartItemTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    width: 60px;
    line-height: 1.5;
`;

const ChartItemMemebers = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    white-space: pre-wrap;
    width: 420px;
    line-height: 1.5;
`;

const ScrollableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    pointer-events: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const ScrollableContent = styled.div`
    display: flex;
    gap: 50px;
    padding: 20px 0;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 100px;
    }
`;

const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 17px;
`;

const TeamImg = styled.img`
    width: 408px;
    height: 270px;

    pointer-events: none; // 이미지 드래그 방지
    user-select: none; // 이미지 선택 방지
    -webkit-user-drag: none; // Webkit 브라우저에서 드래그 방지
    -khtml-user-drag: none; // 구형 브라우저 지원
    -moz-user-drag: none; // Firefox에서 드래그 방지
    -o-user-drag: none; // Opera에서 드래그 방지
`;

const TeamInfo = styled.div`
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const TeamInfoTitle = styled(Text)`
    font-size: 16px;
    line-height: 1.5;
`;

const TeamInfoMemeber = styled(Text)`
    font-size: 16px;
    line-height: 1.5;
`;
