import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation, useNavigate } from "react-router-dom";

import "@/apps/styles/Profile.transition.css";
import "@/apps/styles/Profile.transition.css";
import "@/apps/styles/Section.transition.css";

import { Banner } from "@/common/components/Banner/Banner";

import { SectionRouter } from "./Router";
import { fontStyles } from "./styles/fonts";
import { globalStyles } from "./styles/global";
import { Global } from "@emotion/react";

ReactGA.initialize("G-89YSQNPKY1");

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.search === "") navigate("/?section=home");
    }, [location, navigate]);

    return (
        <>
            <Global styles={[globalStyles, fontStyles]} />
            <SectionRouter />
            <Banner />
        </>
    );
}
