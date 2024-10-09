import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import CarRentalPage from "../pages/CarRentalPage/CarRentalPage";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rentals" element={<CarRentalPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
