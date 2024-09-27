import fs from "fs";
import path from "path";
import { createServer } from "vite";

async function GeneratePreRenderedHTML() {
    const server = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
    });

    let HTMLtemplate = fs.readFileSync(path.resolve("../index.html"), "utf-8");
    HTMLtemplate = await server.transformIndexHtml("/", HTMLtemplate);

    const preRender = (await server.ssrLoadModule("../src/entry.server.tsx")).render;
    const preRenderedDOM = await preRender("/", undefined);

    const preRenderedHTML = HTMLtemplate.replace("<!-- pre-render -->", preRenderedDOM);
    fs.writeFileSync(path.resolve("./index.html"), preRenderedHTML, "utf-8");

    await server.close();
}

GeneratePreRenderedHTML();
