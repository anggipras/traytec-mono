import "styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { appWithTranslation } from "next-i18next";
import App from "next/app";
import Layout from "@/modules/layout/templates";

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
      localeList?: {
        id: number;
        name: string;
        code: string;
        createdAt: string;
        updatedAt: string;
        isDefault: boolean;
      }[];
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

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps> => {
  const ctx = await App.getInitialProps(context);

  try {
    const response = await fetch("https://strapi.traytec.de/api/i18n/locales");
    const i18next = await response.json();
    const navigationData = {
      navbar: {
        localeList: i18next,
      },
    };

    return { ...ctx, navigationData };
  } catch (error) {
    console.error("[ERROR] :: Failed to fetch navigation data", error);
    return { ...ctx, navigationData: undefined };
  }
};

export default appWithTranslation(MyApp);
