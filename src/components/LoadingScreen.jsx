"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 8000;
const PAUSE_MS = 200;

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);
  const raf = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / DURATION);
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      setPercent(Math.min(100, Math.floor(eased * 100)));

      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        const t1 = setTimeout(() => {
          setFading(true);
          const t2 = setTimeout(onComplete, 400);
          timers.current.push(t2);
        }, PAUSE_MS);
        timers.current.push(t1);
      }
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      timers.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen${fading ? " loading-screen--fade" : ""}`}>
      <div className="loading-screen__inner">
        <span className="loading-screen__percent">{percent}%</span>
        <span className="loading-screen__label">Loading...</span>
      </div>
    </div>
  );
}
