// src/components/Layout/Layout.jsx
import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const triggerRef = useRef(null);

  useEffect(() => {
    const isMainPage = location.pathname === "/";
    let trigger;

    if (isMainPage) {
      // Изначально скрываем хедер и футер, если находимся вверху страницы
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY === 0) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      // Используем GSAP ScrollTrigger для отслеживания скролла
      trigger = ScrollTrigger.create({
        trigger: ".introSection", // Убедитесь, что этот класс применен к вашему элементу
        start: "bottom top",
        onEnter: () => {
          setIsHeaderVisible(true);
        },
        onLeaveBack: () => {
          setIsHeaderVisible(false);
        },
      });
    } else {
      // На других страницах хедер и футер всегда видимы
      setIsHeaderVisible(true);
    }

    // Очистка при размонтировании
    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      <Header isVisible={isHeaderVisible} />
      <main>{children}</main>
      <Footer isVisible={isHeaderVisible} />
    </div>
  );
};

export default Layout;
