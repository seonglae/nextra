const descriptionMd = `
  An opinionated [Next.js](https://nextjs.org) template for your next plate 🍽️
`;

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, "$1")
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

module.exports = {
  title: "Nextplate",
  descriptionMd,
  description,
  url: "https://nextplate.now.sh",
  twitterUsername: "@griko_nibras",
  email: "hello@griko.id",
  socials: {
    GitHub: "https://github.com/grikomsn/nextplate",
    Twitter: "https://twitter.com/griko_nibras",
  },
  themeColor: "#F6E05E",
};
