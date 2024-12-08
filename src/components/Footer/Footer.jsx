// src/components/Footer/Footer.jsx
import React, { forwardRef } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom"; // Импортируем Link для якорных ссылок
import styles from "./Footer.module.scss";
import vkIcon from "../../assets/icons/vk-icon.svg";
import telegramIcon from "../../assets/icons/telegram-icon.svg";
import instagramIcon from "../../assets/icons/instagram-logo.svg";

const { Footer: AntFooter } = Layout;

const Footer = forwardRef(({ className = "", isVisible }, ref) => {
  return (
    <AntFooter ref={ref} className={`${styles.footer} ${className}`}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link to="/#about">О компании</Link>{" "}
          {/* Прокрутка к разделу 'about' */}
          <Link to="/#services">Наши услуги</Link>{" "}
          {/* Прокрутка к разделу 'services' */}
          <Link to="/#reviews">Отзывы</Link>{" "}
          {/* Прокрутка к разделу 'reviews' */}
          <Link to="/rentals">Аренда автомобилей</Link>{" "}
          {/* Переход на страницу аренды автомобилей */}
          <Link to="/special-equipment-rentals">Аренда спецтехники</Link>{" "}
          {/* Переход на страницу аренды спецтехники */}
        </div>
        <div className={styles.socialMedia}>
          <a target="_blank" rel="noreferrer" href="https://vk.com/umakford">
            <img src={vkIcon} alt="Vk" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/umakford">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/umakford_plus/"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a> */}
        </div>
        <p>© {new Date().getFullYear()} Юмак Форд. Все права защищены.</p>
      </div>
    </AntFooter>
  );
});

export default Footer;
