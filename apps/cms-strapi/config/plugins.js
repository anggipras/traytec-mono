module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("ADMIN_JWT_SECRET"),
    },
  },
  navigation: {
    enabled: true,
  },
  editorjs: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-react-editorjs",
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
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_ACCESS_KEY_ID"),
        secret: env("AWS_SECRET_ACCESS_KEY"),
        amazon: `https://email.${env("AWS_REGION")}.amazonaws.com`,
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
        testAddress: env("EMAIL_DEFAULT_TEST"),
      },
    },
  },
});
