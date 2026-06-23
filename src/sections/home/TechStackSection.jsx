
export default function TechStackSection() {
  return (
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
  );
}
