import React, { useRef, useEffect } from "react";
import { Button, ConfigProvider, Input, Form } from "antd";
import { ReactTyped } from "react-typed";
import Statistics from "../../components/Statistics/Statistics";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import styles from "./MainPage.module.scss";
import bannerImage from "../../assets/images/Background.png"; // Ваше изображение

const MainPage = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null); // Реф для контейнера карты
  const isMapInitialized = useRef(false); // Флаг для отслеживания инициализации карты

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Проверяем, доступен ли ymaps (загружен ли скрипт)
    if (window.ymaps && !isMapInitialized.current) {
      window.ymaps.ready(initMap);
      isMapInitialized.current = true; // Устанавливаем флаг после инициализации
    }

    function initMap() {
      if (mapRef.current && window.ymaps) {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [56.776364, 60.564156], // Координаты для Екатеринбурга
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"], // Добавляем контролы по необходимости
        });

        const placemark = new window.ymaps.Placemark(
          [56.776364, 60.564156],
          {
            hintContent: "ЮмакФорд",
            balloonContent:
              "Автосервис, автотехцентр<br>ул. Академика Вонсовского, 1Ж, Екатеринбург",
          },
          {
            preset: "islands#icon",
            iconColor: "#FF5722",
          }
        );

        map.geoObjects.add(placemark);
      }
    }
  }, []); // Пустой массив зависимостей гарантирует вызов один раз

  return (
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
      <div className={styles.appContainer}>
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
          <Statistics />
          <About />
          <Services />
          <Reviews />

          {/* Добавление карты */}
          <section className={styles.mapWrapper}>
            <div
              id="map"
              ref={mapRef}
              style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            ></div>
          </section>

          <section ref={formRef} className={styles.formWrapper}>
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
      </div>
    </ConfigProvider>
  );
};

export default MainPage;
