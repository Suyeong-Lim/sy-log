const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
