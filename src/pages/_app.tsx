import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import config from "../env/config.json";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>{config.NAME}</title>
        <meta name="description" content={config.DESCRIPTION} />
        </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
