// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  publicRuntimeConfig: {
    facebookUrl: process.env.FACEBOOK_PAGE_URL,
    youtubeUrl: process.env.YOUTUBE_PAGE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
