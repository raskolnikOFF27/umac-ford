import React from "react";
import { Typography, Card, Row, Col } from "antd";
import { CarOutlined, SettingOutlined, ToolOutlined } from "@ant-design/icons";
import styles from "./Services.module.scss";

const { Title } = Typography;

const services = [
  {
    icon: <CarOutlined className={styles.icon} />,
    title: "Диагностика",
    description:
      "Комплексная диагностика автомобиля для выявления всех неисправностей.",
  },
  {
    icon: <SettingOutlined className={styles.icon} />,
    title: "Ремонт",
    description: "Профессиональный ремонт любых систем автомобиля.",
  },
  {
    icon: <ToolOutlined className={styles.icon} />,
    title: "ТО",
    description:
      "Регулярное техническое обслуживание для поддержания автомобиля в отличном состоянии.",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <Title level={2} className={styles.title}>
        Наши услуги
      </Title>
      <Row gutter={[16, 16]} justify="center">
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
              <p>{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
