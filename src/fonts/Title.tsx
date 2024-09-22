import { Text } from "./Text";
import * as TitleStyles from "./Title.style";

export interface TitleProps {
    children: React.ReactNode;
}

export const Title = (props: TitleProps) => {
    return (
        <TitleStyles.Text>
            <Text size={"140px"} weight={900} color="var(--color-purple)">
                {props.children}
            </Text>
        </TitleStyles.Text>
    );
};
