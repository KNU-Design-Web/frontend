import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { LeftArrow } from "@/assets/icons/LeftArrow";

import * as ProjectDetailStyles from "./ProjectDetailPage.style";
import { Text } from "@/fonts/Text";

export default memo(function ProjectDetailPage() {
    const navigate = useNavigate();

    return (
        <>
            <ProjectDetailStyles.Header>
                <ProjectDetailStyles.PrevButton onClick={() => navigate("?section=project")}>
                    <LeftArrow color="#fff" />
                </ProjectDetailStyles.PrevButton>

                <ProjectDetailStyles.Title>
                    <Text weight={700} color="#fff">
                        복합 애견 문화 공간, Goldenhill
                    </Text>
                    <Text weight={400} color="#fff">
                        한0욱 Youngwook Han
                    </Text>
                </ProjectDetailStyles.Title>
            </ProjectDetailStyles.Header>

            <ProjectDetailStyles.Body>
                <ProjectDetailStyles.Image src="https://placehold.co/980x500" />

                <ProjectDetailStyles.ContentWrapper>
                    <ProjectDetailStyles.ContentContainer>
                        <Text size="xl" weight={600}>
                            복합 애견 문화 공간, Goldenhill
                        </Text>

                        <ProjectDetailStyles.HashTags>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                            <Text size="xs" color="purple">
                                # 브랜딩
                            </Text>
                        </ProjectDetailStyles.HashTags>

                        <ProjectDetailStyles.Content>
                            <Text size="xs">'합'은 다양한 의미를 담고 있습니다</Text>
                            <Text size="xs">
                                먼저, '+' 기호로 상징되는 '합'은 서로 다른 요소들이 모여 새로우 형태, 결과를 이루는 것을
                                나타냅니다. 우리가 정의하는 '합'은 개인의 개성과 창의적인 아이디어가 모여 하나의
                                전시회를 완성하는 과정을 뜻합니다
                            </Text>
                            <Text size="xs">
                                또한, 기합의 소리인 '합'은 졸업 전시 참여자들의 사고가 모여 이루는 결단과 의지를
                                상징합니다
                            </Text>
                        </ProjectDetailStyles.Content>
                    </ProjectDetailStyles.ContentContainer>

                    <ProjectDetailStyles.AuthorContainer>
                        <ProjectDetailStyles.Author>
                            <Text size="xs" weight={600}>
                                한0욱 Youngwook Han
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                hyeonmin0824@gmail.com
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                @zzinppang
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                behance.net/123134
                            </Text>
                        </ProjectDetailStyles.Author>
                    </ProjectDetailStyles.AuthorContainer>
                </ProjectDetailStyles.ContentWrapper>

                <ProjectDetailStyles.Image src="https://placehold.co/980x500" />
            </ProjectDetailStyles.Body>
        </>
    );
});
