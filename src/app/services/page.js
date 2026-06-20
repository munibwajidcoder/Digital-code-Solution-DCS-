import Image from "next/image";

export const metadata = {
  title: "Our Services | Digital Code Solution (DCS)",
  description:
    "Explore the full range of digital services offered by DCS — Web Development, Mobile Apps, UI/UX Design, AI Solutions, E-Commerce, SEO, Cloud & Custom Software.",
};

export default function ServicesPage() {
  return (
    <div className="main-wrapper">

      {/* HEADER / NAVBAR */}
      <header className="nav-container anim-fade-in">
        <a href="/" className="logo-brand" style={{ gap: "15px", alignItems: "flex-end" }}>
          <div style={{ width: "55px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="/images/logo.png" alt="DCS Logo" style={{ width: "100%", height: "auto", display: "block", filter: "drop-shadow(0 0 10px rgba(122, 34, 255, 0.4))" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", lineHeight: "1.1", letterSpacing: "1px", textTransform: "uppercase", paddingBottom: "4px" }}>
            <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-primary)" }}>
              Digital <span style={{ background: "linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-glow) 50%, #6b21a8 100%)", backgroundSize: "200% 200%", animation: "gradient-flow 4s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Code</span>
            </span>
            <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-primary)" }}>Solution</span>
          </div>
        </a>

        <nav className="nav-menu-wrapper">
          <ul className="nav-menu-list">
            <li><a href="/" className="nav-menu-link">Home</a></li>
            <li><a href="/services" className="nav-menu-link active">Services</a></li>
            <li><a href="#" className="nav-menu-link">Portfolio</a></li>
            <li><a href="#" className="nav-menu-link">Pricing</a></li>
            <li><a href="#" className="nav-menu-link">About</a></li>
            <li><a href="#" className="nav-menu-link">Contact</a></li>
          </ul>
        </nav>

        <div>
          <button className="btn-nav-get-started">
            Get Started
            <span className="btn-nav-get-started-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* ── SERVICES HERO ── */}
      <section className="svc-hero" aria-label="Services hero">
        {/* Ambient background */}
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
          <div className="svc-hero-scan" />
          {/* Floating geo shapes */}
          <div className="svc-geo svc-geo-1" />
          <div className="svc-geo svc-geo-2" />
          <div className="svc-geo svc-geo-3" />
          <div className="svc-geo svc-geo-4" />
          {/* Particles */}
          <div className="svc-particle svc-p1" />
          <div className="svc-particle svc-p2" />
          <div className="svc-particle svc-p3" />
          <div className="svc-particle svc-p4" />
          <div className="svc-particle svc-p5" />
          <div className="svc-particle svc-p6" />
        </div>

        <div className="svc-hero-content">
          <div className="badge-pill-cyan anim-slide-up delay-100">
            <span style={{ color: "#7a22ff" }}>◈</span> Our Expertise
          </div>

          <h1 className="svc-hero-heading anim-slide-up delay-200">
            World-Class Digital<br />
            <span className="text-gradient-purple">Services That Scale</span>
          </h1>

          <p className="svc-hero-desc anim-slide-up delay-300">
            From concept to launch, DCS delivers premium digital solutions crafted with precision, speed, and innovation — powering businesses worldwide.
          </p>

          <div className="svc-hero-stats anim-slide-up delay-400">
            <div className="svc-stat-pill">
              <span className="svc-stat-num">8+</span>
              <span className="svc-stat-label">Core Services</span>
            </div>
            <div className="svc-stat-divider" />
            <div className="svc-stat-pill">
              <span className="svc-stat-num">100+</span>
              <span className="svc-stat-label">Clients Served</span>
            </div>
            <div className="svc-stat-divider" />
            <div className="svc-stat-pill">
              <span className="svc-stat-num">25+</span>
              <span className="svc-stat-label">Projects Done</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="svc-grid-section" aria-label="All services">
        <div className="svc-section-label anim-fade-in">
          <span className="svc-section-line" />
          What We Offer
          <span className="svc-section-line" />
        </div>
        <h2 className="svc-section-heading anim-slide-up delay-100">
          Every Service You Need to<br />
          <span className="text-accent-gradient">Dominate Digitally</span>
        </h2>
        <p className="svc-section-sub anim-slide-up delay-200">
          We cover every dimension of modern digital product development — from design to deployment.
        </p>

        <div className="svc-cards-grid">

          {/* 1 — Web Development */}
          <div className="svc-card anim-scale-in delay-100">
            <div className="svc-card-glow" />
            <div className="svc-card-icon-wrap svc-icon-purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="svc-card-badge">Most Popular</div>
            <h3 className="svc-card-title">Web Development</h3>
            <p className="svc-card-desc">
              Fast, responsive, and scalable websites built with Next.js, React, and modern stacks. SEO-optimised from day one.
            </p>
            <ul className="svc-card-list">
              <li>Custom Website Design</li>
              <li>Next.js / React Development</li>
              <li>Landing Pages & Portfolios</li>
              <li>CMS Integration</li>
            </ul>
            <a href="#" className="svc-card-cta">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 2 — Mobile App Development */}
          <div className="svc-card anim-scale-in delay-200">
            <div className="svc-card-glow svc-glow-cyan" />
            <div className="svc-card-icon-wrap svc-icon-cyan">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="svc-card-title">Mobile App Development</h3>
            <p className="svc-card-desc">
              Cross-platform iOS and Android applications built with React Native — delivering native performance with one codebase.
            </p>
            <ul className="svc-card-list">
              <li>React Native Apps</li>
              <li>iOS & Android Deployment</li>
              <li>App Store Optimisation</li>
              <li>Push Notifications & Analytics</li>
            </ul>
            <a href="#" className="svc-card-cta svc-cta-cyan">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 3 — UI/UX Design */}
          <div className="svc-card anim-scale-in delay-300">
            <div className="svc-card-glow" />
            <div className="svc-card-icon-wrap svc-icon-purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
            </div>
            <h3 className="svc-card-title">UI/UX Design</h3>
            <p className="svc-card-desc">
              Premium user interfaces and intuitive experiences designed in Figma — crafted for engagement, conversion, and delight.
            </p>
            <ul className="svc-card-list">
              <li>Figma UI Design</li>
              <li>Design Systems & Style Guides</li>
              <li>Wireframing & Prototyping</li>
              <li>User Research & Testing</li>
            </ul>
            <a href="#" className="svc-card-cta">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 4 — AI Solutions */}
          <div className="svc-card svc-card-featured anim-scale-in delay-100">
            <div className="svc-card-glow svc-glow-mixed" />
            <div className="svc-card-icon-wrap svc-icon-gradient">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="svc-card-badge svc-badge-new">New ✦</div>
            <h3 className="svc-card-title">AI-Powered Solutions</h3>
            <p className="svc-card-desc">
              Integrate cutting-edge AI into your product — chatbots, automation, smart analytics, and LLM-powered features for competitive advantage.
            </p>
            <ul className="svc-card-list">
              <li>AI Chatbots & Assistants</li>
              <li>Workflow Automation</li>
              <li>Custom LLM Integration</li>
              <li>Predictive Analytics</li>
            </ul>
            <a href="#" className="svc-card-cta">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 5 — E-Commerce */}
          <div className="svc-card anim-scale-in delay-200">
            <div className="svc-card-glow" />
            <div className="svc-card-icon-wrap svc-icon-purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h3 className="svc-card-title">E-Commerce Development</h3>
            <p className="svc-card-desc">
              High-converting online stores with Shopify, WooCommerce, or fully custom solutions — built to sell at scale.
            </p>
            <ul className="svc-card-list">
              <li>Shopify & WooCommerce</li>
              <li>Custom Cart & Checkout</li>
              <li>Payment Gateway Integration</li>
              <li>Inventory Management</li>
            </ul>
            <a href="#" className="svc-card-cta">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 6 — SEO & Digital Marketing */}
          <div className="svc-card anim-scale-in delay-300">
            <div className="svc-card-glow svc-glow-cyan" />
            <div className="svc-card-icon-wrap svc-icon-cyan">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3 className="svc-card-title">SEO & Digital Marketing</h3>
            <p className="svc-card-desc">
              Rank higher, grow faster. We combine technical SEO, content strategy, and data-driven campaigns to grow your online presence.
            </p>
            <ul className="svc-card-list">
              <li>Technical SEO Audits</li>
              <li>Content Strategy</li>
              <li>Google Ads & Meta Ads</li>
              <li>Analytics & Reporting</li>
            </ul>
            <a href="#" className="svc-card-cta svc-cta-cyan">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 7 — Cloud & DevOps */}
          <div className="svc-card anim-scale-in delay-100">
            <div className="svc-card-glow" />
            <div className="svc-card-icon-wrap svc-icon-purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3 className="svc-card-title">Cloud & DevOps</h3>
            <p className="svc-card-desc">
              Scalable cloud infrastructure, CI/CD pipelines, and DevOps automation that keeps your product fast, secure, and always live.
            </p>
            <ul className="svc-card-list">
              <li>AWS / GCP / Azure Setup</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Performance Monitoring</li>
            </ul>
            <a href="#" className="svc-card-cta">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 8 — Custom Software */}
          <div className="svc-card anim-scale-in delay-200">
            <div className="svc-card-glow svc-glow-cyan" />
            <div className="svc-card-icon-wrap svc-icon-cyan">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="svc-card-title">Custom Software Development</h3>
            <p className="svc-card-desc">
              Bespoke software solutions engineered to solve your unique business challenges — built for reliability, speed, and growth.
            </p>
            <ul className="svc-card-list">
              <li>SaaS Platform Development</li>
              <li>Admin Dashboards & Portals</li>
              <li>API Design & Integration</li>
              <li>Database Architecture</li>
            </ul>
            <a href="#" className="svc-card-cta svc-cta-cyan">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="svc-process-section" aria-label="Our process">
        <div className="svc-process-bg" aria-hidden="true">
          <div className="svc-process-glow-1" />
          <div className="svc-process-glow-2" />
        </div>

        <div className="svc-section-label anim-fade-in">
          <span className="svc-section-line" />
          Our Process
          <span className="svc-section-line" />
        </div>
        <h2 className="svc-section-heading anim-slide-up delay-100">
          How We Turn Your Vision<br />
          <span className="text-accent-gradient">Into Reality</span>
        </h2>

        <div className="svc-process-steps">
          <div className="svc-step anim-slide-up delay-100">
            <div className="svc-step-num">01</div>
            <div className="svc-step-connector" />
            <div className="svc-step-content">
              <h3>Discovery & Strategy</h3>
              <p>We deep-dive into your business goals, target audience, and technical requirements to craft a rock-solid project roadmap.</p>
            </div>
          </div>
          <div className="svc-step anim-slide-up delay-200">
            <div className="svc-step-num">02</div>
            <div className="svc-step-connector" />
            <div className="svc-step-content">
              <h3>Design & Prototype</h3>
              <p>Our designers craft stunning UI mockups and interactive prototypes — giving you a clear vision before a single line of code is written.</p>
            </div>
          </div>
          <div className="svc-step anim-slide-up delay-300">
            <div className="svc-step-num">03</div>
            <div className="svc-step-connector" />
            <div className="svc-step-content">
              <h3>Development & Build</h3>
              <p>Our engineers build your product with clean, scalable code — delivering milestones in agile sprints with full transparency.</p>
            </div>
          </div>
          <div className="svc-step anim-slide-up delay-400">
            <div className="svc-step-num">04</div>
            <div className="svc-step-connector svc-step-connector-last" />
            <div className="svc-step-content">
              <h3>Launch & Growth</h3>
              <p>We deploy your product, monitor performance, and provide ongoing support — ensuring you scale smoothly post-launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="svc-tech-section" aria-label="Technology stack">
        <div className="svc-section-label anim-fade-in">
          <span className="svc-section-line" />
          Tech Stack
          <span className="svc-section-line" />
        </div>
        <h2 className="svc-section-heading anim-slide-up delay-100">
          Built With <span className="text-accent-gradient">Industry-Leading</span> Technologies
        </h2>

        <div className="svc-tech-grid anim-slide-up delay-200">
          {["Next.js", "React", "Node.js", "TypeScript", "React Native", "Figma", "AWS", "MongoDB", "PostgreSQL", "Docker", "Tailwind", "Python"].map((tech, i) => (
            <div key={tech} className="svc-tech-pill" style={{ animationDelay: `${i * 0.06}s` }}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="svc-cta-section" aria-label="Call to action">
        <div className="svc-cta-bg" aria-hidden="true">
          <div className="svc-cta-glow-1" />
          <div className="svc-cta-glow-2" />
          <div className="svc-cta-grid" />
        </div>

        <div className="svc-cta-content anim-scale-in">
          <div className="badge-pill-purple" style={{ marginBottom: "24px" }}>
            <span style={{ color: "#00e5ff" }}>✦</span> Ready to Build?
          </div>
          <h2 className="svc-cta-heading">
            Let&apos;s Create Something<br />
            <span className="text-gradient-purple">Extraordinary Together</span>
          </h2>
          <p className="svc-cta-sub">
            Join 100+ businesses that trust DCS to build their digital future. Book a free consultation today.
          </p>
          <div className="svc-cta-buttons">
            <a href="#" className="btn-primary">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#" className="btn-outline">
              View Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
