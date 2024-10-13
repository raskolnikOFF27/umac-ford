import React, { useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);

  // Прокрутка к "О компании"
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Прокрутка к "Наши услуги"
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Прокрутка к "Отзывы"
  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.layout}>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToServices={scrollToServices}
        scrollToReviews={scrollToReviews}
      />
      <main className={styles.mainContent}>
        <div ref={aboutRef}>{children}</div>
        <div ref={servicesRef}>{children}</div>
        <div ref={reviewsRef}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
