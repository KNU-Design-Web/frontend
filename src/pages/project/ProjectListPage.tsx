import { memo } from "react";

import { ProjectCard } from "@/components/project/Card/Card";
import { ProjectCardContainer } from "@/components/project/CardContainer/CardContainer";

import { Title } from "@/fonts/Title";

export default memo(function ProjectListPage() {
    return (
        <>
            <Title>PROJECT</Title>

            <ProjectCardContainer>
                {Array.from({ length: 15 }).map((_, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            id={index}
                            imgSrc="https://placehold.co/320x320"
                            title="프로젝트 제목"
                            author="홍길동"
                        />
                    );
                })}
            </ProjectCardContainer>
        </>
    );
});
