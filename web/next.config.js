// next.config.js
require("dotenv").config();
const withImages = require("next-images");
module.exports = withImages({
  env: {
    url:process.env.URL,
  },
  distDir: "nextjs",
  webpack(config, options) {
    return config;
  },
});
