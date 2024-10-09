import React, { useState } from "react";
import { Modal, ConfigProvider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./CarRentalPage.module.scss";
import placeholderImage from "../../assets/images/placeholder.png";
import polo2019Photo1 from "../../assets/images/polo-2019/photo-1.jpg";
import polo2019Photo2 from "../../assets/images/polo-2019/photo-2.jpg";
import polo2019Photo3 from "../../assets/images/polo-2019/photo-3.jpg";
import polo2019Photo4 from "../../assets/images/polo-2019/photo-4.jpg";
import polo2019Photo5 from "../../assets/images/polo-2019/photo-5.jpg";
import bydQinPlusPhoto1 from "../../assets/images/byd-qin-plus/byd-qin-plus-1.jpg";
import bydQinPlusPhoto2 from "../../assets/images/byd-qin-plus/byd-qin-plus-2.jpg";
import bydQinPlusPhoto3 from "../../assets/images/byd-qin-plus/byd-qin-plus-3.jpg";
import bydQinPlusPhoto4 from "../../assets/images/byd-qin-plus/byd-qin-plus-4.jpg";
import bydQinPlusPhoto5 from "../../assets/images/byd-qin-plus/byd-qin-plus-5.jpg";

// Импортируем изображения для Changan EADO Plus
import changanEadoPlusPhoto1 from "../../assets/images/changan-eado-plus/photo-1.jpg";
import changanEadoPlusPhoto2 from "../../assets/images/changan-eado-plus/photo-2.jpg";
import changanEadoPlusPhoto3 from "../../assets/images/changan-eado-plus/photo-3.jpg";
import changanEadoPlusPhoto4 from "../../assets/images/changan-eado-plus/photo-4.jpg";
import changanEadoPlusPhoto5 from "../../assets/images/changan-eado-plus/photo-5.jpg";

import { CloseOutlined } from "@ant-design/icons";

const cars = [
  {
    id: 1,
    name: "Volkswagen Polo 2019",
    price: "от 2200 руб.",
    phone: "+78005553535",
    description:
      "Volkswagen Polo 2019 года выпуска — это компактный и надежный автомобиль...",
    benefits: [
      "Экономичный расход топлива",
      "Компактные размеры",
      "Высокая надежность",
    ],
    images: [
      polo2019Photo1,
      polo2019Photo2,
      polo2019Photo3,
      polo2019Photo4,
      polo2019Photo5,
    ],
  },
  {
    id: 2,
    name: "Гибрид BYD Qin Plus",
    price: "от 3200 руб.",
    phone: "+78005553535",
    description:
      "BYD Qin Plus — это гибридный автомобиль, который объединяет в себе мощность бензинового двигателя и экономичность электрической тяги. Это идеальный выбор для тех, кто хочет быть на шаг впереди и заботится об экологии, не жертвуя при этом динамикой и комфортом.",
    benefits: [
      "Гибридная система: экономия топлива и меньший выброс CO2.",
      "Мощность и динамика: отличное ускорение благодаря сочетанию двух типов двигателя.",
      "Экологичность: идеальный выбор для городских условий и дальних поездок.",
    ],
    images: [
      bydQinPlusPhoto1,
      bydQinPlusPhoto2,
      bydQinPlusPhoto3,
      bydQinPlusPhoto4,
      bydQinPlusPhoto5,
    ],
  },
  // Добавляем новый автомобиль Changan EADO Plus
  {
    id: 3,
    name: "Changan EADO Plus",
    price: "от 2800 руб.",
    phone: "+78005553535",
    description:
      "Changan EADO Plus — это стильный и современный седан с бензиновым двигателем, который впечатляет своим дизайном и уровнем комфорта. Китайский автопроизводитель Changan с каждым годом набирает популярность благодаря высокому качеству сборки и продуманным техническим решениям. Этот автомобиль станет отличным выбором для тех, кто ценит комфорт и безопасность на дороге.",
    benefits: [
      "Современный дизайн: привлекает внимание и подчеркивает ваш стиль.",
      "Комфортабельный салон: высококачественные материалы и простор.",
      "Безопасность: оснащен передовыми системами безопасности.",
    ],
    images: [
      changanEadoPlusPhoto1,
      changanEadoPlusPhoto2,
      changanEadoPlusPhoto3,
      changanEadoPlusPhoto4,
      changanEadoPlusPhoto5,
    ],
  },
];

const CarRentalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleImageError = (event) => {
    console.error("Ошибка загрузки изображения:", event.target.src);
    event.target.src = placeholderImage;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#1e1e1e",
            headerBg: "#1e1e1e",
            footerBg: "#1e1e1e",
            titleColor: "#ffffff",
            borderRadius: 15,
          },
        },
      }}
    >
      <div className={styles.carRentalPage}>
        <h1 className={styles.title}>Аренда автомобилей</h1>
        <div className={styles.gallery}>
          {cars.map((car) => (
            <div
              key={car.id}
              className={styles.card}
              onClick={(e) => {
                if (e.target.tagName !== "BUTTON") {
                  openModal(car);
                }
              }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={car.images[0]}
                  alt={car.name}
                  onError={handleImageError}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <a href={`tel:${car.phone}`}>
                  <button type="button" className={styles.rentButton}>
                    Арендовать
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <Modal
          title={null}
          open={isModalOpen}
          onCancel={closeModal}
          footer={null}
          wrapClassName={styles.customModal}
          bodyStyle={{
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "15px",
            maxHeight: "100vh",
          }}
          centered
          closeIcon={
            <CloseOutlined style={{ color: "#ff5722", fontSize: "16px" }} />
          }
        >
          {selectedCar && (
            <div className={styles.modalContent}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className={styles.swiperContainer}
              >
                {selectedCar.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.modalImageContainer}>
                      <img
                        className={styles.modalImage}
                        src={image}
                        alt={`Фото ${index + 1}`}
                        onError={handleImageError}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.modalDetails}>
                <p>{selectedCar.description}</p>
                <ul>
                  {selectedCar.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <a href={`tel:${selectedCar.phone}`}>
                  <button type="button" className={styles.rentButton}>
                    Арендовать
                  </button>
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default CarRentalPage;
