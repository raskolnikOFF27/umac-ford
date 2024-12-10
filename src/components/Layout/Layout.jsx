// src/components/Layout/Layout.jsx

import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import siteLogo from "../../assets/icons/logo.svg";
import {
  HeaderVisibilityContext,
  HeaderVisibilityProvider,
} from "../../context/HeaderVisibilityContext";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const { setIsHeaderVisible } = useContext(HeaderVisibilityContext);

  // Инициализируем showSplash на основе localStorage
  const [showSplash, setShowSplash] = useState(() => {
    if (isMainPage) {
      const splashCompleted =
        localStorage.getItem("splashCompleted") === "true";
      return !splashCompleted;
    }
    return false;
  });
  const splashScreenRef = useRef(null);

  useLayoutEffect(() => {
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
                delay: 1.5,
                y: "-100%",
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  setShowSplash(false);
                  localStorage.setItem("splashCompleted", "true");
                  // Прокрутка к началу страницы после закрытия сплэш-скрина
                  window.scrollTo(0, 0);
                },
              });
            },
          }
        );
      } else {
        // Если сплэш-скрин уже показан, прокрутить к верху
        window.scrollTo(0, 0);
      }

      // Создаём ScrollTrigger для управления видимостью Header
      trigger = ScrollTrigger.create({
        trigger: "#introSection",
        start: "bottom top",
        onEnter: () => {
          setIsHeaderVisible(true);
        },
        onLeaveBack: () => {
          setIsHeaderVisible(false);
        },
        // markers: true, // Включите для отладки
      });

      ScrollTrigger.refresh();
    } else {
      setIsHeaderVisible(true);
    }

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, [isMainPage, setIsHeaderVisible]);

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
    <>
      <Header />
      {showSplash && (
        <div className={styles.splashScreen} ref={splashScreenRef}>
          <div className={styles.logoContainer}>
            <img src={siteLogo} alt="Логотип" className={styles.logo} />
          </div>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

const LayoutWithProvider = ({ children }) => (
  <HeaderVisibilityProvider>
    <Layout>{children}</Layout>
  </HeaderVisibilityProvider>
);

export default LayoutWithProvider;
