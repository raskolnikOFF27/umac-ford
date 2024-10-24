// src/components/About/About.jsx

import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./About.module.scss";
import image from "../../assets/images/umak-team.jpg"; // Убедитесь, что путь к изображению корректен

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Row
        justify="center"
        align="stretch" // Изменено на "stretch" для одинаковой высоты колонок
        gutter={[32, 32]}
        className={styles.aboutContent}
      >
        <Col xs={24} md={12} className={styles.col}>
          <div className={styles.aboutText}>
            <Title level={2} className={styles.title}>
              О компании
            </Title>
            <Paragraph className={styles.paragraph}>
              ООО "Юмакфорд" — надежный автосервис с многолетним опытом работы.
              Мы предлагаем полный спектр услуг по обслуживанию и ремонту
              автомобилей..Наша команда специалистов гарантирует высокое
              качество работ и индивидуальный подход к каждому клиенту.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12} className={styles.col}>
          <div className={styles.imageWrapper}>
            <img src={image} alt="Наша команда" className={styles.aboutImage} />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
