const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n,
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
