import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import siteLogo from "../../assets/icons/logo.svg"; // Убедитесь, что путь правильный

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  // Инициализируем isHeaderVisible: скрыт на главной странице, видим на остальных
  const [isHeaderVisible, setIsHeaderVisible] = useState(() => !isMainPage);

  // Состояния для сплэш-скрина
  const [showSplash, setShowSplash] = useState(false);
  const splashScreenRef = useRef(null);

  useEffect(() => {
    let trigger;

    if (isMainPage) {
      const splashCompleted =
        localStorage.getItem("splashCompleted") === "true";

      if (!splashCompleted) {
        setShowSplash(true);

        // Анимация сплэш-скрина
        gsap.fromTo(
          splashScreenRef.current,
          { y: "-100%" },
          {
            y: "0%",
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(splashScreenRef.current, {
                delay: 1.5, // Задержка перед закрытием
                y: "-100%",
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  setShowSplash(false);
                  localStorage.setItem("splashCompleted", "true");
                },
              });
            },
          }
        );
      }

      // Создаём ScrollTrigger только для главной страницы
      trigger = ScrollTrigger.create({
        trigger: "#introSection", // Используем ID
        start: "bottom top", // Когда нижняя часть introSection достигает верхней части окна
        onEnter: () => {
          setIsHeaderVisible(true);
        },
        onLeaveBack: () => {
          setIsHeaderVisible(false);
        },
        // markers: true, // Включите для отладки
      });

      // Обновляем ScrollTrigger после рендера
      ScrollTrigger.refresh();
    } else {
      setIsHeaderVisible(true);
    }

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, [isMainPage]);

  useEffect(() => {
    // Очистка флага при перезагрузке страницы
    const handleBeforeUnload = () => {
      localStorage.removeItem("splashCompleted");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className={styles.layout}>
      {/* Заголовок */}
      <Header isVisible={isHeaderVisible} />

      {/* Сплэш-скрин */}
      {showSplash && (
        <div className={styles.splashScreen} ref={splashScreenRef}>
          <div className={styles.logoContainer}>
            <img src={siteLogo} alt="Логотип" className={styles.logo} />
          </div>
        </div>
      )}

      <main>{children}</main>
      <Footer isVisible={isHeaderVisible} />
    </div>
  );
};

export default Layout;
