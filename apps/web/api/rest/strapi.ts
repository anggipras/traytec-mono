// import axios from "axios";
import { serverBaseUrl } from "@/client.config";

export const sendEmail = (data: any) => {
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${serverBaseUrl}/email`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((dt) => {
        console.log(dt);
        resolve(dt);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });

    // axios lib would be removed later
    // axios
    //   .post(`${serverBaseUrl}/email`, data)
    //   .then((dt) => {
    //     resolve(dt);
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
  });
};
