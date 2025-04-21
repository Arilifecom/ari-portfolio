// hooks/useScrollRestoration.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollRestoration = (key = "scrollY") => {
  const router = useRouter();

  // スクロール位置の保存
  useEffect(() => {
    const handleRouteChangeStart = () => {
      const currentY = window.scrollY;
      sessionStorage.setItem(key, currentY);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, key]);

  // スクロール位置の復元
  useEffect(() => {
    const savedY = sessionStorage.getItem(key);
    if (savedY !== null) {
      const y = parseInt(savedY, 10);
      if (!isNaN(y)) {
        window.scrollTo(0, y);
      }
      sessionStorage.removeItem(key);
    }
  }, [key]);
};

export default useScrollRestoration;
