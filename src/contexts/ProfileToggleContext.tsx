import { createContext, useState } from "react";

export interface ProfileToggleContext {
    openId: number | null;
    setOpenId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ProfileToggleContext = createContext<ProfileToggleContext | null>(null);

export const ProfileToggleProvider = ({ children }: { children?: React.ReactNode }) => {
    const [openId, setOpenId] = useState<number | null>(null);

    return <ProfileToggleContext.Provider value={{ openId, setOpenId }}>{children}</ProfileToggleContext.Provider>;
};
