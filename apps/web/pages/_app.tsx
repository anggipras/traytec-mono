import "styles/globals.css";
import type { AppProps } from "next/app";
// import { Inter, Poppins } from "next/font/google";
import Layout from "../modules/layout/templates";

// Define an interface for components that have a getLayout property
interface ComponentWithLayout {
  getLayout?: (component: JSX.Element) => JSX.Element;
}

// Extend the NextComponentType with new interface
type ExtendedAppProps = AppProps & {
  Component: React.ComponentType & ComponentWithLayout;
};

function MyApp({ Component, pageProps }: ExtendedAppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
