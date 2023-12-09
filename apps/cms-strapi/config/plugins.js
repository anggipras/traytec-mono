module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("ADMIN_JWT_SECRET"),
    },
  },
  seo: {
    enabled: true,
  },
  editorjs: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-react-editorjs",
  },
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        // { name: "icon", type: "string", label: "icon_url", enabled: true },
        // {
        //   name: "link_type",
        //   label: "link_type",
        //   type: "select",
        //   options: ["text", "icon", "icon_and_text"],
        //   enabled: true,
        // },
      ],
      // contentTypes: ["api::produkt.produkt", "api::industrie.industrie"],
      // contentTypesNameFields: {
      //   "api::produkt.produkt": ["titel"],
      //   "api::industrie.industrie": ["titel"],
      // },
      // contentTypesPopulate: {
      //   "api::faq-category.faq-category": ["faqs"],
      //   "api::faq.faq": [],
      //   "api::product-collection.product-collection": ["products"],
      //   "api::product.product": [],
      //   "api::single-page.single-page": [],
      //   "api::study-category.study-category": ["studies"],
      //   "api::study.study": [],
      // },
      // pathDefaultFields: {
      //   "api::produkt.produkt": ["slug"],
      //   "api::industrie.industrie": ["slug"],
      // },
      allowedLevels: 3,
      gql: {
        // navigationItemRelated: [
        //   "FaqCategory",
        //   "Faq",
        //   "ProductCollection",
        //   "Product",
        //   "SinglePage",
        //   "StudyCategory",
        //   "Study",
        // ],
      },
    },
  },
  graphql: {
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
  upload: {
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
