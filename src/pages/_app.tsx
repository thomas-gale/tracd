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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
