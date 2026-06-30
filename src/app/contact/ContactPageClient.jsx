"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../components/ResponsiveNav";
import GlobalScrollObserver from "../../components/GlobalScrollObserver";
import Footer from "../../sections/layout/Footer";

const INFO_ITEMS = [
  { title: "Email", val: "digitalcodesolution.company@gmail.com", desc: "Business Inquiries & Project Discussions", icon: "mail" },
  { title: "WhatsApp", val: "+92 370 302 2622", desc: "Quick Response Within Minutes", icon: "phone" },
  { title: "Website", val: "digitalcodesolution.company", desc: "Explore Our Digital Solutions", icon: "globe" },
  { title: "Working Hours", val: "Monday — Saturday\n9:00 AM — 7:00 PM", desc: "We're Always Ready To Help", icon: "clock" }
];

const WHY_POINTS = [
  { title: "Premium Quality Solutions", desc: "High-quality solutions designed for excellence.", icon: "award" },
  { title: "Fast Project Delivery", desc: "On-time delivery with speed and precision.", icon: "clock" },
  { title: "Scalable Architecture", desc: "Built to scale with your business growth.", icon: "layers" },
  { title: "Clean & Maintainable Code", desc: "Clean, efficient, and easy to maintain.", icon: "code" },
  { title: "Modern UI/UX", desc: "Beautiful, intuitive & user-centered design.", icon: "layout" },
  { title: "AI-Powered Solutions", desc: "Smart automation powered by AI.", icon: "cpu" },
  { title: "Mobile Responsive", desc: "Fully responsive across all devices.", icon: "smartphone" },
  { title: "Secure Development", desc: "Security-first approach for your peace of mind.", icon: "shield" },
  { title: "Dedicated Support", desc: "We're here for you always.", icon: "headphones" }
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understand your goals and business requirements." },
  { num: "02", title: "Planning", desc: "Design the perfect strategy and roadmap." },
  { num: "03", title: "Development", desc: "Build scalable, secure, and high-performance solutions." },
  { num: "04", title: "Testing", desc: "Ensure quality, performance, and reliability." },
  { num: "05", title: "Launch & Support", desc: "Deploy successfully with continuous support." }
];

