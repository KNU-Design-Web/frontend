import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

if (import.meta.env.DEV) {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    );
}
if (import.meta.env.PROD) {
    ReactDOM.hydrateRoot(
        document.getElementById("root") as Element,
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    );
}
