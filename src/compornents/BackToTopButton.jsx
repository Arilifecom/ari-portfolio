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
      className="fixed bottom-12 md:bottom-8 right-6 p-3 rounded-full text-white shadow-lg hover:bg-blue/20 transition"
      aria-label="ページトップへ戻る"
    >
      <TopIcon className="w-8" />
      TOP
    </button>
  ) : null;
};

export default BackToTopButton;
