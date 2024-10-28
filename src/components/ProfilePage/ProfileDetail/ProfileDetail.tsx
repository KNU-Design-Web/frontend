import { useNavigate } from "react-router-dom";

import { RightArrow } from "@/assets/icons/RightArrow";

import { ProfileItemProps } from "../ProfileItem/ProfileItem";
import * as ProfileDetailStyles from "./ProfileDetail.style";
import { Text } from "@/common/components/Text/Text";

export type ProfileDetailProps = ProfileItemProps;

export const ProfileDetail = (props: ProfileDetailProps) => {
    const navigate = useNavigate();

    return (
        <ProfileDetailStyles.Wrapper>
            <ProfileDetailStyles.Info>
                <ProfileDetailStyles.AuthorContainer>
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
                                {props.instagram && (
                                    <a
                                        href={`https://www.instagram.com/${props.instagram}`}
                                        target="_blank"
                                        style={{ color: "var(--color-purple)" }}
                                    >
                                        @{props.instagram}
                                    </a>
                                )}
                            </Text>
                            <Text size="xs" weight={200} color="purple">
                                {props.link && (
                                    <a href={props.link} target="_blank" style={{ color: "var(--color-purple)" }}>
                                        {props.link?.split("/").at(-1)}
                                    </a>
                                )}
                            </Text>
                        </p>
                    </ProfileDetailStyles.Author>

                    <ProfileDetailStyles.MobileProjectTitle>
                        <Text size="s" weight={600}>
                            {props.projectThumbnailTitle}
                        </Text>
                    </ProfileDetailStyles.MobileProjectTitle>
                </ProfileDetailStyles.AuthorContainer>

                <ProfileDetailStyles.Project>
                    <ProfileDetailStyles.ProjectImgContianer
                        onClick={() => navigate(`/?section=project&id=${props.projectId - 1}`)}
                    >
                        <ProfileDetailStyles.ProjectImg src={props.projectImg} />
                        <ProfileDetailStyles.ProjectLink>
                            <RightArrow color="#fff" />
                        </ProfileDetailStyles.ProjectLink>
                    </ProfileDetailStyles.ProjectImgContianer>

                    <ProfileDetailStyles.ProjectTitle>
                        <h2>
                            <Text size="s" weight={500} color="#000">
                                {props.projectThumbnailTitle}
                            </Text>
                        </h2>
                    </ProfileDetailStyles.ProjectTitle>
                </ProfileDetailStyles.Project>
            </ProfileDetailStyles.Info>

            <ProfileDetailStyles.Profile src={props.profileImg} />
        </ProfileDetailStyles.Wrapper>
    );
};
