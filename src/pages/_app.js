import Head from "next/head";
import "src/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-mont",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} ${notoSansJP.variable} font-noto bg-bg_primary text-dark w-full min-h-screen`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
