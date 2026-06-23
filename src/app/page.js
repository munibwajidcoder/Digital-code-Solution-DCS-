import Image from "next/image";
import ArchSection from "../components/ArchSection";
import HeroRobot3D from "../components/HeroRobot3D";
import HomeIntroGate from "../components/HomeIntroGate";
import ResponsiveNav from "../components/ResponsiveNav";
import GlobalScrollObserver from "../components/GlobalScrollObserver";
import PinnedScrollWrapper from "../components/PinnedScrollWrapper";
import ServiceCard from "../components/ServiceCard";
import PortfolioItem3D from "../components/PortfolioItem3D";

export default function Home() {
  return (
    <HomeIntroGate>
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* HERO SECTION */}
      <section className="hero-grid">

        {/* 3D Immersive Background Scene */}
        <div className="hero-scene" aria-hidden="true">
          {/* Ambient Glows */}
          <div className="hero-bg-glow-center" />
          <div className="hero-bg-glow-left" />
          <div className="hero-bg-glow-right" />

          {/* Grid texture */}
          <div className="hero-bg-grid" />

          {/* Light beams */}
          <div className="hero-light-beam" />
          <div className="hero-light-beam-2" />

          {/* Scan line */}
          <div className="hero-scan-line" />

          {/* Orbital ring system (anchored to hero visual side) */}
          <div className="hero-orbit-system">
            <div className="hero-orbit-ring hero-orbit-ring-1" />
            <div className="hero-orbit-ring hero-orbit-ring-2" />
            <div className="hero-orbit-ring hero-orbit-ring-3" />
            <div className="hero-orbit-dot hero-orbit-dot-1" />
            <div className="hero-orbit-dot hero-orbit-dot-2" />
            <div className="hero-orbit-dot hero-orbit-dot-3" />
          </div>

          {/* Expanding pulse rings */}
          <div className="hero-pulse-ring hero-pulse-ring-1" />
          <div className="hero-pulse-ring hero-pulse-ring-2" />
          <div className="hero-pulse-ring hero-pulse-ring-3" />

          {/* Floating geometric shapes */}
          <div className="hero-geo-1" />
          <div className="hero-geo-2" />
          <div className="hero-geo-3" />
          <div className="hero-geo-4" />
          <div className="hero-geo-5" />

          {/* Floating particles */}
          <div className="hero-particle hero-p1" />
          <div className="hero-particle hero-p2" />
          <div className="hero-particle hero-p3" />
          <div className="hero-particle hero-p4" />
          <div className="hero-particle hero-p5" />
          <div className="hero-particle hero-p6" />
          <div className="hero-particle hero-p7" />
          <div className="hero-particle hero-p8" />

        </div>

        <div className="hero-content">
          <div className="badge-pill-purple anim-3d-reveal delay-100">
            <span style={{ color: "#a855f7" }}>✦</span> We Build Digital Experiences
          </div>

          <h1 className="hero-heading anim-3d-reveal anim-3d-text-wrap">
            <span className="anim-word-3d delay-100">We</span>{" "}
            <span className="anim-word-3d delay-100">Build</span>{" "}
            <span className="anim-word-3d delay-200">Modern</span> <br />
            <span className="anim-word-3d delay-300">Websites,</span>{" "}
            <span className="anim-word-3d delay-400">Apps</span>{" "}
            <span className="anim-word-3d delay-400">&amp;</span> <br />
            <span className="text-accent-gradient anim-word-3d delay-500">Digital</span>{" "}
            <span className="text-accent-gradient anim-word-3d delay-600">Products</span>
          </h1>

          <p className="hero-description anim-3d-reveal delay-400">
            Helping businesses grow through premium design, scalable development, AI-powered solutions, and modern digital experiences.
          </p>

          <div className="hero-cta-buttons anim-3d-reveal delay-500">
            <button className="btn-primary">
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-outline">
              Explore Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </button>
          </div>

          <div className="hero-social-proof anim-3d-reveal delay-600">
            <div className="avatar-stack">
              <Image src="/images/avatar1.png" alt="Client 1" width={42} height={42} className="avatar-stack-item" />
              <Image src="/images/avatar2.png" alt="Client 2" width={42} height={42} className="avatar-stack-item" />
              <Image src="/images/avatar3.png" alt="Client 3" width={42} height={42} className="avatar-stack-item" />
            </div>
            <a href="#" className="social-proof-content">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#ffffff" }}>Explore our work</span>
                <span className="social-proof-text">Join 100+ happy clients who trust DCS</span>
              </div>
              <div className="social-proof-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* 3D Robot Showcase */}
        <div className="pedestal-3d anim-3d-reveal delay-300">
          <div className="hero-robot-backdrop" aria-hidden="true" />
          <HeroRobot3D />
        </div>
      </section>

      {/* TRUSTED BY BUSINESSES / STATS SECTION */}
      <section className="glass-panel stats-bar-panel anim-3d-reveal delay-200">
        <div className="stats-bar-header">
          Trusted by Businesses Worldwide
        </div>

        <div className="stats-slider-wrapper">
          <div className="stats-slider-track">
            {/* GROUP 1 */}
            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>

            {/* GROUP 2 (Duplicate for smooth scroll) */}
            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DIGITAL CODE SOLUTION */}
      <PinnedScrollWrapper>
        <section className="about-section">
          {/* Premium layered background for About */}
          <div className="about-section-bg" />
          <div className="about-bg-glow" />

          <div className="about-content-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              👤 About Digital Code Solution
            </div>

            <h2 className="about-heading anim-3d-reveal delay-200">
              Building <span className="text-accent-gradient">Digital Experiences</span> <br />
              That Inspire Innovation
            </h2>

            <p className="about-paragraph anim-3d-reveal delay-300">
              At Digital Code Solution (DCS), we transform ambitious ideas into powerful digital products. From modern websites and scalable mobile applications to AI-powered solutions and intuitive user experiences, our mission is to help businesses grow through technology, creativity, and innovation.
            </p>

            <p className="about-paragraph anim-3d-reveal delay-400" style={{ marginTop: "-8px" }}>
              Our team combines strategic thinking, premium design, and clean development practices to deliver future-ready solutions that create lasting impact.
            </p>

            <div className="about-cards-row anim-3d-reveal delay-300">
              <div className="about-card">
                <div className="about-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="about-card-title">Our Mission</h3>
                <p className="about-card-text">
                  To empower businesses with cutting-edge digital solutions that combine creativity, performance, and innovation while delivering exceptional user experiences.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon" style={{ background: "linear-gradient(135deg, var(--purple-glow) 0%, var(--purple-primary) 100%)", boxShadow: "0 4px 15px rgba(168, 85, 247, 0.3)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="about-card-title">Our Vision</h3>
                <p className="about-card-text">
                  To become a globally recognized software agency known for building premium digital products that shape the future of technology and design.
                </p>
              </div>
            </div>

            <div className="about-features-grid anim-3d-reveal delay-400">
              <div className="feature-tag-item">
                <div className="feature-icon-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
                  </svg>
                </div>
                <div className="feature-text-wrap">
                  <span className="feature-title">Innovation</span>
                  <span className="feature-desc">Push boundaries with modern tech.</span>
                </div>
              </div>

              <div className="feature-tag-item">
                <div className="feature-icon-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 13L2 9z"></path>
                    <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                    <path d="M2 9h20"></path>
                  </svg>
                </div>
                <div className="feature-text-wrap">
                  <span className="feature-title">Quality</span>
                  <span className="feature-desc">Deliver pixel-perfect experiences.</span>
                </div>
              </div>

              <div className="feature-tag-item">
                <div className="feature-icon-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="feature-text-wrap">
                  <span className="feature-title">Transparency</span>
                  <span className="feature-desc">Maintain honest communication.</span>
                </div>
              </div>

              <div className="feature-tag-item">
                <div className="feature-icon-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="feature-text-wrap">
                  <span className="feature-title">Client Success</span>
                  <span className="feature-desc">Measure growth through client value.</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row anim-3d-reveal delay-500">
              <button className="btn-primary">
                Meet Our Team
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn-outline">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Right side visual and metrics */}
          <div className="about-visual-column anim-3d-reveal delay-200">
            <div className="visual-image-wrapper sticky-scroll-window">
              <div 
                className="sticky-scroll-track" 
                style={{ 
                  height: "400%",
                  transform: `translateY(calc(var(--scroll-progress, 0) * -75%))` 
                }}
              >
                <div className="scroll-image-slide" style={{ height: "25%" }}>
                  <Image src="/images/office_workspace.png" alt="Digital Workspace" fill sizes="(max-width: 768px) 100vw, 50vw" priority style={{ objectFit: "cover" }} />
                  <div className="visual-image-overlay" />
                </div>
                <div className="scroll-image-slide" style={{ height: "25%" }}>
                  <Image src="/images/ai_chatbot.png" alt="AI Chatbot Interface" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="visual-image-overlay" />
                </div>
                <div className="scroll-image-slide" style={{ height: "25%" }}>
                  <Image src="/images/digital_product.png" alt="SaaS Product Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="visual-image-overlay" />
                </div>
                <div className="scroll-image-slide" style={{ height: "25%" }}>
                  <Image src="/images/security_encryption.png" alt="Cybersecurity and Encryption" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="visual-image-overlay" />
                </div>
              </div>
            </div>

            <div className="about-metrics-bar">
              <div className="metric-pill-card anim-3d-reveal delay-300">
                <div className="metric-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="metric-pill-number">25+</div>
                <div className="metric-pill-label">Projects Delivered</div>
              </div>

              <div className="metric-pill-card anim-3d-reveal delay-400">
                <div className="metric-badge-icon" style={{ background: "rgba(168, 85, 247, 0.12)", borderColor: "rgba(168, 85, 247, 0.25)", color: "var(--purple-glow)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="metric-pill-number">100+</div>
                <div className="metric-pill-label">Happy Clients</div>
              </div>

              <div className="metric-pill-card anim-3d-reveal delay-500">
                <div className="metric-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="metric-pill-number">5+</div>
                <div className="metric-pill-label">Years Experience</div>
              </div>
            </div>

            <div className="team-pill-card anim-3d-reveal delay-600">
              <div className="team-avatars-info">
                <div className="avatar-stack">
                  <Image src="/images/avatar1.png" alt="Team 1" width={42} height={42} className="avatar-stack-item" />
                  <Image src="/images/avatar2.png" alt="Team 2" width={42} height={42} className="avatar-stack-item" />
                  <Image src="/images/avatar3.png" alt="Team 3" width={42} height={42} className="avatar-stack-item" />
                  <Image src="/images/avatar4.png" alt="Team 4" width={42} height={42} className="avatar-stack-item" />
                </div>
                <span className="team-avatars-label">
                  Creative Designers + Expert Developers + AI Engineers
                </span>
              </div>

              <button className="team-avatars-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </PinnedScrollWrapper>

      {/* ── HOME SERVICES SECTION ── */}
      <section className="hs-section" id="services" aria-label="Our Services">

        {/* Ambient background glows */}
        <div className="hs-bg" aria-hidden="true">
          <div className="hs-bg-glow-1" />
          <div className="hs-bg-glow-2" />
          <div className="hs-bg-glow-3" />
        </div>

        {/* Header */}
        <div className="hs-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            OUR SERVICES
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="hs-heading anim-3d-reveal delay-100">
            Our Premium <span className="hs-heading-gradient">Services</span>
          </h2>
          <p className="hs-subheading anim-3d-reveal delay-200">
            We provide high-quality digital solutions to help your business<br />grow, scale and succeed.
          </p>
          <div className="hs-divider anim-3d-reveal delay-300">
            <span className="hs-divider-dot" />
          </div>
        </div>

        {/* 3×2 Cards Grid */}
        <div className="hs-cards-grid">

          {/* Card 1 — Web Development */}
          <ServiceCard
            title="Web Development"
            description="High-performance, responsive websites and scalable web applications built with Next.js, React, and modern tech stacks."
            delayClass="delay-100"
            link="/services/web-development"
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            }
          />

          {/* Card 2 — Mobile App Development */}
          <ServiceCard
            title="Mobile App Development"
            description="Native-like, cross-platform mobile applications for iOS and Android built with Flutter and React Native."
            delayClass="delay-200"
            link="/services/app-development"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            }
          />

          {/* Card 3 — AI Chatbot Development */}
          <ServiceCard
            title="AI Chatbot Development"
            description="Next-generation intelligent virtual assistants and automation systems powered by LLMs and natural language processing."
            delayClass="delay-300"
            link="/services/ai-chatbot"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="9.01" y2="10"></line>
                <line x1="12" y1="10" x2="12.01" y2="10"></line>
                <line x1="15" y1="10" x2="15.01" y2="10"></line>
              </svg>
            }
          />

          {/* Card 4 — UI/UX Design */}
          <ServiceCard
            title="UI/UX Design"
            description="Intuitive, user-centric interface designs and interactive prototypes crafted in Figma for conversion and engagement."
            delayClass="delay-100"
            link="/services/ui-ux-design"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            }
          />

          {/* Card 5 — Graphic Design */}
          <ServiceCard
            title="Graphic Design"
            description="Immersive visual identities, premium branding, marketing collateral, and custom assets that capture brand values."
            delayClass="delay-200"
            link="/services/graphic-design"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            }
          />

          {/* Card 6 — Game Development */}
          <ServiceCard
            title="Game Development"
            description="Immersive 2D and 3D games with engaging mechanics, rich graphics, and seamless performance across all platforms."
            delayClass="delay-300"
            link="/services/game-development"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="12" x2="10" y2="12"></line>
                <line x1="8" y1="10" x2="8" y2="14"></line>
                <line x1="15" y1="13" x2="15.01" y2="13"></line>
                <line x1="18" y1="11" x2="18.01" y2="11"></line>
                <rect x="2" y="6" width="20" height="12" rx="3"></rect>
              </svg>
            }
          />

        </div>
      </section>

      {/* TECHNOLOGIES WE USE SECTION */}
      <section className="tech-section">
        <div className="tech-bg-element" />
        <div className="tech-bg-glow-1" />
        <div className="tech-bg-glow-2" />

        <div className="w-full max-w-[1920px] relative z-10 mx-auto px-4">
          <div className="tech-header anim-3d-reveal">
            <div className="tech-eyebrow">
              <span className="tech-eyebrow-dot" /> TECH STACK
            </div>
            <h2 className="tech-heading">The Technologies <span className="tech-heading-gradient">We Use</span></h2>
            <p className="tech-subheading">We use modern, reliable and industry-leading technologies<br/>to build high-performance digital solutions.</p>
            <div className="tech-divider"><span className="tech-divider-dot" /></div>
          </div>

          <div className="tech-cards-grid">

            {/* Web Development */}
            <div className="tech-card span-2 anim-3d-reveal delay-100">
              <div className="tech-card-header">
                <div className="tech-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="tech-card-title-group">
                  <h3 className="tech-card-title">Web Development</h3>
                  <p className="tech-card-desc">We build high-performance, responsive websites using modern frameworks. From dynamic landing pages to complex web architectures.</p>
                </div>
              </div>
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React JS" /></div>
                  <span>React JS</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next JS" /></div>
                  <span>Next JS</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" /></div>
                  <span>Tailwind CSS</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/google/4285F4" alt="SEO Optimization" /></div>
                  <span>SEO Optimization</span>
                </div>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="tech-card span-2 anim-3d-reveal delay-200">
              <div className="tech-card-header">
                <div className="tech-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div className="tech-card-title-group">
                  <h3 className="tech-card-title">Mobile App Development</h3>
                  <p className="tech-card-desc">Delivering seamless, cross-platform mobile experiences for iOS & Android. Fast, intuitive, and highly scalable applications.</p>
                </div>
              </div>
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" /></div>
                  <span>Flutter</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Native" /></div>
                  <span>React Native</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/apple/white" alt="iOS" /></div>
                  <span>iOS & Android</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/postman/FF6C37" alt="API Integration" /></div>
                  <span>API Integration</span>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="tech-card span-2 anim-3d-reveal delay-300">
              <div className="tech-card-header">
                <div className="tech-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div className="tech-card-title-group">
                  <h3 className="tech-card-title">UI/UX Design</h3>
                  <p className="tech-card-desc">Crafting visually stunning, user-centric interfaces backed by deep user research. We transform wireframes into high-converting prototypes.</p>
                </div>
              </div>
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma Design" /></div>
                  <span>Figma Design</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <span>User Research</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <span>Wire<br/>Framing</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/framer/white" alt="Interactive Prototypes" /></div>
                  <span>Interactive Prototypes</span>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="tech-card span-2-center anim-3d-reveal delay-100">
              <div className="tech-card-header">
                <div className="tech-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
                <div className="tech-card-title-group">
                  <h3 className="tech-card-title">Graphic Design</h3>
                  <p className="tech-card-desc">Creating breathtaking visuals and immersive graphics that forge powerful brand identities and unforgettable digital aesthetics.</p>
                </div>
              </div>
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="/images/uploaded-logos/logo_ps.png" alt="Photoshop" /></div>
                  <span>Photoshop</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="/images/uploaded-logos/logo_ai_transparent.png" alt="Illustrator" style={{ transform: 'scale(1.3)' }} /></div>
                  <span>Illustrator</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="/images/uploaded-logos/logo_ae.png" alt="After Effects" /></div>
                  <span>After Effects</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="/images/uploaded-logos/logo_canva.png" alt="Canva" style={{ transform: 'scale(1.6)' }} /></div>
                  <span>Canva</span>
                </div>
              </div>
            </div>

            {/* Backend & AI */}
            <div className="tech-card span-3 anim-3d-reveal delay-200">
              <div className="tech-card-header">
                <div className="tech-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div className="tech-card-title-group">
                  <h3 className="tech-card-title">Backend & AI</h3>
                  <p className="tech-card-desc">Architecting robust, secure backends powered by next-gen AI integrations to fuel your applications with intelligent automation.</p>
                </div>
              </div>
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="Gemini API" /></div>
                  <span>Gemini API</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" /></div>
                  <span>MongoDB</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/php/777BB4" alt="PHP" /></div>
                  <span>PHP</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" /></div>
                  <span>Firebase</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-box"><img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" /></div>
                  <span>Supabase</span>
                </div>
              </div>
            </div>

          </div>

          <div className="tech-cta-wrap anim-3d-reveal delay-300">
            <a href="/contact" className="tech-cta-btn">
              Let's Build Something Amazing
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOME PAGE — PORTFOLIO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="port-section">
        {/* Ambient BG */}
        <div className="port-bg" aria-hidden="true">
          <div className="port-orb port-orb-1" />
          <div className="port-orb port-orb-2" />
          <div className="port-orb port-orb-3" />
        </div>

        <div className="port-container">

          {/* ── Header ── */}
          <div className="port-header anim-fade-up">
            <span className="port-eyebrow">
              <span className="port-eyebrow-dot" />
              OUR PORTFOLIO
              <span className="port-eyebrow-dot" />
            </span>
            <h2 className="port-heading">
              Our Work,{' '}
              <span className="port-heading-gradient">Your Success</span>
            </h2>
            <p className="port-subheading">
              We create digital products that help businesses grow, scale and stand out in competitive markets.
            </p>
          </div>

          <PortfolioItem3D
            num="01"
            title="AI-Powered Analytics Dashboard"
            desc="A powerful analytics dashboard that provides real-time insights, data visualization, and AI-driven recommendations to help businesses make smarter decisions."
            features={[
              "Real-time data analytics",
              "AI-powered insights engine",
              "Custom reports generation",
              "Secure & scalable architecture"
            ]}
            imgSrc="/images/portfolio/project1.png"
            imgAlt="AI Analytics Dashboard"
            ctaLink="/portfolio"
            imagePosition="left"
            delayClass=""
          />

          <PortfolioItem3D
            num="02"
            title="E-Commerce Web Platform"
            desc="A modern e-commerce platform built for performance and scalability. It offers a seamless shopping experience with advanced features and secure payments."
            features={[
              "Modern & responsive design",
              "Secure payment integration",
              "Advanced product filtering",
              "Order tracking system"
            ]}
            imgSrc="/images/portfolio/project2.png"
            imgAlt="E-Commerce Platform"
            ctaLink="/portfolio"
            imagePosition="right"
            delayClass="delay-100"
          />

          <PortfolioItem3D
            num="03"
            title="Fitness Mobile Application"
            desc="A feature-rich fitness app that helps users track their workouts, monitor progress, and achieve their health goals with personalized plans."
            features={[
              "Personalized workout plans",
              "Progress tracking",
              "Nutrition & diet plans",
              "Push notifications & reminders"
            ]}
            imgSrc="/images/portfolio/project3.png"
            imgAlt="Fitness Mobile Application"
            ctaLink="/portfolio"
            imagePosition="left"
            delayClass="delay-200"
          />

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════════ */}
      <section className="testi-section">
        <div className="testi-bg" aria-hidden="true">
          <div className="testi-orb testi-orb-1" />
          <div className="testi-orb testi-orb-2" />
        </div>
        <div className="testi-container">
          <div className="testi-header anim-fade-up">
            <span className="testi-eyebrow">
              <span className="testi-eyebrow-dot" />
              CLIENT REVIEWS
              <span className="testi-eyebrow-dot" />
            </span>
            <h2 className="testi-heading">
              What Our <span className="testi-heading-gradient">Clients Say</span>
            </h2>
            <p className="testi-subheading">
              Trusted by businesses worldwide. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="testi-grid">
            {/* Review 1 */}
            <div className="testi-card anim-fade-up delay-100">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"DCS transformed our entire digital presence. Their team delivered a stunning, high-performance web application that exceeded every expectation. Truly world-class work."</p>
              <div className="testi-author">
                <img src="/images/client_1.png" alt="Michael Sterling" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">Michael Sterling</span>
                  <span className="testi-author-role">CEO, TechVentures LLC</span>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="testi-card anim-fade-up delay-200">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"The mobile app they built for us increased our user engagement by 300%. Professional, on-time delivery, and outstanding UI/UX design. Highly recommend!"</p>
              <div className="testi-author">
                <img src="/images/client_2.png" alt="Sarah Mitchell" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">Sarah Mitchell</span>
                  <span className="testi-author-role">Founder, HealthFirst App</span>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="testi-card anim-fade-up delay-300">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"From branding to full-stack development, DCS handled everything seamlessly. Our e-commerce platform now generates 5x more revenue. Best investment we've made."</p>
              <div className="testi-author">
                <img src="/images/client_3.png" alt="James Carter" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">James Carter</span>
                  <span className="testi-author-role">Director, ShopWave</span>
                </div>
              </div>
            </div>
            {/* Review 4 */}
            <div className="testi-card anim-fade-up delay-100">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Incredible attention to detail and a team that truly listens. They delivered our SaaS dashboard ahead of schedule and it's visually breathtaking. 10/10 experience."</p>
              <div className="testi-author">
                <img src="/images/client_4.png" alt="Emma Watson" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">Emma Watson</span>
                  <span className="testi-author-role">CTO, DataFlow Solutions</span>
                </div>
              </div>
            </div>
            {/* Review 5 */}
            <div className="testi-card anim-fade-up delay-200">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"DCS is the only agency we trust for our digital projects. Their expertise in AI integration and modern design is unmatched. They made the impossible possible."</p>
              <div className="testi-author">
                <img src="/images/client_5.png" alt="David Harrison" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">David Harrison</span>
                  <span className="testi-author-role">Product Lead, InnovateTech</span>
                </div>
              </div>
            </div>
            {/* Review 6 */}
            <div className="testi-card anim-fade-up delay-300">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Their graphic design team created a brand identity that perfectly captures our vision. The entire process was smooth, collaborative, and delivered exceptional results."</p>
              <div className="testi-author">
                <img src="/images/client_6.png" alt="Sophia Anderson" className="testi-avatar" style={{objectFit: 'cover'}} />
                <div className="testi-author-info">
                  <span className="testi-author-name">Sophia Anderson</span>
                  <span className="testi-author-role">CMO, BrandCraft Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ARCHITECTURE OF DIGITAL TRANSFORMATION SECTION
      ═══════════════════════════════════════════════ */}
      <ArchSection />

      {/* ═══════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════ */}
      <section className="contact-section">
        <div className="contact-bg" aria-hidden="true">
          <div className="contact-orb contact-orb-1" />
          <div className="contact-orb contact-orb-2" />
        </div>
        <div className="contact-container">
          <div className="contact-inner">
            {/* Left Info */}
            <div className="contact-info">
              <span className="contact-eyebrow anim-3d-slide-left">
                <span className="contact-eyebrow-dot" />
                GET IN TOUCH
              </span>
              <h2 className="contact-heading anim-3d-slide-left delay-100">
                Let's Build Something <span className="contact-heading-gradient">Amazing Together</span>
              </h2>
              <p className="contact-desc anim-3d-slide-left delay-200">
                Have a project in mind? We'd love to hear about it. Drop us a message and our team will get back to you within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item anim-3d-slide-left delay-300">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email Us</span>
                    <span className="contact-detail-value">digitalcodesolution.company@gmail.com</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-slide-left delay-400">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Call Us</span>
                    <span className="contact-detail-value">+92 370 302 2622</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-slide-left delay-500">
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

            <div className="contact-form-wrap">
              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field anim-3d-slide-right delay-100">
                    <label className="contact-label">Your Name</label>
                    <input type="text" className="contact-input" placeholder="John Doe" />
                  </div>
                  <div className="contact-field anim-3d-slide-right delay-200">
                    <label className="contact-label">Email Address</label>
                    <input type="email" className="contact-input" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="contact-field anim-3d-slide-right delay-300">
                  <label className="contact-label">Subject</label>
                  <input type="text" className="contact-input" placeholder="Project Inquiry" />
                </div>
                <div className="contact-field anim-3d-slide-right delay-400">
                  <label className="contact-label">Message</label>
                  <textarea className="contact-textarea" rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="contact-submit-btn anim-3d-slide-right delay-500">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
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
                <li><a href="/services/web-development">Web Development</a></li>
                <li><a href="/services/app-development">App Development</a></li>
                <li><a href="/services/ai-chatbot">AI Chatbot Dev</a></li>
                <li><a href="/services/game-development">Game Development</a></li>
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
    </HomeIntroGate>
  );
}
