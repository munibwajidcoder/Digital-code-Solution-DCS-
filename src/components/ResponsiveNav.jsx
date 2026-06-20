"use client";
import { useState, useEffect } from "react";
import NavScrollEffect from "./NavScrollEffect";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav-pill-outer">
      <NavScrollEffect />
      <header className="nav-container anim-fade-in">
        {/* Logo */}
        <a href="#" className="logo-brand">
          <div className="logo-img-wrap">
            <img src="/images/logo.png" alt="DCS Logo" className="logo-img" />
          </div>
          <div className="logo-text-wrap">
            <span className="logo-line">
              Digital <span className="logo-accent">Code</span>
            </span>
            <span className="logo-line">Solution</span>
          </div>
        </a>

        {/* Hamburger Menu Icon */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Nav Links & Mobile CTA */}
        <div className={`nav-menu-wrapper ${isOpen ? "mobile-open" : ""}`}>
          <nav aria-label="Primary navigation">
            <ul className="nav-menu-list">
              <li style={{ animationDelay: "0.1s" }} className={isOpen ? "anim-slide-left is-visible" : ""}>
                <a href="#" className="nav-menu-link active" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li style={{ animationDelay: "0.2s" }} className={isOpen ? "anim-slide-left is-visible" : ""}>
                <a href="#services" className="nav-menu-link" onClick={() => setIsOpen(false)}>Services</a>
              </li>
              <li style={{ animationDelay: "0.3s" }} className={isOpen ? "anim-slide-left is-visible" : ""}>
                <a href="#portfolio" className="nav-menu-link" onClick={() => setIsOpen(false)}>Portfolio</a>
              </li>
              <li style={{ animationDelay: "0.4s" }} className={isOpen ? "anim-slide-left is-visible" : ""}>
                <a href="#about" className="nav-menu-link" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li style={{ animationDelay: "0.5s" }} className={isOpen ? "anim-slide-left is-visible" : ""}>
                <a href="#contact" className="nav-menu-link" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
              
              {/* Mobile CTA Button */}
              <li style={{ animationDelay: "0.6s", marginTop: "1rem" }} className={`mobile-cta-item ${isOpen ? "anim-slide-left is-visible" : ""}`}>
                <a href="#contact" className="btn-nav-cta" onClick={() => setIsOpen(false)}>
                  <span>Get In Touch</span>
                  <span className="btn-nav-cta-glow" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="btn-nav-cta desktop-only">
          <span>Get In Touch</span>
          <span className="btn-nav-cta-glow" />
        </a>
      </header>
    </div>
  );
}
