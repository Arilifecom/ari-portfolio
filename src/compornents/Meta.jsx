import Head from "next/head";

export default function Meta({ title, description, image }) {
  const siteTitle = "Ari's Portfolio";
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || "Ari's Portfolio.";
  const metaImage = image || "/arisPortfolio.png";

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
