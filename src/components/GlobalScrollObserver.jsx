"use client";
import { useEffect } from "react";

export default function GlobalScrollObserver() {
  useEffect(() => {
    // Force page scroll to top (Hero section) on refresh/mount
    if (typeof window !== "undefined") {
      // Instantly scroll to top
      window.scrollTo(0, 0);
      
      // Remove trailing URL hashes to prevent standard browser scroll restoration to elements
      if (window.location.hash) {
        window.history.replaceState(null, null, " ");
      }

      // Scroll reset handler before unload
      const resetScroll = () => {
        window.scrollTo(0, 0);
      };
      window.addEventListener("beforeunload", resetScroll);

      // Fast fallback timeout to override browser restoration
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);

      return () => {
        window.removeEventListener("beforeunload", resetScroll);
        clearTimeout(timer);
      };
    }
  }, []);

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
      '[class*="anim-"]'
    );

    animatedElements.forEach((el) => {
      // Don't observe if it's an inner word animation (let parent trigger it)
      if (!el.classList.contains('anim-word-3d')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
