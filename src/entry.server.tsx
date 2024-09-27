import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";

export async function preRender({ path }: { path: string }) {
    const html = renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>,
    );
    return { html };
}
