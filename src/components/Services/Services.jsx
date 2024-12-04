// src/components/Services/Services.jsx

import { useState, useRef, useEffect } from "react";
import { Modal, Table, Row, Col, Typography, Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.scss";

import leftArrowIcon from "../../assets/icons/arrow-left.svg";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import "swiper/css";
import "swiper/css/navigation";

// Импорт SVG иконок как React компоненты
import { ReactComponent as DiagnosticsIcon } from "../../assets/icons/car-diagnostics.svg";
import { ReactComponent as RepairIcon } from "../../assets/icons/repair.svg";
import { ReactComponent as MaintenanceIcon } from "../../assets/icons/technical-review.svg";
import { ReactComponent as CarWashIcon } from "../../assets/icons/car-wash.svg";
import { ReactComponent as CarRentalIcon } from "../../assets/icons/car-rental.svg";
import { ReactComponent as TireIcon } from "../../assets/icons/tire.svg";

const { Title } = Typography;

// Массив услуг
const services = [
  {
    icon: <DiagnosticsIcon className={styles.customIcon} />,
    title: "Диагностика",
    description:
      "Комплексная диагностика автомобиля для выявления всех неисправностей.",
    modalContent: {
      columns: [
        { title: "Услуга", dataIndex: "service", key: "service" },
        { title: "Цена", dataIndex: "price", key: "price" },
      ],
      data: [
        { key: "1", service: "Поднятие на подъёмнике", price: "500 ₽" },
        { key: "2", service: "Снятие и установка колеса", price: "100-200 ₽" },
      ],
    },
  },
  {
    icon: <RepairIcon className={styles.customIcon} />,
    title: "Ремонт",
    description: "Профессиональный ремонт любых систем автомобиля.",
    modalContent: {
      columns: [
        { title: "Услуга", dataIndex: "service", key: "service" },
        { title: "Цена", dataIndex: "price", key: "price" },
      ],
      data: [
        {
          key: "1",
          service: "Замена сайлентблока рычага подвески",
          price: "1200 ₽",
        },
        {
          key: "2",
          service: "Замена сайлентблока заднего рычага",
          price: "от 1000 ₽/шт",
        },
        { key: "3", service: "Замена выбора КПП", price: "1000 ₽" },
        { key: "4", service: "Замена топливного фильтра", price: "от 800 ₽" },
        { key: "5", service: "Замена подушки ДВС", price: "от 1000 ₽" },
        { key: "6", service: "Ремонт ГБЦ", price: "от 10000 ₽" },
        { key: "7", service: "Ремонт ГРМ", price: "от 3000 ₽" },
        { key: "8", service: "Замена АКБ", price: "500 ₽" },
        { key: "9", service: "Ремонт генератора", price: "от 1500 ₽" },
        {
          key: "10",
          service: "Заправка кондиционера",
          price: "раб. 1500 ₽ + 6грам",
        },
        {
          key: "11",
          service: "Замена лягушки заднего хода",
          price: "от 500 ₽",
        },
        { key: "12", service: "Замена свечей зажигания", price: "200 ₽ (шт.)" },
        {
          key: "13",
          service: "Замена вентилятора отопителя",
          price: "от 1500 ₽",
        },
        { key: "14", service: "Замена балки задней", price: "от 3500 ₽" },
        { key: "15", service: "Замена фильтра АКПП", price: "от 1000 ₽" },
        { key: "16", service: "Ремонт стартера", price: "от 1500 ₽" },
        { key: "17", service: "Замена помпы", price: "от 1500 ₽" },
        { key: "18", service: "Замена термостата", price: "от 800 ₽" },
        {
          key: "19",
          service: "Замена радиатора отопителя",
          price: "от 3000 ₽",
        },
        {
          key: "20",
          service: "Замена троса ручника",
          price: "от 1000 ₽ (Истронка)",
        },
        { key: "21", service: "Замена ремня генератора", price: "от 500 ₽" },
        { key: "22", service: "Капитальный ремонт ДВС", price: "от 35000 ₽" },
        { key: "23", service: "Ремонт авто электрики", price: "от 1000 ₽" },
        { key: "24", service: "Замена датчика ABS", price: "от 500 ₽" },
        { key: "25", service: "Замена троса капота", price: "от 800 ₽" },
        {
          key: "26",
          service: "Замена замка крышки багажника",
          price: "от 800 ₽",
        },
        { key: "27", service: "Развал схождение 1 ось", price: "от 1200 ₽" },
        {
          key: "28",
          service: "Замена переднего рычага подвески",
          price: "1500 ₽",
        },
        { key: "29", service: "Замена стартера", price: "от 1500 ₽" },
        {
          key: "30",
          service: "Замена вентилятора охлаждения",
          price: "от 1500 ₽",
        },
        // Добавлено всё с фотографий
      ],
      pagination: true, // Пагинация только для ремонта
    },
  },
  {
    icon: <MaintenanceIcon className={styles.customIcon} />,
    title: "ТО",
    description:
      "Регулярное техническое обслуживание для поддержания автомобиля в отличном состоянии.",
    modalContent: {
      columns: [
        { title: "Услуга", dataIndex: "service", key: "service" },
        { title: "Цена", dataIndex: "price", key: "price" },
      ],
      data: [
        { key: "1", service: "Чистка дисков от герметика", price: "60-100 ₽" },
        { key: "2", service: "Технологическая мойка", price: "60-100 ₽" },
      ],
    },
  },
  {
    icon: <CarWashIcon className={styles.customIcon} />,
    title: "Автомойка",
    description:
      "Полная мойка вашего автомобиля с использованием качественных средств.",
    modalContent: {
      columns: [
        { title: "Категория", dataIndex: "category", key: "category" },
        { title: "Цена", dataIndex: "price", key: "price" },
        { title: "Время", dataIndex: "time", key: "time" },
      ],
      data: [
        { key: "1", category: "1", price: "450 ₽", time: "10 мин." },
        { key: "2", category: "2", price: "450 ₽", time: "20 мин." },
        { key: "3", category: "3", price: "450 ₽", time: "25 мин." },
        { key: "4", category: "4", price: "500 ₽", time: "30 мин." },
        { key: "5", category: "5", price: "550 ₽", time: "35 мин." },
        { key: "6", category: "6", price: "550 ₽", time: "40 мин." },
      ],
      additionalServices: {
        columns: [
          { title: "Доп. услуга", dataIndex: "service", key: "service" },
          { title: "Цена", dataIndex: "price", key: "price" },
        ],
        data: [
          { key: "1", service: "Мойка ковриков", price: "50 ₽" },
          { key: "2", service: "Пылесос багажника", price: "200 ₽" },
          { key: "3", service: "Чернение шин (4 шт.)", price: "50 ₽" },
          { key: "4", service: "Сушка и протирка кузова", price: "400 ₽" },
        ],
      },
    },
  },
  {
    icon: <TireIcon className={styles.customIcon} />,
    title: "Шиномонтаж",
    description: "Быстрый и качественный шиномонтаж.",
    modalContent: {
      columns: [
        { title: "Услуга", dataIndex: "service", key: "service" },
        { title: "Цена", dataIndex: "price", key: "price" },
      ],
      data: [
        { key: "1", service: "Поднятие на подъёмнике", price: "500 ₽" },
        { key: "2", service: "Снятие - Установка Колеса", price: "100-200 ₽" },
        {
          key: "3",
          service: "Разбортовка - Забортовка Шины на Штампованный Диск",
          price: "110-210 ₽",
        },
        {
          key: "4",
          service: "Разбортовка - Забортовка Шины на Литье",
          price: "130-220 ₽",
        },
        {
          key: "5",
          service: "Разбортовка - Забортовка низкопрофильной шины на Литье",
          price: "180-250 ₽",
        },
        {
          key: "6",
          service: "Замена готовых колес с балансировкой",
          price: "800-1520 ₽",
        },
        { key: "7", service: "Балансировка Колеса", price: "80-180 ₽" },
        { key: "8", service: "Герметик", price: "80-180 ₽" },
        { key: "9", service: "Вентиль Снятие - Установка", price: "100 ₽" },
        { key: "10", service: "Установка камеры", price: "50 ₽" },
        { key: "11", service: "Чистка Дисков от герметика", price: "60-100 ₽" },
        { key: "12", service: "Технологическая мойка", price: "60-100 ₽" },
        {
          key: "13",
          service: "Установка - Снятие датчиков давления",
          price: "100 ₽",
        },
        { key: "14", service: "Установка жгута", price: "150 ₽" },
        {
          key: "15",
          service: "Проверка колеса на герметичность",
          price: "40-70 ₽",
        },
        { key: "16", service: "Подкачка колеса", price: "15 ₽" },
        { key: "17", service: "Набивной груз 1гр.", price: "1 ₽" },
        { key: "18", service: "Самоклеящийся груз 1гр.", price: "1.5 ₽" },
        {
          key: "19",
          service: "Правка штампованного Диска",
          price: "300-1000 ₽",
        },
        {
          key: "20",
          service: "Общая стоимость Шиномонтажа + груза (Штампованный диск)",
          price: "1720-3160 ₽",
        },
        {
          key: "21",
          service: "Общая стоимость Шиномонтажа + груза (Литый диск)",
          price: "1820-3220 ₽",
        },
        {
          key: "22",
          service:
            "Общая стоимость Шиномонтажа + груза (низкопрофильная резина)",
          price: "2200-3300 ₽",
        },
      ],
      pagination: true, // Пагинация для шиномонтажа
    },
  },
  {
    icon: <CarRentalIcon className={styles.customIcon} />,
    title: "Аренда авто",
    description: "Прокат автомобилей на любой срок с удобными условиями.",
    link: "/rentals", // Ссылка для открытия в новой вкладке
  },
];

const Services = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate(); // Инициализация useNavigate

  // Открытие модалки
  const openModal = (index) => {
    setCurrentServiceIndex(index);
    setVisibleModal(true);
  };

  // Закрытие модалки
  const closeModal = () => {
    setVisibleModal(false);
  };

  // Обновление индекса слайда
  const handleSlideChange = (swiper) => {
    setCurrentServiceIndex(swiper.realIndex);
  };

  // Инициализация Swiper
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    if (swiper) {
      swiper.slideTo(currentServiceIndex, 0);
    }
  };

  // Переключение на следующий слайд
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      const nextIndex = (currentServiceIndex + 1) % services.length;
      swiperRef.current.slideTo(nextIndex, 0);
    }
  };

  // Переключение на предыдущий слайд
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      const prevIndex =
        (currentServiceIndex - 1 + services.length) % services.length;
      swiperRef.current.slideTo(prevIndex, 0);
    }
  };

  // Реинициализация Swiper при изменении currentServiceIndex
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(currentServiceIndex, 0);
    }
  }, [currentServiceIndex, swiperInstance]);

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
              onClick={() => {
                if (service.link) {
                  navigate(service.link); // Используем navigate вместо window.open
                } else {
                  openModal(index);
                }
              }}
            >
              <Title level={4} className={styles.cardTitle}>
                {service.title}
              </Title>
              <p className={styles.cardDescription}>{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal with Swiper */}
      <Modal
        visible={visibleModal}
        onCancel={closeModal}
        footer={null}
        width={800}
        className={styles.modalContainer}
        centered
        destroyOnClose
      >
        <div className={styles.swiperContainer}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={services.length > 2} // Включаем режим loop только если слайдов больше 2
            onSwiper={(swiper) => {
              handleSwiper(swiper);
              setSwiperInstance(swiper);
            }}
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={styles.modalContent}>
                  <Title level={4} className={styles.modalTitle}>
                    {service.title}
                  </Title>
                  {service.modalContent && service.modalContent.columns && (
                    <Table
                      columns={service.modalContent.columns}
                      dataSource={service.modalContent.data}
                      pagination={
                        service.title === "Ремонт" ||
                        service.title === "Шиномонтаж"
                          ? { pageSize: 8 }
                          : false
                      }
                      className={styles.serviceTable}
                    />
                  )}

                  {/* Проверяем, есть ли дополнительные услуги */}
                  {service.modalContent?.additionalServices && (
                    <>
                      <Title
                        level={5}
                        className={styles.additionalServicesTitle}
                      >
                        Дополнительные услуги
                      </Title>
                      <Table
                        columns={
                          service.modalContent.additionalServices.columns
                        }
                        dataSource={
                          service.modalContent.additionalServices.data
                        }
                        pagination={false}
                        className={styles.serviceTable}
                      />
                    </>
                  )}

                  <a href="tel:+7(343)123-45-67" className={styles.bookButton}>
                    Забронировать
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Внешние кнопки переключения */}
          <button
            className={`${styles.swiperButton} ${styles.swiper_button_prev_custom}`}
            onClick={handlePrev}
          >
            <img
              src={rightArrowIcon}
              className={styles.swiperButton_icon}
              alt=""
            />
          </button>
          <button
            className={`${styles.swiperButton} ${styles.swiper_button_next_custom}`}
            onClick={handleNext}
          >
            <img src={leftArrowIcon} alt="" />
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Services;
