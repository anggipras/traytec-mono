const { google } = require("googleapis");
import axios from "axios";

const base64Credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64;
const ACCOUNT_ID = process.env.GOOGLE_MY_BUSINESS_ACCOUNT_ID;
const LOCATION_ID = process.env.GOOGLE_MY_BUSINESS_LOCATION_ID;

export default {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: async ({ strapi }) => {
      try {
        // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).

        // const reviews = await getReviews();
        // console.log(reviews);

        // await syncGoogleBusinessReviews();

        async function syncGoogleBusinessReviews() {
          const jsonCredentials = Buffer.from(
            base64Credentials,
            "base64",
          ).toString("utf-8");
          const credentials = JSON.parse(jsonCredentials);

          const auth = new google.auth.GoogleAuth({
            credentials: credentials,
            scopes: [
              "https://www.googleapis.com/auth/business.manage",
              "https://www.googleapis.com/auth/plus.business.manage",
            ],
          });

          // const auth = new google.auth.GoogleAuth({
          //   credentials: credentials,
          //   scopes: ["https://www.googleapis.com/auth/business.manage"],
          // });

          const authClient = await auth.getClient();

          const url =
            `https://mybusiness.googleapis.com/v4/accounts/` +
            `${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;

          const res = await authClient.request({
            url,
          });

          console.log(res.data);

          // console.log("Google", google);

          // const myBusiness = google.mybusiness({
          //   version: "v4",
          //   auth: authClient,
          // });
          // console.log(myBusiness.accounts.locations);

          // const response = await  mybusiness.accounts.locations.list({
          //   auth: authClient,
          //   parent: `accounts/${ACCOUNT_ID}`,
          // });

          // const response = await mybusiness.accounts.locations.reviews.list({
          //   auth: authClient,
          //   parent: `accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}`,
          // });

          // const reviews = response.data;
        }

        // async function getReviews() {
        //   const token = await authenticate();

        //   const url =
        //     `https://mybusiness.googleapis.com/v4/accounts/` +
        //     `${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;
        //   const resp = await axios.get(url, {
        //     headers: {
        //       authorization: `Bearer ${token}`,
        //     },
        //   });
        //   return resp.data.reviews;
        // }

        // async function authenticate() {
        //   const jsonCredentials = Buffer.from(
        //     base64Credentials,
        //     "base64",
        //   ).toString("utf-8");
        //   const credentials = JSON.parse(jsonCredentials);

        //   const scopes = ["https://www.googleapis.com/auth/business.manage"];

        //   const jwt = new google.auth.JWT({
        //     email: credentials.client_email,
        //     key: credentials.private_key,
        //     scopes,
        //   });

        //   const resp = await jwt.authorize();
        //   return resp.access_token.replace(/\.{2,}/g, "");
        // }
      } catch (error) {
        console.log(error);
      }
    },
    options: {
      rule: "* * * * * *",
    },
  },
};
