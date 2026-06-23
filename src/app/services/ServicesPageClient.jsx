"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../components/ResponsiveNav";
import GlobalScrollObserver from "../../components/GlobalScrollObserver";

const TECH_ITEMS = [
  { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Flutter", img: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "WordPress", img: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Figma", img: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Unity", img: "https://cdn.simpleicons.org/unity/white" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "MySQL", img: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Oracle", img: "https://cdn.simpleicons.org/oracle/F80000" },
  { name: "Adobe XD", img: "https://cdn.simpleicons.org/adobexd/FF61F6" },
  { name: "HTML5", img: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "JS", img: "https://cdn.simpleicons.org/javascript/F7DF1E" }
];

export default function ServicesPageClient() {
  const cardRefs = useRef([]);
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

    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.setProperty("--glow-opacity", "1");
    card.style.setProperty("--tilt-y-offset", "-8px");
    card.style.setProperty("--tilt-scale", "1.025");
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

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── SERVICES HERO ── */}
      <section className="svc-hero" aria-label="Services hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content">
          <div className="badge-pill-purple anim-3d-reveal delay-100">
            <span style={{ color: "#a855f7" }}>✦</span> Our Premium Services
          </div>

          <h1 className="svc-hero-heading anim-3d-reveal delay-200">
            We build <span className="text-gradient-purple">digital products</span> <br /> that drive real results
          </h1>

          <p className="svc-hero-desc anim-3d-reveal delay-300">
            From stunning websites to intelligent AI solutions. Coded with absolute precision, speed, and standard aesthetics.
          </p>

          <div className="svc-hero-buttons anim-3d-reveal delay-400">
            <a href="/contact" className="btn-primary">
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/portfolio" className="btn-outline">
              View Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="svc-stats-bar anim-3d-reveal delay-500">
            <div className="svc-stat-item">
              <div className="svc-stat-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div>
                <div className="svc-stat-num">150+</div>
                <div className="svc-stat-lbl">Projects Completed</div>
              </div>
            </div>

            <div className="svc-stat-item">
              <div className="svc-stat-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div>
                <div className="svc-stat-num">98%</div>
                <div className="svc-stat-lbl">Client Satisfaction</div>
              </div>
            </div>

            <div className="svc-stat-item">
              <div className="svc-stat-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div>
                <div className="svc-stat-num">4+</div>
                <div className="svc-stat-lbl">Years Experience</div>
              </div>
            </div>

            <div className="svc-stat-item">
              <div className="svc-stat-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <div className="svc-stat-num">24/7</div>
                <div className="svc-stat-lbl">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="svc-grid-section" id="all-services" aria-label="All services">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHAT WE OFFER
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Services Built for <span className="svc-heading-gradient">Your Success</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            From concept to launch, we deliver end-to-end digital solutions tailored to your business goals.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-cards-grid">
            {/* Card 1 — Web Dev */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="svc-card-badge">Most Popular</div>
              <h3 className="svc-card-title">Web Development</h3>
              <p className="svc-card-desc">
                We build fast, scalable, and visually stunning websites that drive traffic and convert visitors into loyal customers.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> Business & Corporate Websites</li>
                <li><span className="svc-card-list-bullet">◈</span> E-Commerce Websites</li>
                <li><span className="svc-card-list-bullet">◈</span> Custom Web Applications</li>
                <li><span className="svc-card-list-bullet">◈</span> CMS Development (WordPress)</li>
                <li><span className="svc-card-list-bullet">◈</span> Landing Pages</li>
                <li><span className="svc-card-list-bullet">◈</span> Custom Hyperion Reports</li>
                <li><span className="svc-card-list-bullet">◈</span> SEO Optimized Architecture</li>
              </ul>
              <div className="svc-tags-row">
                {["HTML", "CSS", "React", "Node.js", "WordPress"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/portfolio" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 2 — App Dev */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div className="svc-card-badge">Android & iOS</div>
              <h3 className="svc-card-title">App Development</h3>
              <p className="svc-card-desc">
                We craft powerful cross-platform mobile applications using Flutter that deliver seamless experiences on both Android & iOS.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> Flutter Cross-Platform Apps</li>
                <li><span className="svc-card-list-bullet">◈</span> Business Applications</li>
                <li><span className="svc-card-list-bullet">◈</span> E-Commerce Mobile Apps</li>
                <li><span className="svc-card-list-bullet">◈</span> Booking & Delivery Apps</li>
                <li><span className="svc-card-list-bullet">◈</span> Custom Mobile Solutions</li>
                <li><span className="svc-card-list-bullet">◈</span> App Performance Optimization</li>
              </ul>
              <div className="svc-tags-row">
                {["Flutter", "Dart", "Firebase", "Android", "iOS"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/portfolio" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 3 — Game Dev */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="3"></rect>
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <line x1="15" y1="13" x2="15.01" y2="13"></line>
                  <line x1="18" y1="11" x2="18.01" y2="11"></line>
                </svg>
              </div>
              <div className="svc-card-badge">2D & 3D</div>
              <h3 className="svc-card-title">Game Development</h3>
              <p className="svc-card-desc">
                From casual mobile games to immersive 3D experiences, we build engaging games that captivate players and boost your brand.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> 2D & 3D Mobile Games</li>
                <li><span className="svc-card-list-bullet">◈</span> PC & Web-Based Games</li>
                <li><span className="svc-card-list-bullet">◈</span> Unity Game Development</li>
                <li><span className="svc-card-list-bullet">◈</span> Game UI/UX Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Multiplayer Game Features</li>
                <li><span className="svc-card-list-bullet">◈</span> Game Monetization Integration</li>
              </ul>
              <div className="svc-tags-row">
                {["Unity", "C#", "Unreal", "WebGL"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/services/game-development" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 4 — Hyperion Dev */}
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={() => handleMouseLeave(3)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="svc-card-badge">Enterprise</div>
              <h3 className="svc-card-title">Hyperion Development</h3>
              <p className="svc-card-desc">
                We deliver enterprise-grade Hyperion solutions for financial reporting, planning, and business intelligence that scale with you.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> Hyperion Financial Management (HFM)</li>
                <li><span className="svc-card-list-bullet">◈</span> Hyperion Planning & Budgeting</li>
                <li><span className="svc-card-list-bullet">◈</span> Oracle EPM Cloud Solutions</li>
                <li><span className="svc-card-list-bullet">◈</span> Data Integration & Migration</li>
                <li><span className="svc-card-list-bullet">◈</span> Custom Hyperion Reports</li>
                <li><span className="svc-card-list-bullet">◈</span> Hyperion System Maintenance</li>
              </ul>
              <div className="svc-tags-row">
                {["Oracle", "Hyperion", "FDMEE", "HFM", "SmartView"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/portfolio" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 5 — UI/UX */}
            <div
              ref={(el) => (cardRefs.current[4] = el)}
              onMouseMove={(e) => handleMouseMove(e, 4)}
              onMouseLeave={() => handleMouseLeave(4)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <circle cx="12" cy="8" r="3"></circle>
                </svg>
              </div>
              <div className="svc-card-badge">Figma Expert</div>
              <h3 className="svc-card-title">UI/UX Design</h3>
              <p className="svc-card-desc">
                We design intuitive, beautiful, and user-centric interfaces that create unforgettable digital experiences and boost conversions.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> Mobile App UI Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Website UI/UX Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Figma Prototyping & Wireframing</li>
                <li><span className="svc-card-list-bullet">◈</span> User Research & Testing</li>
                <li><span className="svc-card-list-bullet">◈</span> Brand Identity & Style Guide</li>
                <li><span className="svc-card-list-bullet">◈</span> E-Commerce UI Design</li>
              </ul>
              <div className="svc-tags-row">
                {["Figma", "Adobe XD", "Illustrator", "Prototyping"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/services/ui-ux-design" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 6 — Graphic Design */}
            <div
              ref={(el) => (cardRefs.current[5] = el)}
              onMouseMove={(e) => handleMouseMove(e, 5)}
              onMouseLeave={() => handleMouseLeave(5)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <div className="svc-card-badge">Creative</div>
              <h3 className="svc-card-title">Graphic Design</h3>
              <p className="svc-card-desc">
                From social media posts to full brand identity, we create visually compelling designs that make your brand impossible to ignore.
              </p>
              <ul className="svc-card-list">
                <li><span className="svc-card-list-bullet">◈</span> Logo & Brand Identity Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Social Media Post Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Poster & Banner Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Business Card & Stationery</li>
                <li><span className="svc-card-list-bullet">◈</span> Brochure & Flyer Design</li>
                <li><span className="svc-card-list-bullet">◈</span> Marketing Material Design</li>
              </ul>
              <div className="svc-tags-row">
                {["Photoshop", "Illustrator", "Canva", "InDesign"].map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
              <a href="/services/graphic-design" className="svc-card-cta">
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

      {/* ── WHY CHOOSE DCS ── */}
      <section className="svc-why-section" id="why-choose-dcs" aria-label="Why choose DCS">
        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-why-container">
            <div className="svc-why-visual anim-3d-reveal">
              <div className="svc-why-mockup-inner">
                <img src="/images/office_workspace.png" alt="Digital Workspace Mockup" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            
            <div className="svc-why-content">
              <div className="badge-pill-purple anim-3d-reveal" style={{ alignSelf: "flex-start" }}>
                👤 Why Choose DCS
              </div>
              <h2 className="svc-why-heading anim-3d-reveal delay-100">
                We Don&apos;t Just Build — <br />
                <span className="text-gradient-purple">We Deliver Results</span>
              </h2>
              
              <ul className="svc-why-list">
                <li className="anim-3d-reveal delay-200">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>Experienced Team of Developers & Designers:</strong> We bring years of collective experience to build secure and clean digital products.
                  </div>
                </li>
                <li className="anim-3d-reveal delay-300">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>On-Time Project Delivery — Every Time:</strong> We respect deadlines and structure sprints to deliver functional stages predictably.
                  </div>
                </li>
                <li className="anim-3d-reveal delay-400">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>Transparent Communication & Regular Updates:</strong> You are kept in the loop via agile dashboard views, email updates, and meetings.
                  </div>
                </li>
                <li className="anim-3d-reveal delay-500">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>Affordable Packages Without Compromising Quality:</strong> We provide premium enterprise standards optimized for competitive budgets.
                  </div>
                </li>
                <li className="anim-3d-reveal delay-600">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>Post-Launch Support & Maintenance:</strong> We stay by your side after deployment to monitor server metrics and apply fixes.
                  </div>
                </li>
                <li className="anim-3d-reveal delay-700">
                  <div className="svc-why-check">✓</div>
                  <div>
                    <strong>100% Client Satisfaction Guaranteed:</strong> We refine, align, and test iteratively until the final output meets your criteria.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section className="svc-process-section" id="process" aria-label="Our work process">
        <div className="svc-section-header">
          <div className="port-eyebrow anim-3d-reveal">
            <span className="port-eyebrow-dot" />
            OUR WORK PROCESS
            <span className="port-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            How We <span className="svc-heading-gradient">Work</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A simple, transparent process from idea to launch.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-process-grid">
            {/* Step 1 */}
            <div className="svc-process-step anim-3d-reveal delay-100">
              <div className="svc-process-step-num">1</div>
              <div className="svc-process-connector" />
              <h3 className="svc-process-step-title">Discovery & Consultation</h3>
              <p className="svc-process-step-desc">We understand your goals, audience, and project requirements.</p>
            </div>

            {/* Step 2 */}
            <div className="svc-process-step anim-3d-reveal delay-200">
              <div className="svc-process-step-num">2</div>
              <div className="svc-process-connector" />
              <h3 className="svc-process-step-title">Planning & Strategy</h3>
              <p className="svc-process-step-desc">We create a detailed roadmap, wireframes, and project timeline.</p>
            </div>

            {/* Step 3 */}
            <div className="svc-process-step anim-3d-reveal delay-300">
              <div className="svc-process-step-num">3</div>
              <div className="svc-process-connector" />
              <h3 className="svc-process-step-title">Design & Prototyping</h3>
              <p className="svc-process-step-desc">Our designers craft pixel-perfect UI/UX prototypes in Figma.</p>
            </div>

            {/* Step 4 */}
            <div className="svc-process-step anim-3d-reveal delay-400">
              <div className="svc-process-step-num">4</div>
              <div className="svc-process-connector" />
              <h3 className="svc-process-step-title">Development & Testing</h3>
              <p className="svc-process-step-desc">Our developers build, test, and optimize your product.</p>
            </div>

            {/* Step 5 */}
            <div className="svc-process-step anim-3d-reveal delay-500">
              <div className="svc-process-step-num">5</div>
              <h3 className="svc-process-step-title">Launch & Support</h3>
              <p className="svc-process-step-desc">We deploy your project and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES WE MASTER ── */}
      <section className="svc-tech-section" id="technologies" aria-label="Technologies we master">
        <div className="svc-section-header">
          <div className="tech-eyebrow anim-3d-reveal">
            <span className="tech-eyebrow-dot" />
            TECHNOLOGIES WE USE
            <span className="tech-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Technologies We <span className="svc-heading-gradient">Master</span>
          </h2>
        </div>

        <div className="svc-tech-grid anim-3d-reveal delay-200">
          {TECH_ITEMS.map((item, idx) => (
            <div key={item.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="svc-testi-section" id="testimonials" aria-label="Client reviews">
        <div className="svc-section-header">
          <div className="testi-eyebrow anim-3d-reveal">
            <span className="testi-eyebrow-dot" />
            WHAT OUR CLIENTS SAY
            <span className="testi-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What Our <span className="svc-heading-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-testi-grid">
            <div className="svc-testi-card anim-3d-reveal delay-100">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                &quot;Digital Code Solution built our website and the experience was outstanding. Highly professional team and excellent support!&quot;
              </p>
              <div className="svc-testi-author">
                <img src="/images/avatar1.png" alt="Zeeshan Ahmed" className="svc-testi-avatar" style={{ objectFit: "cover" }} />
                <div>
                  <span className="svc-testi-name">Zeeshan Ahmed</span>
                  <span className="svc-testi-role">CEO, TechVision Ltd.</span>
                </div>
              </div>
            </div>

            <div className="svc-testi-card anim-3d-reveal delay-200">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                &quot;Their app development service using Flutter is top-notch. Delivered on time with perfect quality. Highly recommended!&quot;
              </p>
              <div className="svc-testi-author">
                <img src="/images/avatar2.png" alt="Ayesha Khan" className="svc-testi-avatar" style={{ objectFit: "cover" }} />
                <div>
                  <span className="svc-testi-name">Ayesha Khan</span>
                  <span className="svc-testi-role">Founder, ShopCart</span>
                </div>
              </div>
            </div>

            <div className="svc-testi-card anim-3d-reveal delay-300">
              <div className="svc-testi-stars">★★★★★</div>
              <p className="svc-testi-text">
                &quot;Amazing game development experience! The team understood our vision and turned it into an addictive game.&quot;
              </p>
              <div className="svc-testi-author">
                <img src="/images/avatar3.png" alt="Usman Ali" className="svc-testi-avatar" style={{ objectFit: "cover" }} />
                <div>
                  <span className="svc-testi-name">Usman Ali</span>
                  <span className="svc-testi-role">Game Studio Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEXIBLE PLANS ── */}
      <section className="svc-pricing-section" id="pricing" aria-label="Flexible pricing plans">
        <div className="svc-section-header">
          <div className="port-eyebrow anim-3d-reveal">
            <span className="port-eyebrow-dot" />
            FLEXIBLE PLANS
            <span className="port-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Flexible Plans for <span className="svc-heading-gradient">Every Budget</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-pricing-grid">
            {/* Plan 1 */}
            <div className="svc-price-card anim-3d-reveal delay-100">
              <span className="svc-price-title">Basic Plan</span>
              <div className="svc-price-amt">
                <span className="svc-price-val">$199</span>
                <span className="svc-price-period">/ Project</span>
              </div>
              <ul className="svc-price-list">
                <li><span className="svc-price-check">✓</span> Basic Website (Up to 5 Pages)</li>
                <li><span className="svc-price-check">✓</span> Responsive Design</li>
                <li><span className="svc-price-check">✓</span> Basic SEO Optimization</li>
                <li><span className="svc-price-check">✓</span> 1 Month Support</li>
              </ul>
              <a href="/contact" className="svc-price-btn svc-price-btn-solid">Get Started</a>
            </div>

            {/* Plan 2 */}
            <div className="svc-price-card svc-price-card-popular anim-3d-reveal delay-200">
              <span className="svc-price-badge">Most Popular</span>
              <span className="svc-price-title" style={{ marginTop: "10px" }}>Standard Plan</span>
              <div className="svc-price-amt">
                <span className="svc-price-val">$499</span>
                <span className="svc-price-period">/ Project</span>
              </div>
              <ul className="svc-price-list">
                <li><span className="svc-price-check">✓</span> Custom Website (Up to 15 Pages)</li>
                <li><span className="svc-price-check">✓</span> Advanced Features</li>
                <li><span className="svc-price-check">✓</span> SEO & Speed Optimization</li>
                <li><span className="svc-price-check">✓</span> 3 Months Support</li>
              </ul>
              <a href="/contact" className="svc-price-btn svc-price-btn-solid" style={{ boxShadow: "0 8px 30px rgba(122, 34, 255, 0.45)" }}>Get Started</a>
            </div>

            {/* Plan 3 */}
            <div className="svc-price-card anim-3d-reveal delay-300">
              <span className="svc-price-title">Premium Plan</span>
              <div className="svc-price-amt">
                <span className="svc-price-val">$999</span>
                <span className="svc-price-period">/ Project</span>
              </div>
              <ul className="svc-price-list">
                <li><span className="svc-price-check">✓</span> Custom Web Application</li>
                <li><span className="svc-price-check">✓</span> Advanced Features</li>
                <li><span className="svc-price-check">✓</span> SEO, Speed & Security</li>
                <li><span className="svc-price-check">✓</span> 6 Months Support</li>
              </ul>
              <a href="/contact" className="svc-price-btn svc-price-btn-solid">Get Started</a>
            </div>

            {/* Custom Solution Card */}
            <div className="svc-price-card svc-price-custom-card anim-3d-reveal delay-400">
              <span className="svc-price-custom-title">Need a custom solution for your business?</span>
              <p className="svc-price-custom-desc">
                Let&apos;s discuss your project and build something amazing together!
              </p>
              <a href="/contact" className="svc-price-btn svc-price-btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Get a Free Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="contact-section" id="contact" aria-label="Contact us">
        <div className="contact-bg" aria-hidden="true">
          <div className="contact-orb contact-orb-1" />
          <div className="contact-orb contact-orb-2" />
        </div>
        <div className="contact-container">
          <div className="contact-inner">
            {/* Left Info */}
            <div className="contact-info">
              <span className="contact-eyebrow anim-3d-reveal">
                <span className="contact-eyebrow-dot" />
                GET IN TOUCH
              </span>
              <h2 className="contact-heading anim-3d-reveal delay-100">
                Let's Build Something <span className="contact-heading-gradient">Amazing Together</span>
              </h2>
              <p className="contact-desc anim-3d-reveal delay-200">
                Have a project in mind? We'd love to hear about it. Drop us a message and our team will get back to you within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item anim-3d-reveal delay-300">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email Us</span>
                    <span className="contact-detail-value">digitalcodesolution.company@gmail.com</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-reveal delay-400">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Call Us</span>
                    <span className="contact-detail-value">+92 370 302 2622</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-reveal delay-500">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
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
                  <input type="text" className="contact-input" placeholder="Project Inquiry" />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea className="contact-textarea" rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                
                {/* Add Document Dropzone Section */}
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
            {/* Brand */}
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

            {/* Links */}
            <div className="footer-links-group anim-footer-lift delay-200">
              <span className="footer-links-title">Services</span>
              <ul className="footer-links-list">
                <li><a href="/services">Web Development</a></li>
                <li><a href="/services">App Development</a></li>
                <li><a href="/services/game-development">Game Development</a></li>
                <li><a href="/services">Hyperion Development</a></li>
                <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
                <li><a href="/services/graphic-design">Graphic Design</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-300">
              <span className="footer-links-title">Company</span>
              <ul className="footer-links-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-400">
              <span className="footer-links-title">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
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
