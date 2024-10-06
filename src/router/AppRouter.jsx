import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
// import AboutPage from "../pages/AboutPage";
// import ServicesPage from "../pages/ServicesPage";
// import ReviewsPage from "../pages/ReviewsPage";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
