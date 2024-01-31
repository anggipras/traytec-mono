/* eslint-disable @typescript-eslint/ban-ts-comment -- disable ban ts comment for this file only */ 
/* eslint-disable react/display-name -- disable dipslay name for this file only */
import type { IncomingMessage } from "node:http";
import type {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import type { NormalizedCacheObject } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import type {
  NextApiRequestCookies,
  // @ts-expect-error This path is generated at build time and conflicts otherwise
} from "next-server/server/api-utils";
import clientConfig from "@/client.config";

const IS_SERVER = typeof window === "undefined";

export interface ApolloClientContext {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
}

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
};

export const getApolloClient = (
  ctx?: ApolloClientContext | GetStaticPropsContext | GetServerSidePropsContext,
  initialState?: NormalizedCacheObject
) => {
  // @ts-expect-error
  if (ctx?.req) {
    // @ts-expect-error
    const { req } = ctx;
    // Do something with the cookies here, maybe add a header for authentication
    req.cookies;
  }

  const httpLink = createHttpLink({
    uri: clientConfig.graphqlUrl,
    fetch,
  });

  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    link: httpLink,
    cache,
    ssrMode: IS_SERVER,
  });
};
