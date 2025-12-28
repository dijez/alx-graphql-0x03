import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary"


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ApolloProvider client={client}>
    //   <Component {...pageProps} />
    // </ApolloProvider>

    <ErrorBoundary>
      <Component {...pageProps}/>
    </ErrorBoundary>
  )
}