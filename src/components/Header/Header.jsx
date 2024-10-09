import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg"; // Импортируем логотип

const Header = () => {
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
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Наши услуги
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Отзывы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rentals"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Аренда автомобилей
                </NavLink>
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
