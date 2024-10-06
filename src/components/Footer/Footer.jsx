// src/components/Footer/Footer.js
import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.scss";
import vkIcon from "../../assets/icons/vk-icon.svg";
import telegramIcon from "../../assets/icons/telegram-icon.svg";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#services" className="smooth-scroll">
            Услуги
          </a>
          <a href="#about" className="smooth-scroll">
            О нас
          </a>
          <a href="#contact-form" className="smooth-scroll">
            Запись
          </a>
          <a href="#contacts" className="smooth-scroll">
            Контакты
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a target="_blank" rel="noreferrer" href="https://vk.com/umakford">
            <img src={vkIcon} alt="Vk" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/umakford">
            <img src={telegramIcon} alt="Telegram" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Юмак Форд. Все права защищены.</p>
      </div>
    </AntFooter>
  );
};

export default Footer;
