import { BrowserRouter } from "react-router-dom";

import { SectionRouter } from "./Router";
import { Banner } from "./layouts/Banner/Banner";
import { fontStyles } from "./styles/fonts";
import { globalStyles } from "./styles/global";
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
