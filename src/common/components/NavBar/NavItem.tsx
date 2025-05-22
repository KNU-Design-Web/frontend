import { memo } from "react";
import { useSearchParams } from "react-router-dom";

import { Text } from "@/common/components/Text/Text";
import { useSectionEvent } from "@/common/lib/google-analytics/sectionEvent";

import * as NavItemStyles from "./NavItem.style";

export interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem = memo((props: NavItemProps) => {
    const [searchParams] = useSearchParams();

    const { dispatchMouseOverEvent, dispatchMouseClickEvent } = useSectionEvent(props.to);

    return (
        <NavItemStyles.Wrapper
            id={props.to}
            to={`?section=${props.to}`}
            active={searchParams.get("section")?.includes(props.to) as boolean}
            onMouseOver={dispatchMouseOverEvent}
            onClick={dispatchMouseClickEvent}
        >
            <Text size="m" color="#000" weight={500}>
                {props.children}
            </Text>
        </NavItemStyles.Wrapper>
    );
});
