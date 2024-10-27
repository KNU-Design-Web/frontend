import { memo, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useProjectId } from "@/hooks/ProjectPage/useProjectId";

import { LeftArrow } from "@/assets/icons/LeftArrow";

import * as ProjectDetailStyles from "./ProjectDetailPage.style";
import { data } from "@/apps/data";
import { Text } from "@/common/components/Text/Text";

export default memo(function ProjectDetailPage() {
    const navigate = useNavigate();
    const projectId = useProjectId();

    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        pageRef.current?.scrollIntoView({ behavior: "auto" });
    }, []);

    return (
        <ProjectDetailStyles.PageWrapper ref={pageRef}>
            <ProjectDetailStyles.Header>
                <ProjectDetailStyles.PrevButton onClick={() => navigate("?section=project")}>
                    <LeftArrow color="#fff" />
                </ProjectDetailStyles.PrevButton>

                <ProjectDetailStyles.Title>
                    <Text weight={700} color="#fff">
                        {data[projectId].project.title}
                    </Text>
                    <Text weight={400} color="#fff">
                        {data[projectId].author.name.ko} {data[projectId].author.name.en}
                    </Text>
                </ProjectDetailStyles.Title>
            </ProjectDetailStyles.Header>

            <ProjectDetailStyles.Body>
                <ProjectDetailStyles.Image src={data[projectId].project.thumbnail} />

                <ProjectDetailStyles.ContentWrapper>
                    <ProjectDetailStyles.ContentContainer>
                        <Text size="xl" weight={600}>
                            {data[projectId].project.title}
                        </Text>

                        <ProjectDetailStyles.HashTags>
                            {data[projectId].project.hashtags.map((tag) => (
                                <Text size="xs" color="purple">
                                    {tag}
                                </Text>
                            ))}
                        </ProjectDetailStyles.HashTags>

                        <ProjectDetailStyles.Content>
                            {data[projectId].project.description.map((description) => (
                                <Text size="xs">{description}</Text>
                            ))}
                        </ProjectDetailStyles.Content>
                    </ProjectDetailStyles.ContentContainer>

                    <ProjectDetailStyles.AuthorContainer>
                        <ProjectDetailStyles.Author>
                            <Text size="xs" weight={600}>
                                {data[projectId].author.name.ko} {data[projectId].author.name.en}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {data[projectId].author.email}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {data[projectId].author.instagram}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {data[projectId].author.link && (
                                    <a href={data[projectId].author.link} target="_blank">
                                        {data[projectId].author.link}
                                    </a>
                                )}
                            </Text>
                        </ProjectDetailStyles.Author>
                    </ProjectDetailStyles.AuthorContainer>
                </ProjectDetailStyles.ContentWrapper>

                {data[projectId].project.contents.map((src) => {
                    if (src.match(/\.(webp|gif)$/)) return <ProjectDetailStyles.Image src={src} />;
                    else if (src.match(/\.(webm|mp4)$/))
                        return <ProjectDetailStyles.Video src={src} autoPlay loop muted />;
                })}
            </ProjectDetailStyles.Body>
        </ProjectDetailStyles.PageWrapper>
    );
});
