import React, { useRef } from "react";
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

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
