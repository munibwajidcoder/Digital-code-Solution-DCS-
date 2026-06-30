
const REVIEWS = [
  { name: "Michael Sterling", role: "CEO, TechVentures LLC", text: "DCS transformed our entire digital presence. Their team delivered a stunning, high-performance web application that exceeded every expectation. Truly world-class work.", img: "/images/alex_avatar.png", stars: 5 },
  { name: "Sarah Mitchell", role: "Founder, HealthFirst App", text: "The mobile app they built for us increased our user engagement by 300%. Professional, on-time delivery, and outstanding UI/UX design. Highly recommend!", img: "/images/sarah_avatar.png", stars: 5 },
  { name: "James Carter", role: "Director, ShopWave", text: "From branding to full-stack development, DCS handled everything seamlessly. Our e-commerce platform now generates 5x more revenue. Best investment we've made.", img: "/images/james_avatar.png", stars: 5 },
  { name: "Emma Watson", role: "CTO, DataFlow Solutions", text: "Incredible attention to detail and a team that truly listens. They delivered our SaaS dashboard ahead of schedule and it's visually breathtaking. 10/10 experience.", img: "/images/elena_avatar.png", stars: 5 },
  { name: "David Harrison", role: "Product Lead, InnovateTech", text: "DCS is the only agency we trust for our digital projects. Their expertise in AI integration and modern design is unmatched. They made the impossible possible.", img: "/images/david_avatar.png", stars: 5 },
  { name: "Sophia Anderson", role: "CMO, BrandCraft Agency", text: "Their graphic design team created a brand identity that perfectly captures our vision. The entire process was smooth, collaborative, and delivered exceptional results.", img: "/images/riana_avatar.png", stars: 5 }
];

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
            {REVIEWS.map((t, idx) => (
              <div key={t.name} className={`why-card anim-fade-up delay-${(idx % 3 + 1) * 100}`}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <img src={t.img} alt={t.name} style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", background: "#1c1236" }} />
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)", margin: 0 }}>{t.name}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
                <div style={{ color: "var(--purple-glow)", fontSize: "0.9rem", marginBottom: "8px" }}>
                  {"★".repeat(t.stars)}
                </div>
                <p className="why-card-desc" style={{ fontSize: "0.88rem", fontStyle: "italic", lineHeight: "1.6" }}>
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
