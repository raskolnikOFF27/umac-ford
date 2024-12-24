// src/router/AppRouter.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import CarRentalPage from "../pages/CarRentalPage/CarRentalPage";
import SpecialEquipmentRentalPage from "../pages/SpecialEquipmentRentalPage/SpecialEquipmentRentalPage";
import { ScrollProvider } from "../context/ScrollContext.jsx";
import ScrollToTop from "../components/ScrollToTop"; // Импортируйте ScrollToTop

const AppRouter = () => {
  return (
    <ScrollProvider>
      <ScrollToTop /> {/* Добавьте ScrollToTop здесь */}
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rentals" element={<CarRentalPage />} />
          <Route
            path="/special-equipment-rentals"
            element={<SpecialEquipmentRentalPage />}
          />
          {/* Добавьте другие маршруты по необходимости */}
        </Routes>
      </Layout>
    </ScrollProvider>
  );
};

export default AppRouter;
