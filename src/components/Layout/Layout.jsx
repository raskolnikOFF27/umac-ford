// src/components/Layout/Layout.jsx
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const isMainPage = location.pathname === "/";

    if (isMainPage) {
      // Изначально скрываем Header и Footer
      gsap.set([headerRef.current, footerRef.current], { opacity: 0, y: -20 });

      // Анимация появления Header и Footer при скролле
      ScrollTrigger.create({
        trigger: ".introSection", // Убедитесь, что этот класс есть на элементе introSection
        start: "bottom top",
        onEnter: () => {
          gsap.to([headerRef.current, footerRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to([headerRef.current, footerRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.5,
          });
        },
      });
    } else {
      // На остальных страницах Header и Footer видимы изначально
      gsap.set([headerRef.current, footerRef.current], { opacity: 1, y: 0 });
    }
  }, [location]);

  return (
    <div className={styles.layout}>
      <Header ref={headerRef} />
      <main>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Layout;
