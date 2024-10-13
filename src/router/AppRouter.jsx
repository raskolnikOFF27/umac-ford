import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import CarRentalPage from "../pages/CarRentalPage/CarRentalPage";
import SpecialEquipmentRentalPage from "../pages/SpecialEquipmentRentalPage/SpecialEquipmentRentalPage"; // Импорт новой страницы
import { ScrollProvider } from "../context/ScrollContext";

const AppRouter = () => {
  return (
    <Router>
      <ScrollProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rentals" element={<CarRentalPage />} />
            <Route
              path="/special-equipment-rentals"
              element={<SpecialEquipmentRentalPage />}
            />{" "}
            {/* Новый маршрут */}
          </Routes>
        </Layout>
      </ScrollProvider>
    </Router>
  );
};

export default AppRouter;
