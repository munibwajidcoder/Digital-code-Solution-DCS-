
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
            <p className="hs-card-desc">We architect high-performance, fully responsive websites using the latest modern technologies. From compelling marketing sites to highly complex, scalable web applications, our custom web solutions are built to dominate the digital space. We focus on lightning-fast load times, seamless user experiences, and robust security, ensuring your business stays miles ahead of the competition.</p>
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
            <p className="hs-card-desc">We develop world-class, cross-platform mobile applications for both iOS and Android. By utilizing cutting-edge frameworks, we ensure your app delivers a native-like experience with blazing-fast performance. From conceptualization and UI design to seamless API integration and final deployment, we build highly intuitive and scalable mobile solutions that drive immense business growth.</p>
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
            <p className="hs-card-desc">Revolutionize your customer support with our next-generation AI chatbots. We integrate advanced natural language processing and deep machine learning to create intelligent virtual assistants that understand context and resolve queries instantly. Available 24/7, our custom AI solutions automate complex conversations, dramatically reduce costs, and deliver an unprecedented level of engagement.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about AI Chatbot Development">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Card 4 — UI/UX Design */}
          <div className="hs-card hs-card-center-start anim-slide-up delay-100">
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
            <p className="hs-card-desc">We design breathtaking, user-centric interfaces rooted in comprehensive user research and behavioral psychology. Our process involves deep strategic planning, wireframing, and highly interactive prototyping to ensure every click feels natural. We transform complex workflows into stunning, frictionless digital experiences engineered to maximize user retention and conversion rates.</p>
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
            <p className="hs-card-desc">Elevate your brand's visual identity with our immersive and highly creative graphic design services. We craft striking, modern visuals—from premium branding and logo design to dynamic 3D elements and marketing collateral. By blending artistic innovation with strategic market insights, we create unforgettable digital aesthetics that instantly capture attention and build deep trust.</p>
            <a href="/services" className="hs-arrow-btn" aria-label="Learn more about Graphic Design">
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
