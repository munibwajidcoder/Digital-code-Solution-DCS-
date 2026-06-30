"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../components/ResponsiveNav";
import GlobalScrollObserver from "../../components/GlobalScrollObserver";
import Footer from "../../sections/layout/Footer";

const TABS = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "AI Chatbots",
  "UI/UX Design",
  "Graphic Design",
  "Branding"
];

const PROJECTS = [
  {
    id: 1,
    title: "Fintech Dashboard",
    cat: "Web Development",
    desc: "Modern fintech dashboard with real-time financial tracking, advanced analytics grids, and customizable widgets.",
    tags: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodedotjs" }
    ],
    img: "/images/digital_product.png",
    link: "/services/web-development",
    btnText: "Live Preview"
  },
  {
    id: 2,
    title: "E-Commerce App",
    cat: "Mobile Apps",
    desc: "Feature-rich cross-platform retail shopping application with smooth animations, cart mechanics, and safe checkouts.",
    tags: [
      { name: "Flutter", icon: "flutter" },
      { name: "Firebase", icon: "firebase" },
      { name: "Dart", icon: "dart" }
    ],
    img: "/images/svc_mobile_app.png",
    link: "/services/app-development",
    btnText: "Live Preview"
  },
  {
    id: 3,
    title: "AI Assistant Platform",
    cat: "AI Chatbots",
    desc: "Smart LLM-powered assistant platform automating client queries, capturing leads, and performing CRM syncs 24/7.",
    tags: [
      { name: "OpenAI", icon: "openai" },
      { name: "Python", icon: "python" },
      { name: "LangChain", icon: "langchain" }
    ],
    img: "/images/ai_chatbot.png",
    link: "/services/ai-chatbot",
    btnText: "Live Preview"
  },
  {
    id: 4,
    title: "Brand Identity Design",
    cat: "Branding",
    desc: "Complete visual guidelines, modern logos, print guidelines, and corporate branding identity created for a tech venture.",
    tags: [
      { name: "Photoshop", icon: "adobephotoshop" },
      { name: "Illustrator", icon: "adobeillustrator" },
      { name: "Figma", icon: "figma" }
    ],
    img: "/images/svc_graphic_design.png",
    link: "/services/graphic-design",
    btnText: "View Case Study"
  },
  {
    id: 5,
    title: "SaaS Analytics Dashboard",
    cat: "UI/UX Design",
    desc: "Clean dashboard design system built using figma components, auto-layouts, responsive tokens, and dark theme variables.",
    tags: [
      { name: "Figma", icon: "figma" },
      { name: "Sketch", icon: "sketch" },
      { name: "Adobe XD", icon: "adobexd" }
    ],
    img: "/images/data_viz.png",
    link: "/services/ui-ux-design",
    btnText: "View Case Study"
  },
  {
    id: 6,
    title: "3D RPG Game Quest",
    cat: "Game Development",
    desc: "High-performance role playing action game featuring custom shaders, physical systems, and multi-platform inputs.",
    tags: [
      { name: "Unity", icon: "unity" },
      { name: "C#", icon: "csharp" },
      { name: "Blender", icon: "blender" }
    ],
    img: "/images/svc_game_dev.png",
    link: "/services/game-development",
    btnText: "Live Preview"
  }
];

const TECH_ICONS = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Flutter", slug: "flutter" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Firebase", slug: "firebase" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Figma", slug: "figma" },
  { name: "OpenAI", slug: "openai" },
  { name: "Python", slug: "python" },
  { name: "Docker", slug: "docker" }
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understanding requirements" },
  { num: "02", title: "Planning", desc: "Strategy and roadmap" },
  { num: "03", title: "Design", desc: "UI/UX and prototyping" },
  { num: "04", title: "Development", desc: "Building with best practices" },
  { num: "05", title: "Testing", desc: "Quality assurance" },
  { num: "06", title: "Deployment", desc: "Launch and go live" },
  { num: "07", title: "Support", desc: "Ongoing maintenance" }
];

const BRANDS = [
  "TechNova", "FinMate", "TravelGo", "HealthPlus", "EduSmart",
  "SuperApp", "DataFlow", "CryptoX", "ShopEase", "CloudSync"
];

