const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
})

module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
