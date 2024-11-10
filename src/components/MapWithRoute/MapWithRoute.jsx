import React, { useRef, useEffect } from "react";
import { Card, Typography } from "antd";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-filled.svg";
import { ReactComponent as VkIcon } from "../../assets/icons/vk-filled.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-filled.svg";
import styles from "./MapWithRoute.module.scss";

const { Title, Text } = Typography;

const MapWithRoute = () => {
  const mapRef = useRef(null);
  const isMapInitialized = useRef(false);

  useEffect(() => {
    if (window.ymaps && !isMapInitialized.current) {
      window.ymaps.ready(initMap);
      isMapInitialized.current = true;
    }

    function initMap() {
      if (mapRef.current && window.ymaps) {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [56.776364, 60.564156],
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"],
        });

        const placemark = new window.ymaps.Placemark(
          [56.776364, 60.564156],
          {
            hintContent: "ЮмакФорд",
            balloonContent:
              "Автосервис, автотехцентр<br>ул. Академика Вонсовского, 1Ж, Екатеринбург",
          },
          {
            preset: "islands#icon",
            iconColor: "#9D0208",
          }
        );

        map.geoObjects.add(placemark);

        const multiRoute = new window.ymaps.multiRouter.MultiRoute(
          {
            referencePoints: [
              [56.780547, 60.55934],
              [56.776364, 60.564156],
            ],
            params: {
              routingMode: "pedestrian",
            },
          },
          {
            wayPointStartIconColor: "#9D0208",
            wayPointFinishIconColor: "#9D0208",
            routeActiveStrokeColor: "#9D0208",
            routeStrokeWidth: 4,
          }
        );

        map.geoObjects.add(multiRoute);
      }
    }
  }, []);

  return (
    <div className={styles.mapSection}>
      <Title level={2} className={styles.title}>
        Как до нас добраться
      </Title>

      <div className={styles.contentContainer}>
        <div className={styles.contacts}>
          <Card className={styles.contactCard}>
            <Text strong>Адрес:</Text>
            <Text>ул. Академика Вонсовского, 1Ж, Екатеринбург</Text>
          </Card>
          <Card className={styles.contactCard}>
            <Text strong>Телефон:</Text>
            <Text>+7 (343) 123-45-67</Text>
          </Card>
          {/* Блок с социальными сетями */}
          <div className={styles.socialBlock}>
            <a
              className={styles.socialCard}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/umakford_plus/"
            >
              <InstagramIcon className={styles.icon} />
            </a>
            <a
              className={styles.socialCard}
              target="_blank"
              rel="noreferrer"
              href="https://t.me/umakford"
            >
              <TelegramIcon className={styles.icon} />
            </a>
            <a
              className={styles.socialCard}
              target="_blank"
              rel="noreferrer"
              href="https://vk.com/umakford"
            >
              <VkIcon className={styles.icon} />
            </a>
          </div>
        </div>

        <div id="map" ref={mapRef} className={styles.map}></div>
      </div>
    </div>
  );
};

export default MapWithRoute;
