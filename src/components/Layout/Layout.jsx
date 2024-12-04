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
      const scrollY = window.scrollY || window.pageYOffset;
      setIsHeaderVisible(scrollY > 0);

      // Создаём ScrollTrigger только для главной страницы
      trigger = ScrollTrigger.create({
        trigger: ".introSection",
        start: "bottom top",
        onEnter: () => {
          setIsHeaderVisible(true);
        },
        onLeaveBack: () => {
          setIsHeaderVisible(false);
        },
      });
    } else {
      setIsHeaderVisible(true);
    }

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    // Отключение анимаций и мгновенная прокрутка при смене страницы
    if (location.pathname !== "/") {
      // Сначала мгновенно прокручиваем страницу вверх
      window.scrollTo(0, 0);

      // Ожидаем завершения всех активных анимаций, если они есть, и затем сбрасываем позицию еще раз
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }
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
