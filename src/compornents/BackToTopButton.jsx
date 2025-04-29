import { useEffect, useState } from "react";
import { TopIcon } from "src/compornents/Icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // スクロール位置が300pxを超えたら表示
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed text-xs bottom-9 right-3 p-3 rounded-full  text-white shadow-lg  transition"
      aria-label="ページトップへ戻る"
    >
      <TopIcon className="w-8" />
      TOP
    </button>
  ) : null;
};

export default BackToTopButton;
