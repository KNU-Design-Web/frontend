import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { fontStyles } from "./styles/fonts";
import { globalStyles } from "./styles/global";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <>
            <Global styles={[globalStyles, fontStyles]} />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}
