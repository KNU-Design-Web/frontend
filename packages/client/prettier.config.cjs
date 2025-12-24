const baseConfig = require("../../prettier.config.cjs");

module.exports = {
    ...baseConfig,

    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^react",
        "<THIRD_PARTY_MODULES>",

        "^(@/core)(.*)$",
        "^(@/global)(.*)$",
        "^(@/modules)(.*)$",
        "^(@/pages)(.*)$",

        "^(.*)/(.*)$",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: false,
};
