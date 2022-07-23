/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://nextjs-tsweb3.netlify.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}

export default config