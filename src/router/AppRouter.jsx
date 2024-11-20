// src/router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import CarRentalPage from "../pages/CarRentalPage/CarRentalPage";
import SpecialEquipmentRentalPage from "../pages/SpecialEquipmentRentalPage/SpecialEquipmentRentalPage";
import { ScrollProvider } from "../context/ScrollContext";

const AppRouter = () => {
  return (
    <ScrollProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rentals" element={<CarRentalPage />} />
          <Route
            path="/special-equipment-rentals"
            element={<SpecialEquipmentRentalPage />}
          />
        </Routes>
      </Layout>
    </ScrollProvider>
  );
};

export default AppRouter;
