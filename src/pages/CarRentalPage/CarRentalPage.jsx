// src/components/CarRentalPage/CarRentalPage.jsx
import React, { useState } from "react";
import { ConfigProvider, Modal, Divider, Button, Table } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "antd/dist/reset.css"; // Импорт Ant Design стилей
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
import placeholderImage from "../../assets/images/placeholder.png";
import styles from "./CarRentalPage.module.scss"; // Импорт CSS-модуля для кастомных стилей

const customTheme = {
  token: {
    // Общие токены
    colorPrimary: "#ff5722", // Основной цвет

    // Токены для кнопок
    Button: {
      borderColorDisabled: "#d9d9d9",
      fontSize: 14,
      fontSizeLG: 16,
      fontSizeSM: 14,
      lineHeight: 1.5714285714285714,
      lineHeightLG: 1.5,
      lineHeightSM: 1.5714285714285714,
      dangerColor: "#fff",
      dangerShadow: "0 2px 0 rgba(255, 38, 5, 0.06)",
      defaultBg: "transparent",
      defaultBorderColor: "#d9d9d9",
      defaultColor: "rgba(0, 0, 0, 0.88)",
      defaultHoverBg: "transparent",
      defaultHoverBorderColor: "#4096ff",
      defaultHoverColor: "#4096ff",
      defaultActiveBg: "transparent",
      defaultActiveBorderColor: "#0958d9",
      defaultActiveColor: "#0958d9",
      defaultShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
      ghostBg: "transparent",
      defaultGhostBorderColor: "#ffffff",
      defaultGhostColor: "#ffffff",
      groupBorderColor: "#4096ff",
      linkHoverBg: "transparent",
      onlyIconSize: 16,
      onlyIconSizeLG: 18,
      onlyIconSizeSM: 14,
      paddingBlock: 4,
      paddingBlockLG: 7,
      paddingBlockSM: 0,
      paddingInline: 15,
      paddingInlineLG: 15,
      paddingInlineSM: 7,
      primaryColor: "#fff",
      primaryShadow: "0 2px 0 rgba(5, 145, 255, 0.1)",
      solidTextColor: "#fff",
      textHoverBg: "rgba(0, 0, 0, 0.06)",
      textTextActiveColor: "rgba(0, 0, 0, 0.88)",
      textTextColor: "rgba(0, 0, 0, 0.88)",
      textTextHoverColor: "rgba(0, 0, 0, 0.88)",
    },

    // Токены для модального окна
    Modal: {
      contentBg: "#1e1e1e",
      footerBg: "transparent",
      headerBg: "#1e1e1e",
      titleColor: "#ffffff",
      titleFontSize: 16,
      titleLineHeight: 1.5,
    },
  },
  components: {
    Button: {},
    Modal: {},
  },
};

