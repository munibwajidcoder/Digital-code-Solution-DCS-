"use client";
import { useEffect } from "react";

export default function GlobalScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Play only once for smoother UX
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const animatedElements = document.querySelectorAll(
      ".anim-fade-in, .anim-slide-up, .anim-slide-up-sm, .anim-slide-left, .anim-slide-right, .anim-scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
