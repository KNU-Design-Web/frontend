import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const HOST_NAME = "https://www.knud2024.com";
const SITEMAP_PATH = "./public/sitemap.xml";

const links = [
    { url: "/?section=home", changefreq: "never", priority: 0.8 },
    { url: "/?section=about", changefreq: "never", priority: 0.6 },
    { url: "/?section=project", changefreq: "yearly", priority: 1.0 },
    { url: "/?section=profile", changefreq: "yearly", priority: 0.8 },
    { url: "/?section=archive", changefreq: "never", priority: 0.6 },
];

const projectIds = Array.from({ length: 22 }, (_, i) => i);

projectIds.forEach((id) => {
    links.push({
        url: `/?section=project&id=${id}`,
        changefreq: "yearly",
        priority: 0.8,
    });
});

const sitemap = new SitemapStream({ hostname: HOST_NAME });
const writeStream = createWriteStream(SITEMAP_PATH);

sitemap.pipe(writeStream);

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
    console.log("✅ sitemap.xml generated!");
});
