// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter basename="/umac-ford">
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
