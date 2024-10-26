import { memo } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useProjectId } from "@/hooks/ProjectPage/useProjectId";

import { LeftArrow } from "@/assets/icons/LeftArrow";

import * as ProjectDetailStyles from "./ProjectDetailPage.style";
import { data } from "@/apps/data";
import { Text } from "@/common/components/Text/Text";

export default memo(function ProjectDetailPage() {
    const navigate = useNavigate();
    const projectId = useProjectId();

    const project = useMemo(() => {
        return {
            title: data[projectId + 1].project.title,
            thumbnail: data[projectId + 1].project.thumbnail,
            author: data[projectId + 1].author,
            hashtags: data[projectId + 1].project.hashtags,
            descriptions: data[projectId + 1].project.description,
            contents: data[projectId + 1].project.contents,
        };
    }, [projectId]);

    return (
        <>
            <ProjectDetailStyles.Header>
                <ProjectDetailStyles.PrevButton onClick={() => navigate("?section=project")}>
                    <LeftArrow color="#fff" />
                </ProjectDetailStyles.PrevButton>

                <ProjectDetailStyles.Title>
                    <Text weight={700} color="#fff">
                        {project.title}
                    </Text>
                    <Text weight={400} color="#fff">
                        {project.author.name.ko} {project.author.name.en}
                    </Text>
                </ProjectDetailStyles.Title>
            </ProjectDetailStyles.Header>

            <ProjectDetailStyles.Body>
                <ProjectDetailStyles.Image src={project.thumbnail} />

                <ProjectDetailStyles.ContentWrapper>
                    <ProjectDetailStyles.ContentContainer>
                        <Text size="xl" weight={600}>
                            {project.title}
                        </Text>

                        <ProjectDetailStyles.HashTags>
                            {project.hashtags.map((tag) => (
                                <Text size="xs" color="purple">
                                    {tag}
                                </Text>
                            ))}
                        </ProjectDetailStyles.HashTags>

                        <ProjectDetailStyles.Content>
                            {project.descriptions.map((description) => (
                                <Text size="xs">{description}</Text>
                            ))}
                        </ProjectDetailStyles.Content>
                    </ProjectDetailStyles.ContentContainer>

                    <ProjectDetailStyles.AuthorContainer>
                        <ProjectDetailStyles.Author>
                            <Text size="xs" weight={600}>
                                {project.author.name.ko} {project.author.name.en}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {project.author.email}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {project.author.instagram}
                            </Text>
                            <Text size="xs" color="#7C7C7C">
                                {project.author.link && (
                                    <a href={project.author.link} target="_blank">
                                        {project.author.link}
                                    </a>
                                )}
                            </Text>
                        </ProjectDetailStyles.Author>
                    </ProjectDetailStyles.AuthorContainer>
                </ProjectDetailStyles.ContentWrapper>

                {project.contents.map((src) => {
                    if (src.match(/\.(webp|gif)$/)) return <ProjectDetailStyles.Image src={src} />;
                    else if (src.match(/\.(webm|mp4)$/))
                        return <ProjectDetailStyles.Video src={src} autoPlay loop muted />;
                })}
            </ProjectDetailStyles.Body>
        </>
    );
});
