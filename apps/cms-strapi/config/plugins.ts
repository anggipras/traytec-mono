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
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACE_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        region: env('DO_SPACE_REGION'),
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
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
