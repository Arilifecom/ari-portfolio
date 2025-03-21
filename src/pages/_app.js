import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
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
      <main
        className={`${montserrat.className} ${notoSansJP.className} bg-bg_primary w-full min-h-screen`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
