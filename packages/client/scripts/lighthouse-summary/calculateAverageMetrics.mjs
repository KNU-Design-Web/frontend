export default function calculateAverageMetrics(totalReports) {
    const averageReports = {};

    for (const url in totalReports) {
        const metricsArray = totalReports[url];
        const sumMetrics = {};
        const count = metricsArray.length;

        metricsArray.forEach(({ metrics }) => {
            for (const key in metrics) {
                if (!sumMetrics[key]) {
                    sumMetrics[key] = { value: 0, statusCounts: { Good: 0, NeedsImprovement: 0, Poor: 0 } };
                }
                sumMetrics[key].value += metrics[key].value;
                sumMetrics[key].statusCounts[metrics[key].status]++;
            }
        });

        averageReports[url] = {};
        for (const key in sumMetrics) {
            const averageValue = sumMetrics[key].value / count;
            const statusCounts = sumMetrics[key].statusCounts;
            const averageStatus =
                statusCounts.Good >= statusCounts.NeedsImprovement && statusCounts.Good >= statusCounts.Poor
                    ? "Good"
                    : statusCounts.NeedsImprovement >= statusCounts.Poor
                      ? "Needs Improvement"
                      : "Poor";

            averageReports[url][key] = {
                averageValue,
                averageStatus,
            };
        }
    }

    return averageReports;
}
