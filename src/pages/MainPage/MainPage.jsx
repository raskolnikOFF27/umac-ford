// src/pages/MainPage/MainPage.jsx
import React, { useRef, useEffect, useState } from "react";
import { Button, ConfigProvider, Input, Form } from "antd";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import MapWithRoute from "../../components/MapWithRoute/MapWithRoute";
import mainPageStyles from "./MainPage.module.scss";
import { useScroll } from "../../context/ScrollContext";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const formRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const mapRef = useRef(null);
  const mainContentRef = useRef(null);
  const introSectionRef = useRef(null);

  const [isContentVisible, setIsContentVisible] = useState(false);

  const { registerRef, scrollTo } = useScroll();
  const location = useLocation();

  useEffect(() => {
    registerRef("about", aboutRef);
    registerRef("services", servicesRef);
    registerRef("reviews", reviewsRef);
    registerRef("map", mapRef);
    registerRef("form", formRef);

    // Изначально скрываем Header, Footer и основной контент
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    gsap.set([header, footer, mainContentRef.current], {
      opacity: 0,
      y: -20,
    });

    // Анимация появления при прокрутке
    ScrollTrigger.create({
      trigger: introSectionRef.current,
      start: "bottom top",
      onEnter: () => {
        gsap.to([header, footer], { opacity: 1, y: 0, duration: 0.5 });
        gsap.to(mainContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => setIsContentVisible(true),
        });
      },
      onLeaveBack: () => {
        gsap.to([header, footer], { opacity: 0, y: -20, duration: 0.5 });
        gsap.to(mainContentRef.current, { opacity: 0, y: -20, duration: 0.5 });
        setIsContentVisible(false);
      },
    });

    // Скролл к нужной секции при загрузке страницы
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollTo(hash);
      }, 0);
    }

    if (location.state && location.state.scrollTo) {
      scrollTo(location.state.scrollTo);
      window.history.replaceState({}, document.title);
    }
  }, [registerRef, scrollTo, location]);

  const scrollToForm = () => {
    scrollTo("form");
  };

  const scrollToAbout = () => {
    scrollTo("about");
  };

  const scrollToServices = () => {
    scrollTo("services");
  };

  const scrollToMap = () => {
    scrollTo("map");
  };

  return (
    <div>
      {/* Начальная заставка — полноширинный блок */}
      <section className={mainPageStyles.introSection} ref={introSectionRef}>
        <div className={mainPageStyles.introContent}>
          <div className={mainPageStyles.navigationButtons}>
            <button
              className={mainPageStyles.navButton}
              onClick={scrollToAbout}
            >
              О нас
            </button>
            <button
              className={mainPageStyles.navButton}
              onClick={scrollToServices}
            >
              Услуги
            </button>
            <button className={mainPageStyles.navButton} onClick={scrollToMap}>
              Контакты
            </button>
          </div>

          <h1 className={mainPageStyles.mainHeading}>
            Привет! Это всё в Юмакфорд&nbsp;
            <span className={mainPageStyles.typewriter}>
              <Typewriter
                words={[
                  "Автосервис",
                  "Аренда авто",
                  "Автомойка",
                  "Автозапчасти",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <button className={mainPageStyles.introButton} onClick={scrollToForm}>
            Записаться в сервис
          </button>
        </div>
      </section>

      {/* Основной контент — ограниченный по ширине */}
      <div
        ref={mainContentRef}
        className={`${isContentVisible ? mainPageStyles.contentVisible : ""}`}
        style={{ opacity: 0, transform: "translateY(-20px)" }}
      >
        <div className={mainPageStyles.appContainer}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#9D0208",
                colorSecondary: "#D32F2F",
                colorBgBase: "#121212",
                colorTextBase: "#FFFFFF",
              },
            }}
          >
            <main>
              <section ref={aboutRef} id="about">
                <About />
              </section>
              <section ref={servicesRef} id="services">
                <Services />
              </section>
              <section ref={reviewsRef} id="reviews">
                <Reviews />
              </section>
              <section
                ref={mapRef}
                className={mainPageStyles.mapWrapper}
                id="map"
              >
                <MapWithRoute />
              </section>
              <section
                ref={formRef}
                className={mainPageStyles.formWrapper}
                id="form"
              >
                <h2 className={mainPageStyles.formTitle}>
                  Записаться в сервис
                </h2>
                <Form
                  name="service_form"
                  className={mainPageStyles.serviceForm}
                  layout="vertical"
                >
                  <Form.Item
                    name="name"
                    label="Ваше имя"
                    rules={[
                      {
                        required: true,
                        message: "Пожалуйста, введите ваше имя",
                      },
                    ]}
                  >
                    <Input placeholder="Введите имя" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Ваш телефон"
                    rules={[
                      {
                        required: true,
                        message: "Пожалуйста, введите ваш телефон",
                      },
                    ]}
                  >
                    <Input placeholder="Введите телефон" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Ваш email"
                    rules={[
                      {
                        required: true,
                        message: "Пожалуйста, введите ваш email",
                      },
                    ]}
                  >
                    <Input placeholder="Введите email" />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit">Отправить</Button>
                  </Form.Item>
                </Form>
              </section>
            </main>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
