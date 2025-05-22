import { useCallback, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProfileDetail } from "../ProfileDetail/ProfileDetail";
import { ProfileItemHeader } from "../ProfileItemHeader/ProfileItemHeader";
import { useProfileEvent } from "@/common/lib/google-analytics/profileEvents";
import { useProfileToggle } from "@/domains/profile/context/useProfileToggle";

export interface ProfileItemProps {
    id: number;
    projectId: number;

    koName: string;
    enName: string;

    email: string;
    instagram: string | null;
    link: string | null;

    profileImg: string;
    projectImg: string;

    projectThumbnailTitle: string;
}

export const ProfileItem = (props: ProfileItemProps) => {
    const profileToggle = useProfileToggle();

    const handleToggle = useCallback(() => {
        if (profileToggle.openId === props.id) profileToggle.setOpenId(null);
        else profileToggle.setOpenId(props.id);
    }, [props.id, profileToggle]);

    const isOpen = useMemo(() => {
        return profileToggle.openId === props.id;
    }, [profileToggle.openId, props.id]);

    const { dispatchMouseOverEvent, dispatchMouseClickEvent } = useProfileEvent(props.id);

    return (
        <TransitionGroup>
            <ProfileItemHeader
                koName={props.koName}
                enName={props.enName}
                isOpen={isOpen}
                handleToggle={handleToggle}
                onClick={dispatchMouseClickEvent}
                onMouseOver={dispatchMouseOverEvent}
            />
            {isOpen && (
                <CSSTransition timeout={200} classNames="profile">
                    <ProfileDetail {...props} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};
