import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],
  offset: 0,
  isEnd: false,
  scrollY: 0,
  initialized: false, // ← 初期化フラグ追加

  // 初回取得時に実行する（SSGデータセット）
  initBlogs: (initialBlogs) =>
    set({
      blogs: initialBlogs,
      offset: initialBlogs.length,
      isEnd: initialBlogs.length === 0,
      initialized: true, // ← 初期化フラグを立てる
    }),

  // 無限スクロール時に実行する（新しい記事を追加）
  addBlogs: (newBlogs) =>
    set((state) => ({
      blogs: [...state.blogs, ...newBlogs],
      offset: state.offset + newBlogs.length,
      isEnd: newBlogs.length === 0,
    })),
}));

export default useBlogStore;
