module.exports = {
    ci: {
        collect: {
            staticDistDir: "./dist",
            url: [
                "/?section=home",
                "/?section=about",
                "/?section=project",
                "/?section=profile",
                "/?section=guestbook",
                ...Array.from({ length: 22 }, (_, i) => `/?section=project&id=${i + 1}`),
            ],
            numberOfRuns: 3,
        },
        upload: {
            target: "filesystem",
            outputDir: "./reports",
            reportFilenamePattern: "knud2024%%PATHNAME%%%%DATETIME%%.json",
        },
    },
};
