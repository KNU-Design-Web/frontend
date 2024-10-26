import * as HomePageStyles from "./HomePage.style";

export default function HomePage() {
    return (
        <HomePageStyles.VideoContainer>
            <HomePageStyles.Video src="https://images.knud2024.com/main/main-origin.webm" autoPlay loop muted />
        </HomePageStyles.VideoContainer>
    );
}
