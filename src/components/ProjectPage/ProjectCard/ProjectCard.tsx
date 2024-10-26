import { useNavigate } from "react-router-dom";

import * as CardStyles from "./ProjectCard.style";
import { Text } from "@/common/components/Text/Text";

export interface ProjectCardProps {
    id: number;
    imgSrc: string;
    title: string;
    author: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <CardStyles.Wrapper onClick={() => navigate(`?section=project&id=${props.id - 1}`)}>
            <CardStyles.Image src={props.imgSrc} />

            <CardStyles.Container>
                <CardStyles.Description>
                    <Text size="20px" weight={600}>
                        {props.title}
                    </Text>
                    <Text size="14px">{props.author}</Text>
                </CardStyles.Description>
            </CardStyles.Container>
        </CardStyles.Wrapper>
    );
};
