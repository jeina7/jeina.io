import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "~/components";
import "~/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Light.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-ExtraBold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard/Pretendard-Black.woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>

      <ThemeProvider attribute="class">
        <PlausibleProvider domain="jeina.io">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlausibleProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
