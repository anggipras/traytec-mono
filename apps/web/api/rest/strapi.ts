import axios from "axios";
import { serverBaseUrl } from "@/client.config";

export const sendEmail = (data: any) => {
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${serverBaseUrl}/email`, data)
      .then((dt) => {
        resolve(dt);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
