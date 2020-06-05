// next.config.js
const withImages = require("next-images");
module.exports = withImages({
  distDir: "nextjs",
  webpack(config, options) {
    return config;
  },
});
