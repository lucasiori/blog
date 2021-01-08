const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless',
  esModule: true,
  fileExtensions: ['png'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generateSiteMap')
    }

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
