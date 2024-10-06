import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg"; // Импортируем логотип

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logoWrapper}>
          <img
            src={logo}
            alt="Юмак Форд Логотип"
            className={styles.logo}
            onClick={scrollToTop} // Добавляем обработчик клика для логотипа
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#about">О компании</a>
            </li>
            <li>
              <a href="#services">Наши услуги</a>
            </li>
            <li>
              <a href="#reviews">Отзывы</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
