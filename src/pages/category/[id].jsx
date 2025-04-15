import Link from "next/link";
import Footer from "src/compornents/Footer";
import { AriIcon, TagIcon } from "src/compornents/Icons";
import MainLayout from "src/compornents/layout/MainLayout";
import { client, getCategoryDetail, getCategoryList } from "src/libs/microcms";

const CategoryPage = ({ blog, category }) => {
  const tagList = category.tag ?? [];

  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
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
        <MainLayout className="py-20 min-h-screen border-b-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mx-auto inline-block w-full font-bold font-mont text-5xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-16">
              {category.name}
            </h1>

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
      <MainLayout className="py-20 min-h-screen">
        <h1 className="mx-auto inline-block w-full font-bold font-mont text-5xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-16">
          {category.name}
        </h1>
        {/* タグ一覧表示 */}
        <ul className="flex flex-wrap justify-center gap-2 mb-12">
          {tagList.map((tag) => (
            <li key={tag.id}>
              <Link legacyBehavior href={`/tag/${tag.id}`}>
                <a className="tag-base">
                  <TagIcon className="w-4 mr-1" />
                  {tag.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {blog.map((blog) => (
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
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default CategoryPage;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await getCategoryList();
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: "blocking" };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const category = await getCategoryDetail(id);
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      category,
      blog: data.contents,
    },
  };
};
