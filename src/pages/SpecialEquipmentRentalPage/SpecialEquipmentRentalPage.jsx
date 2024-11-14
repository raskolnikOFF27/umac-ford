// src/pages/SpecialEquipmentRentalPage/SpecialEquipmentRentalPage.jsx
import React from "react";
import { Button, Card, message } from "antd";
import styles from "./SpecialEquipmentRentalPage.module.scss";
import equipmentImage from "../../assets/images/excavator.png"; // Убедись, что путь к изображению корректен

const SpecialEquipmentRentalPage = () => {
  const phoneNumber = "+7 (343) 123-45-67";

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    message.success("Номер телефона скопирован!");
  };

  return (
    <div className={`${styles.specialEquipmentPage} container mx-auto p-4`}>
      <h1 className={`${styles.title} text-4xl font-bold text-center mb-8`}>
        Аренда спецтехники
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-start justify-between lg:h-full">
        <div
          className={`${styles.leftBlock} flex-1 order-2 lg:order-1 lg:h-full`}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Экскаватор погрузчик JCB 3CX
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className={styles.customTag}>Год выпуска ТС 2021 г.</div>
            <div className={styles.customTag}>Марка спецтехники JCB 3CX</div>
            <div className={styles.customTag}>
              Минимальное время заказа 8 ч.
            </div>
            <div className={styles.customTag}>
              Навесное оборудование узкий ковш (траншейный)
            </div>
            <div className={styles.customTag}>Оплата наличными/картой</div>
          </div>

          <p className="text-base text-gray-300 mb-6 leading-7">
            Земляные работы. Рытьё траншей экскаватором для прокладки кабеля,
            водопровода, газопровода, канализации, дренажных систем и других
            подземных коммуникаций. Уборка территории от снега. Погрузка
            строительного мусора, планировка, выравнивание, поднятие земельных
            участков. Работы выполняем С НДС и без НДС.
          </p>

          <div className="space-y-4 mb-6">
            <Card className="bg-gray-900 border-0">
              <div className="flex justify-between text-lg text-white">
                <span>С НДС</span>
                <span>2600 ₽/час</span>
              </div>
            </Card>
            <Card className="bg-gray-900 border-0">
              <div className="flex justify-between text-lg text-white">
                <span>Без НДС</span>
                <span>2400 ₽/час</span>
              </div>
            </Card>
          </div>

          <a
            href="tel:+7 (343) 123-45-67"
            className={`${styles.customButton} w-full`}
          >
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#9D0208", borderColor: "#9D0208" }}
            >
              Арендовать
            </Button>
          </a>

          <button
            onClick={copyPhoneNumber}
            className={`${styles.customPhoneButton} mt-4 block w-full text-center`}
          >
            +7 (343) 123-45-67
          </button>
        </div>

        <div
          className={`${styles.rightBlock} flex-1 order-1 lg:order-2 lg:h-full lg:w-1/2`}
        >
          <img
            src={equipmentImage}
            alt="Экскаватор JCB 3CX"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialEquipmentRentalPage;
