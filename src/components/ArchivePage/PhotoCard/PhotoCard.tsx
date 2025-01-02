import * as PhotoCardStyles from "./PhotoCard.style";

export interface PhotoCardProps extends React.ComponentProps<"img"> {}

export const PhotoCard = ({ ...props }: PhotoCardProps) => {
    return <PhotoCardStyles.Image {...props} />;
};
