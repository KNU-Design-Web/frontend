import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";

export const preRender = ({ path }: { path: string }) => {
    return renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>,
    );
};
