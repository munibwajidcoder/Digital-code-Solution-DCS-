
export default function TestimonialsSection() {
  return (
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
  );
}
