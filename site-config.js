const descriptionMd = `Next Chakra UI Typescript Template`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Nextra',
  descriptionMd,
  description,
  url: 'https://nextra-ts.vercel.app',
  twitterUsername: '@SeonglaeC',
  email: 'seongle3737@gmail.com',
  socials: {
    GitHub: 'https://github.com/seonglae/nextra',
    Twitter: 'https://twitter.com/SeonglaeC',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}
