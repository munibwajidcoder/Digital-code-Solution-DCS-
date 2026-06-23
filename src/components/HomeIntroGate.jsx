"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { IntroGateProvider } from "./IntroGateContext";

export default function HomeIntroGate({ children }) {
  const [loaded, setLoaded] = useState(true); // Temporarily set to true to disable loading screen

  return (
    <IntroGateProvider introComplete={loaded}>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={loaded ? "page-content page-content--visible" : "page-content page-content--hidden"}>
        {children}
      </div>
    </IntroGateProvider>
  );
}
