"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LOADING_MS = 4000;
const FADE_MS = 400;

const SKIP_INTRO = process.env.NEXT_PUBLIC_SKIP_INTRO === "true";

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export default function CinematicIntro({ onComplete }) {
  const [active, setActive] = useState(false);
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);

  const rafRef = useRef(null);
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const finishIntro = useCallback(() => {
    setActive(false);
    document.body.classList.remove("intro-locked");
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (SKIP_INTRO) {
      onComplete?.();
      return undefined;
    }

    setActive(true);
    document.body.classList.add("intro-locked");

    const startTimer = setTimeout(() => {
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / LOADING_MS);
        setPercent(Math.min(100, Math.floor(easeInOutQuad(t) * 100)));

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setFading(true);
          const fadeTimer = setTimeout(finishIntro, FADE_MS);
          timersRef.current.push(fadeTimer);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, 80);

    timersRef.current.push(startTimer);

    return () => {
      clearTimers();
      document.body.classList.remove("intro-locked");
    };
  }, [clearTimers, onComplete, finishIntro]);

  if (!active) return null;

  return (
    <div className={`cinematic-intro${fading ? " cinematic-intro--fade" : ""}`}>
      <div className="cinematic-intro__loading">
        <div className="cinematic-intro__percent">{percent}%</div>
        <div className="cinematic-intro__loading-label">Loading...</div>
      </div>
    </div>
  );
}
