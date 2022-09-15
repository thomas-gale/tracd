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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
