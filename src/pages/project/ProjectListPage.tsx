import { memo } from "react";
import { useMemo } from "react";

import { ProjectCard } from "@/components/project/Card/Card";
import { ProjectCardContainer } from "@/components/project/CardContainer/CardContainer";

import { data } from "@/apps/data";
import { Title } from "@/fonts/Title";

export default memo(function ProjectListPage() {
    const projects = useMemo(() => {
        return data.map((item) => {
            return {
                id: item.id,
                title: item.project.title[0],
                koName: item.author.name.ko,
                enName: item.author.name.en,
            };
        });
    }, []);

    return (
        <>
            <Title>PROJECT</Title>

            <ProjectCardContainer>
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            imgSrc={`https://images.knud2024.com/project-card-thumbnail/thumbnail${project.id}_350x350.webp`}
                            title={project.title}
                            author={project.koName}
                        />
                    );
                })}
            </ProjectCardContainer>
        </>
    );
});

// `https://images.knud2024.com/project-card-thumbnail/thumbnail${project.id}_980x980.webp`
