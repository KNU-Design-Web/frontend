import { memo } from "react";
import { useSearchParams } from "react-router-dom";

import * as NavItemStyles from "./NavItem.style";
import { Text } from "@/fonts/Text";

export interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem = memo((props: NavItemProps) => {
    const [searchParams] = useSearchParams();

    return (
        <NavItemStyles.Wrapper
            id={props.to}
            to={`?section=${props.to}`}
            active={searchParams.get("section")?.includes(props.to) as boolean}
        >
            <Text size="m" color="#000" weight={700}>
                {props.children}
            </Text>
        </NavItemStyles.Wrapper>
    );
});
