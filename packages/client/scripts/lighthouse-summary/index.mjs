import fs from "fs";
import path from "path";

import calculateAverageMetrics from "./calculateAverageMetrics.mjs";
import extractPerformanceMetrics from "./extractPerformanceMetrics.mjs";

const defaultKeys = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "speed-index",
    "cumulative-layout-shift",
    "total-blocking-time",
    "interactive",
];

function main() {
    const lighthouseReportDir = path.resolve("./reports");

    const totalReports = {};

    console.log("Calculating Average Performance Metrics...");
    fs.readdirSync(lighthouseReportDir).forEach((file) => {
        if (file === "manifest.json") return;

        const report = JSON.parse(fs.readFileSync(path.resolve(lighthouseReportDir, file), "utf8"));
        const performanceMetrics = extractPerformanceMetrics(report, defaultKeys);

        if (!totalReports[performanceMetrics.url]) {
            totalReports[performanceMetrics.url] = [];
        }
        totalReports[performanceMetrics.url].push(performanceMetrics);
    });

    const averageReports = calculateAverageMetrics(totalReports);
    const time = new Date()
        .toLocaleString("en-US", { timeZone: "Asia/Seoul" })
        .replace(/[\,-]/g, "")
        .replace(/\s/g, "_")
        .replace(/\//g, "-");

    if (!fs.existsSync(path.resolve("temp"))) fs.mkdirSync(path.resolve("temp"));

    const outputName = `${time}.json`;
    const outputPath = path.resolve("temp", outputName);
    fs.writeFileSync(outputPath, JSON.stringify(averageReports));

    console.log(`Writing Summary File to ${outputPath}`);
}
main();
