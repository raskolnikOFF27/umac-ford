// src/context/ScrollContext.jsx

import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionsRef = useRef({});

  const registerRef = (section, ref) => {
    sectionsRef.current[section] = ref;
  };

  const scrollTo = (section) => {
    const ref = sectionsRef.current[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => React.useContext(ScrollContext);