const FAQS_LEFT = [
  { q: "How long does a project take?", a: "Timeline depends on scope. Typically, simple sites take 2-3 weeks, while complex platforms range from 6-12 weeks." },
  { q: "What technologies do you use?", a: "We work with modern frameworks including React, Next.js, Node.js, Flutter, and AI LLM integrations." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer dedicated maintenance plans and engineering support post-launch." },
  { q: "Can you redesign an existing website?", a: "Absolutely. We perform visual audits and complete rebuilds for modern speed and aesthetics." }
];

const FAQS_RIGHT = [
  { q: "Do you develop mobile apps?", a: "Yes, we build native and cross-platform mobile apps for iOS and Android using Flutter." },
  { q: "Do you build AI chatbots?", a: "Yes! We specialize in training and deploying customized business intelligence AI assistants." },
  { q: "How do payments work?", a: "Typically we work with a milestone-based billing structure (e.g. 30% upfront, milestones, final delivery)." },
  { q: "Do you offer custom solutions?", a: "Yes, all our codebases are written custom from scratch to match your specific specifications." }
];

export default function ContactPageClient() {
  const [activeFaqLeft, setActiveFaqLeft] = useState(-1);
  const [activeFaqRight, setActiveFaqRight] = useState(-1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Select a service",
    budget: "Select your budget",
    timeline: "Select timeline",
    details: ""
  });

  const cardRefs = useRef([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-opacity", "0");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully. We will get back to you within 24 hours.");
  };

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── 1. CONTACT HERO ── */}
      <section className="svc-hero" style={{ paddingBottom: "80px" }}>
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          {/* Left Hero Info */}
          <div className="ai-hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> CONTACT DIGITAL CODE SOLUTION
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", textAlign: "left", lineHeight: "1.12", letterSpacing: "-0.02em", margin: "16px 0" }}>
              Let's Build <br />
              Something <span className="text-gradient-purple">Amazing</span> <br />
              <span className="text-gradient-purple">Together</span>
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300" style={{ maxWidth: "540px", margin: "0 0 32px 0", textAlign: "left" }}>
              Whether you need a high-performance website, a powerful mobile application, AI automation, UI/UX design, or complete digital transformation, our team is ready to turn your ideas into reality.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400" style={{ display: "flex", gap: "16px" }}>
              <a href="#contact-form" className="btn-primary">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/contact" className="btn-outline">
                Book Free Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="ai-hero-right anim-3d-reveal delay-300" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="portfolio-hero-glow-circle" style={{ position: "relative", width: "100%", maxWidth: "560px", padding: "20px" }}>
              <div className="portfolio-pedestal-ambient" style={{ position: "absolute", inset: "0", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", borderRadius: "50%", transform: "scale(1.2)" }} />
              <img
                src="/images/contact_hero_visual.png"
                alt="DCS Contact Support Hologram"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(122, 34, 255, 0.35))",
                  position: "relative",
                  zIndex: 2
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK CONTACT INFO STRIP ── */}
      <section className="stats-strip-bar" aria-label="Quick contact details" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(3,1,8,0.2)", padding: "40px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {INFO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="why-card anim-3d-reveal"
                style={{
                  animationDelay: `${idx * 0.08}s`,
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  background: "var(--glass-bg)"
                }}
              >
                <div style={{ color: "var(--purple-glow)", padding: "8px", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "10px", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {item.icon === "mail" && <><rect x="3" y="4" width="18" height="15" rx="2"/><path d="M22 6L12 13 2 6"/></>}
                    {item.icon === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>}
                    {item.icon === "globe" && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                    {item.icon === "clock" && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                  </svg>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", fontSize: "0.95rem", color: "#fff", fontFamily: "var(--font-title)", fontWeight: 700 }}>{item.title}</h4>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-lavender)", fontWeight: "600", whiteSpace: "pre-line", wordBreak: "break-all" }}>{item.val}</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "0.72rem", color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FORM & WHY CHOOSE US (TWO COLUMNS) ── */}
      <section className="svc-grid-section" id="contact-form" aria-label="Message form and key points" style={{ padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-combined-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px" }}>
            
            {/* Left Column: Form Card */}
            <div className="why-card" style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "24px", background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: "24px", textAlign: "left" }}>
              <div>
                <h3 className="why-card-title" style={{ fontSize: "1.6rem", margin: "0 0 6px 0" }}>Send Us a Message</h3>
                <p className="why-card-desc" style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Fill out the form and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="contact-form" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Name */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  {/* Company */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="contact-input"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Email */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="contact-field" style={{ margin: 0 }}>
                  <label className="contact-label">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="contact-input"
                    style={{ background: "rgba(13,7,30,0.85)", color: "#fff", cursor: "pointer" }}
                  >
                    <option value="Select a service" disabled>Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI Chatbot Development">AI Chatbot Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Game Development">Game Development</option>
                  </select>
                </div>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Budget */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="contact-input"
                      style={{ background: "rgba(13,7,30,0.85)", color: "#fff", cursor: "pointer" }}
                    >
                      <option value="Select your budget" disabled>Select your budget</option>
                      <option value="<$5k">Less than $5,000</option>
                      <option value="$5k-$15k">$5,000 — $15,000</option>
                      <option value="$15k-$50k">$15,000 — $50,000</option>
                      <option value=">$50k">More than $50,000</option>
                    </select>
                  </div>
                  {/* Timeline */}
                  <div className="contact-field" style={{ margin: 0 }}>
                    <label className="contact-label">Project Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="contact-input"
                      style={{ background: "rgba(13,7,30,0.85)", color: "#fff", cursor: "pointer" }}
                    >
                      <option value="Select timeline" disabled>Select timeline</option>
                      <option value="<1 month">Less than 1 month</option>
                      <option value="1-3 months">1 — 3 months</option>
                      <option value="3-6 months">3 — 6 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div className="contact-field" style={{ margin: 0 }}>
                  <label className="contact-label">Project Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="contact-textarea"
                    rows="4"
                    maxLength="1000"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <span style={{ display: "block", textAlign: "right", fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "4px" }}>
                    {formData.details.length}/1000
                  </span>
                </div>

                {/* Submit Buttons */}
                <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                  <button type="submit" className="contact-submit-btn" style={{ margin: 0, flex: 1, padding: "14px 28px", borderRadius: "10px" }}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}>
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                  <a href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", margin: 0, flex: 1, padding: "14px 28px", borderRadius: "10px", fontSize: "0.85rem" }}>
                    Schedule Meeting
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "8px" }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </a>
                </div>

                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", textAlign: "center", display: "block", marginTop: "10px" }}>
                  🛡️ Your information is 100% secure and confidential.
                </span>
              </form>
            </div>

            {/* Right Column: Why Choose DCS Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", textAlign: "left" }}>
              <div>
                <span className="hs-eyebrow">
                  <span className="hs-eyebrow-dot" /> Benefits
                </span>
                <h2 className="svc-heading" style={{ textAlign: "left", margin: "12px 0 0 0" }}>
                  Why Choose <br />
                  <span className="svc-heading-gradient">Digital Code Solution?</span>
                </h2>
              </div>

              <div className="contact-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {WHY_POINTS.map((pt, idx) => (
                  <div
                    key={idx}
                    ref={el => (cardRefs.current[idx] = el)}
                    onMouseMove={e => handleMouseMove(e, idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                    className="why-card anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.03}s`,
                      padding: "20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "14px",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ color: "var(--purple-glow)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        {pt.icon === "award" && <><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>}
                        {pt.icon === "clock" && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                        {pt.icon === "layers" && <polygon points="12 2 2 7 12 12 22 7 12 2"/>}
                        {pt.icon === "code" && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
                        {pt.icon === "layout" && <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>}
                        {pt.icon === "cpu" && <rect x="4" y="4" width="16" height="16" rx="2"/>}
                        {pt.icon === "smartphone" && <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>}
                        {pt.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                        {pt.icon === "headphones" && <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>}
                      </svg>
                    </div>
                    <h4 style={{ margin: 0, fontSize: "0.82rem", color: "#fff", fontFamily: "var(--font-title)", fontWeight: 700, lineHeight: "1.3" }}>{pt.title}</h4>
                    <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-muted)", lineHeight: "1.4" }}>{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OUR PROCESS SECTION ── */}
      <section className="svc-grid-section" id="process" aria-label="Our Process" style={{ padding: "100px 0" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" /> OUR PROCESS
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Our <span className="svc-heading-gradient">Process</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A simple, clear process to turn your ideas into powerful digital solutions.
          </p>
        </div>

        <style>{`
          @keyframes processMarqueeContact {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .process-flow-marquee {
            display: flex;
            gap: 24px;
            padding-bottom: 20px;
            width: max-content;
            animation: processMarqueeContact 30s linear infinite;
          }
          .process-flow-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px", overflow: "hidden" }}>
          <div className="process-flow-marquee">
            {[...PROCESS_STEPS, ...PROCESS_STEPS].map((step, idx) => (
              <div
                key={idx}
                className="why-card anim-3d-reveal"
                style={{
                  animationDelay: `${(idx % PROCESS_STEPS.length) * 0.08}s`,
                  padding: "24px",
                  width: "220px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                  flexShrink: 0
                }}
              >
                {/* Connector Line always visible for seamless flow */}
                <div style={{
                  position: "absolute",
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "2px",
                  background: "rgba(168,85,247,0.3)",
                  zIndex: 0
                }} />

                <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--purple-glow)", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "8px", padding: "4px 8px", fontFamily: "var(--font-title)", width: "fit-content" }}>
                  {step.num}
                </span>

                <h4 style={{ margin: 0, fontSize: "1.05rem", color: "#fff", fontFamily: "var(--font-title)", fontWeight: 700 }}>{step.title}</h4>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.6" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FREQUENTLY ASKED QUESTIONS SECTION ── */}
      <section className="svc-grid-section" id="faqs" aria-label="Frequently Asked Questions" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" /> FAQS
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Frequently Asked <span className="svc-heading-gradient">Questions</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            Find quick answers to common questions about our services and delivery roadmap.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-feedback-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "flex-start" }}>
            
            {/* Left Column FAQ list */}
            <div className="faq-accordions-list" style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", margin: 0 }}>
              {FAQS_LEFT.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-accordion-item ${activeFaqLeft === idx ? "active" : ""}`}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid",
                    borderColor: activeFaqLeft === idx ? "rgba(168,85,247,0.3)" : "var(--glass-border)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <button
                    onClick={() => setActiveFaqLeft(activeFaqLeft === idx ? -1 : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      color: "#fff",
                      fontFamily: "var(--font-title)",
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      cursor: "pointer",
                      outline: "none"
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "1.2rem", color: "var(--purple-glow)", marginLeft: "16px" }}>
                      {activeFaqLeft === idx ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: activeFaqLeft === idx ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      padding: activeFaqLeft === idx ? "0 24px 20px" : "0 24px"
                    }}
                  >
                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.6" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column FAQ list */}
            <div className="faq-accordions-list" style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", margin: 0 }}>
              {FAQS_RIGHT.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-accordion-item ${activeFaqRight === idx ? "active" : ""}`}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid",
                    borderColor: activeFaqRight === idx ? "rgba(168,85,247,0.3)" : "var(--glass-border)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <button
                    onClick={() => setActiveFaqRight(activeFaqRight === idx ? -1 : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      color: "#fff",
                      fontFamily: "var(--font-title)",
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      cursor: "pointer",
                      outline: "none"
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "1.2rem", color: "var(--purple-glow)", marginLeft: "16px" }}>
                      {activeFaqRight === idx ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: activeFaqRight === idx ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      padding: activeFaqRight === idx ? "0 24px 20px" : "0 24px"
                    }}
                  >
                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.6" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. READY TO START CTA BANNER ── */}
      <section className="svc-grid-section" id="ready-cta" aria-label="CTA banner" style={{ padding: "80px 0 100px" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-cta-banner why-card" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center", padding: "48px 60px", background: "linear-gradient(135deg, rgba(13,7,30,0.85) 0%, rgba(3,1,8,0.95) 100%)", border: "1px solid rgba(168,85,247,0.25)", boxShadow: "0 0 40px rgba(122,34,255,0.1)" }}>
            
            {/* Banner Left Info */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div className="badge-pill-purple" style={{ marginBottom: "16px" }}>
                ✦ READY TO START?
              </div>
              <h2 className="svc-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0 0 12px 0", textAlign: "left" }}>
                Ready To Start Your <br />
                Next <span className="svc-heading-gradient">Digital Project?</span>
              </h2>
              <p className="svc-subheading" style={{ fontSize: "0.92rem", margin: "0 0 32px 0", textAlign: "left", maxWidth: "480px" }}>
                Let's build innovative digital experiences that help your business grow faster. Get in touch with us.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#contact-form" className="btn-primary">
                  Start Your Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="/contact" className="btn-outline">
                  Contact Our Team
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Banner Right Visual */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/svc_web_dev.png"
                alt="Web development project mock"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 15px 30px rgba(122,34,255,0.25))"
                }}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
