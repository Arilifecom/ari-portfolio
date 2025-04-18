import { useEffect, useState } from "react";
import { AriIcon, TopIcon } from "src/compornents/Icons";

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
      className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      aria-label="ページトップへ戻る"
    >
      <TopIcon className="w-8" />
      <AriIcon className="w-8 h-8" />
    </button>
  ) : null;
};

export default BackToTopButton;
