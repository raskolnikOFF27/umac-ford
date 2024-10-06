import React, { useState } from "react";
import { Typography, Card, Button, Row, Col } from "antd";
import styles from "./Reviews.module.scss";
import image1 from "../../assets/images/review-car-1.png";
import image2 from "../../assets/images/review-car-2.png";
import image3 from "../../assets/images/review-car-3.png";
import image4 from "../../assets/images/review-car-4.png";
import image5 from "../../assets/images/review-car-5.png";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";

const { Title } = Typography;

const reviews = [
  {
    name: "Иван Иванов",
    content:
      "Отличный сервис! Быстро и качественно отремонтировали мой Ford. Очень рекомендую!",
    image: image1,
  },
  {
    name: "Мария Петрова",
    content:
      "Мой автомобиль после ремонта как новый! Ремонт сделали быстро, а сотрудники очень профессиональны.",
    image: image2,
  },
  {
    name: "Алексей Смирнов",
    content:
      'Сервис "Юмак Форд" действительно профессиональный. Буду обращаться только сюда!',
    image: image3,
  },
  {
    name: "Ольга Кузнецова",
    content: "Ремонт был сделан качественно, спасибо за профессионализм!",
    image: image4,
  },
  {
    name: "Виктор Сидоров",
    content: "Очень доволен сервисом! Всем рекомендую.",
    image: image5,
  },
  // Добавляй больше карточек по необходимости
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4; // Количество отображаемых карточек

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.header}>
        <Title level={2} className={styles.title}>
          Избранные работы
        </Title>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.prevButton}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <ArrowLeftIcon className={styles.arrow_left_icon} />
          </Button>

          <Button
            className={styles.nextButton}
            onClick={handleNext}
            aria-label="Next"
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <Row gutter={16} className={styles.cardsRow}>
          {reviews
            .slice(currentIndex, currentIndex + visibleCards)
            .map((review, index) => (
              <Col
                key={index}
                xs={24} // 1 карточка на экране <576px
                sm={12} // 2 карточки на экране 576px-768px
                md={8} // 3 карточки на экране 768px-992px
                lg={6} // 4 карточки на экране >992px
              >
                <Card className={styles.card}>
                  <img
                    src={review.image}
                    alt={`Автомобиль клиента ${review.name}`}
                    className={styles.carImage}
                  />
                  <p className={styles.content}>"{review.content}"</p>
                  <p className={styles.name}>
                    <strong>- {review.name}</strong>
                  </p>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
};

export default Reviews;
