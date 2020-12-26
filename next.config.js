module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/social.png",
        destination: "/api/social-image",
      },
    ];
  },
};
