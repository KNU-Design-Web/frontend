import * as PhotoGridStyles from "./PhotoGrid.style";

export interface PhotoGridProps {
    direction: "row" | "column";
    children?: React.ReactNode;
}

export const PhotoGrid = ({ direction, children }: PhotoGridProps) => {
    return <PhotoGridStyles.Grid direction={direction}>{children}</PhotoGridStyles.Grid>;
};
