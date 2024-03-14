import "styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { appWithTranslation } from "next-i18next";
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/modules/layout/templates";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  GetCookieModalQuery,
  GetLocalesQuery,
  GetPageHandleQuery,
  GetSingleTypesQuery,
  SeiteEntity,
  SeitenEinstellung,
} from "@/generated/graphql";
import {
  GetCookieModalDocument,
  GetLocalesDocument,
  GetPageHandleDocument,
  GetSingleTypesDocument,
} from "@/generated/graphql";

// Define an interface for components that have a getLayout property
interface ComponentWithLayout {
  getLayout?: (component: JSX.Element) => JSX.Element;
}

// Extend the NextComponentType with new interface
type ExtendedAppProps = AppProps & {
  Component: React.ComponentType & ComponentWithLayout;
};

interface AppOwnProps {
  navigationData?: {
    navbar?: {
      localeList?: GetLocalesQuery;
      localeHandle: SeiteEntity[];
      singleType: SeitenEinstellung;
    };
    footer?: SeitenEinstellung;
    cookie?: GetCookieModalQuery;
  };
}

const MyApp = ({
  Component,
  pageProps,
  navigationData,
}: ExtendedAppProps & AppOwnProps) => {
  const queryClient = new QueryClient();

  if (Component.getLayout) {
    return (
      <QueryClientProvider client={queryClient}>
        {Component.getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout initialData={navigationData}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

const fetchLocalesStatic = async () => {
  const apolloClient = getApolloClient();
  const result = await apolloClient.query({
    query: GetLocalesDocument,
  });

  if (result.errors) {
    throw new Error(
      `GraphQL Error: ${result.errors.map((e) => e.message).join(", ")}`
    );
  }

  return result;
};

const fetchSinglePageHandle = async (locale: string) => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetPageHandleDocument,
    variables: {
      filters: {
        slug: {
          notNull: true,
        },
      },
      locale,
    },
  });

  const singlePageHandleData = data as GetPageHandleQuery;

  return singlePageHandleData?.seiten?.data;
};

const fetchSingleTypes = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetSingleTypesDocument,
  });

  const singleTypesData = data as GetSingleTypesQuery;
  return singleTypesData.seitenEinstellung;
};

const fetchCookieData = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetCookieModalDocument,
  });

  return data as GetCookieModalQuery;
};

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps> => {
  const { locale } = context.ctx;
  const ctx = await App.getInitialProps(context);

  try {
    const localesDataResult = await fetchLocalesStatic();
    const localeHandlePage = await fetchSinglePageHandle(locale ?? "de");
    const localesData: GetLocalesQuery = localesDataResult.data;
    const localeHandleData = localeHandlePage as SeiteEntity[];
    const singleTypesResult = await fetchSingleTypes();
    const cookieDataResult = await fetchCookieData();

    const navigationData = {
      navbar: {
        localeList: localesData,
        localeHandle: localeHandleData,
        singleType: singleTypesResult?.data?.attributes as SeitenEinstellung,
      },
      footer: singleTypesResult?.data?.attributes as SeitenEinstellung,
      cookie: cookieDataResult,
    };

    return { ...ctx, navigationData };
  } catch (error) {
    console.error("[ERROR] :: Failed to fetch navigation data", error);
    return { ...ctx, navigationData: undefined };
  }
};

export default appWithTranslation(MyApp);
