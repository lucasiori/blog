const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  fileExtensions: ["png"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});