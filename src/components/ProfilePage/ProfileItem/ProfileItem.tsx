import { useCallback, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProfileDetail } from "../ProfileDetail/ProfileDetail";
import { ProfileItemHeader } from "../ProfileItemHeader/ProfileItemHeader";
import { useProfileToggle } from "@/contexts/useProfileToggle";

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

    projectTitle: string[];
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

    return (
        <TransitionGroup>
            <ProfileItemHeader
                koName={props.koName}
                enName={props.enName}
                isOpen={isOpen}
                handleToggle={handleToggle}
            />
            {isOpen && (
                <CSSTransition timeout={200} classNames="profile">
                    <ProfileDetail {...props} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};
