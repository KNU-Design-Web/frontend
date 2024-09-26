import * as AboutPageStyles from "./AboutPage.style";
import { Title } from "@/fonts/Title";

export default function AboutPage() {
    const gridCells = Array(26 * 16)
        .fill(null)
        .map((_, index) => <AboutPageStyles.GridButton key={index} aria-hidden="true" />);

    return (
        <AboutPageStyles.PageWrapper>
            <AboutPageStyles.ContentWrapper>
                <Title>ABOUT</Title>
            </AboutPageStyles.ContentWrapper>
            <AboutPageStyles.GridWrapper>{gridCells}</AboutPageStyles.GridWrapper>
        </AboutPageStyles.PageWrapper>
    );
}
