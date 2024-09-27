import path from "path";

import fs from "fs/promises";

async function GeneratePreRenderedHTML() {
    try {
        console.log("[PRE-RENDER] Reading HTML Template...");
        const HTMLtemplate = await fs.readFile(path.resolve("dist/index.html"), "utf-8");

        console.log("[PRE-RENDER] Pre-Rendering ...");
        const preRender = (await import("./server/entry.server.js")).preRender;
        const preRenderedDOM = await preRender("/");

        const preRenderedHTML = HTMLtemplate.replace("<!-- pre-render -->", preRenderedDOM.html);

        console.log("[PRE-RENDER] Writing Pre-Rendered HTML ...");
        await fs.writeFile(path.resolve("dist/index.html"), preRenderedHTML);

        console.log("[PRE-RENDER] Generate Pre-Rendered HTML Successfully");
    } catch (e) {
        console.error("[PRE-RENDER] Generate Pre-Rendered HTML Failed : ", e);
    }
}

GeneratePreRenderedHTML();
