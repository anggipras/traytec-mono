const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    domains: ["tailwindui.com", "127.0.0.1"],
  },
  i18n,
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