export default function PortfolioPageClient() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const cardRefs = useRef([]);

  const filteredProjects = PROJECTS.filter(p => {
    if (activeTab === "All Projects") return true;
    return p.cat === activeTab;
  });

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
    card.style.setProperty("--tilt-y-offset", "-6px");
    card.style.setProperty("--tilt-scale", "1.02");
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
    card.style.setProperty("--glow-opacity", "0");
    card.style.setProperty("--tilt-y-offset", "0px");
    card.style.setProperty("--tilt-scale", "1");
  };

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── 1. PORTFOLIO HERO ── */}
      <section className="svc-hero" style={{ paddingBottom: "80px" }}>
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          {/* Hero Left Content */}
          <div className="ai-hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> OUR PORTFOLIO
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", textAlign: "left", lineHeight: "1.12", letterSpacing: "-0.02em", margin: "16px 0" }}>
              Crafting Digital <br />
              Experiences That <br />
              <span className="text-gradient-purple">Drive Success</span>
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300" style={{ maxWidth: "540px", margin: "0 0 32px 0", textAlign: "left" }}>
              Explore a collection of our finest digital solutions, showcasing innovation, creativity, and technical excellence across web development, mobile applications, AI solutions, UI/UX design, and branding projects.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400" style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
              <a href="#featured-work" className="btn-primary">
                Explore Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/contact" className="btn-outline">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Flat inline stats strip */}
            <div className="portfolio-hero-stats anim-3d-reveal delay-500" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 24px", width: "100%", maxWidth: "480px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>100+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Successful Projects</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>98%</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Client Satisfaction</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Premium</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quality Service</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Modern</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Technologies Stack</span>
              </div>
            </div>
          </div>

          {/* Hero Right visual pedestal */}
          <div className="ai-hero-right anim-3d-reveal delay-300" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="portfolio-hero-glow-circle" style={{ position: "relative", width: "100%", maxWidth: "560px", padding: "20px" }}>
              <div className="portfolio-pedestal-ambient" style={{ position: "absolute", inset: "0", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", borderRadius: "50%", transform: "scale(1.2)" }} />
              <img
                src="/images/portfolio_hero_showcase.png"
                alt="Digital Products Portfolio Showcase"
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

      {/* ── 2. FEATURED WORK SECTION ── */}
      <section className="svc-grid-section" id="featured-work" aria-label="Featured Work" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="portfolio-featured-header" style={{ maxWidth: "1300px", margin: "0 auto 40px", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
            <span className="hs-eyebrow">
              <span className="hs-eyebrow-dot" /> OUR WORK
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", flexWrap: "wrap", gap: "24px" }}>
              <div>
                <h2 className="svc-heading" style={{ margin: 0, textAlign: "left" }}>
                  Our Featured <span className="svc-heading-gradient">Work</span>
                </h2>
                <p className="svc-subheading" style={{ margin: "12px 0 0 0", textAlign: "left", maxWidth: "520px" }}>
                  Every project is carefully crafted to deliver exceptional results and help our clients achieve their business goals.
                </p>
              </div>
              <a href="/contact" className="btn-outline" style={{ display: "inline-flex", padding: "12px 24px", fontSize: "0.85rem" }}>
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="portfolio-filter-tabs-wrapper" style={{ maxWidth: "1300px", margin: "0 auto 40px", padding: "0 24px", overflowX: "auto" }}>
          <div className="portfolio-tabs-container" style={{ display: "flex", gap: "10px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.06)", minWidth: "max-content" }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`portfolio-tab-btn ${activeTab === tab ? "active" : ""}`}
                style={{
                  background: activeTab === tab ? "rgba(168, 85, 247, 0.15)" : "transparent",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.08)",
                  color: activeTab === tab ? "#fff" : "var(--text-muted)",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-title)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "30px" }}>
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                ref={el => (cardRefs.current[idx] = el)}
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="portfolio-project-card why-card anim-3d-reveal"
                style={{
                  animationDelay: `${(idx % 3) * 0.1}s`,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px"
                }}
              >
                {/* Project Image Box */}
                <div className="portfolio-card-img-wrap" style={{ position: "relative", width: "100%", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                  />
                  <div className="portfolio-card-category-badge" style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(13,7,30,0.8)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "8px", padding: "4px 10px", fontSize: "0.68rem", color: "#fff", fontWeight: "600", fontFamily: "var(--font-title)", letterSpacing: "0.02em" }}>
                    {proj.cat}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="why-card-title" style={{ fontSize: "1.25rem", margin: "0 0 10px 0" }}>{proj.title}</h3>
                <p className="why-card-desc" style={{ fontSize: "0.85rem", color: "var(--text-muted)", minHeight: "56px", margin: "0 0 20px 0", lineHeight: "1.6" }}>
                  {proj.desc}
                </p>

                {/* Tags with mini logos */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px", marginTop: "auto" }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.72rem",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        color: "var(--text-lavender)",
                        fontFamily: "var(--font-title)"
                      }}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tag.icon}/white`}
                        alt={tag.name}
                        style={{ width: "10px", height: "10px", objectFit: "contain" }}
                      />
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* CTA Link Button */}
                <a
                  href={proj.link}
                  className="port-cta-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "rgba(168,85,247,0.05)",
                    border: "1px solid rgba(168,85,247,0.2)",
                    color: "#fff",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    fontFamily: "var(--font-title)",
                    transition: "all 0.25s ease"
                  }}
                >
                  {proj.btnText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TECHNOLOGIES & PROCESS COMBINED GRID ── */}
      <section className="svc-grid-section" id="stack-and-process" aria-label="Stack and process" style={{ padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-combined-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px" }}>
            
            {/* Tech Stack Grid Column */}
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> STACK
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                Technologies We <span className="svc-heading-gradient">Work With</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0", maxWidth: "560px" }}>
                We master modern frameworks, language architectures, database matrices, and container layers to deploy fast, scalable solutions.
              </p>

              <div className="portfolio-tech-logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                {TECH_ICONS.map((tech, idx) => (
                  <div
                    key={idx}
                    className="svc-tech-box anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.04}s`,
                      padding: "16px 12px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "14px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                      alt={tech.name}
                      style={{ width: "26px", height: "26px", marginBottom: "8px", objectFit: "contain" }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "#fff", fontWeight: "600" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process Column */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> WORKFLOW
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                Our Development <span className="svc-heading-gradient">Process</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
                How we turn your concepts into clean, production-grade applications.
              </p>

              <div className="portfolio-process-timeline" style={{ display: "flex", flexDirection: "column", gap: "16px", borderLeft: "1px solid rgba(168,85,247,0.25)", paddingLeft: "24px", marginLeft: "10px" }}>
                {PROCESS_STEPS.map((step, idx) => (
                  <div
                    key={idx}
                    className="portfolio-process-step anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.08}s`,
                      position: "relative",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start"
                    }}
                  >
                    {/* Circle Node */}
                    <div style={{
                      position: "absolute",
                      left: "-31px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--purple-glow)",
                      boxShadow: "0 0 8px var(--purple-glow)",
                      border: "2px solid var(--bg-dark)"
                    }} />

                    {/* Step Num */}
                    <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--purple-glow)", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "6px", padding: "2px 6px", fontFamily: "var(--font-title)", flexShrink: 0 }}>
                      {step.num}
                    </span>

                    {/* Step Info */}
                    <div>
                      <h4 style={{ margin: "0 0 4px 0", fontSize: "0.95rem", fontWeight: "700", color: "#fff", fontFamily: "var(--font-title)" }}>{step.title}</h4>
                      <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--text-muted)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. STATS STRIP BANNER ── */}
      <section className="stats-strip-bar" aria-label="Achievements stats" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(3,1,8,0.2)" }}>
        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px" }}>
          <div className="svc-stats-bar" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "24px" }}>
            <div className="svc-stat-item">
              <span className="svc-stat-num">100+</span>
              <span className="svc-stat-lbl">Projects Delivered</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">98%</span>
              <span className="svc-stat-lbl">Client Satisfaction</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">50+</span>
              <span className="svc-stat-lbl">Happy Clients</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">5+ Years</span>
              <span className="svc-stat-lbl">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS & BRANDS SECTION ── */}
      <section className="svc-grid-section" id="testimonials" aria-label="Testimonials and brands" style={{ padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-feedback-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            
            {/* Testimonials Column */}
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> REVIEWS
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                What Our <span className="svc-heading-gradient">Clients Say</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0", maxWidth: "480px" }}>
                We build long-term relationships through technical expertise and smooth communication.
              </p>

              <div className="portfolio-testimonial-card why-card anim-3d-reveal" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ color: "#eab308", fontSize: "1.1rem", display: "flex", gap: "2px" }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: "italic", color: "var(--text-lavender)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  "Digital Code Solution delivered an exceptional product that exceeded our expectations. Their professionalism, communication, and technical skills are outstanding."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
                  <img
                    src="/images/avatar1.png"
                    alt="James Anderson"
                    style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover" }}
                  />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#fff" }}>James Anderson</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>CEO, Fintech Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands Logos Column */}
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> BRANDS
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                Brands We've <span className="svc-heading-gradient">Worked With</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
                Helping businesses from early startups to global enterprises build scalable code solutions.
              </p>

              <div className="portfolio-brands-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                {BRANDS.map((brand, idx) => (
                  <div
                    key={idx}
                    className="anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "10px",
                      padding: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-title)",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      color: "var(--text-muted)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. READY TO START CTA BANNER ── */}
      <section className="svc-grid-section" id="ready-cta" aria-label="Ready to start banner" style={{ padding: "80px 0 100px" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-cta-banner why-card" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center", padding: "48px 60px", background: "linear-gradient(135deg, rgba(13,7,30,0.85) 0%, rgba(3,1,8,0.95) 100%)", border: "1px solid rgba(168,85,247,0.25)", boxShadow: "0 0 40px rgba(122,34,255,0.1)" }}>
            
            {/* Banner Left Info */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div className="badge-pill-purple" style={{ marginBottom: "16px" }}>
                ✦ READY TO START?
              </div>
              <h2 className="svc-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0 0 12px 0", textAlign: "left" }}>
                Let's Build Your Next <br />
                <span className="svc-heading-gradient">Success Story</span>
              </h2>
              <p className="svc-subheading" style={{ fontSize: "0.92rem", margin: "0 0 32px 0", textAlign: "left", maxWidth: "480px" }}>
                Have a project in mind? Let's create something amazing together. Reach out to our design and engineering team.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="/contact" className="btn-primary">
                  Start Your Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="/contact" className="btn-outline">
                  Schedule Free Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Banner Right Mockup */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/svc_web_dev.png"
                alt="Web and SaaS dashboard project mockup"
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
