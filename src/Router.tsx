import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectPage from "./pages/project/ProjectPage";
import ProfilePage from "./pages/profile/ProfilePage";
import GuestPage from "./pages/guest/GuestPAge";
import ArchivePage from "./pages/archive/ArchivePage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="project" element={<ProjectPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="guest" element={<GuestPage />} />
                <Route path="archive" element={<ArchivePage />} />
            </Route>
        </Routes>
    );
};
