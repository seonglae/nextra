const descriptionMd = `Nuxt Typescript Template`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Seongland',
  descriptionMd,
  description,
  url: 'https://www.seongland.com',
  twitterUsername: '@SeonglaeC',
  email: 'seongle3737@gmail.com',
  socials: {
    GitHub: 'https://github.com/seongland/seongland-ing',
    Twitter: 'https://twitter.com/SeonglaeC',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}
