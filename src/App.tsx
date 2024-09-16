import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export default function App() {
    return (
        <>
            <Global styles={[GlobalStyle]} />
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </>
    );
}
