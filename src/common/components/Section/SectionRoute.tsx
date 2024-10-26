import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { Footer } from "../Footer/Footer";
import { Grid } from "../Grid/Grid";
import { NavItem } from "../NavBar/NavItem";
import * as SectionRouteStyles from "./SectionRoute.style";

export interface SectionRouteProps {
    param: string;
    navContent: string;
    element: React.ReactNode;
}

export const SectionRoute = (props: SectionRouteProps) => {
    const [searchParams] = useSearchParams();
    const isActive = searchParams.get("section") === props.param;

    return (
        <>
            <NavItem to={props.param}>{props.navContent}</NavItem>

            <CSSTransition in={isActive} timeout={300} classNames="section" unmountOnExit>
                <SectionWrapper>
                    <SectionContainer>
                        {props.element}
                        <Grid rows={28} cols={18} />
                    </SectionContainer>
                    <Footer />
                </SectionWrapper>
            </CSSTransition>
        </>
    );
};

export const SectionWrapper = memo(SectionRouteStyles.Wrapper);
export const SectionContainer = memo(SectionRouteStyles.Container);
