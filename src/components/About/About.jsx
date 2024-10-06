// src/components/About/About.js
import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./About.module.scss";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <div className={styles.aboutText}>
            <Title level={2} className={styles.title}>
              О компании
            </Title>
            <Paragraph className={styles.paragraph}>
              "Юмак Форд" — надежный автосервис с многолетним опытом работы. Мы
              предлагаем полный спектр услуг по обслуживанию и ремонту
              автомобилей Ford. Наша команда профессионалов гарантирует высокое
              качество работ и индивидуальный подход к каждому клиенту.
            </Paragraph>
          </div>
        </Col>
        {/* <Col xs={24} md={16}>
          <div className={styles.imageWrapper}>
            <img
              src="https://via.placeholder.com/600x400?text=Car+1"
              alt="Автомобиль в автосервисе"
              className={styles.carImage}
            />
            <img
              src="https://via.placeholder.com/600x400?text=Car+2"
              alt="Автомобиль на ремонте"
              className={styles.carImage}
            />
          </div>
        </Col> */}
      </Row>
    </section>
  );
};

export default About;
