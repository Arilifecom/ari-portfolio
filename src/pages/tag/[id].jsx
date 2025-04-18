import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "src/compornents/Footer";
import { AriIcon } from "src/compornents/Icons";
import MainLayout from "src/compornents/layout/MainLayout";
import PrevButton from "src/compornents/PrevButton";
import { client, getTagDetail, getTagList } from "src/libs/microcms";

const TagPage = ({ blog: initialBlog, tag }) => {
  const [blogs, setBlogs] = useState(initialBlog);
  const [offset, setOffset] = useState(initialBlog.length);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(initialBlog.length < 10);
  const observerRef = useRef();

  const fetchMore = useCallback(async () => {
    if (loading || isEnd) return;
    setLoading(true);

    try {
      const res = await fetch(
        `/api/tagBlogs?tagId=${tag.id}&offset=${offset}&limit=10`
      );
      const newBlogs = await res.json();

      if (newBlogs.length === 0) {
        setIsEnd(true);
      } else {
        setBlogs((prev) => [...prev, ...newBlogs]);
        setOffset((prev) => prev + newBlogs.length);
      }
    } catch (error) {
      console.error("ブログの追加取得に失敗:", error);
    } finally {
      setLoading(false);
    }
  }, [tag.id, offset, loading, isEnd]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && !isEnd) {
          fetchMore();
        }
      },
      { threshold: 1.0 }
    );

    const target = observerRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [fetchMore, loading, isEnd]);

  if (blogs.length === 0) {
    return (
      <>
        <PrevButton />
        <MainLayout className="py-20 min-h-screen border-b-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="title-large-bk pb-9">該当する記事はありません</h1>
            <AriIcon className="w-28 md:w-32" />
          </div>
        </MainLayout>
        <Footer className="border-t-0" />
      </>
    );
  }

  return (
    <>
      <PrevButton />
      <MainLayout className="py-20 min-h-screen">
        <h1 className="font-mont font-bold text-center text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-16">
          {tag.name}
        </h1>
        <div>
          {blogs.map((blog) => (
            <div key={blog.id} className="relative z-0">
              <Link legacyBehavior href={`/blogs/${blog.id}`}>
                <a className="card-base flex items-center justify-between pt-4 pb-4 mb-4 rounded-8">
                  <h2 className="title-large-bk text-sm md:text-base mr-4">
                    {blog.title}
                  </h2>
                  <p className="title-large-blue text-sm md:text-base">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                </a>
              </Link>
              <div className="absolute top-1 -right-1 -z-10 w-[100%] h-[104%] rounded-8 bg-[#C6C4C7]" />
            </div>
          ))}
          <div ref={observerRef} className="h-10" />
          {loading && <p>Loading...</p>}
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default TagPage;

export const getStaticPaths = async () => {
  const data = await getTagList();
  const paths = data.contents.map((content) => `/tag/${content.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const tag = await getTagDetail(id);

  const data = await client.get({
    endpoint: "blogs",
    queries: {
      filters: `tag[contains]${id}`,
      limit: 10,
    },
  });

  return {
    props: {
      tag,
      blog: data.contents,
    },
    revalidate: 30,
  };
};
