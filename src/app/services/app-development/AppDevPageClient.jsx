"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../../components/ResponsiveNav";
import GlobalScrollObserver from "../../../components/GlobalScrollObserver";

const TECH_FRONTEND = [
  { name: "React.js", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Vue.js", img: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "Flutter", img: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "React Native", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Swift", img: "https://cdn.simpleicons.org/swift/FA7343" },
  { name: "Kotlin", img: "https://cdn.simpleicons.org/kotlin/7F52FF" },
];

const TECH_BACKEND = [
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Laravel", img: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "PHP", img: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "MySQL", img: "https://cdn.simpleicons.org/mysql/4479A1" },
];

export default function AppDevPageClient() {
  const cardRefs = useRef([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedPlatform, setSelectedPlatform] = useState("Both");

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

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="svc-hero" aria-label="Mobile App Development Services Hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content app-dev-hero-layout">
          {/* Centered Hero info */}
          <div className="app-dev-hero-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100" style={{ margin: "0 auto 16px" }}>
              <span style={{ color: "#a855f7" }}>✦</span> Mobile App Development
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", textAlign: "center" }}>
              BUILT FOR THE FUTURE <br />
              WE BUILD <span className="text-gradient-purple">APPS THAT PEOPLE</span> CAN'T STOP USING
            </h1>

            <div className="app-dev-hero-bullets anim-3d-reveal delay-300" style={{ width: "100%", justifyContent: "center" }}>
              <span>iOS</span> <span className="bullet-dot">•</span> 
              <span>Android</span> <span className="bullet-dot">•</span> 
              <span>Cross-Platform</span> <span className="bullet-dot">•</span> 
              <span>Flutter</span> <span className="bullet-dot">•</span>
              <span>React Native</span>
            </div>

            <p className="svc-hero-desc anim-3d-reveal delay-300" style={{ maxWidth: "580px", margin: "0 auto 24px", textAlign: "center" }}>
              From MVP to enterprise-grade applications — we design and develop mobile apps that deliver exceptional user experiences and real business results.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400" style={{ justifyContent: "center" }}>
              <a href="#contact" className="btn-primary">
                Start Your App Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#portfolio" className="btn-outline">
                See Our App Portfolio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="svc-stats-bar anim-3d-reveal delay-500" style={{ marginTop: "40px", width: "100%" }}>
              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="10" x2="2" y2="10"></line>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">50+</div>
                  <div className="svc-stat-lbl">Apps Launched</div>
                </div>
              </div>

              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">1M+</div>
                  <div className="svc-stat-lbl">Downloads Achieved</div>
                </div>
              </div>

              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">98%</div>
                  <div className="svc-stat-lbl">Client Rating</div>
                </div>
              </div>

              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">5+</div>
                  <div className="svc-stat-lbl">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE BUILD GRID ── */}
      <section className="svc-grid-section" id="what-we-build" aria-label="Mobile App Solutions">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHAT WE BUILD
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Mobile App Solutions For <span className="svc-heading-gradient">Every Industry</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            Whether it's a startup MVP or an enterprise platform — we build apps that scale.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-cards-grid">
            {/* Card 1: iOS App Development */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">iOS App Development</h3>
              <p className="svc-card-desc">Premium native iPhone & iPad apps built with Swift, optimized for performance and App Store success.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 2: Android App Development */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">Android App Development</h3>
              <p className="svc-card-desc">High-performance native Android apps built with Kotlin for smooth, reliable user experiences.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 3: Flutter App Development */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="svc-card-title">Flutter App Development</h3>
              <p className="svc-card-desc">Beautiful cross-platform apps from a single codebase — iOS + Android, faster and cost-effective.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 4: React Native Apps */}
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
              <h3 className="svc-card-title">React Native Apps</h3>
              <p className="svc-card-desc">JavaScript-powered cross-platform apps with near-native performance and rapid development cycles.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 5: E-Commerce Apps */}
            <div
              ref={(el) => (cardRefs.current[4] = el)}
              onMouseMove={(e) => handleMouseMove(e, 4)}
              onMouseLeave={() => handleMouseLeave(4)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">E-Commerce Apps</h3>
              <p className="svc-card-desc">Feature-rich shopping apps with real-time inventory, secure payments, and seamless checkout flows.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 6: On-Demand Apps */}
            <div
              ref={(el) => (cardRefs.current[5] = el)}
              onMouseMove={(e) => handleMouseMove(e, 5)}
              onMouseLeave={() => handleMouseLeave(5)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">On-Demand Apps</h3>
              <p className="svc-card-desc">Uber-style on-demand platforms for delivery, bookings, services, and real-time tracking.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 7: Enterprise Apps */}
            <div
              ref={(el) => (cardRefs.current[6] = el)}
              onMouseMove={(e) => handleMouseMove(e, 6)}
              onMouseLeave={() => handleMouseLeave(6)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">Enterprise Apps</h3>
              <p className="svc-card-desc">Scalable internal business tools, dashboards, and workflow automation apps for large organizations.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 8: Custom App Solutions */}
            <div
              ref={(el) => (cardRefs.current[7] = el)}
              onMouseMove={(e) => handleMouseMove(e, 7)}
              onMouseLeave={() => handleMouseLeave(7)}
              className="svc-card anim-3d-reveal delay-400"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">Custom App Solutions</h3>
              <p className="svc-card-desc">Fully custom mobile applications designed precisely around your unique business requirements.</p>
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

      {/* ── 3. POWERFUL FEATURES WE DELIVER ── */}
      <section className="svc-grid-section" id="features" aria-label="App Features" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            POWERFUL FEATURES WE DELIVER
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Engineered For <span className="svc-heading-gradient">Modern Mobile Experiences</span>
          </h2>
        </div>

        <div className="features-showcase-layout anim-3d-reveal delay-200">
          {/* Left Features column */}
          <div className="features-column-side">
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Stunning UI/UX Design</h4>
                <p>Every screen crafted for beauty, speed, and standard mobile usability guidelines.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Offline-First Architecture</h4>
                <p>Ensure critical app database features load perfectly even without active network cells.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Push Notifications</h4>
                <p>Targeted message notification setups to retain users and drive interaction scores.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>API & Backend Integration</h4>
                <p>Flawless connection with secure, custom RESTful and GraphQL endpoints.</p>
              </div>
            </div>
          </div>

          {/* Center Phone Display */}
          <div className="features-column-center">
            <div className="mockup-phone phone-display-center">
              <div className="phone-camera-notch" />
              <div className="phone-screen-display">
                <div className="app-screen-visual-inner">
                  <div className="visual-top-bar">
                    <span>Discover</span>
                    <div className="search-bar-mock" />
                  </div>
                  <div className="visual-body">
                    <div className="visual-card" />
                    <div className="visual-card" />
                  </div>
                </div>
              </div>
            </div>
            <div className="features-ambient-glow" />
          </div>

          {/* Right Features column */}
          <div className="features-column-side">
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Real-Time Features</h4>
                <p>Socket.io and WebSocket structures enabling fast chat threads and active tracking.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>App Store Optimization</h4>
                <p>Strategic setup (metadata indices, optimized graphics) to trigger downloads.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Analytics & Crash Reporting</h4>
                <p>Firebase SDK setups to observe analytics, logs, and trace runtime stack traces.</p>
              </div>
            </div>
            <div className="feature-side-item">
              <div className="feature-side-icon">✦</div>
              <div>
                <h4>Secure Authentication</h4>
                <p>Biometrics support, Keychain tokens, and secure JWT-based OAuth layers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS SECTION (7 STEPS) ── */}
      <section className="svc-grid-section" id="process" aria-label="Development Process">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            OUR PROCESS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            How We Build <span className="svc-heading-gradient">Your App</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A battle-tested 7-step process from idea to App Store launch.
          </p>
        </div>

        <div className="process-timeline-container anim-3d-reveal delay-300">
          <div className="process-timeline-track" />
          
          <div className="process-grid process-7-grid">
            {/* Step 1 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">1</div>
              </div>
              <h4 className="process-step-title">Discovery & Strategy</h4>
              <p className="process-step-desc">Deep dive into your idea, audience, and business goals.</p>
            </div>

            {/* Step 2 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">2</div>
              </div>
              <h4 className="process-step-title">UI/UX Wireframing</h4>
              <p className="process-step-desc">Low-fi to high-fi wireframes and complete user flow maps.</p>
            </div>

            {/* Step 3 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">3</div>
              </div>
              <h4 className="process-step-title">Visual Design</h4>
              <p className="process-step-desc">Pixel-perfect dark luxury app screens with stunning UI.</p>
            </div>

            {/* Step 4 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">4</div>
              </div>
              <h4 className="process-step-title">Development</h4>
              <p className="process-step-desc">Clean, scalable code with best practices and modern tech stack.</p>
            </div>

            {/* Step 5 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">5</div>
              </div>
              <h4 className="process-step-title">Testing & QA</h4>
              <p className="process-step-desc">Functional, performance, security & device testing.</p>
            </div>

            {/* Step 6 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">6</div>
              </div>
              <h4 className="process-step-title">Deployment</h4>
              <p className="process-step-desc">Smooth App Store & Play Store submission.</p>
            </div>

            {/* Step 7 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">7</div>
              </div>
              <h4 className="process-step-title">Support & Maintenance</h4>
              <p className="process-step-desc">Ongoing updates, monitoring & long-term technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TECHNOLOGIES WE USE ── */}
      <section className="svc-grid-section" id="technologies" aria-label="Technologies We Use" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            TECHNOLOGIES WE USE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Cutting-Edge <span className="svc-heading-gradient">Tech Stack</span>
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

      {/* ── 6. WHY CHOOSE DCS ── */}
      <section className="svc-grid-section" id="why-choose-us" aria-label="Why Choose Us">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHY CHOOSE DCS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Why Businesses Trust <span className="svc-heading-gradient">Digital Code Solution</span>
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
              <p className="why-card-desc">Optimized for speed, layout fluid transitions, and fast API payloads.</p>
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
              <p className="why-card-desc">Enterprise-level database locks, SSL key configurations, and full GDPR compliance layers.</p>
            </div>

            {/* Benefit 3 */}
            <div className="why-card anim-3d-reveal delay-300">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">Scalable Architecture</h4>
              <p className="why-card-desc">Built using state structures that expand to manage millions of concurrent user sessions.</p>
            </div>

            {/* Benefit 4 */}
            <div className="why-card anim-3d-reveal delay-400">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Beautiful UI/UX</h4>
              <p className="why-card-desc">Stunning, fluid designs aligned to brand identity vectors and user habits.</p>
            </div>

            {/* Benefit 5 */}
            <div className="why-card anim-3d-reveal delay-500">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">Clean & Maintainable Code</h4>
              <p className="why-card-desc">Modular, well-commented codebases that facilitate future updates and releases.</p>
            </div>

            {/* Benefit 6 */}
            <div className="why-card anim-3d-reveal delay-600">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Dedicated Support</h4>
              <p className="why-card-desc">Comprehensive support and optimization resources available post-launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM CTA & INQUIRY FORM ── */}
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
                READY TO BUILD YOUR NEXT BIG APP?
              </span>
              <h2 className="contact-heading anim-3d-reveal delay-100">
                Let's turn your idea into a <span className="contact-heading-gradient">powerful mobile application.</span>
              </h2>
              <p className="contact-desc anim-3d-reveal delay-200">
                Start your App development journey today. Complete the inquiry sheet and our architects will reach out within 24 hours.
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

            {/* Right Form Block (App Inquiry Form) */}
            <div className="contact-form-wrap anim-3d-reveal delay-200">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Full Name</label>
                    <input type="text" className="contact-input" placeholder="John Doe" required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address</label>
                    <input type="email" className="contact-input" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Company Name</label>
                    <input type="text" className="contact-input" placeholder="Acme Corp" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Phone Number</label>
                    <input type="tel" className="contact-input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">App Type</label>
                    <select className="contact-input contact-select-input" defaultValue="E-Commerce">
                      <option value="E-Commerce">E-Commerce App</option>
                      <option value="On-Demand">On-Demand App</option>
                      <option value="SocialMedia">Social Media App</option>
                      <option value="Enterprise">Enterprise App</option>
                      <option value="Custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Project Budget</label>
                    <select className="contact-input contact-select-input" defaultValue="$5k - $10k">
                      <option value="<$5k">Less than $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k+">$25,000 +</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Project Timeline</label>
                    <select className="contact-input contact-select-input" defaultValue="1-3 Months">
                      <option value="<1 Month">Less than 1 Month</option>
                      <option value="1-3 Months">1 - 3 Months</option>
                      <option value="3-6 Months">3 - 6 Months</option>
                      <option value="6+ Months">6+ Months</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Platform Selection</label>
                    <div className="platform-toggle-group">
                      <button 
                        type="button" 
                        className={`platform-toggle-btn ${selectedPlatform === "iOS" ? "active" : ""}`}
                        onClick={() => setSelectedPlatform("iOS")}
                      >
                        iOS
                      </button>
                      <button 
                        type="button" 
                        className={`platform-toggle-btn ${selectedPlatform === "Android" ? "active" : ""}`}
                        onClick={() => setSelectedPlatform("Android")}
                      >
                        Android
                      </button>
                      <button 
                        type="button" 
                        className={`platform-toggle-btn ${selectedPlatform === "Both" ? "active" : ""}`}
                        onClick={() => setSelectedPlatform("Both")}
                      >
                        Both
                      </button>
                    </div>
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Features Required</label>
                  <input type="text" className="contact-input" placeholder="e.g. Chat, Push Notifications, Payment Gateway..." />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Project Description</label>
                  <textarea className="contact-textarea" rows="4" placeholder="Describe your mobile app features, target audience, and system integrations..."></textarea>
                </div>
                
                {/* Drag & Drop Document Uploader */}
                <div className="contact-field">
                  <label className="contact-label">Add Wireframes / Brief</label>
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
