
export default function PortfolioSection() {
  return (
    <section className="port-section" id="portfolio">
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

          {/* ── Project 01 — Image Left ── */}
          <div className="port-item anim-fade-up">
            <div className="port-image-wrap port-image-left">
              <div className="port-image-glass">
                <div className="port-image-inner">
                  <img src="/images/portfolio/project1.png" alt="AI Analytics Dashboard" className="port-img" />
                </div>
                <div className="port-image-glow" />
              </div>
            </div>
            <div className="port-info port-info-right">
              <span className="port-num-badge">01</span>
              <h3 className="port-project-title">AI-Powered Analytics Dashboard</h3>
              <p className="port-project-desc">
                A powerful analytics dashboard that provides real-time insights, data visualization, and AI-driven recommendations to help businesses make smarter decisions.
              </p>
              <ul className="port-features">
                <li><span className="port-feat-icon">◈</span> Real-time data analytics</li>
                <li><span className="port-feat-icon">◈</span> AI-powered insights engine</li>
                <li><span className="port-feat-icon">◈</span> Custom reports generation</li>
                <li><span className="port-feat-icon">◈</span> Secure &amp; scalable architecture</li>
              </ul>
              <a href="/portfolio" className="port-cta-btn">
                View Case Study
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Project 02 — Image Right ── */}
          <div className="port-item anim-fade-up delay-100">
            <div className="port-info port-info-left">
              <span className="port-num-badge">02</span>
              <h3 className="port-project-title">E-Commerce Web Platform</h3>
              <p className="port-project-desc">
                A modern e-commerce platform built for performance and scalability. It offers a seamless shopping experience with advanced features and secure payments.
              </p>
              <ul className="port-features">
                <li><span className="port-feat-icon">◈</span> Modern &amp; responsive design</li>
                <li><span className="port-feat-icon">◈</span> Secure payment integration</li>
                <li><span className="port-feat-icon">◈</span> Advanced product filtering</li>
                <li><span className="port-feat-icon">◈</span> Order tracking system</li>
              </ul>
              <a href="/portfolio" className="port-cta-btn">
                View Case Study
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div className="port-image-wrap port-image-right">
              <div className="port-image-glass">
                <div className="port-image-inner">
                  <img src="/images/portfolio/project2.png" alt="E-Commerce Platform" className="port-img" />
                </div>
                <div className="port-image-glow" />
              </div>
            </div>
          </div>

          {/* ── Project 03 — Image Left ── */}
          <div className="port-item anim-fade-up delay-200">
            <div className="port-image-wrap port-image-left">
              <div className="port-image-glass">
                <div className="port-image-inner">
                  <img src="/images/portfolio/project3.png" alt="Fitness Mobile Application" className="port-img" />
                </div>
                <div className="port-image-glow" />
              </div>
            </div>
            <div className="port-info port-info-right">
              <span className="port-num-badge">03</span>
              <h3 className="port-project-title">Fitness Mobile Application</h3>
              <p className="port-project-desc">
                A feature-rich fitness app that helps users track their workouts, monitor progress, and achieve their health goals with personalized plans.
              </p>
              <ul className="port-features">
                <li><span className="port-feat-icon">◈</span> Personalized workout plans</li>
                <li><span className="port-feat-icon">◈</span> Progress tracking</li>
                <li><span className="port-feat-icon">◈</span> Nutrition &amp; diet plans</li>
                <li><span className="port-feat-icon">◈</span> Push notifications &amp; reminders</li>
              </ul>
              <a href="/portfolio" className="port-cta-btn">
                View Case Study
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
  );
}
