import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedText from "src/compornents/AnimatedText";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import { getBlogList, getCategoryList } from "src/libs/microcms";

export default function Blog({ data, category }) {
  const [blogs, setBlogs] = useState(data);
  const [offset, setOffset] = useState(data.length);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const observerRef = useRef();

  const fetchMore = useCallback(async () => {
    if (loading || isEnd) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?offset=${offset}&limit=10`);
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
  }, [offset, loading, isEnd]);

  // IntersectionObserverで最下部に来たら fetchMore
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

  return (
    <>
      <CommonLayout>
        <MainLayout className="py-20">
          <AnimatedText text="Keep Learning, Keep Blogging" />
          <ul className="max-w-2xl mx-auto pb-8 flex flex-wrap gap-2 md:gap-3 justify-center">
            {category.map((category) => (
              <li
                key={category.id}
                className="btn-base text-sm md:text-base bg-bg_primary text-dark hover:shadow-lg"
              >
                <Link href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            {blogs.map((blog) => (
              <div key={blog.id} className="relative">
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
      </CommonLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getBlogList({ limit: 10 });
  const categoryData = await getCategoryList();

  return {
    props: {
      data: data.contents,
      category: categoryData.contents,
    },
  };
};
