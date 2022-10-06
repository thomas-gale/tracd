import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import config from "../env/config.json";
import { store } from "../state/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>{config.NAME}</title>
        <meta name="description" content={config.DESCRIPTION} />
      </Head>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
}

export default MyApp;
