import { getBlogDetail } from "src/libs/microcms";
import styles from "src/styles/blogDetail.module.css";

export default function BlogDetail({ data }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}></div>
      <picture>
        <source type="image/webp" media="(max-width: 640px)" />
      </picture>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await getBlogDetail();

  const paths = data.contents.map((content) => `/blogs/${content.id}`);

  return { paths, fallback: false };
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
