module.exports = {
    ci: {
        collect: {
            staticDistDir: "./dist",
            url: ["/?section=home", "/?section=about", "/?section=project", "/?section=profile", "/?section=guestbook"],
            numberOfRuns: 3,
        },
        upload: {
            target: "filesystem",
            outputDir: "./lighthouse-report",
            reportFilenamePattern: "knud2024-%%PATHNAME%%-%%DATETIME%%.%%EXTENSION%%",
        },
    },
};
