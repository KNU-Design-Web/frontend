import * as SectionLayoutStyles from "./SectionLayout.style";

export interface SectionLayoutProps {
    children: React.ReactNode;
}

export const SectionLayout = (props: SectionLayoutProps) => {
    return <SectionLayoutStyles.Wrapper>{props.children}</SectionLayoutStyles.Wrapper>;
};
