// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../prettier.config.cjs');

module.exports = {
    ...baseConfig,
    singleQuote: true,
    trailingComma: 'all',
};
