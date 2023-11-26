import "styles/globals.css";
import type { AppProps } from "next/app";

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

  return <Component {...pageProps} />;
}

export default MyApp;
