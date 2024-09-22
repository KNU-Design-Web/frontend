import { useSearchParams } from "react-router-dom";

import { NavItem } from "../NavBar/NavItem";
import * as SectionRouteStyles from "./SectionRoute.style";

export interface SectionRouteProps {
    param: string;
    navContent: string;
    element: React.ReactNode;
}

export const SectionRoute = (props: SectionRouteProps) => {
    const [searchParams] = useSearchParams();

    return (
        <>
            <NavItem to={props.param}>{props.navContent}</NavItem>
            <SectionRouteStyles.Wrapper active={searchParams.get("section") === props.param}>
                <SectionRouteStyles.Container>{props.element}</SectionRouteStyles.Container>
            </SectionRouteStyles.Wrapper>
        </>
    );
};
