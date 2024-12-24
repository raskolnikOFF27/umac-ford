// src/components/Header/Header.jsx

import React, { useState, useEffect, forwardRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useScroll } from "../../context/ScrollContext";
import { HeaderVisibilityContext } from "../../context/HeaderVisibilityContext";

const Header = forwardRef(({ className = "" }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const { isHeaderVisible, setIsHeaderVisible } = useContext(
    HeaderVisibilityContext
  );

  // Блокируем/разблокируем прокрутку при открытии/закрытии меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
    } else {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку
    }

    return () => {
      document.body.style.overflow = ""; // Убираем блокировку при размонтировании компонента
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      scrollTo(section);
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    closeMenu();
  };

  return (
    <>
      <header
        ref={ref}
        className={`${styles.header} ${className} ${
          isHeaderVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                closeMenu();
              }}
            >
              <img src={logo} alt="Юмак Форд Логотип" className={styles.logo} />
            </Link>
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            <ul className={styles.navList}>
              <li>
                <button
                  className={styles.navLink}
                  onClick={() => handleScroll("about")}
                >
                  О компании
                </button>
              </li>
              <li>
                <button
                  className={styles.navLink}
                  onClick={() => handleScroll("services")}
                >
                  Наши услуги
                </button>
              </li>
              <li>
                <button
                  className={styles.navLink}
                  onClick={() => handleScroll("reviews")}
                >
                  Отзывы
                </button>
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
              <li>
                <Link
                  to="/special-equipment-rentals"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Аренда спецтехники
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
        <div className={styles.navOverlay} onClick={closeMenu}>
          <ul className={styles.nav_overlay_list}>
            <li>
              <button
                className={styles.nav_overlay_link}
                onClick={() => handleScroll("about")}
              >
                О компании
              </button>
            </li>
            <li>
              <button
                className={styles.nav_overlay_link}
                onClick={() => handleScroll("services")}
              >
                Наши услуги
              </button>
            </li>
            <li>
              <button
                className={styles.nav_overlay_link}
                onClick={() => handleScroll("reviews")}
              >
                Отзывы
              </button>
            </li>
            <li>
              <Link
                to="/rentals"
                className={styles.nav_overlay_link}
                onClick={closeMenu}
              >
                Аренда автомобилей
              </Link>
            </li>
            <li>
              <Link
                to="/special-equipment-rentals"
                className={styles.nav_overlay_link}
                onClick={closeMenu}
              >
                Аренда спецтехники
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Header;
