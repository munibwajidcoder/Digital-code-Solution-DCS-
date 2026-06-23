"use client";
import React, { useRef, useEffect, useState } from "react";

export default function PinnedScrollWrapper({ children }) {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;
      if (isMobile) {
        stickyRef.current.style.setProperty("--scroll-progress", 0);
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();
      const stickyTop = 120; // 120px offset to clear the sticky/floating navbar
      
      const totalScroll = rect.height - stickyRect.height;
      const scrolled = stickyTop - rect.top;
      
      let progress = scrolled / totalScroll;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      stickyRef.current.style.setProperty("--scroll-progress", progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} style={{ height: isMobile ? "auto" : "400vh", position: "relative" }}>
      <div 
        ref={stickyRef} 
        style={{ 
          position: isMobile ? "relative" : "sticky", 
          top: isMobile ? "auto" : "120px", 
          height: "auto", 
          overflow: "visible" 
        }}
      >
        {children}
      </div>
    </div>
  );
}
