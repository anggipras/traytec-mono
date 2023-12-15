import "styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { appWithTranslation } from "next-i18next";
import App from "next/app";
import Layout from "@/modules/layout/templates";
import { getApolloClient } from "@/lib/with-apollo";
import type { GetLocalesQuery } from "@/generated/graphql";
import { GetLocalesDocument } from "@/generated/graphql";

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
    };
    footer?: [];
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

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps> => {
  const ctx = await App.getInitialProps(context);

  try {
    const localesDataResult = await fetchLocalesStatic();
    const localesData: GetLocalesQuery = localesDataResult.data;

    const navigationData = {
      navbar: {
        localeList: localesData,
      },
    };

    return { ...ctx, navigationData };
  } catch (error) {
    console.error("[ERROR] :: Failed to fetch navigation data", error);
    return { ...ctx, navigationData: undefined };
  }
};

export default appWithTranslation(MyApp);
