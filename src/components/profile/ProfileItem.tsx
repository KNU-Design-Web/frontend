import { useCallback, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProfileDetail } from "./ProfileDetail";
import * as ProfileItemStyles from "./ProfileItem.style";
import { Text } from "@/fonts/Text";

export interface ProfileItemProps {
    projectId: number;

    koName: string;
    enName: string;

    email: string;
    instagram: string;
    link: string;

    profileImg: string;
    projectImg: string;

    projectTitle: string[];
}

export const ProfileItem = (props: ProfileItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    return (
        <TransitionGroup>
            <ProfileItemStyles.Wrapper active={isOpen} onClick={handleToggle}>
                <ProfileItemStyles.Container>
                    <Text size="s">{props.koName}</Text>
                    <Text size="s">{props.enName}</Text>
                </ProfileItemStyles.Container>
            </ProfileItemStyles.Wrapper>
            {isOpen && (
                <CSSTransition timeout={250} classNames="profile">
                    <ProfileDetail {...props} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};
