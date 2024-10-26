import categorizeScore from "./categorizeScore.mjs";

export default function extractPerformanceMetrics(
    lighthouseReport,
    keys = [
        "first-contentful-paint",
        "largest-contentful-paint",
        "speed-index",
        "cumulative-layout-shift",
        "total-blocking-time",
        "interactive",
    ],
) {
    const { finalUrl, fetchTime, audits } = lighthouseReport;

    const summary = {
        url: finalUrl,
        time: fetchTime,
        metrics: {},
    };

    keys.forEach((key) => {
        const { title, numericValue } = audits[key];
        summary.metrics[title] = {
            value: numericValue,
            status: categorizeScore(key, numericValue),
        };
    });
    return summary;
}
