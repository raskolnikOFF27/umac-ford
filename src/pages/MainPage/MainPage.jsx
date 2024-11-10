// src/pages/MainPage/MainPage.jsx
import React, { useRef, useEffect } from "react";
import { Button, ConfigProvider, Input, Form } from "antd";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import MapWithRoute from "../../components/MapWithRoute/MapWithRoute";
import styles from "./MainPage.module.scss";
import bannerImage from "../../assets/images/Background.png";
import { useScroll } from "../../context/ScrollContext";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const formRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const mapRef = useRef(null);
  const mainContentRef = useRef(null);
  const introSectionRef = useRef(null); // Реф для заставки

  const { registerRef, scrollTo } = useScroll();
  const location = useLocation();

  useEffect(() => {
    registerRef("about", aboutRef);
    registerRef("services", servicesRef);
    registerRef("reviews", reviewsRef);
    registerRef("map", mapRef);
    registerRef("form", formRef);

    // Настройка анимации перехода от заставки к основному контенту
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        // Прокрутка на четверть высоты окна
        gsap.to(mainContentRef.current, { opacity: 1, y: 0, duration: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [registerRef, scrollTo, location]);

  const scrollToForm = () => {
    scrollTo("form");
  };

  return (
    <div>
      {/* Начальная заставка */}
      <section
        className={styles.introSection}
        ref={introSectionRef}
        style={{
          backgroundColor: "#9d0000",
          height: "100vh",
          color: "#FFFFFF",
        }}
      >
        <div className={styles.introContent}>
          <h1>
            <ReactTyped
              strings={[
                "Автосервис",
                "Аренда авто",
                "Автомойка",
                "Автозапчасти",
              ]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
              style={{ color: "#FFFFFF" }}
              smartBackspace
              showCursor
              cursorChar="|"
            />
          </h1>
          <Button
            type="primary"
            className={styles.introButton}
            size="large"
            onClick={scrollToForm}
          >
            Записаться в сервис
          </Button>
        </div>
      </section>

      {/* Основной контент страницы */}
      <div
        ref={mainContentRef}
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <div className={styles.appContainer}>
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
              <section ref={mapRef} className={styles.mapWrapper} id="map">
                <MapWithRoute />
              </section>
              <section ref={formRef} className={styles.formWrapper} id="form">
                <h2 className={styles.formTitle}>Записаться в сервис</h2>
                <Form
                  name="service_form"
                  className={styles.serviceForm}
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
