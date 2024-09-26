import { useNavigate } from "react-router-dom";

import * as NavTopItemStyles from "./NavTopItem.style";
import { Text } from "@/fonts/Text";

export interface NavTopItemProps {
    index: number;
    to: string;
    label: string;
    active: boolean;
    onClick: () => void;
}

export const NavTopItem = (props: NavTopItemProps) => {
    const navigate = useNavigate();

    return (
        <NavTopItemStyles.Item
            index={props.index}
            active={props.active}
            onClick={() => {
                navigate(props.to);
                props.onClick();
            }}
        >
            <Text size="m" weight={600} style={{ margin: "0px 30px" }}>
                {props.label}
            </Text>
        </NavTopItemStyles.Item>
    );
};
