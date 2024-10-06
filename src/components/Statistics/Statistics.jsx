// src/components/Statistics/Statistics.js
import React from "react";
import { Row, Col, Card } from "antd";
import {
  CheckCircleOutlined,
  TeamOutlined,
  CarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styles from "./Statistics.module.scss";

const statistics = [
  { icon: <CheckCircleOutlined />, label: "Выполненных работ", value: "1000+" },
  { icon: <TeamOutlined />, label: "Сотрудников в штате", value: "25+" },
  { icon: <CarOutlined />, label: "Машин в автопарке", value: "210+" },
  { icon: <ClockCircleOutlined />, label: "Лет на рынке", value: "11" },
];

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Row justify="center" gutter={[16, 16]}>
        {statistics.map((stat, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card
              hoverable
              className={styles.statCard}
              bodyStyle={{ textAlign: "center" }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <h3 className={styles.value}>{stat.value}</h3>
              <p className={styles.label}>{stat.label}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Statistics;
