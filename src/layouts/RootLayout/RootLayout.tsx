import { Outlet } from "react-router-dom";
import { RootLayoutWrapper } from "./RootLayout.style";

export const RootLayout = () => {
    return (
        <RootLayoutWrapper>
            <Outlet />
        </RootLayoutWrapper>
    );
};
