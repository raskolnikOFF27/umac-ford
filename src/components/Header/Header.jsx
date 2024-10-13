import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";

const Header = ({ scrollToAbout, scrollToServices }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Юмак Форд Логотип" className={styles.logo} />
            </Link>
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            <ul className={styles.navList}>
              <li>
                <Link
                  className={styles.navLink}
                  onClick={() => {
                    scrollToAbout();
                    closeMenu();
                  }}
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  onClick={() => {
                    scrollToServices();
                    closeMenu();
                  }}
                >
                  Наши услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Аренда автомобилей
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseOutlined className={styles.icon} />
            ) : (
              <MenuOutlined className={styles.icon} />
            )}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={styles.navOverlay} onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Header;
