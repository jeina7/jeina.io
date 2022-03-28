const withPreact = require("next-plugin-preact");

const config = {
  reactStrictMode: true,
}

module.exports = withPreact(config);
