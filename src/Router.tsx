import AboutPage from "@/pages/about/AboutPage";
import ArchivePage from "@/pages/archive/ArchivePage";
import GuestPage from "@/pages/guest/GuestPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import ProjectPage from "@/pages/project/ProjectPage";

import { SectionRoute } from "./layouts/Section/SectionRoute";

export const SectionRouter = () => {
    return (
        <>
            <SectionRoute param="home" navContent="2024 KNUD GRADUATION EXHIBITION" element={<HomePage />} />
            <SectionRoute param="about" navContent="ABOUT" element={<AboutPage />} />
            <SectionRoute param="project" navContent="PROJECT" element={<ProjectPage />} />
            <SectionRoute param="profile" navContent="PROFILE" element={<ProfilePage />} />
            <SectionRoute param="guest" navContent="GUEST BOOK" element={<GuestPage />} />
            <SectionRoute param="archive" navContent="ARCHIVE" element={<ArchivePage />} />
        </>
    );
};
