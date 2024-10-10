import * as ProfileDetailStyles from "./ProfileDetail.style";
import { ProfileItemProps } from "./ProfileItem";

export interface ProfileDetailProps extends ProfileItemProps {}

export const ProfileDetail = ({ ...rest }: ProfileDetailProps) => {
    return <ProfileDetailStyles.Wrapper></ProfileDetailStyles.Wrapper>;
};
