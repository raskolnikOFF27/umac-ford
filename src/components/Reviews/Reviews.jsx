import React, { useState, useRef } from "react";
import { Rate } from "antd";
import avatar1 from "../../assets/images/avatar-1.webp";
import avatar2 from "../../assets/images/avatar-2.webp";
import avatar3 from "../../assets/images/avatar-3.webp";
import avatar4 from "../../assets/images/avatar-4.webp";
import defaultAvatar from "../../assets/images/default-avatar.webp";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import styles from "./Reviews.module.scss"; // Модульное подключение SCSS

const reviews = [
  {
    name: "Иван Иванов",
    content:
      "Отличный сервис! Быстро и качественно отремонтировали мой Ford. Очень рекомендую!",
    image: avatar1,
    rating: 5,
  },
  {
    name: "Мария Петрова",
    content:
      "Мой автомобиль после ремонта как новый! Ремонт сделали быстро, а сотрудники очень профессиональны.",
    image: avatar2,
    rating: 5,
  },
  {
    name: "Александр Р.",
    content: `Хороший сервис.
Парни знают своё дело, делают быстро и качественно.
Если что то где то Вам не смогут неисправность найти и устранить, то тут ребята по красоте всё сделают.
Шиномонтаж, автомойка, диагностика, сход-развал, жестянка, покраска - все тут есть.
В общем 5*!!!
`,
    image: avatar4,
    rating: 5,
  },
  {
    name: "Владислав К.",
    content:
      "Выбираю только этот сервис после сравнения с многими другими поблизости. Парни работают толковые, всё подскажут , посоветуют , а главное- сделают. Качество работ на высоте, запчасти можно заказать здесь же по приемлемой цене. Проводятся все виды работ: и кузовные, покраска, и обслуживание, а так же есть мойка- хорошо помоют за лояльную цену. Рекомендую.",
    image: avatar3,
    rating: 5,
  },
  {
    name: `Ирина В.`,
    content: `Умнички. Приятно зайти, чистота, порядок. Отзывчивые и понимающие
            Запчасти были в наличии. Чего не было сразу смотрели и на компьюторе и находили. Быстро нашли причину и быстро починили. Моя ласточка ожила.
            Мастер Шахзот, который занимался моей ласточкой, все сделал в идеала.
            Буду обращаться только в этот сервис.
            Широкопрофильный сервис, работают со всеми проблемами.
            Спасибо вам!`,
    image: defaultAvatar,
    rating: 5,
  },
  {
    name: "Анна Михайлова",
    content: `Очень крутая организация. Было дело таксовал. ))) Проблем ни каких не было. Сейчас заезжаю ремонтировать личное авто. Парни всегда подскажут что лучше сделать. А чего лучше не делать. Юмак респект и процветания вам!!! Планку все выше и выше. )))`,
    image: defaultAvatar,
    rating: 5,
  },
  {
    name: "Лев С.",
    content:
      "Отличный сервис, ребята знают свою дело !! Вошли в положение и оказали помощь . Сервис просто огонь 🔥 рекомендую всем !!!! Ещё раз спасибо всем парням что помогли ! Вы лучшие 🤝🤗",
    image: avatar1,
    rating: 5,
  },
  {
    name: "Игорь Г.",
    content:
      "Все супер!!! Ребята сделали все быстро и качественно и недорого. Ребята молодцы. Рекомендую.",
    image: avatar2,
    rating: 5,
  },
  {
    name: "Сергей А.",
    content: "Отличный автосервис ,все делают быстро и качественно",
    image: avatar3,
    rating: 5,
  },
  {
    name: "Елена Кузнецова",
    content: "Качественный ремонт и приятное обслуживание.",
    image: defaultAvatar,
    rating: 5,
  },
  {
    name: "Сергей Сидоров",
    content: "Оперативно и качественно! Обязательно обращусь снова.",
    image: defaultAvatar,
    rating: 5,
  },
  {
    name: "Ирина Михайлова",
    content: "Все было выполнено качественно, осталась довольна!",
    image: avatar1,
    rating: 5,
  },
  {
    name: "Константин Иванов",
    content: "Очень профессиональная работа, рекомендую!",
    image: avatar2,
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= reviews.length - (itemsPerPage - 1) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - 1
    );
  };

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
    const walk = (x - slider.startX) * 2;
    slider.scrollLeft = slider.scrollLeft - walk;
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsHeader}>
        <h2 className={styles.reviewsTitle}>Отзывы клиентов</h2>
        <div className={styles.reviewsControls}>
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className={styles.reviewsButton}
          >
            <ArrowLeftIcon
              className={`${styles.arrowIcon} ${styles.arrowLeft}`}
            />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className={styles.reviewsButton}
          >
            <ArrowRightIcon className={styles.arrowIcon} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className={styles.reviewsSlider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <img
                  src={review.image}
                  alt={`Аватар ${review.name}`}
                  className={styles.reviewAvatar}
                />
                <div className={styles.reviewInfo}>
                  <p className={styles.reviewName}>{review.name}</p>
                  <Rate
                    disabled
                    defaultValue={review.rating}
                    className={styles.reviewStars}
                  />
                </div>
              </div>
              <p className={styles.reviewContent}>"{review.content}"</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Reviews;
