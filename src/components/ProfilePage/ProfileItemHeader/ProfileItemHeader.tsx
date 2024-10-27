import { memo } from "react";

import * as ProfileItemHeaderStyles from "./ProfileItemHeader.style";
import { Text } from "@/common/components/Text/Text";

export interface ProfileItemHeaderProps {
    koName: string;
    enName: string;
    isOpen: boolean;
    handleToggle: () => void;
}

export const ProfileItemHeader = memo(({ koName, enName, isOpen, handleToggle }: ProfileItemHeaderProps) => {
    return (
        <ProfileItemHeaderStyles.Wrapper active={isOpen} onClick={handleToggle}>
            <ProfileItemHeaderStyles.Container>
                <Text size="s">{koName}</Text>
                <Text size="s">{enName.toUpperCase()}</Text>
            </ProfileItemHeaderStyles.Container>
        </ProfileItemHeaderStyles.Wrapper>
    );
});
