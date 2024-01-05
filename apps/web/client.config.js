const environment = process.env.NEXT_PUBLIC_VERCEL_ENVIRONMENT || "development";
// const environment = "production"

const defaultConfig = {
  clientBaseUrl: "http://localhost:3000",
  graphqlUrl: "http://127.0.0.1:1337/graphql",
  serverBaseUrl: "http://127.0.0.1:1337/api",
  environment,
};

const productionConfig = {
  clientBaseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_STRAPI_URL_PROD,
  serverBaseUrl: process.env.NEXT_PUBLIC_API_STRAPI_URL,
  environment,
};

const clientConfig =
  environment === "production" || environment === "staging"
    ? productionConfig
    : defaultConfig;

console.log("[LOG] ::: clientConfig: ", clientConfig);

module.exports = clientConfig;
