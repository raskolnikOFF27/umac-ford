// src/components/CarRentalPage/CarRentalPage.jsx

import React, { useState } from "react";
import { Modal, ConfigProvider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "antd/dist/reset.css"; // Импорт Ant Design стилей
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
import changanEadoPlusPhoto1 from "../../assets/images/changan-eado-plus/photo-1.jpg";
import changanEadoPlusPhoto2 from "../../assets/images/changan-eado-plus/photo-2.jpg";
import changanEadoPlusPhoto3 from "../../assets/images/changan-eado-plus/photo-3.jpg";
import changanEadoPlusPhoto4 from "../../assets/images/changan-eado-plus/photo-4.jpg";
import changanEadoPlusPhoto5 from "../../assets/images/changan-eado-plus/photo-5.jpg";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./CarRentalPage.module.scss"; // Импорт CSS-модуля для кастомных стилей

const cars = [
  {
    id: 1,
    name: "Volkswagen Polo 2019",
    price: "от 2 200 руб.",
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
    price: "от 3 200 руб.",
    phone: "+78005553535",
    description:
      "BYD Qin Plus — это гибридный автомобиль, который объединяет в себе мощность бензинового двигателя и экономичность электрической тяги...",
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
  {
    id: 3,
    name: "Changan EADO Plus",
    price: "от 2 800 руб.",
    phone: "+78005553535",
    description:
      "Changan EADO Plus — это стильный и современный седан с бензиновым двигателем, который впечатляет своим дизайном и уровнем комфорта...",
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
  // Добавьте больше автомобилей по мере необходимости
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
      <div className="mt-8 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Аренда автомобилей
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`bg-background shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 flex flex-col h-full ${styles.card}`}
              onClick={() => openModal(car)}
            >
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-textPrimary">
                    {car.name}
                  </h3>
                  <p className="text-primary mb-4">{car.price}</p>
                </div>
                <button
                  type="button"
                  className="bg-primary text-textPrimary py-2 px-4 rounded hover:bg-secondary transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `tel:${car.phone}`;
                  }}
                >
                  Арендовать
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        <Modal
          title={null}
          open={isModalOpen}
          onCancel={closeModal}
          footer={null}
          centered
          closeIcon={<CloseOutlined className="text-primary text-xl" />}
          width={800} // Установка ширины модального окна
          className={`bg-background text-textPrimary rounded-lg ${styles.customModal}`}
          bodyStyle={{
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "15px",
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {selectedCar && (
            <div className="flex flex-col md:flex-row h-full">
              {/* Контейнер Swiper с квадратным аспектом на десктопах */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className={`h-full swiperContainer`}
                >
                  {selectedCar.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-full overflow-hidden rounded-lg">
                        <img
                          className="w-full h-full object-cover"
                          src={image}
                          alt={`Фото ${index + 1}`}
                          onError={handleImageError}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Контейнер деталей автомобиля */}
              <div className="w-full md:w-1/2 p-4 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
                <p className="mb-4">{selectedCar.description}</p>
                <h3 className="text-xl font-semibold mb-2">Преимущества:</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCar.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-auto bg-primary text-textPrimary py-2 px-4 rounded hover:bg-secondary transition-colors"
                  onClick={() =>
                    (window.location.href = `tel:${selectedCar.phone}`)
                  }
                >
                  Арендовать
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default CarRentalPage;
