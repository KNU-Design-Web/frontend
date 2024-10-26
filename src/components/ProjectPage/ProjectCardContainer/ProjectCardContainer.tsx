import * as CardContainerStyles from "./ProjectCardContainer.style";

export interface CardContainerProps {
    children: React.ReactNode;
}

export const ProjectCardContainer = (props: CardContainerProps) => {
    return <CardContainerStyles.Wrapper>{props.children}</CardContainerStyles.Wrapper>;
};
