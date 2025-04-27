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
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="android-chrome"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest.json" />
      </Head>
      <main
        className={`${montserrat.variable} ${notoSansJP.variable} font-noto bg-bg_primary text-dark w-full min-h-screen`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
