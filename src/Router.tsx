import { Route, Routes } from "react-router-dom";

import AboutPage from "@/pages/about/AboutPage";
import ArchivePage from "@/pages/archive/ArchivePage";
import GuestPage from "@/pages/guest/GuestPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import ProjectPage from "@/pages/project/ProjectPage";

import styled from "@emotion/styled";

export const RouterWrapper = styled.div`
    flex: 1;
`;

export const Router = () => {
    return (
        <RouterWrapper>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/guest" element={<GuestPage />} />
                <Route path="/archive" element={<ArchivePage />} />
            </Routes>
        </RouterWrapper>
    );
};
