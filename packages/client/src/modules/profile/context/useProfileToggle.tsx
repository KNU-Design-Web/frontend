import { useContext } from "react";

import { ProfileToggleContext } from "./ProfileToggleContext";

export const useProfileToggle = () => {
    const profileToggleContext = useContext(ProfileToggleContext);

    if (!profileToggleContext)
        throw new Error("profileToggleContext 는 ProfileToggleProvider 내부에서 사용되어야 합니다.");

    return profileToggleContext;
};
