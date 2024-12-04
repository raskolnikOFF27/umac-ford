// src/components/CarRentalPage/CarRentalPage.jsx

import React, { useState } from "react";
import {
  ConfigProvider,
  Modal,
  Divider,
  Button,
  Table,
  Typography,
  Card,
  Row,
  Col,
} from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { InfoCircleOutlined, PhoneOutlined } from "@ant-design/icons";
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

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const customTheme = {
  token: {
    colorPrimary: "#9D0208", // Основной цвет

    // Настройки для кнопок
    Button: {
      borderColorDisabled: "#d9d9d9",
      fontSize: 14,
      colorPrimary: "#fff",
      primaryColor: "#9D0208",
      primaryHoverColor: "#d32f2f",
      // Другие настройки кнопок можно добавить здесь
    },

    // Настройки для модального окна
    Modal: {
      contentBg: "#1e1e1e",
      footerBg: "transparent",
      headerBg: "#1e1e1e",
      titleColor: "#ffffff",
      titleFontSize: 16,
      titleLineHeight: 1.5,
    },

    Card: {
      actionsBg: "#1e1e1e",
    },
  },
  components: {
    Button: {},
    Modal: {},
    Card: {},
  },
};

// Список автомобилей
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
      "Volkswagen Polo 2019 года выпуска — это компактный и надежный автомобиль, идеально подходящий как для городских поездок, так и для загородных путешествий. Благодаря экономичному бензиновому двигателю, этот автомобиль отличается низким расходом топлива, что делает его выгодным для ежедневного использования.",
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
      "Экономичный расход топлива: помогает сэкономить на топливе.",
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
      "BYD Qin Plus — гибридный автомобиль, объединяющий мощность бензинового двигателя и экономичность электрической тяги. Идеальный выбор для тех, кто стремится к экологичности без ущерба для динамики и комфорта. Гибридные технологии позволяют существенно экономить на топливе, особенно в городских условиях.",
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
      "Гибридная система: экономия топлива и снижение выбросов CO2.",
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
    transmission: "АКПП",
    seats: 5,
    pricePerDay: "2 800 руб.",
    pricePerThreeDays: "8 400 руб.",
    phone: "+78005553535",
    description:
      "Changan EADO Plus — стильный и современный седан с бензиновым двигателем, впечатляющий своим дизайном и уровнем комфорта. Китайский автопроизводитель Changan зарекомендовал себя благодаря высокому качеству сборки и продуманным техническим решениям. Этот автомобиль станет отличным выбором для тех, кто ценит комфорт и безопасность на дороге.",
    specifications: {
      Двигатель: "1.6 л бензиновый, 4 цилиндра, 126 л.с.",
      КПП: "Автоматическая",
      "Расход топлива": "6.8 л/100 км (смешанный цикл)",
      "Максимальная скорость": "200 км/ч",
      "Разгон до 100 км/ч": "10.5 секунд",
      "Объем багажника": "500 л",
      Коробка: "АКПП",
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
      <div className={`${styles.pageContainer}`}>
        <div className="mt-8 py-10 px-4">
          <Title
            level={2}
            className={`text-center mb-8 color-primary ${styles.title}`}
          >
            Аренда автомобилей
          </Title>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${styles.cars}`}
          >
            {cars.map((car) => (
              <Card
                key={car.id}
                hoverable
                bordered={false}
                className={`bg-background shadow-md rounded-lg overflow-hidden transition-transform transform  ${styles.card}`}
                cover={
                  <div className="w-full h-48 md:h-56 overflow-hidden">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover"
                    />
                  </div>
                }
                actions={[
                  <Button
                    type="default"
                    className="w-full"
                    onClick={() => openModal(car)}
                  >
                    Подробнее
                  </Button>,
                  <Button
                    type="primary"
                    className="w-full"
                    onClick={() => (window.location.href = `tel:${car.phone}`)}
                  >
                    Арендовать
                  </Button>,
                ]}
              >
                <Meta
                  title={
                    <h3 className="text-xl font-semibold text-textPrimary">
                      {car.name}
                    </h3>
                  }
                  description={
                    <div className="text-gray-400 flex gap-2">
                      <p>
                        Год выпуска: <b>{car.year}</b>
                      </p>
                      <p>
                        КПП: <b>{car.transmission}</b>
                      </p>
                      <p>
                        Мест: <b>{car.seats}</b>
                      </p>
                    </div>
                  }
                />
                <Divider className="bg-gray-600" />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <Text className="text-white" strong>
                      1 сутки
                    </Text>
                    <Text className="text-white">
                      <span>от</span>{" "}
                      <b className={styles.pricePerThreeDays}>
                        {car.pricePerDay}
                      </b>
                    </Text>
                  </div>
                  <div className="flex flex-col">
                    <Text className="text-white" strong>
                      3 суток
                    </Text>
                    <Text className="text-white">
                      <span>от</span>{" "}
                      <b className={styles.pricePerThreeDays}>
                        {car.pricePerThreeDays}
                      </b>
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className={styles.rentalInfo}>
            <Title level={3} className={styles.infoTitle}>
              <InfoCircleOutlined className={styles.icon} /> Условия Аренды
            </Title>
            <Divider className={styles.infoDivider} />

            <Row gutter={[16, 16]} className={styles.pricingCards}>
              <Col xs={24} sm={12} md={8}>
                <Card className={styles.pricingCard} bordered={false} hoverable>
                  <Title level={4} className={styles.pricingTitle}>
                    График 14/1
                  </Title>
                  <Divider className={styles.pricingDivider} />
                  <Text className={styles.pricingText}>2 300 руб./сутки</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card className={styles.pricingCard} bordered={false} hoverable>
                  <Title level={4} className={styles.pricingTitle}>
                    График 6/1
                  </Title>
                  <Divider className={styles.pricingDivider} />
                  <Text className={styles.pricingText}>2 500 руб./сутки</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card className={styles.pricingCard} bordered={false} hoverable>
                  <Title level={4} className={styles.pricingTitle}>
                    График 5/2
                  </Title>
                  <Divider className={styles.pricingDivider} />
                  <Text className={styles.pricingText}>2 900 руб./сутки</Text>
                </Card>
              </Col>
            </Row>

            <Paragraph className={styles.deposit}>
              <Text className={styles.depositTitle} strong>
                Залог:
              </Text>{" "}
              <br /> Для аренды автомобиля требуется залог в размере 5 000 руб.,
              который возвращается после завершения срока аренды при отсутствии
              повреждений.
            </Paragraph>

            <div className={styles.documents}>
              <Text className={styles.depositTitle} strong>
                Необходимые документы:
              </Text>
              <ul>
                <li>
                  Для оформления аренды необходимо предъявить паспорт и
                  водительское удостоверение. После оформления вы сможете уехать
                  на автомобиле через час.
                </li>
                <li>
                  Для иностранных граждан требуется дополнительно предоставить
                  регистрацию (прописку) по месту жительства.
                </li>
              </ul>
            </div>

            <Paragraph className={styles.buyout}>
              <Text className={styles.depositTitle} strong>
                Выкуп: <br />
              </Text>{" "}
              Возможность выкупа автомобиля обсуждается индивидуально и зависит
              от условий аренды.
            </Paragraph>

            {/* Кнопка "Позвонить" */}
            <div className={styles.callButtonContainer}>
              <Button
                className={styles.callButton}
                onClick={() => (window.location.href = "tel:+73431234567")}
                icon={<PhoneOutlined />}
                size="large"
              >
                Позвонить
              </Button>
            </div>
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
                  <h2 className="text-2xl font-bold mb-4 text-background">
                    {selectedCar.name}
                  </h2>
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

                  {/* Кнопка "Арендовать" прижата к нижней части */}
                  <Button
                    type="primary"
                    className={`${styles.modalButton} mt-auto`}
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
      </div>
    </ConfigProvider>
  );
};

export default CarRentalPage;
