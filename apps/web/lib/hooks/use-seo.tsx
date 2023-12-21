import { useMemo } from "react";
import type { ComponentSharedSeo, Maybe } from "@/generated/graphql";

export const useSeo = (seo: Maybe<ComponentSharedSeo>) => {
  return useMemo(() => {
    if (!seo) {
      return {
        title: undefined,
        description: undefined,
        image: undefined,
        canonicalUrl: undefined,
      };
    }

    return {
      title: seo?.meta_title,
      description: seo?.meta_description,
      image:
        seo?.meta_image?.data?.attributes?.formats?.thumbnail?.url ??
        seo?.meta_image?.data?.attributes?.formats?.small?.url ??
        seo?.meta_image?.data?.attributes?.formats?.medium?.url,
      canonicalUrl: seo?.canonical_URL,
    };
  }, [seo]);
};
