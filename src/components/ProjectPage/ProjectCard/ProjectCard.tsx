import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { preloadImages } from "@/utils/preload";

import * as CardStyles from "./ProjectCard.style";
import { data } from "@/apps/data";
import { Text } from "@/common/components/Text/Text";
import { useProjectEvent } from "@/events/projectEvents";

export interface ProjectCardProps {
    id: number;
    imgSrc: string;
    thumbnailTitle: string;
    author: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const navigate = useNavigate();

    const { dispatchMouseOverEvent, dispatchMouseClickEvent } = useProjectEvent(props.id);

    const handleMouseOver = useCallback(() => {
        const headerImage = data[props.id - 1].project.contents[0];
        const firstProjectImage = data[props.id - 1].project.contents[1];

        preloadImages([headerImage, firstProjectImage]);
        dispatchMouseOverEvent();
    }, [dispatchMouseOverEvent, props.id]);

    return (
        <CardStyles.Wrapper
            onMouseOver={handleMouseOver}
            onClick={() => {
                navigate(`?section=project&id=${props.id - 1}`);
                dispatchMouseClickEvent();
            }}
        >
            <CardStyles.Image src={props.imgSrc} />

            <CardStyles.Container>
                <CardStyles.Description>
                    <Text size="20px" weight={600}>
                        {props.thumbnailTitle}
                    </Text>
                    <Text size="14px">{props.author}</Text>
                </CardStyles.Description>
            </CardStyles.Container>
        </CardStyles.Wrapper>
    );
};
