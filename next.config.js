const withImages = require("next-images");

module.exports = withImages({
    future: {
        webpack5: true,
    },
    webpack(config, options) {
        return config;
    },
});
