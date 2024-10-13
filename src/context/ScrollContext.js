// src/context/ScrollContext.js
import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const refs = useRef({});

  const registerRef = (key, ref) => {
    refs.current[key] = ref;
  };

  const scrollTo = (key) => {
    const ref = refs.current[key];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