// Расширенный список автомобилей с подробными характеристиками
const cars = [
  {
    id: 1,
    name: "Volkswagen Polo 2019",
    year: 2019,
    transmission: "МКПП",
    seats: 5,
    pricePerDay: "2 200 руб.",
    pricePerThreeDays: "6 600 руб.",
    phone: "+78005553535",
    description:
      "Volkswagen Polo 2019 года выпуска — это компактный и надежный автомобиль, который давно зарекомендовал себя как один из лучших в своем классе. Он идеально подходит как для городских поездок, так и для загородных путешествий. Благодаря своему экономичному бензиновому двигателю, этот автомобиль отличается низким расходом топлива, что делает его выгодным для ежедневного использования.",
    specifications: {
      Двигатель: "1.2 л бензиновый, 3 цилиндра, 85 л.с.",
      КПП: "6-ступенчатая механическая",
      "Расход топлива": "6.0 л/100 км (смешанный цикл)",
      "Максимальная скорость": "185 км/ч",
      "Разгон до 100 км/ч": "11.5 секунд",
      "Объем багажника": "351 л",
      Коробка: "МКПП",
      Привод: "Передний",
    },
    advantages: [
      "Экономичный расход топлива: этот автомобиль поможет вам сэкономить на топливе.",
      "Компактные размеры: легко паркуется в городе.",
      "Высокая надежность: немецкое качество сборки и долговечность.",
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
    id: 3,
    name: "Гибрид BYD Qin Plus",
    year: 2020,
    transmission: "АКПП",
    seats: 5,
    pricePerDay: "3 200 руб.",
    pricePerThreeDays: "9 600 руб.",
    phone: "+78005553535",
    description:
      "BYD Qin Plus — это гибридный автомобиль, который объединяет в себе мощность бензинового двигателя и экономичность электрической тяги. Это идеальный выбор для тех, кто хочет быть на шаг впереди и заботится об экологии, не жертвуя при этом динамикой и комфортом. Гибридные технологии позволяют существенно экономить на топливе, особенно в городском цикле.",
    specifications: {
      Двигатель: "1.5 л бензиновый + электромотор, общая мощность 196 л.с.",
      КПП: "Автоматическая",
      "Расход топлива": "4.5 л/100 км (в режиме гибрида)",
      "Максимальная скорость": "180 км/ч",
      "Разгон до 100 км/ч": "8.2 секунд",
      "Объем багажника": "450 л",
      Коробка: "АКПП",
      Привод: "Передний",
    },
    advantages: [
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
    id: 4,
    name: "Changan EADO Plus",
    year: 2021,
    transmission: "МКПП",
    seats: 5,
    pricePerDay: "2 800 руб.",
    pricePerThreeDays: "8 400 руб.",
    phone: "+78005553535",
    description:
      "Changan EADO Plus — это стильный и современный седан с бензиновым двигателем, который впечатляет своим дизайном и уровнем комфорта. Китайский автопроизводитель Changan с каждым годом набирает популярность благодаря высокому качеству сборки и продуманным техническим решениям. Этот автомобиль станет отличным выбором для тех, кто ценит комфорт и безопасность на дороге.",
    specifications: {
      Двигатель: "1.6 л бензиновый, 4 цилиндра, 126 л.с.",
      КПП: "6-ступенчатая механическая",
      "Расход топлива": "6.8 л/100 км (смешанный цикл)",
      "Максимальная скорость": "200 км/ч",
      "Разгон до 100 км/ч": "10.5 секунд",
      "Объем багажника": "500 л",
      Коробка: "МКПП",
      Привод: "Передний",
    },
    advantages: [
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
    event.target.src = placeholderImage;
  };

  // Определение столбцов для таблицы спецификаций
  const getSpecificationsTable = (specs) => {
    const data = Object.entries(specs).map(([key, value], index) => ({
      key: index,
      характеристика: key,
      значение: value,
    }));

    const columns = [
      {
        title: "Характеристика",
        dataIndex: "характеристика",
        key: "характеристика",
        width: "40%",
      },
      {
        title: "Значение",
        dataIndex: "значение",
        key: "значение",
        width: "60%",
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        className={styles.customTable}
      />
    );
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div className="mt-8 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Аренда автомобилей
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`bg-background shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full ${styles.card}`}
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
                  <div className="flex flex-col sm:flex-row justify-between mb-2 text-gray-400">
                    <span>Год выпуска {car.year}</span>
                    <span>КПП {car.transmission}</span>
                    <span>Мест {car.seats}</span>
                  </div>
                  <Divider className="bg-gray-600" />
                  <div className="flex justify-between mb-2">
                    <span>1 сутки</span>
                    <span>от {car.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>3 суток</span>
                    <span>от {car.pricePerThreeDays}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    type="default"
                    className="w-full mr-2"
                    onClick={() => openModal(car)}
                  >
                    Подробнее
                  </Button>
                  <Button
                    type="primary"
                    className="w-full"
                    onClick={() => (window.location.href = `tel:${car.phone}`)}
                  >
                    Арендовать
                  </Button>
                </div>
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
          closeIcon={<span className="text-primary text-xl">X</span>}
          width={1000}
          className={`bg-background text-textPrimary rounded-lg ${styles.customModal}`}
          bodyStyle={{
            padding: 0,
            maxHeight: "80vh",
            overflow: "hidden",
          }}
        >
          {selectedCar && (
            <div className="flex flex-col md:flex-row h-full overflow-auto">
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
              <div className="w-full md:w-1/2 p-4 flex flex-col overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
                <p className="mb-4">{selectedCar.description}</p>

                {/* Таблица спецификаций */}
                <h3 className="text-xl font-semibold mb-2">Характеристики</h3>
                {getSpecificationsTable(selectedCar.specifications)}

                <Divider className="bg-gray-600 my-4" />

                {/* Преимущества */}
                <h3 className="text-xl font-semibold mb-2">Преимущества</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCar.advantages.map((adv, index) => (
                    <li key={index}>{adv}</li>
                  ))}
                </ul>

                <Button
                  type="primary"
                  className="mt-auto w-full"
                  onClick={() =>
                    (window.location.href = `tel:${selectedCar.phone}`)
                  }
                >
                  Арендовать
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default CarRentalPage;
