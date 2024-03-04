import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  GetIndustryQuery,
  GetIndustrySlugQuery,
  GetJobQuery,
  GetJobSlugQuery,
  GetProductDetailQuery,
  GetProductSlugQuery,
  GetProductsQuery,
  IndustrieEntity,
  JobEntity,
  ProduktEntity,
  ProduktRelationResponseCollection,
  Query,
} from "@/generated/graphql";
import {
  GetIndustryDocument,
  GetIndustrySlugDocument,
  GetJobDocument,
  GetJobSlugDocument,
  GetProductDetailDocument,
  GetProductSlugDocument,
  GetProductsDocument,
} from "@/generated/graphql";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";

interface SlugInfo {
  params: { handle: string; slug: string };
  locale: string;
}

const fetchJobDetailSlug = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetJobSlugDocument,
    variables: {
      pagination: {
        limit: 100,
      },
    },
  });

  const jobDataSlugData = data as GetJobSlugQuery;

  return jobDataSlugData.jobs?.data;
};

const fetchIndustryDetailSlug = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetIndustrySlugDocument,
    variables: {
      pagination: {
        limit: 100,
      },
    },
  });

  const industryDataSlugData = data as GetIndustrySlugQuery;

  return industryDataSlugData.industrien?.data;
};

const fetchProductDetailSlug = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetProductSlugDocument,
    variables: {
      pagination: {
        limit: 100,
      },
    },
  });

  const productDataSlugData = data as GetProductSlugQuery;

  return productDataSlugData.produkte?.data;
};

const fetchJobDetail = (slug: string, locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetJobDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      locale,
    },
  });
};

const fetchIndustryDetail = (slug: string, locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetIndustryDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      locale,
    },
  });
};

const fetchProductDetail = (slug: string, locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetProductDetailDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      locale,
    },
  });
};

const fetchProductsDetail = (locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetProductsDocument,
    variables: {
      locale,
      pagination: {
        page: 1,
        pageSize: 4,
      },
    },
  });
};

const SlugPage = ({ slugData }) => {
  const slugQueryData = slugData as Query;

  if (slugQueryData.jobs?.data.length) {
    const slugDetailData = slugData as GetJobQuery;
    return (
      <div className="medium:pb-32.5">
        {slugDetailData.jobs?.data.map((val, idx) => (
          <div key={idx}>{renderDynamicContent(val)}</div>
        ))}
      </div>
    );
  } else if (slugQueryData?.industrien?.data.length) {
    const slugDetailData = slugData as GetIndustryQuery;
    return (
      <div className="medium:pb-32.5">
        {slugDetailData.industrien?.data.map((val, idx) => (
          <>
            <div key={idx}>{renderDynamicContent(val)}</div>
            {val.attributes?.inhalte &&
              val.attributes?.inhalte.length > 0 &&
              val.attributes.inhalte.map((inhalteIndustry, industryId) => (
                <div key={industryId}>
                  {renderDynamicContent(inhalteIndustry)}
                </div>
              ))}
          </>
        ))}
      </div>
    );
  } else if (slugQueryData.produkte?.data.length) {
    const slugDetailData = slugData as GetProductDetailQuery;
    return (
      <div className="medium:pb-32.5">
        {slugDetailData.produkte?.data[0].attributes?.inhalte?.map(
          (val, idx) => <div key={idx}>{renderDynamicContent(val)}</div>
        )}
      </div>
    );
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const jobDataSlug = await fetchJobDetailSlug();
    const jobDataSlugData = jobDataSlug as JobEntity[];
    const industryDataSlug = await fetchIndustryDetailSlug();
    const industryDataSlugData = industryDataSlug as IndustrieEntity[];
    const productDataSlug = await fetchProductDetailSlug();
    const productDataSlugData = productDataSlug as ProduktEntity[];

    const paths: SlugInfo[] = [];
    jobDataSlugData.forEach((dt) => {
      paths.push({
        params: { handle: "/", slug: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: "/", slug: dtLocal.attributes?.slug ?? "" },
          locale: dtLocal.attributes?.locale ?? "",
        });
      });
    });
    industryDataSlugData.forEach((dt) => {
      paths.push({
        params: { handle: "/", slug: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: "/", slug: dtLocal.attributes?.slug ?? "" },
          locale: dtLocal.attributes?.locale ?? "",
        });
      });
    });
    productDataSlugData.forEach((dt) => {
      paths.push({
        params: { handle: "/", slug: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: "/", slug: dtLocal.attributes?.slug ?? "" },
          locale: dtLocal.attributes?.locale ?? "",
        });
      });
    });

    return {
      paths,
      fallback: "blocking",
    };
  } catch (e) {
    console.error("Failed to get nested slugs:", e);

    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const slug = context.params?.slug as string;

  const jobData = await fetchJobDetail(slug, locale ?? "de");
  const jobDataResponse = jobData?.data as GetJobQuery;

  const industryData = await fetchIndustryDetail(slug, locale ?? "de");
  const industryDataResponse = industryData?.data as GetIndustryQuery;

  const productData = await fetchProductDetail(slug, locale ?? "de");
  const productDataResponse = productData?.data as GetProductDetailQuery;

  let slugData: Query;
  if (jobDataResponse?.jobs?.data?.length) {
    slugData = jobData.data;
  } else if (industryDataResponse?.industrien?.data?.length) {
    if (
      industryDataResponse.industrien?.data &&
      industryDataResponse.industrien?.data.length > 0 &&
      industryDataResponse.industrien?.data[0].attributes?.alle_anzeigen
    ) {
      const productsData = await fetchProductsDetail(locale ?? "de");
      const productsDataList = productsData.data as GetProductsQuery;

      if (
        industryDataResponse.industrien.data[0].attributes.produkte?.data &&
        productsDataList.produkte?.data &&
        productsDataList.produkte?.data.length > 0
      ) {
        const { attributes } = industryDataResponse.industrien.data[0];
        const changedProducts = {
          __typename: "Query",
          industrien: {
            __typename: "IndustrieEntityResponseCollection",
            data: [
              {
                __typename: "IndustrieEntity",
                attributes: {
                  __typename: "Industrie",
                  alle_anzeigen: attributes.alle_anzeigen,
                  beschreibung: attributes.beschreibung,
                  locale: attributes.locale,
                  produkte: productsData.data
                    .produkte as ProduktRelationResponseCollection,
                  slug: attributes.slug,
                  titel: attributes.titel,
                  vorschau: attributes.vorschau,
                  inhalte: attributes.inhalte,
                },
              },
            ],
            meta: productsDataList.produkte.meta,
          },
        };
        industryData.data = changedProducts;
      }
    }
    slugData = industryData?.data;
  } else if (productDataResponse.produkte?.data.length) {
    slugData = productData.data;
  } else {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slugData,
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
    revalidate: 5,
  };
};

export default SlugPage;
