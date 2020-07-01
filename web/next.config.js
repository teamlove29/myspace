// next.config.js
require("dotenv").config();
const withImages = require("next-images");
module.exports = withImages({
  env: {
    api_url: process.env.API_URL,
    secret_key: process.env.SECRET_KEY,
  },
  distDir: "nextjs",
  webpack(config, options) {
    return config;
  },
});
