/* eslint-disable import/no-named-as-default-member -- disable no-named-as-default-member */
import { useQuery } from "react-query";
import qs from "qs";
import type { GetStrapiPluginNavigationParams } from "../types/strapi-plugin-navigation-types";
import clientConfig from "../../../client.config";

export const useStrapiPluginNavigationTree = (
  idOrSlug: string,
  query?: GetStrapiPluginNavigationParams
) => {
  const { data, ...rest } = useQuery({
    queryKey: ["strapi-plugin-navigation", query],
    queryFn: () => {
      let url = `${clientConfig.serverBaseUrl}/navigation/render/${idOrSlug}`;

      const query_ = {
        ...query,
        type: "TREE",
      };

      const params = qs.stringify(query_);

      if (params) {
        url = `${url}?${params}`;
      }

      return fetch(url).then((res) => res.json());
    },
  });

  if (data) {
    return { navigation: data, ...rest } as const;
  }

  return { ...rest } as const;
};
