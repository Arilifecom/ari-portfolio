import Link from "next/link";
import AnimatedText from "src/compornents/AnimatedText";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import { getBlogList } from "src/libs/microcms";

export default function Blog({ data }) {
  return (
    <>
      <CommonLayout>
        <MainLayout>
          <AnimatedText text="Keep Learning, Keep Blogging" />
          {data.map((blog) => (
            <div key={blog.id}>
              <Link legacyBehavior href={`/blogs/${blog.id}`}>
                <a>
                  <h2>{blog.title}</h2>
                  <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                </a>
              </Link>
            </div>
          ))}
        </MainLayout>
      </CommonLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getBlogList();

  return {
    props: {
      data: data.contents,
    },
  };
};
