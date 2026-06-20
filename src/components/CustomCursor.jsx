"use client";

import { useEffect, useRef, useCallback } from "react";

const EASE = 0.15;
const TRAIL_EASE = 0.08;
const SCALE_HOVER = 1.8;
const SCALE_DEFAULT = 1;
const MAGNETIC_STRENGTH = 0.3;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const scale = useRef(SCALE_DEFAULT);
  const targetScale = useRef(SCALE_DEFAULT);
  const raf = useRef(null);
  const isHovering = useRef(false);
  const magneticTarget = useRef(null);

  const onMouseMove = useCallback((e) => {
    target.current.x = e.clientX;
    target.current.y = e.clientY;
  }, []);

  useEffect(() => {
    const initInteractiveElements = () => {
      const els = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, .btn-primary, .btn-outline, .btn-nav-cta, .nav-menu-link, .hero-cta-buttons, .glass-panel, .stat-item, .logo-brand'
      );

      els.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering.current = true;
          targetScale.current = SCALE_HOVER;
          document.body.classList.add("cursor-hover");
        });

        el.addEventListener("mouseleave", () => {
          isHovering.current = false;
          targetScale.current = SCALE_DEFAULT;
          magneticTarget.current = null;
          document.body.classList.remove("cursor-hover");
        });

        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) * MAGNETIC_STRENGTH;
          const dy = (e.clientY - cy) * MAGNETIC_STRENGTH;
          magneticTarget.current = { x: dx, y: dy };
        });
      });
    };

    const onResize = () => {
      initInteractiveElements();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    initInteractiveElements();

    const tick = () => {
      const mx = magneticTarget.current ? magneticTarget.current.x : 0;
      const my = magneticTarget.current ? magneticTarget.current.y : 0;

      pos.current.x += (target.current.x + mx - pos.current.x) * EASE;
      pos.current.y += (target.current.y + my - pos.current.y) * EASE;

      trailPos.current.x += (target.current.x - trailPos.current.x) * TRAIL_EASE;
      trailPos.current.y += (target.current.y - trailPos.current.y) * TRAIL_EASE;

      scale.current += (targetScale.current - scale.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale.current})`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) scale(${scale.current * 0.8})`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [onMouseMove]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="custom-cursor-trail" />
      <div ref={glowRef} className="custom-cursor-glow" />
    </>
  );
}
