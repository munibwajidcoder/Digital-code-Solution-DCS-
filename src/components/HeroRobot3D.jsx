"use client";

import { useState, useEffect } from "react";
import { SplineScene } from "./SplineScene";
import { useIntroComplete } from "./IntroGateContext";

const ROBOT_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const ROBOT_DELAY_MS = 1000;

export default function HeroRobot3D() {
  const introComplete = useIntroComplete();
  const [showRobot, setShowRobot] = useState(false);

  useEffect(() => {
    if (!introComplete) return;
    const timer = setTimeout(() => setShowRobot(true), ROBOT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [introComplete]);

  return (
    <div className="hero-robot-wrap">
      <div className="hero-robot-scale">
        {showRobot && (
          <SplineScene scene={ROBOT_SCENE} className="hero-robot-spline" />
        )}
      </div>
    </div>
  );
}
