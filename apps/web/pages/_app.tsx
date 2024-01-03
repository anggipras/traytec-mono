import "styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { appWithTranslation } from "next-i18next";
import App from "next/app";
import Layout from "@/modules/layout/templates";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  FormularEntityResponseCollection,
  GetLocalesQuery,
  GetPageHandleQuery,
  SeiteEntity,
} from "@/generated/graphql";
import {
  GetFormDocument,
  GetLocalesDocument,
  GetPageHandleDocument,
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
    };
    footer?: {
      salesForm: FormularEntityResponseCollection;
    };
  };
}

const MyApp = ({
  Component,
  pageProps,
  navigationData,
}: ExtendedAppProps & AppOwnProps) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Layout initialData={navigationData}>
      <Component {...pageProps} />
    </Layout>
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

const fetchSalesForm = async () => {
  const apolloClient = getApolloClient();
  const result = await apolloClient.query({
    query: GetFormDocument,
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

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps> => {
  const { locale } = context.ctx;
  const ctx = await App.getInitialProps(context);

  try {
    const localesDataResult = await fetchLocalesStatic();
    const salesFormResult = await fetchSalesForm();
    const salesFormData = salesFormResult.data
      .formulare as FormularEntityResponseCollection;

    const localeHandlePage = await fetchSinglePageHandle(locale ?? "de");
    const localesData: GetLocalesQuery = localesDataResult.data;
    const localeHandleData = localeHandlePage as SeiteEntity[];

    const navigationData = {
      navbar: {
        localeList: localesData,
        localeHandle: localeHandleData,
      },
      footer: {
        salesForm: salesFormData,
      },
    };

    return { ...ctx, navigationData };
  } catch (error) {
    console.error("[ERROR] :: Failed to fetch navigation data", error);
    return { ...ctx, navigationData: undefined };
  }
};

export default appWithTranslation(MyApp);
