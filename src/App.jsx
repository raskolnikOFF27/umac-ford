// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <BrowserRouter basename="/umac-ford">
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;