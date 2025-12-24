import { memo } from "react";

import { data } from "@/core/data";

import { Title } from "@/global/components/Title/Title";

import { ProjectCard } from "@/modules/project/components/ProjectCard/ProjectCard";
import { ProjectCardContainer } from "@/modules/project/components/ProjectCardContainer/ProjectCardContainer";

export default memo(function ProjectListPage() {
    return (
        <>
            <Title>PROJECT</Title>

            <ProjectCardContainer>
                {data.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            id={item.id}
                            imgSrc={`https://images.knud2024.com/project-card-thumbnail/thumbnail${item.id}_350x350.webp`}
                            thumbnailTitle={item.project.thumbnailTitle}
                            author={item.author.name.ko}
                        />
                    );
                })}
            </ProjectCardContainer>
        </>
    );
});

// `https://images.knud2024.com/project-card-thumbnail/thumbnail${project.id}_980x980.webp`
