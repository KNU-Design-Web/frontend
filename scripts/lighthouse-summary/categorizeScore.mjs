export default function categorizeScore(metric, value) {
    switch (metric) {
        case "first-contentful-paint":
            if (value <= 1800) return "Good";
            if (value <= 3000) return "Needs Improvement";
            return "Poor";
        case "largest-contentful-paint":
            if (value <= 2500) return "Good";
            if (value <= 4000) return "Needs Improvement";
            return "Poor";
        case "speed-index":
            if (value <= 3400) return "Good";
            if (value <= 5800) return "Needs Improvement";
            return "Poor";
        case "cumulative-layout-shift":
            if (value <= 0.1) return "Good";
            if (value <= 0.25) return "Needs Improvement";
            return "Poor";
        case "total-blocking-time":
            if (value <= 200) return "Good";
            if (value <= 600) return "Needs Improvement";
            return "Poor";
        case "interactive":
            if (value <= 3800) return "Good";
            if (value <= 7300) return "Needs Improvement";
            return "Poor";
        default:
            return "Unknown";
    }
}
