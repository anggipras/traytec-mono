import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  GetJobQuery,
  GetJobSlugQuery,
  JobEntity,
} from "@/generated/graphql";
import { GetJobDocument, GetJobSlugDocument } from "@/generated/graphql";
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

const SlugPage = ({ jobData }) => {
  const jobDetailData = jobData as GetJobQuery;

  return (
    <>
      {jobDetailData.jobs?.data && jobDetailData.jobs?.data.length > 0 && (
        <div className="medium:pb-32.5">
          {jobDetailData.jobs?.data.map((val, idx) => (
            <div key={idx}>{renderDynamicContent(val)}</div>
          ))}
        </div>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const jobDataSlug = await fetchJobDetailSlug();
    const jobDataSlugData = jobDataSlug as JobEntity[];

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

  if (jobDataResponse.jobs?.data && jobDataResponse.jobs?.data.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      jobData: jobDataResponse,
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
    revalidate: 1800,
  };
};

export default SlugPage;
