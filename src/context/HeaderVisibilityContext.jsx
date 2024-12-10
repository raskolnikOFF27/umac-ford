// src/context/HeaderVisibilityContext.jsx

import React, { createContext, useState } from "react";

export const HeaderVisibilityContext = createContext();

export const HeaderVisibilityProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    <HeaderVisibilityContext.Provider
      value={{ isHeaderVisible, setIsHeaderVisible }}
    >
      {children}
    </HeaderVisibilityContext.Provider>
  );
};
