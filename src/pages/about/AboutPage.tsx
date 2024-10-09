import React, { useState, useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import map from "@/assets/img/Map.svg";

import { HorizontalLine } from "./HorizontalLine";
import { Text } from "@/fonts/Text";
import { Title } from "@/fonts/Title";
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
                        <SectionContent>
                            결실의 계절입니다. 만물이 한 해 동안 노력으로 경주했던 결 실을 맞이하는 시기입니다. 올해도
                            우리 예술대학의 디자인학 과 예비 졸업생들이 그들의 열정과 에너지, 전문적 역량을 쏟 아부어
                            졸업전시회를 준비하였습니다.
                            <br />
                            <br />
                            새내기 때 풋풋하고 수줍어하던 모습들은 이제 의젓하고 세련되어졌고, 해맑던 얼굴에는 노련미와
                            자신감이 충만합니다.
                            <br />
                            <br />
                            우리 디자인학과 예비 졸업생들은 단순 오퍼레이터가 아닌, 21세기를 대변하는 통합솔루션
                            디자이너이자 기획자, 디자인 전문 디렉터로서의 역량을 갖추고자 열심히 준비하고 성장해 온
                            친구들입니다.
                            <br />
                            <br />
                            정성을 다한 작업 속에서 묻어나는 그들의 뛰어난 콘셉트와 사 고, 이에 따른 문제해결을 위한
                            숙련된 기술과 역량을 관심있 게 지켜봐 주시고 아낌없는 격려를 부탁드립니다.
                            <InfoSection>
                                <InfoTitle>예술대학 학과장</InfoTitle>
                                <InfoContent>조철희</InfoContent>
                                <InfoDate>2004년 10월</InfoDate>
                            </InfoSection>
                        </SectionContent>
                    </Section>
                    <Section>
                        <SectionTitle>학과장 인사말</SectionTitle>
                        <SectionContent>
                            결실의 계절입니다. 만물이 한 해 동안 노력으로 경주했던 결 실을 맞이하는 시기입니다. 올해도
                            우리 예술대학의 디자인학 과 예비 졸업생들이 그들의 열정과 에너지, 전문적 역량을 쏟 아부어
                            졸업전시회를 준비하였습니다.
                            <br />
                            <br />
                            새내기 때 풋풋하고 수줍어하던 모습들은 이제 의젓하고 세련되어졌고, 해맑던 얼굴에는 노련미와
                            자신감이 충만합니다.
                            <br />
                            <br />
                            우리 디자인학과 예비 졸업생들은 단순 오퍼레이터가 아닌, 21세기를 대변하는 통합솔루션
                            디자이너이자 기획자, 디자인 전문 디렉터로서의 역량을 갖추고자 열심히 준비하고 성장해 온
                            친구들입니다.
                            <br />
                            <br />
                            정성을 다한 작업 속에서 묻어나는 그들의 뛰어난 콘셉트와 사 고, 이에 따른 문제해결을 위한
                            숙련된 기술과 역량을 관심있 게 지켜봐 주시고 아낌없는 격려를 부탁드립니다.
                            <InfoSection>
                                <InfoTitle>디자인학과 학과장</InfoTitle>
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

                    <Section>
                        <SectionTitle>교수진</SectionTitle>
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
                            결실의 계절입니다. 만물이 한 해 동안 노력으로 경주했던 결 실을 맞이하는 시기입니다. 올해도
                            우리 예술대학의 디자인학 과 예비 졸업생들이 그들의 열정과 에너지, 전문적 역량을 쏟 아부어
                            졸업전시회를 준비하였습니다.
                            <br />
                            <br />
                            새내기 때 풋풋하고 수줍어하던 모습들은 이제 의젓하고 세련되어졌고, 해맑던 얼굴에는 노련미와
                            자신감이 충만합니다.
                            <br />
                            <br />
                            우리 디자인학과 예비 졸업생들은 단순 오퍼레이터가 아닌, 21세기를 대변하는 통합솔루션
                            디자이너이자 기획자, 디자인 전문 디렉터로서의 역량을 갖추고자 열심히 준비하고 성장해 온
                            친구들입니다.
                            <br />
                            <br />
                            정성을 다한 작업 속에서 묻어나는 그들의 뛰어난 콘셉트와 사 고, 이에 따른 문제해결을 위한
                            숙련된 기술과 역량을 관심있 게 지켜봐 주시고 아낌없는 격려를 부탁드립니다.
                            <InfoSection>
                                <InfoTitle>
                                    졸업준비위원회 <br />
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
                                    <Memebers>구지원 황수정 문예림 정유정 김은정 손희주</Memebers>
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
                                    <TeamImg />
                                    <TeamInfo>
                                        <TeamInfoTitle>기획팀</TeamInfoTitle>
                                        <TeamInfoMemeber>구지원 황수정 문예림 정유정 김은정 손희주</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg />
                                    <TeamInfo>
                                        <TeamInfoTitle>그래픽 A팀</TeamInfoTitle>
                                        <TeamInfoMemeber>문예림 김도연 오연수 원민주 최장익 심유진</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg />
                                    <TeamInfo>
                                        <TeamInfoTitle>그래픽 B팀</TeamInfoTitle>
                                        <TeamInfoMemeber>정유정 허연주 유다빈 이시훈 한영욱</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg />
                                    <TeamInfo>
                                        <TeamInfoTitle>편집팀</TeamInfoTitle>
                                        <TeamInfoMemeber>김정은 김현민 전하연 전유나 한지원</TeamInfoMemeber>
                                    </TeamInfo>
                                </TeamCard>
                                <TeamCard>
                                    <TeamImg />
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
                                        <TeamImg />
                                        <TeamInfo>
                                            <TeamInfoTitle>기획팀</TeamInfoTitle>
                                            <TeamInfoMemeber>구지원 황수정 문예림 정유정 김은정 손희주</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg />
                                        <TeamInfo>
                                            <TeamInfoTitle>그래픽 A팀</TeamInfoTitle>
                                            <TeamInfoMemeber>문예림 김도연 오연수 원민주 최장익 심유진</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg />
                                        <TeamInfo>
                                            <TeamInfoTitle>그래픽 B팀</TeamInfoTitle>
                                            <TeamInfoMemeber>정유정 허연주 유다빈 이시훈 한영욱</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg />
                                        <TeamInfo>
                                            <TeamInfoTitle>편집팀</TeamInfoTitle>
                                            <TeamInfoMemeber>김정은 김현민 전하연 전유나 한지원</TeamInfoMemeber>
                                        </TeamInfo>
                                    </TeamCard>
                                    <TeamCard>
                                        <TeamImg />
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
                                    <ChartItemMemebers>2024. 10. 28 MON -2024. 11. 09 SUN</ChartItemMemebers>
                                </ChartItem>
                                <ChartItem>
                                    <ChartItemTitle>오프닝</ChartItemTitle>
                                    <ChartItemMemebers>2024. 10. 31 THU</ChartItemMemebers>
                                </ChartItem>
                            </ChartContent>
                        </SectionContent>
                    </Section>
                    <Section>
                        <SectionImg src={map} />
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

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 10px;
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

    @media (max-width: 640px) {
        width: 25%;
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

    @media (max-width: 640px) {
        width: 75%;
    }
    @media (max-width: 430px) {
        width: 100%;
    }
`;

const SectionImg = styled.img``;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: left;
`;

const InfoTitle = styled(Text)`
    font-size: 20px;
    font-weight: 400;
`;

const InfoContent = styled(Text)``;

const InfoDate = styled(Text)``;

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
const ItmeTitle = styled(Text)``;
const ItemName = styled(Text)``;

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
`;

const Memebers = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    white-space: pre-wrap;
    width: 340px;
`;

const ChartItemTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    width: 60px;
`;

const ChartItemMemebers = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    white-space: pre-wrap;
    width: 420px;
`;

const ScrollableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

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
`;

const TeamInfo = styled.div`
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const TeamInfoTitle = styled(Text)``;

const TeamInfoMemeber = styled(Text)``;
