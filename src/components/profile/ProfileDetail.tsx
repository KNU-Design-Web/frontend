import { RightArrow } from "@/assets/icons/RightArrow";

import * as ProfileDetailStyles from "./ProfileDetail.style";
import { ProfileItemProps } from "./ProfileItem";
import { Text } from "@/fonts/Text";

export type ProfileDetailProps = ProfileItemProps;

export const ProfileDetail = (props: ProfileDetailProps) => {
    return (
        <ProfileDetailStyles.Wrapper>
            <ProfileDetailStyles.Info>
                <ProfileDetailStyles.Author>
                    <h1>
                        <Text size="xl">{props.koName}</Text>
                    </h1>
                    <h3>
                        <Text size="s" weight={400}>
                            {props.enName}
                        </Text>
                    </h3>
                    <p>
                        <Text size="xs" weight={200} color="purple">
                            {props.email}
                        </Text>
                        <Text size="xs" weight={200} color="purple">
                            {props.instagram}
                        </Text>
                        <Text size="xs" weight={200} color="purple">
                            {props.link}
                        </Text>
                    </p>
                </ProfileDetailStyles.Author>

                <ProfileDetailStyles.Project>
                    <ProfileDetailStyles.ProjectImgContianer>
                        <ProfileDetailStyles.ProjectImg src={props.projectImg} />
                        <ProfileDetailStyles.ProjectLink>
                            <RightArrow color="#fff" />
                        </ProfileDetailStyles.ProjectLink>
                    </ProfileDetailStyles.ProjectImgContianer>

                    <ProfileDetailStyles.ProjectTitle>
                        {props.projectTitle.map((title) => {
                            return (
                                <h2>
                                    <Text size="s" weight={500} color="#000">
                                        {title}
                                    </Text>
                                </h2>
                            );
                        })}
                    </ProfileDetailStyles.ProjectTitle>
                </ProfileDetailStyles.Project>
            </ProfileDetailStyles.Info>

            <ProfileDetailStyles.Profile src={props.profileImg} />
        </ProfileDetailStyles.Wrapper>
    );
};
