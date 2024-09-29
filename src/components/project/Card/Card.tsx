import { useNavigate } from "react-router-dom";

import * as CardStyles from "./Card.style";
import { Text } from "@/fonts/Text";

export interface ProjectCardProps {
    id: number;
    imgSrc: string;
    title: string;
    author: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <CardStyles.Wrapper onClick={() => navigate(`?section=project&id=${props.id}`)}>
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
