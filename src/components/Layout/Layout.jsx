// src/components/Layout/Layout.jsx
import React, { useRef, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import gsap from "gsap";

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Изначально скрываем Header и Footer
    gsap.set([headerRef.current, footerRef.current], { opacity: 0, y: -20 });

    // Анимация появления при запуске (мы будем управлять этим из MainPage)
  }, []);

  return (
    <div className={styles.layout}>
      <Header ref={headerRef} />
      <main className={styles.mainContent}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Layout;
