const descriptionMd = `
  An opinionated [Next.js](https://nextjs.org) template for your next plate 🍽️
`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Nextplate',
  descriptionMd,
  description,
  url: 'https://nextplate.now.sh',
  twitterUsername: '@SeonglaeC',
  email: 'seongle3737@gmail.com',
  socials: {
    GitHub: 'https://github.com/seonglae',
    Twitter: 'https://twitter.com/SeonglaeC',
  },
  themeColor: '#46c0aE',
}
