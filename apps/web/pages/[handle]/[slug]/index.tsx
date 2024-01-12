import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  GetIndustryQuery,
  GetIndustrySlugQuery,
  GetJobQuery,
  GetJobSlugQuery,
  IndustrieEntity,
  JobEntity,
  Query,
} from "@/generated/graphql";
import {
  GetIndustryDocument,
  GetIndustrySlugDocument,
  GetJobDocument,
  GetJobSlugDocument,
} from "@/generated/graphql";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";

interface SlugInfo {
  params: { handle: ""; slug: string };
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

const SlugPage = ({ slugData }) => {
  const slugQueryData = slugData as Query;

  if (slugQueryData.jobs?.data.length) {
    const slugDetailData = slugData as GetJobQuery;
    return (
      <>
        {slugDetailData.jobs?.data?.length && (
          <div className="medium:pb-32.5">
            {slugDetailData.jobs?.data.map((val, idx) => (
              <div key={idx}>{renderDynamicContent(val)}</div>
            ))}
          </div>
        )}
      </>
    );
  } else if (slugQueryData.industrien?.data.length) {
    const slugDetailData = slugData as GetIndustryQuery;
    return (
      <>
        {slugDetailData.industrien?.data?.length && (
          <div className="medium:pb-32.5">
            {slugDetailData.industrien?.data.map((val, idx) => (
              <div key={idx}>{renderDynamicContent(val)}</div>
            ))}
          </div>
        )}
      </>
    );
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const jobDataSlug = await fetchJobDetailSlug();
    const jobDataSlugData = jobDataSlug as JobEntity[];
    const industryDataSlug = await fetchIndustryDetailSlug();
    const industryDataSlugData = industryDataSlug as IndustrieEntity[];

    const paths: SlugInfo[] = [];
    jobDataSlugData.forEach((dt) => {
      paths.push({
        params: { handle: "", slug: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: "", slug: dtLocal.attributes?.slug ?? "" },
          locale: dtLocal.attributes?.locale ?? "",
        });
      });
    });
    industryDataSlugData.forEach((dt) => {
      paths.push({
        params: { handle: "", slug: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: "", slug: dtLocal.attributes?.slug ?? "" },
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

  let slugData: Query;
  if (jobDataResponse.jobs?.data?.length) {
    slugData = jobData?.data;
  } else if (industryDataResponse.industrien?.data?.length) {
    slugData = industryData?.data;
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
    revalidate: 1800,
  };
};

export default SlugPage;
