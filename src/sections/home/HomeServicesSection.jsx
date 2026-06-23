
export default function HomeServicesSection() {
  return (
    <section className="hs-section" id="services" aria-label="Our Services">

        {/* Ambient background glows */}
        <div className="hs-bg" aria-hidden="true">
          <div className="hs-bg-glow-1" />
          <div className="hs-bg-glow-2" />
          <div className="hs-bg-glow-3" />
        </div>

        {/* Header */}
        <div className="hs-header">
          <div className="hs-eyebrow anim-fade-in">
            <span className="hs-eyebrow-dot" />
            OUR SERVICES
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="hs-heading anim-slide-up delay-100">
            Our Premium <span className="hs-heading-gradient">Services</span>
          </h2>
          <p className="hs-subheading anim-slide-up delay-200">
            We provide high-quality digital solutions to help your business<br />grow, scale and succeed.
          </p>
          <div className="hs-divider anim-fade-in delay-300">
            <span className="hs-divider-dot" />
          </div>
        </div>

        {/* 3×2 Cards Grid */}
        <div className="hs-cards-grid">

          {/* Card 1 — Web Development */}
          <div className="hs-card anim-slide-up delay-100">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">Web Development</h3>
            <p className="hs-card-desc">High-performance, responsive websites and scalable web applications built with Next.js, React, and modern tech stacks.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about Web Development">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 2 — Mobile App Development */}
          <div className="hs-card anim-slide-up delay-200">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">Mobile App Development</h3>
            <p className="hs-card-desc">Native-like, cross-platform mobile applications for iOS and Android built with Flutter and React Native.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about Mobile App Development">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 3 — AI Chatbot Development */}
          <div className="hs-card anim-slide-up delay-300">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <line x1="9" y1="10" x2="9.01" y2="10"></line>
                  <line x1="12" y1="10" x2="12.01" y2="10"></line>
                  <line x1="15" y1="10" x2="15.01" y2="10"></line>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">AI Chatbot Development</h3>
            <p className="hs-card-desc">Next-generation intelligent virtual assistants and automation systems powered by LLMs and natural language processing.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about AI Chatbot Development">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 4 — UI/UX Design */}
          <div className="hs-card anim-slide-up delay-100">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">UI/UX Design</h3>
            <p className="hs-card-desc">Intuitive, user-centric interface designs and interactive prototypes crafted in Figma for conversion and engagement.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about UI/UX Design">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 5 — Graphic Design */}
          <div className="hs-card anim-slide-up delay-200">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">Graphic Design</h3>
            <p className="hs-card-desc">Immersive visual identities, premium branding, marketing collateral, and custom assets that capture brand values.</p>
            <a href="/services/graphic-design" className="hs-arrow-btn" aria-label="Learn more about Graphic Design">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 6 — Game Development */}
          <div className="hs-card anim-slide-up delay-300">
            <div className="hs-card-icon-wrap">
              <div className="hs-icon-orb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <line x1="15" y1="13" x2="15.01" y2="13"></line>
                  <line x1="18" y1="11" x2="18.01" y2="11"></line>
                  <rect x="2" y="6" width="20" height="12" rx="3"></rect>
                </svg>
              </div>
            </div>
            <h3 className="hs-card-title">Game Development</h3>
            <p className="hs-card-desc">Immersive 2D and 3D games with engaging mechanics, rich graphics, and seamless performance across all platforms.</p>
            <a href="/services/game-development" className="hs-arrow-btn" aria-label="Learn more about Game Development">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </section>
  );
}
