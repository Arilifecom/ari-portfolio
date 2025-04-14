import Footer from "src/compornents/Footer";
import { getBlogDetail } from "src/libs/microcms";
import styles from "src/styles/blogDetail.module.css";

export default function BlogDetail({ data }) {
  return (
    <>
      <div className="px-7 md:px-20 lg:px-32 py-5">
        <a href="/blogs" className="btn-base text-xl md:text-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L5 12L11 18M18 6L12 12L18 18"
              stroke="#E6E6E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </a>
      </div>
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
          dangerouslySetInnerHTML={{ __html: data.content }}
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
