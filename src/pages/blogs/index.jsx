import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import BackToTopButton from "src/compornents/BackToTopButton";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Meta from "src/compornents/Meta";
import useScrollRestoration from "src/hooks/useScrollRestoration";
import { getBlogList, getCategoryList } from "src/libs/microcms";
import useBlogStore from "src/store/useBlogStore";

export default function Blog({ data, category }) {
  const observerRef = useRef();
  const [loading, setLoading] = useState(false);
  useScrollRestoration("scrollY");

  const { blogs, offset, isEnd, initBlogs, addBlogs, initialized } =
    useBlogStore();

  // 初回のみストアに初期データをセット
  useEffect(() => {
    if (!initialized && blogs.length === 0 && data.length > 0) {
      initBlogs(data);
    }
  }, [data, blogs.length, initBlogs]);

  // 無限スクロール：データ追加取得
  const fetchMore = useCallback(async () => {
    if (loading || isEnd) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/blogs?offset=${offset}&limit=10`);
      const newBlogs = await res.json();
      addBlogs(newBlogs);
    } catch (error) {
      console.error("ブログの追加取得に失敗:", error);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, isEnd, addBlogs]);

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

  // ボタンクリックでトップにスクロールする関数
  function ScrollToTopButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズにスクロール
    });
  }

  return (
    <>
      <Meta
        title={"学習ブログ記事一覧"}
        description={
          "プログラミング初心者の私がフロントエンドエンジニアになるために、試行錯誤しながら０から学んできたことをアウトプットしていくブログです。"
        }
      />
      <CommonLayout>
        <MainLayout className="py-20">
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
            {loading ? (
              <p>Loading...</p>
            ) : isEnd ? (
              <div className="flex gap-2 items-center">
                <p>すべての記事を表示し終わりました。</p>
                <button
                  className="border-b-2 border-blue hover:shadow-lg"
                  onClick={ScrollToTopButton}
                >
                  トップへ戻る
                </button>
              </div>
            ) : null}
          </div>
          <BackToTopButton />
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
    revalidate: 30,
  };
};
