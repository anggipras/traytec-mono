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
      // contentTypes: [
      //   "api::faq-category.faq-category",
      //   "api::faq.faq",
      //   "api::product-collection.product-collection",
      //   "api::product.product",
      //   "api::single-page.single-page",
      //   "api::study-category.study-category",
      //   "api::study.study",
      // ],
      // contentTypesNameFields: {
      //   "api::faq-category.faq-category": ["title"],
      //   "api::faq.faq": ["question"],
      //   "api::product-collection.product-collection": ["title"],
      //   "api::product.product": ["title"],
      //   "api::single-page.single-page": ["title"],
      //   "api::study-category.study-category": ["title"],
      //   "api::study.study": ["title"],
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
      //   "api::faq-category.faq-category": ["handle"],
      //   "api::faq.faq": ["handle"],
      //   "api::product-collection.product-collection": ["handle"],
      //   "api::product.product": ["handle"],
      //   "api::single-page.single-page": ["handle"],
      //   "api::study-category.study-category": ["handle"],
      //   "api::study.study": ["handle"],
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
});
