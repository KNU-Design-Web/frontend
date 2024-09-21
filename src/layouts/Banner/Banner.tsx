import * as BannerStyles from "./Banner.style";
import { Text } from "@/fonts/Text";

const bannerText =
    "2024 KNUD GRADUATION EXHIBITION :합니다 디자인 2024 KNUD GRADUATION EXHIBITION :합니다 디자인2024 KNUD GRADUATION EXHIBITION :합니다 디자인 ";

export const Banner = () => {
    return (
        <BannerStyles.Wrapper>
            <BannerStyles.Container>
                <Text size="xl" weight={900} color="lightgreen">
                    {bannerText}
                </Text>
                <Text size="xl" weight={900} color="lightgreen">
                    {bannerText}
                </Text>
            </BannerStyles.Container>
        </BannerStyles.Wrapper>
    );
};
