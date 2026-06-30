"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../../components/ResponsiveNav";
import GlobalScrollObserver from "../../../components/GlobalScrollObserver";

const TECH_FRONTEND = [
  { name: "React.js", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Vue.js", img: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "HTML5", img: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", img: "/images/css3_icon.svg" },
  { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

const TECH_BACKEND = [
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "PHP", img: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", img: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "WordPress", img: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/47A248" },
];

export default function WebDevPageClient() {
  const cardRefs = useRef([]);
  const laptopRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.setProperty("--glow-opacity", "1");
    card.style.setProperty("--tilt-y-offset", "-5px");
    card.style.setProperty("--tilt-scale", "1.015");
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
    card.style.setProperty("--glow-opacity", "0");
    card.style.setProperty("--tilt-y-offset", "0px");
    card.style.setProperty("--tilt-scale", "1");
  };

  const handleLaptopMouseMove = (e) => {
    const laptop = laptopRef.current;
    if (!laptop) return;

    const rect = laptop.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    laptop.style.setProperty("--laptop-tilt-x", `${rotateX}deg`);
    laptop.style.setProperty("--laptop-tilt-y", `${rotateY}deg`);
  };

  const handleLaptopMouseLeave = () => {
    const laptop = laptopRef.current;
    if (!laptop) return;

    laptop.style.setProperty("--laptop-tilt-x", "0deg");
    laptop.style.setProperty("--laptop-tilt-y", "0deg");
  };

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="svc-hero" aria-label="Web Development Services Hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1350px" }}>
          {/* Left Hero info column */}
          <div className="ai-hero-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100" style={{ margin: "0 0 16px 0" }}>
              <span style={{ color: "#a855f7" }}>✦</span> Web Development Services
            </div>

            <div className="anim-3d-reveal delay-150" style={{ fontSize: "0.9rem", fontWeight: "700", letterSpacing: "0.08em", color: "var(--purple-glow)", textTransform: "uppercase", marginBottom: "8px" }}>
              — Crafted for Growth
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", textAlign: "left", lineHeight: "1.15" }}>
              PREMIUM <span className="text-gradient-purple">WEB DEVELOPMENT</span> <br />
              THAT DRIVES RESULTS
            </h1>

            <div className="web-dev-hero-bullets anim-3d-reveal delay-300" style={{ flexWrap: "wrap", gap: "8px", margin: "8px 0 16px" }}>
              <span>Modern</span> <span className="bullet-dot">•</span> 
              <span>Fast</span> <span className="bullet-dot">•</span> 
              <span>Responsive</span> <span className="bullet-dot">•</span> 
              <span>Scalable</span>
            </div>

            <p className="svc-hero-desc anim-3d-reveal delay-300" style={{ maxWidth: "540px", margin: "0 0 24px 0", textAlign: "left" }}>
              We build high-performance websites that attract customers, elevate your brand, and generate real business results.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400" style={{ justifyContent: "flex-start", width: "100%" }}>
              <a href="#contact" className="btn-primary">
                Get a Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#portfolio" className="btn-outline">
                View Our Portfolio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Showcase image and floating stats */}
          <div className="ai-hero-right anim-3d-reveal delay-300" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "560px" }}>
              {/* Main Showcase Image */}
              <img 
                src="/images/svc_web_dev.png" 
                alt="Web Development Showcase" 
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  objectFit: "contain",
                  filter: "drop-shadow(0 15px 35px rgba(122, 34, 255, 0.25))"
                }} 
              />
              
              {/* Floating Badges */}
              {/* Badge 1: Speed Score */}
              <div className="hero-glass-card-2" style={{ top: "15%", right: "-25px", position: "absolute", width: "155px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ 
                    width: "36px", 
                    height: "36px", 
                    borderRadius: "50%", 
                    background: "rgba(168, 85, 247, 0.15)", 
                    border: "1px solid rgba(168, 85, 247, 0.3)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <span style={{ fontSize: "1.2rem" }}>⚡</span>
                  </div>
                  <div>
                    <div className="hero-glass-value" style={{ fontSize: "1.05rem", lineHeight: "1.2" }}>99/100</div>
                    <div className="hero-glass-label" style={{ margin: 0, fontSize: "0.65rem" }}>Speed Score ⚡</div>
                  </div>
                </div>
              </div>

              {/* Badge 2: Clean Code */}
              <div className="hero-glass-card-1" style={{ bottom: "10%", right: "-45px", position: "absolute", left: "auto", top: "auto", width: "155px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ 
                    width: "36px", 
                    height: "36px", 
                    borderRadius: "50%", 
                    background: "rgba(168, 85, 247, 0.15)", 
                    border: "1px solid rgba(168, 85, 247, 0.3)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-glass-value" style={{ fontSize: "1.05rem", lineHeight: "1.2" }}>Clean Code</div>
                    <div className="hero-glass-label" style={{ margin: 0, fontSize: "0.65rem" }}>Modern Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE BUILD GRID ── */}
      <section className="svc-grid-section" id="what-we-build" aria-label="What We Build">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHAT WE BUILD
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Complete <span className="svc-heading-gradient">Web Development Solutions</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            From simple landing pages to complex enterprise platforms — we handle it all.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-cards-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {/* Card 1: Business Websites */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Business Websites</h3>
              <p className="svc-card-desc">Professional websites that establish credibility and convert visitors into customers.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 2: Landing Pages */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Landing Pages</h3>
              <p className="svc-card-desc">Performance-optimized landing pages designed for maximum lead generation and conversions.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 3: Portfolio Websites */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <line x1="12" y1="2" x2="12" y2="4"></line>
                  <line x1="12" y1="20" x2="12" y2="22"></line>
                  <line x1="2" y1="12" x2="4" y2="12"></line>
                  <line x1="20" y1="12" x2="22" y2="12"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">Portfolio Websites</h3>
              <p className="svc-card-desc">Stunning portfolio sites that showcase your work and attract high-value clients.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 4: Custom Web Solutions */}
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={() => handleMouseLeave(3)}
              className="svc-card anim-3d-reveal delay-400"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="svc-card-title">Custom Web Solutions</h3>
              <p className="svc-card-desc">Fully custom web applications and platforms tailored exactly to your unique business needs.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 5: Responsive Design */}
            <div
              ref={(el) => (cardRefs.current[4] = el)}
              onMouseMove={(e) => handleMouseMove(e, 4)}
              onMouseLeave={() => handleMouseLeave(4)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">Responsive Design</h3>
              <p className="svc-card-desc">Pixel-perfect, mobile-first designs that look flawless on every screen size and device.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 6: Speed Optimization */}
            <div
              ref={(el) => (cardRefs.current[5] = el)}
              onMouseMove={(e) => handleMouseMove(e, 5)}
              onMouseLeave={() => handleMouseLeave(5)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Speed Optimization</h3>
              <p className="svc-card-desc">Technical performance tuning for lightning-fast load times and perfect Core Web Vitals scores.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DEVELOPMENT PROCESS SECTION ── */}
      <section className="svc-grid-section" id="process" aria-label="Development Process" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            HOW WE WORK
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Our <span className="svc-heading-gradient">Web Development Process</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A proven 6-step process that ensures on-time delivery and exceptional quality.
          </p>
        </div>

        <div className="process-timeline-container anim-3d-reveal delay-300">
          <div className="process-timeline-track" />
          
          <div className="process-grid">
            {/* Step 1 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">1</div>
              </div>
              <h4 className="process-step-title">Discovery & Planning</h4>
              <p className="process-step-desc">Understanding your goals, audience, and technical requirements.</p>
            </div>

            {/* Step 2 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">2</div>
              </div>
              <h4 className="process-step-title">UI/UX Wireframing</h4>
              <p className="process-step-desc">Crafting detailed wireframes and user flow blueprints.</p>
            </div>

            {/* Step 3 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">3</div>
              </div>
              <h4 className="process-step-title">Visual Design</h4>
              <p className="process-step-desc">Building stunning, brand-aligned pixel-perfect designs.</p>
            </div>

            {/* Step 4 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">4</div>
              </div>
              <h4 className="process-step-title">Development</h4>
              <p className="process-step-desc">Clean, scalable code with modern frameworks and best practices.</p>
            </div>

            {/* Step 5 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">5</div>
              </div>
              <h4 className="process-step-title">Testing & QA</h4>
              <p className="process-step-desc">Rigorous cross-browser, performance, and security testing.</p>
            </div>

            {/* Step 6 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">6</div>
              </div>
              <h4 className="process-step-title">Launch & Support</h4>
              <p className="process-step-desc">Smooth deployment with ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TECHNOLOGIES WE USE ── */}
      <section className="svc-grid-section" id="technologies" aria-label="Technologies We Use">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            TECHNOLOGIES WE USE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Built With <span className="svc-heading-gradient">Modern Technologies</span>
          </h2>
        </div>

        <div className="tech-rows-wrapper anim-3d-reveal delay-200" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          {/* Frontend Row */}
          <div className="tech-row-group" style={{ marginBottom: "40px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>FRONTEND</div>
            <div className="svc-tech-grid">
              {TECH_FRONTEND.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Row */}
          <div className="tech-row-group">
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>BACKEND</div>
            <div className="svc-tech-grid">
              {TECH_BACKEND.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ── */}
      <section className="svc-grid-section" id="why-choose-us" aria-label="Why Choose Us" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHY CHOOSE US
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Why Businesses Choose <span className="svc-heading-gradient">Digital Code Solution</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid">
            {/* Benefit 1 */}
            <div className="why-card anim-3d-reveal delay-100">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4 className="why-card-title">Blazing Fast Performance</h4>
              <p className="why-card-desc">We optimize every line of code for sub-2-second load times and perfect Lighthouse scores.</p>
            </div>

            {/* Benefit 2 */}
            <div className="why-card anim-3d-reveal delay-200">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Secure & Reliable</h4>
              <p className="why-card-desc">Enterprise-level security, SSL, GDPR compliance, and 99.9% uptime guaranteed.</p>
            </div>

            {/* Benefit 3 */}
            <div className="why-card anim-3d-reveal delay-300">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">SEO-First Approach</h4>
              <p className="why-card-desc">Built from the ground up for search engine visibility, structured data, and organic growth.</p>
            </div>

            {/* Benefit 4 */}
            <div className="why-card anim-3d-reveal delay-400">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Premium UI/UX Design</h4>
              <p className="why-card-desc">Every site we build is a conversion-optimized visual experience that builds trust instantly.</p>
            </div>

            {/* Benefit 5 */}
            <div className="why-card anim-3d-reveal delay-500">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">Clean, Scalable Code</h4>
              <p className="why-card-desc">Maintainable, well-documented codebases that grow with your business.</p>
            </div>

            {/* Benefit 6 */}
            <div className="why-card anim-3d-reveal delay-600">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Dedicated Support</h4>
              <p className="why-card-desc">From launch day and beyond — we're your long-term technology partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RECENT WEB PROJECTS ── */}
      <section className="svc-grid-section" id="portfolio" aria-label="Recent Web Development Projects">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            OUR WORK
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Recent <span className="svc-heading-gradient">Web Development Projects</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="web-projects-grid">
            {/* Project 1 */}
            <div className="project-display-card anim-3d-reveal delay-100">
              <div className="project-img-wrapper">
                <img src="/images/portfolio/project1.png" alt="Fashion Store E-Commerce Mockup" className="project-thumb-img" />
                <div className="project-cat-badge">E-Commerce</div>
              </div>
              <div className="project-display-body">
                <h4 className="project-display-title">Fashion Store</h4>
                <p className="project-display-desc">Modern e-commerce platform with advanced filtering and payments.</p>
                <div className="project-tech-tags">
                  <span>React</span> <span>Next.js</span> <span>MongoDB</span>
                </div>
                <a href="#contact" className="project-case-link">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-display-card anim-3d-reveal delay-200">
              <div className="project-img-wrapper">
                <img src="/images/portfolio/project2.png" alt="Tech Solutions Corporate Mockup" className="project-thumb-img" />
                <div className="project-cat-badge">Corporate</div>
              </div>
              <div className="project-display-body">
                <h4 className="project-display-title">Tech Solutions</h4>
                <p className="project-display-desc">Corporate website for a leading IT solutions company.</p>
                <div className="project-tech-tags">
                  <span>React</span> <span>Tailwind</span> <span>CMS</span>
                </div>
                <a href="#contact" className="project-case-link">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-display-card anim-3d-reveal delay-300">
              <div className="project-img-wrapper">
                <img src="/images/portfolio/project3.png" alt="Task Management SaaS Mockup" className="project-thumb-img" />
                <div className="project-cat-badge">SaaS Platform</div>
              </div>
              <div className="project-display-body">
                <h4 className="project-display-title">Task Management App</h4>
                <p className="project-display-desc">SaaS platform for team collaboration and task management.</p>
                <div className="project-tech-tags">
                  <span>React</span> <span>Laravel</span> <span>MySQL</span>
                </div>
                <a href="#contact" className="project-case-link">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <a href="/portfolio" className="btn-outline anim-3d-reveal">
              VIEW FULL PORTFOLIO
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>



      {/* ── 8. CLIENT REVIEWS SECTION ── */}
      <section className="svc-testi-section" id="reviews" aria-label="Client Reviews">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            CLIENT REVIEWS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What Our <span className="svc-heading-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-testi-grid">
            {/* Review 1 */}
            <div className="svc-testi-card anim-3d-reveal delay-100">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                "Digital Code Solution delivered an amazing website that exceeded our expectations. Their attention to detail and support is unmatched."
              </p>
              <div className="svc-testi-author">
                <img src="/images/testimonials/avatar1.png" alt="James Smith Profile Photo" className="svc-testi-avatar" />
                <div>
                  <div className="svc-testi-name">James Smith</div>
                  <div className="svc-testi-role">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="svc-testi-card anim-3d-reveal delay-200">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                "Professional, reliable, and highly skilled team. Our website is fast, secure, and brings us a lot of new customers."
              </p>
              <div className="svc-testi-author">
                <img src="/images/testimonials/avatar2.png" alt="Sarah Johnson Profile Photo" className="svc-testi-avatar" />
                <div>
                  <div className="svc-testi-name">Sarah Johnson</div>
                  <div className="svc-testi-role">Marketing Head, GrowBiz</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="svc-testi-card anim-3d-reveal delay-300">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                "Highly recommended! They understood our requirements perfectly and delivered on time with excellent quality."
              </p>
              <div className="svc-testi-author">
                <img src="/images/testimonials/avatar3.png" alt="Michael Brown Profile Photo" className="svc-testi-avatar" />
                <div>
                  <div className="svc-testi-name">Michael Brown</div>
                  <div className="svc-testi-role">Founder, Startify</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="reviews-slider-dots" style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "40px" }}>
            <span className="slider-dot active" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--purple-glow)" }} />
            <span className="slider-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
            <span className="slider-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </section>

      {/* ── 9. BOTTOM CTA CONTACT BLOCK ── */}
      <section className="contact-section" id="contact" style={{ paddingBottom: "60px" }}>
        <div className="contact-bg" aria-hidden="true">
          <div className="contact-orb contact-orb-1" />
          <div className="contact-orb contact-orb-2" />
        </div>
        
        <div className="contact-container">
          <div className="contact-inner" style={{ background: "transparent", border: "none", boxShadow: "none" }}>
            {/* Left Info Block */}
            <div className="contact-info">
              <span className="contact-eyebrow anim-3d-reveal">
                <span className="contact-eyebrow-dot" />
                READY TO BUILD YOUR DREAM WEBSITE?
              </span>
              <h2 className="contact-heading anim-3d-reveal delay-100">
                Let's create something <span className="contact-heading-gradient">extraordinary together.</span>
              </h2>
              <p className="contact-desc anim-3d-reveal delay-200">
                Free consultation, no commitment. Share your requirements and let's get started.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item anim-3d-reveal delay-300">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email Us</span>
                    <span className="contact-detail-value">digitalcodesolution.company@gmail.com</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-reveal delay-400">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Call Us</span>
                    <span className="contact-detail-value">+92 370 302 2622</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-reveal delay-500">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Block */}
            <div className="contact-form-wrap anim-3d-reveal delay-200">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Your Name</label>
                    <input type="text" className="contact-input" placeholder="John Doe" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address</label>
                    <input type="email" className="contact-input" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label">Subject</label>
                  <input type="text" className="contact-input" placeholder="Web Project Inquiry" />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea className="contact-textarea" rows="5" placeholder="Describe your web project requirements..."></textarea>
                </div>
                
                {/* Drag & Drop Document Uploader */}
                <div className="contact-field">
                  <label className="contact-label">Add Document</label>
                  <div 
                    className="contact-file-dropzone"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      style={{ display: "none" }} 
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                    {uploadedFile ? (
                      <div className="contact-file-selected">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-file-icon">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <div className="contact-file-info">
                          <span className="contact-file-name">{uploadedFile.name}</span>
                          <span className="contact-file-size">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                        <button 
                          type="button" 
                          className="contact-file-remove" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                          }}
                          aria-label="Remove file"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="contact-file-placeholder">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-upload-icon">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span className="contact-upload-text">Click to upload or drag & drop</span>
                        <span className="contact-upload-hint">PDF, DOC, DOCX, PNG, JPG (Max 10MB)</span>
                      </div>
                    )}
                  </div>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand anim-footer-lift delay-100">
              <a href="#" className="footer-logo">
                <img src="/images/logo.png" alt="DCS Logo" style={{ width: '44px', height: 'auto', filter: 'drop-shadow(0 0 8px rgba(122,34,255,0.5))' }} />
                <div>
                  <div className="footer-logo-name">Digital <span className="footer-logo-accent">Code</span> Solution</div>
                  <div className="footer-logo-tag">Premium Digital Agency</div>
                </div>
              </a>
              <p className="footer-brand-desc">
                We craft exceptional digital experiences that help businesses grow, scale, and stand out in competitive markets.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </a>
              </div>
            </div>

            <div className="footer-links-group anim-footer-lift delay-200">
              <span className="footer-links-title">Services</span>
              <ul className="footer-links-list">
                <li><a href="/services/web-development">Web Development</a></li>
                <li><a href="/services/app-development">App Development</a></li>
                <li><a href="/services/game-development">Game Development</a></li>
                <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
                <li><a href="/services/graphic-design">Graphic Design</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-300">
              <span className="footer-links-title">Company</span>
              <ul className="footer-links-list">
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#portfolio">Our Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-400">
              <span className="footer-links-title">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom anim-footer-lift delay-500">
            <p className="footer-copy">
              © 2026 Digital Code Solution. All rights reserved. Designed by Muhammad Mohib or Muhammad Muneeb
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
