module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/headers
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: `X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version`,
          },
        ],
      },
    ];
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  // https://nextjs.org/docs/api-reference/next.config.js/rewrites
  async rewrites() {
    return [
      {
        source: "/social.png",
        destination: "/api/social-image",
      },
    ];
  },
};
