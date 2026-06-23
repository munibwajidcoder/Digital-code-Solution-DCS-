"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavScrollEffect from "./NavScrollEffect";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      <header className="nav-container anim-3d-reveal">
        {/* Logo */}
        <a href="/" className="logo-brand">
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
              <li style={{ animationDelay: "0.1s" }} className={isOpen ? "anim-3d-reveal is-visible" : ""}>
                <a href="/" className={`nav-menu-link ${pathname === "/" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li 
                style={{ animationDelay: "0.2s" }} 
                className={`nav-menu-item-dropdown ${isOpen ? "anim-3d-reveal is-visible" : ""}`}
              >
                <a href="/services" className={`nav-menu-link ${pathname === "/services" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                  Services
                  <svg className="dropdown-arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px", display: "inline-block", transition: "transform 0.2s ease" }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div className="nav-dropdown-menu">
                  <a href="/services/web-development" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> Web Development
                  </a>
                  <a href="/services/app-development" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> App Development
                  </a>
                  <a href="/services/ai-chatbot" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> AI Chatbot Development
                  </a>
                  <a href="/services/game-development" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> Game Development
                  </a>
                  <a href="/services/ui-ux-design" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> UI/UX Design
                  </a>
                  <a href="/services/graphic-design" className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                    <span className="nav-dropdown-bullet">◈</span> Graphic Design
                  </a>
                </div>
              </li>
              <li style={{ animationDelay: "0.3s" }} className={isOpen ? "anim-3d-reveal is-visible" : ""}>
                <a href="/#portfolio" className={`nav-menu-link ${pathname === "/#portfolio" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Portfolio</a>
              </li>
              <li style={{ animationDelay: "0.4s" }} className={isOpen ? "anim-3d-reveal is-visible" : ""}>
                <a href="/#about" className={`nav-menu-link ${pathname === "/#about" ? "active" : ""}`} onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li style={{ animationDelay: "0.5s" }} className={isOpen ? "anim-3d-reveal is-visible" : ""}>
                <a href="/#contact" className={`nav-menu-link ${pathname === "/#contact" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Contact</a>
              </li>
              
              {/* Mobile CTA Button */}
              <li style={{ animationDelay: "0.6s", marginTop: "1rem" }} className={`mobile-cta-item ${isOpen ? "anim-3d-reveal is-visible" : ""}`}>
                <a href="/#contact" className="btn-nav-cta" onClick={() => setIsOpen(false)}>
                  <span>Get In Touch</span>
                  <span className="btn-nav-cta-glow" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop CTA */}
        <a href="/#contact" className="btn-nav-cta desktop-only">
          <span>Get In Touch</span>
          <span className="btn-nav-cta-glow" />
        </a>
      </header>
    </div>
  );
}
