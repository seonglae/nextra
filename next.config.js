module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
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
