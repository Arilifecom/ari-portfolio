import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedText from "src/compornents/AnimatedText";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import { getBlogList, getCategoryList } from "src/libs/microcms";
import useBlogStore from "src/store/useBlogStore";

export default function Blog({ data, category }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  const {
    blogs,
    offset,
    isEnd,
    scrollY,
    setScrollY,
    initBlogs,
    addBlogs,
    initialized,
  } = useBlogStore();

  useEffect(() => {
    console.log("初期化状態:", initialized);
    console.log("scrollY:", scrollY);
  }, [initialized, scrollY]);

  //scroll値保存処理
  useEffect(() => {
    const handleRouteChangeStart = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      sessionStorage.setItem("scrollY", currentY);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, setScrollY]);

  // 復元処理（一覧ページに戻ったとき）
  useEffect(() => {
    if (!router.isReady) return; // ルーター準備できてないなら待つ

    const savedY = sessionStorage.getItem("scrollY");
    if (savedY !== null) {
      const y = parseInt(savedY, 10);
      setScrollY(y);
      // Hydration後 & レンダリング後にスクロール
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo(0, y);
        }, 0); // 必要であれば 0 → 50 くらいに増やす
      });
    }
  }, [router.isReady, setScrollY]);

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

  // ページ離脱時にスクロール位置を保存
  useEffect(() => {
    const saveScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("beforeunload", saveScroll);
    return () => {
      saveScroll(); // ページ遷移時にも保存
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, [setScrollY]);

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
    revalidate: 30,
  };
};
