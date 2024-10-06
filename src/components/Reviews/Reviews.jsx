import React, { useState, useRef } from "react";
import { Typography, Card, Button } from "antd";
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
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardWidth = 300; // Примерная ширина одной карточки для расчета

  // Функция для прокрутки карточек
  const handleNext = () => {
    if (
      sliderRef.current.scrollLeft >=
      sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
    ) {
      sliderRef.current.scrollLeft = 0; // Вернуться к началу
    } else {
      sliderRef.current.scrollLeft += cardWidth; // Прокручиваем вправо на одну карточку
    }
  };

  const handlePrev = () => {
    if (sliderRef.current.scrollLeft === 0) {
      sliderRef.current.scrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.offsetWidth; // Прокрутка к концу
    } else {
      sliderRef.current.scrollLeft -= cardWidth; // Прокручиваем влево на одну карточку
    }
  };

  // Логика для прокрутки с зажатым курсором
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2; // Скорость прокрутки
    slider.scrollLeft = slider.scrollLeft - walk;
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

      <div
        className={styles.cardContainer}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews.concat(reviews).map((review, index) => (
          <div key={index} className={styles.cardWrapper}>
            <Card
              className={styles.card}
              bodyStyle={{ padding: 0 }} // Задаем padding для тела карточки
            >
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
