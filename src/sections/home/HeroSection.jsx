import Image from "next/image";
import HeroRobot3D from "../../components/three/HeroRobot3D";

export default function HeroSection() {
  return (
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

          <h1 className="hero-heading anim-3d-reveal delay-200">
            We Build Modern <br />
            Websites, Apps &amp; <br />
            <span className="text-accent-gradient">Digital Products</span>
          </h1>

          <p className="hero-description anim-3d-reveal delay-300">
            Helping businesses grow through premium design, scalable development, AI-powered solutions, and modern digital experiences.
          </p>

          <div className="hero-cta-buttons anim-3d-reveal delay-400">
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

          <div className="hero-social-proof anim-3d-reveal delay-500">
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
  );
}
