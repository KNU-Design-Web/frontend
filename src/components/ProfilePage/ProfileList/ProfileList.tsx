import * as ProfileListStyles from "./ProfileList.style";

export interface ProfileListProps {
    children: React.ReactNode;
}

export const ProfileList = (props: ProfileListProps) => {
    return <ProfileListStyles.Container>{props.children}</ProfileListStyles.Container>;
};
