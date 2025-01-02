import * as PhotoCardStyles from "./PhotoCard.style";

export type PhotoCardProps = React.ComponentProps<"img">;

export const PhotoCard = ({ ...props }: PhotoCardProps) => {
    return <PhotoCardStyles.Image {...props} />;
};
