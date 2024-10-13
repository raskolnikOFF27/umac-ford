// src/components/Services/Services.jsx

import React from "react";
import { Typography, Card, Row, Col } from "antd";
import styles from "./Services.module.scss";

// Импорт собственных SVG-иконок как React-компонентов
import { ReactComponent as DiagnosticsIcon } from "../../assets/icons/car-diagnostics.svg";
import { ReactComponent as RepairIcon } from "../../assets/icons/repair.svg";
import { ReactComponent as MaintenanceIcon } from "../../assets/icons/technical-review.svg";
import { ReactComponent as CarWashIcon } from "../../assets/icons/car-wash.svg";
import { ReactComponent as AutoPartsIcon } from "../../assets/icons/car-parts.svg";
import { ReactComponent as CarRentalIcon } from "../../assets/icons/car-rental.svg";

const { Title } = Typography;

const services = [
  {
    icon: <DiagnosticsIcon className={styles.customIcon} />,
    title: "Диагностика",
    description:
      "Комплексная диагностика автомобиля для выявления всех неисправностей.",
  },
  {
    icon: <RepairIcon className={styles.customIcon} />,
    title: "Ремонт",
    description: "Профессиональный ремонт любых систем автомобиля.",
  },
  {
    icon: <MaintenanceIcon className={styles.customIcon} />,
    title: "ТО",
    description:
      "Регулярное техническое обслуживание для поддержания автомобиля в отличном состоянии.",
  },
  {
    icon: <CarWashIcon className={styles.customIcon} />,
    title: "Автомойка",
    description:
      "Полная мойка вашего автомобиля с использованием качественных средств.",
  },
  {
    icon: <AutoPartsIcon className={styles.customIcon} />,
    title: "Автозапчасти",
    description:
      "Широкий ассортимент оригинальных запчастей для вашего автомобиля.",
  },
  {
    icon: <CarRentalIcon className={styles.customIcon} />,
    title: "Аренда авто",
    description: "Прокат автомобилей на любой срок с удобными условиями.",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <Title level={2} className={styles.title}>
        Наши услуги
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className={styles.card}
              cover={<div className={styles.iconContainer}>{service.icon}</div>}
            >
              <Title level={4} className={styles.cardTitle}>
                {service.title}
              </Title>
              <p className={styles.cardDescription}>{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
