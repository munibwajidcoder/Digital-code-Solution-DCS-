"use client";

import { createContext, useContext } from "react";

const IntroGateContext = createContext(false);

export function IntroGateProvider({ introComplete, children }) {
  return (
    <IntroGateContext.Provider value={introComplete}>
      {children}
    </IntroGateContext.Provider>
  );
}

export function useIntroComplete() {
  return useContext(IntroGateContext);
}
