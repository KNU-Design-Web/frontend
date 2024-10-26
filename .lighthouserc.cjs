module.exports = {
    ci: {
        collect: {
            staticDistDir: "./dist",
            url: [
                "/?section=home",
                "/?section=about",
                "/?section=project",
                "/?section=project&id=12",
                "/?section=profile",
                "/?section=guestbook",
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
