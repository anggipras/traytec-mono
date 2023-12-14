module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("ADMIN_JWT_SECRET"),
    },
  },
  navigation: {
    enabled: true,
    config: {
      allowedLevels: 3,
      gql: {
        enabled: true,
        navigationItemRelated: ["Seiten", "Produkte", "Industrien"],
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 16,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  seo: {
    enabled: true,
  },
  editorjs: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-react-editorjs",
  },
  upload: {
    enabled: true,
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),
        secret: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_BUCKET"),
        directory: env("DO_SPACE_DIRECTORY"),
      },
    },
  },
});
