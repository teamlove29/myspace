// next.config.js
require("dotenv").config();
const withImages = require("next-images");
module.exports = withImages({
  env: {
    API_URL: process.env.API_URL,
    API_URL_EDITFRONT: process.env.API_URL_EDITFRONT,
    API_URL_CHECKDISPLAY: process.env.API_URL_CHECKDISPLAY,
    API_URL_CHECKUSER: process.env.API_URL_CHECKUSER,
    AVATARHOLDER: process.env.AVATARHOLDER,
    SECRET_KEY: process.env.SECRET_KEY,
  },
  distDir: "nextjs",
  webpack(config, options) {
    return config;
  },
});
