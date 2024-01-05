import { useQuery } from "react-query";
import { GetStrapiPluginNavigationParams } from "../types/strapi-plugin-navigation-types";

import clientConfig from "../../../client.config";
import qs from "qs";

export const useStrapiPluginNavigationTree = (
  idOrSlug: string,
  query?: GetStrapiPluginNavigationParams
) => {
  const { data, ...rest } = useQuery({
    queryKey: ["strapi-plugin-navigation", query],
    queryFn: () => {
      let url = `${clientConfig.serverBaseUrl}/navigation/render/${idOrSlug}`;

      let query_ = {
        ...query,
        type: "TREE",
      };

      const params = qs.stringify(query_);

      if (params) {
        url = `${url}?${params}`;
      }

      console.log("url >> ", url);

      return fetch(url).then((res) => res.json());
    },
  });

  if (data) {
    return { navigation: data, ...rest } as const;
  }

  return { ...rest } as const;
};
