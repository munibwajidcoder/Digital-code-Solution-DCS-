"use client";
import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector(".nav-pill-outer");
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
