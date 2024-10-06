import React from "react";
import { Button, ConfigProvider } from "antd";
import Statistics from "../../components/Statistics/Statistics";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import styles from "./MainPage.module.scss";
import bannerImage from "../../assets/images/Background.png"; // Ваше изображение

const MainPage = () => {
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
              Премиальное обслуживание вашего автомобиля
            </h1>
            <Button
              type="primary"
              className={styles.bannerButton}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
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
        </main>
      </div>
    </ConfigProvider>
  );
};

export default MainPage;
