import type {AppProps} from "next/app";
import Head from "next/head";
import {globalStyles} from "styles/globalStyles";

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="f11boUvGIzjbYwQVuaCieN-J4vcA_BxJuO_S54WPf-U"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
