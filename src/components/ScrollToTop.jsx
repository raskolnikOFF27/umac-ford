// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутка к началу страницы при изменении маршрута
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
