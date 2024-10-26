import { BrowserRouter } from "react-router-dom";

import { Banner } from "../layouts/Banner/Banner";
import { SectionRouter } from "./Router";
import { fontStyles } from "./styles/fonts";
import { globalStyles } from "./styles/global";
import "@/apps/styles/Profile.transition.css";
import "@/apps/styles/Profile.transition.css";
import "@/apps/styles/Section.transition.css";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <>
            <Global styles={[globalStyles, fontStyles]} />
            <BrowserRouter>
                <SectionRouter />
            </BrowserRouter>
            <Banner />
        </>
    );
}
