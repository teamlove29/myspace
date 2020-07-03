// next.config.js
require("dotenv").config();
const withImages = require("next-images");
module.exports = withImages({
  env: {
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
  },
  distDir: "nextjs",
  webpack(config, options) {
    return config;
  },
});
