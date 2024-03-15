const path = require("path");

const i18nConfig = {
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    localePath: path.resolve("./public/locales"),
    // reloadOnPrerender: true,
    // localeDetection: false,
  },
};

module.exports = i18nConfig;
