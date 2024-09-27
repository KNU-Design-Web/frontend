import { memo } from "react";

import * as GridStyles from "./Grid.style";

export interface GridProps {
    rows: number;
    cols: number;
}

export const Grid = memo((props: GridProps) => {
    return (
        <GridStyles.GridContainer rows={props.rows} cols={props.cols}>
            {Array(props.rows * props.cols)
                .fill(null)
                .map((_, index) => {
                    return <GridStyles.GridItem key={index}></GridStyles.GridItem>;
                })}
        </GridStyles.GridContainer>
    );
});
