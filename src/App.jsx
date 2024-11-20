// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
