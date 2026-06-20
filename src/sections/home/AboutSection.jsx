import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
        {/* Premium layered background for About */}
        <div className="about-section-bg" />
        <div className="about-bg-glow" />

        <div className="about-content-left">
          <div className="badge-pill-cyan anim-slide-up delay-100">
            👤 About Digital Code Solution
          </div>

          <h2 className="about-heading anim-slide-up delay-200">
            Building <span className="text-accent-gradient">Digital Experiences</span> <br />
            That Inspire Innovation
          </h2>

          <p className="about-paragraph anim-slide-up delay-300">
            At Digital Code Solution (DCS), we transform ambitious ideas into powerful digital products. From modern websites and scalable mobile applications to AI-powered solutions and intuitive user experiences, our mission is to help businesses grow through technology, creativity, and innovation.
          </p>

          <p className="about-paragraph anim-slide-up delay-400" style={{ marginTop: "-8px" }}>
            Our team combines strategic thinking, premium design, and clean development practices to deliver future-ready solutions that create lasting impact.
          </p>

          <div className="about-cards-row anim-slide-up delay-300">
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
              <div className="about-card-icon" style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00a8cc 100%)", boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)" }}>
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

          <div className="about-features-grid anim-slide-up delay-400">
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

          <div className="about-cta-row anim-slide-up delay-500">
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
        <div className="about-visual-column anim-slide-right delay-200">
          <div className="visual-image-wrapper">
            <Image src="/images/control_room.png" alt="DCS Server Room Control Room" fill sizes="(max-width: 768px) 100vw, 50vw" priority />
            <div className="visual-image-overlay" />
          </div>

          <div className="about-metrics-bar">
            <div className="metric-pill-card anim-scale-in delay-300">
              <div className="metric-badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="metric-pill-number">25+</div>
              <div className="metric-pill-label">Projects Delivered</div>
            </div>

            <div className="metric-pill-card anim-scale-in delay-400">
              <div className="metric-badge-icon" style={{ background: "rgba(0, 229, 255, 0.12)", borderColor: "rgba(0, 229, 255, 0.25)", color: "var(--cyan-accent)" }}>
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

            <div className="metric-pill-card anim-scale-in delay-500">
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

          <div className="team-pill-card anim-slide-up delay-600">
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
  );
}
