import Head from "next/head";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "styles/global.scss";
import "prism-themes/themes/prism-nord.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta
          name="google-site-verification"
          content="mtpCkcTYyH51v6yPau9iEwCiZt1INbiJxwk212qmkIk"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
