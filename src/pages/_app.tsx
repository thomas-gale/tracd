import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { config } from "../env/config";
import { store } from "../state/store";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <Component data-theme="tracd" {...pageProps} />
        </ReduxProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
