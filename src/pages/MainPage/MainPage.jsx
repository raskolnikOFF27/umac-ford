// src/pages/MainPage/MainPage.jsx
import React, { useRef, useEffect } from "react";
import { Button, ConfigProvider, Input, Form } from "antd";
import { ReactTyped } from "react-typed";
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
  const mapRef = useRef(null); // Добавляем реф для карты

  const { registerRef, scrollTo } = useScroll();
  const location = useLocation();

  useEffect(() => {
    // Регистрация рефов
    registerRef("about", aboutRef);
    registerRef("services", servicesRef);
    registerRef("reviews", reviewsRef);
    registerRef("map", mapRef); // Регистрируем реф карты
    registerRef("form", formRef);

    // Проверка хэша в URL
    const hash = window.location.hash.substring(1); // Удаление '#'
    if (hash) {
      setTimeout(() => {
        scrollTo(hash);
      }, 0);
    }

    // Проверка состояния навигации для прокрутки
    if (location.state && location.state.scrollTo) {
      scrollTo(location.state.scrollTo);
      // Очистка состояния после прокрутки
      window.history.replaceState({}, document.title);
    }
  }, [registerRef, scrollTo, location]);

  const scrollToForm = () => {
    scrollTo("form");
  };

  return (
    <div className={styles.appContainer}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FF5722",
            colorSecondary: "#D32F2F",
            colorBgBase: "#121212",
            colorTextBase: "#FFFFFF",
          },
        }}
      >
        <section
          className={styles.banner}
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>
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
                style={{ color: "#ff5722" }}
                smartBackspace
                showCursor
                cursorChar="|"
              />
            </h1>
            <Button
              type="primary"
              className={styles.bannerButton}
              size="large"
              onClick={scrollToForm}
            >
              Записаться в сервис
            </Button>
          </div>
        </section>
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
          {/* Секция карты */}
          <section ref={mapRef} className={styles.mapWrapper} id="map">
            <MapWithRoute />
          </section>
          {/* Форма записи на сервис */}
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
                  { required: true, message: "Пожалуйста, введите ваше имя" },
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
                  { required: true, message: "Пожалуйста, введите ваш email" },
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
  );
};

export default MainPage;
