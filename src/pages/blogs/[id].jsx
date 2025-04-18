import Footer from "src/compornents/Footer";
import { getBlogDetail } from "src/libs/microcms";
import formatRichText from "src/libs/utils";
import styles from "src/styles/blogDetail.module.css";
import "highlight.js/styles/atom-one-dark.css";
import PrevButton from "src/compornents/PrevButton";

export default function BlogDetail({ data }) {
  return (
    <>
      <PrevButton />
      <main className={styles.main}>
        <div className="pt-10"></div>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <p>{new Date(data.publishedAt).toLocaleDateString()}</p>
        <div className={styles.meta}></div>
        <picture>
          <source type="image/webp" media="(max-width: 640px)" />
        </picture>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getBlogDetail();

  const paths = data.contents.map((content) => `/blogs/${content.id}`);

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await getBlogDetail(id);

  return {
    props: {
      data,
    },
  };
};
