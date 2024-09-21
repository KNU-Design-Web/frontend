import * as NavItemStyles from "./NavItem.style";
import { Text } from "@/fonts/Text";

export interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem = (props: NavItemProps) => {
    return (
        <NavItemStyles.Wrapper id={props.to} to={props.to}>
            <Text size="m" color="#000">
                {props.children}
            </Text>
        </NavItemStyles.Wrapper>
    );
};
