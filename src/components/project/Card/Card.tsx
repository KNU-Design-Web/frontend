import * as CardStyles from "./Card.style";
import { Text } from "@/fonts/Text";

export interface ProjectCardProps {
    id: number;
    imgSrc: string;
    title: string;
    author: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <CardStyles.Wrapper>
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
