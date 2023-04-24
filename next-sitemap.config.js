const { url } = require('./site-config')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: url,
  generateRobotsTxt: true,
}
