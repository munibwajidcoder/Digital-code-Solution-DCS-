"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../components/ResponsiveNav";
import GlobalScrollObserver from "../../components/GlobalScrollObserver";
import Footer from "../../sections/layout/Footer";

const VALUES = [
  { title: "Innovation", desc: "We embrace new ideas and emerging technologies.", icon: "lightbulb" },
  { title: "Integrity", desc: "We operate with honesty, ethics, and transparency.", icon: "shield" },
  { title: "Quality", desc: "We deliver premium solutions with attention to detail.", icon: "award" },
  { title: "Collaboration", desc: "We work together to achieve greater results.", icon: "users" },
  { title: "Creativity", desc: "We turn ideas into unique digital experiences.", icon: "pen-tool" },
  { title: "Transparency", desc: "We believe in open communication and clear processes.", icon: "eye" },
  { title: "Customer Success", desc: "Your success is our top priority, always.", icon: "star" },
  { title: "Improvement", desc: "We continuously learn and strive for excellence.", icon: "trending-up" }
];

const SOLUTIONS = [
  { title: "Web Development", desc: "High-performance websites built for modern businesses.", icon: "globe" },
  { title: "Mobile App Development", desc: "Scalable and user-friendly mobile applications.", icon: "smartphone" },
  { title: "AI Chatbot Development", desc: "Intelligent chatbots that engage and convert.", icon: "message-square" },
  { title: "UI/UX Design", desc: "Beautiful, intuitive designs that enhance user experience.", icon: "layout" },
  { title: "Graphic Design", desc: "Creative branding and graphics that make an impact.", icon: "image" },
  { title: "Business Automation", desc: "Automate workflows and increase productivity.", icon: "settings" },
  { title: "Digital Transformation", desc: "Modernize operations and drive digital growth.", icon: "zap" },
  { title: "Custom Software Solutions", desc: "Tailored software built to solve your unique challenges.", icon: "cpu" }
];

const REASONS = [
  { title: "Custom Solutions", desc: "Tailored solutions for your unique business needs.", icon: "sliders" },
  { title: "Modern Technologies", desc: "We believe in open and most reliable technologies.", icon: "database" },
  { title: "Pixel Perfect Design", desc: "Beautiful, clean, and conversion-focused designs.", icon: "crop" },
  { title: "Scalable Architecture", desc: "Solutions built to grow with your business.", icon: "layer-group" },
  { title: "Fast Delivery", desc: "On-time delivery without compromising quality.", icon: "clock" },
  { title: "Dedicated Support", desc: "24/7 support to ensure your success.", icon: "headphones" },
  { title: "Business-Focused Strategy", desc: "We focus on ROI and long-term business growth.", icon: "briefcase" },
  { title: "Premium User Experience", desc: "Exceptional experiences that users love.", icon: "heart" }
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understanding your business and goals." },
  { num: "02", title: "Research", desc: "In-depth research and competitor analysis." },
  { num: "03", title: "Planning", desc: "Strategy, roadmap, and solution planning." },
  { num: "04", title: "Design", desc: "Creating intuitive UI/UX and prototypes." },
  { num: "05", title: "Development", desc: "Building scalable and high-quality solutions." },
  { num: "06", title: "Testing", desc: "Rigorous testing for performance and security." },
  { num: "07", title: "Deployment", desc: "Launching smoothly to production." },
  { num: "08", title: "Support & Growth", desc: "Continuous support and products evolution." }
];

const TECH_ICONS = [
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", img: "https://img.icons8.com/color/48/adobe-illustrator--v1.png" },
  { name: "OpenAI", img: "https://img.icons8.com/color/48/chatgpt.png" },
  { name: "Gemini", img: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "AI Automation", img: "https://img.icons8.com/color/48/bot.png" }
];

const ACHIEVEMENTS = [
  { num: "100+", lbl: "Projects Completed" },
  { num: "98%", lbl: "Client Satisfaction" },
  { num: "50+", lbl: "Happy Clients" },
  { num: "24/7", lbl: "Support Available" },
  { num: "5+", lbl: "Years Experience" },
  { num: "20+", lbl: "Industries Served" }
];

const TEAM = [
  {
    name: "Muhammad Mohib",
    role: "CEO & Founder",
    img: "/images/mohib_avatar.png",
    socials: [
      { type: "linkedin", url: "#" },
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" }
    ]
  },
  {
    name: "Muhammad Burhan",
    role: "Flutter Developer",
    img: "/images/burhan_avatar.png",
    socials: [
      { type: "web", url: "#" },
      { type: "behance", url: "#" },
      { type: "linkedin", url: "#" }
    ]
  },
  {
    name: "Muhammad Munib",
    role: "Full Stack Developer",
    img: "/images/munib_avatar.png",
    socials: [
      { type: "github", url: "#" },
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" }
    ]
  },
  {
    name: "Sara Ahmed",
    role: "Project Manager",
    img: "/images/avatar4.png",
    socials: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" },
      { type: "behance", url: "#" }
    ]
  }
];

const FAQS = [
  { q: "Who is Digital Code Solution?", a: "Digital Code Solution (DCS) is a premium software development and digital solutions company that empowers businesses globally through cutting-edge web, mobile, AI, and design systems." },
  { q: "What services do you offer?", a: "We specialize in custom web development, mobile applications, AI chatbots, UI/UX design, graphic design, and custom software systems." },
  { q: "Which industries do you work with?", a: "We partner with businesses across fintech, e-commerce, healthcare, education, logistics, SaaS, and more." },
  { q: "Do you work internationally?", a: "Yes! We work with clients all over the world, from early-stage startups to established mid-market companies." },
  { q: "How can we start a project?", a: "You can easily schedule a consultation by clicking 'Start Your Project' or sending an email to our tech consulting team." },
  { q: "Do you provide post-launch support?", a: "Absolutely. We offer dedicated maintenance, SLA contracts, and scale-up engineering hours post-launch." }
];

export default function AboutPageClient() {
  const [activeFaq, setActiveFaq] = useState(0);
  const cardRefs = useRef([]);

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

  return (
    <div className="main-wrapper">
      <GlobalScrollObserver />
      <ResponsiveNav />

      {/* ── 1. ABOUT HERO ── */}
      <section className="svc-hero" style={{ paddingBottom: "80px" }}>
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          {/* Left info */}
          <div className="ai-hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> ABOUT DIGITAL CODE SOLUTION
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", textAlign: "left", lineHeight: "1.12", letterSpacing: "-0.02em", margin: "16px 0" }}>
              Building The Future <br />
              Through <span className="text-gradient-purple">Innovation &</span> <br />
              <span className="text-gradient-purple">Technology</span>
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300" style={{ maxWidth: "540px", margin: "0 0 32px 0", textAlign: "left" }}>
              Digital Code Solution (DCS) is a modern software and digital solutions company passionate about helping businesses transform ideas into exceptional digital experiences. We combine creativity, innovation, and cutting-edge technologies to build scalable solutions that drive business growth and long-term success.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400" style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
              <a href="/contact" className="btn-primary">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/services" className="btn-outline">
                Our Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Flat inline stats strip */}
            <div className="portfolio-hero-stats anim-3d-reveal delay-500" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 24px", width: "100%", maxWidth: "480px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Innovation</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Driven</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Client</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Focused</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Premium</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quality</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)" }}>Future</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Ready</span>
              </div>
            </div>
          </div>

          {/* Right side Visual */}
          <div className="ai-hero-right anim-3d-reveal delay-300" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="portfolio-hero-glow-circle" style={{ position: "relative", width: "100%", maxWidth: "560px", padding: "20px" }}>
              <div className="portfolio-pedestal-ambient" style={{ position: "absolute", inset: "0", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", borderRadius: "50%", transform: "scale(1.2)" }} />
              <img
                src="/images/about_hero_showcase.png"
                alt="About DCS Technology Showcase"
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

      {/* ── 2. OUR STORY SECTION ── */}
      <section className="svc-grid-section" id="our-story" aria-label="Our Story" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-combined-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            {/* Story Image */}
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
              <img
                src="/images/about_story_coding.png"
                alt="DCS Engineering Team Coding"
                style={{ width: "100%", height: "480px", objectFit: "cover" }}
              />
            </div>

            {/* Story Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left", alignItems: "flex-start" }}>
              <span className="hs-eyebrow">
                <span className="hs-eyebrow-dot" /> Our Story
              </span>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: 0 }}>
                Crafting Code, <span className="svc-heading-gradient">Empowering Brands</span>
              </h2>
              <p style={{ color: "var(--text-lavender)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>
                Digital Code Solution was founded with a simple mission — to empower businesses through technology. What started as a small team of passionate developers and designers has grown into a full-service digital solutions company trusted by startups, businesses, and enterprises worldwide.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.7", margin: 0 }}>
                We believe in building more than just software. We build long-term relationships, digital products that make an impact, and solutions that help businesses grow in a digital-first world. Our journey is driven by innovation, dedication, and a commitment to excellence.
              </p>

              {/* Mission & Vision boxes */}
              <div className="about-mission-vision-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", width: "100%", marginTop: "16px" }}>
                {/* Mission */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyItems: "center", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "8px", padding: "6px", color: "var(--purple-glow)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: "700", color: "#fff", fontFamily: "var(--font-title)" }}>Our Mission</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    To empower businesses with innovative, scalable, and user-focused digital solutions that accelerate growth and improve efficiency.
                  </p>
                </div>

                {/* Vision */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyItems: "center", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "8px", padding: "6px", color: "var(--purple-glow)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: "700", color: "#fff", fontFamily: "var(--font-title)" }}>Our Vision</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    To become a globally recognized digital solutions company known for innovation, quality, trust, and delivering exceptional experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR CORE VALUES SECTION ── */}
      <section className="svc-grid-section" id="core-values" aria-label="Our Core Values" style={{ padding: "100px 0" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" /> Our Core Values
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            The Principles <span className="svc-heading-gradient">We Live By</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            These values guide our decisions, our workflow, and our relationships with clients and team members.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                ref={el => (cardRefs.current[idx] = el)}
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="why-card anim-3d-reveal"
                style={{
                  animationDelay: `${(idx % 4) * 0.08}s`,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyItems: "center", width: "40px", height: "40px", borderRadius: "10px", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", color: "var(--purple-glow)", padding: "10px", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {val.icon === "lightbulb" && <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5m1 2h4M9 22h6"/>}
                    {val.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                    {val.icon === "award" && <><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>}
                    {val.icon === "users" && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                    {val.icon === "pen-tool" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                    {val.icon === "eye" && <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
                    {val.icon === "star" && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>}
                    {val.icon === "trending-up" && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polygon points="17 6 23 6 23 12"/></>}
                  </svg>
                </div>
                <h3 className="why-card-title" style={{ fontSize: "1.1rem", margin: 0 }}>{val.title}</h3>
                <p className="why-card-desc" style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.6" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTIONS & WHY CHOOSE US (TWO COLUMNS) ── */}
      <section className="svc-grid-section" id="deliverables-and-reasons" aria-label="Solutions and choosing dcs" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-combined-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
            
            {/* Left Column - Digital Solutions We Deliver */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span className="hs-eyebrow">
                  <span className="hs-eyebrow-dot" /> Deliverables
                </span>
                <h2 className="svc-heading" style={{ textAlign: "left", margin: "12px 0 0 0" }}>
                  Digital Solutions <br />
                  <span className="svc-heading-gradient">We Deliver</span>
                </h2>
              </div>

              <div className="about-deliverables-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                {SOLUTIONS.map((sol, idx) => (
                  <div
                    key={idx}
                    className="why-card anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.04}s`,
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "14px"
                    }}
                  >
                    <div style={{ color: "var(--purple-glow)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        {sol.icon === "globe" && <circle cx="12" cy="12" r="10"/>}
                        {sol.icon === "smartphone" && <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>}
                        {sol.icon === "message-square" && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>}
                        {sol.icon === "layout" && <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>}
                        {sol.icon === "image" && <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>}
                        {sol.icon === "settings" && <circle cx="12" cy="12" r="3"/>}
                        {sol.icon === "zap" && <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>}
                        {sol.icon === "cpu" && <rect x="4" y="4" width="16" height="16" rx="2"/>}
                      </svg>
                    </div>
                    <h4 style={{ margin: 0, fontSize: "0.95rem", color: "#fff", fontFamily: "var(--font-title)", fontWeight: 700 }}>{sol.title}</h4>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.5" }}>{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Why Businesses Choose DCS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span className="hs-eyebrow">
                  <span className="hs-eyebrow-dot" /> Why Us
                </span>
                <h2 className="svc-heading" style={{ textAlign: "left", margin: "12px 0 0 0" }}>
                  Why Businesses <br />
                  <span className="svc-heading-gradient">Choose DCS</span>
                </h2>
              </div>

              <div className="about-why-us-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                {REASONS.map((reason, idx) => (
                  <div
                    key={idx}
                    className="why-card anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.04}s`,
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "14px"
                    }}
                  >
                    <div style={{ color: "var(--purple-glow)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        {reason.icon === "sliders" && <line x1="4" y1="21" x2="4" y2="14"/>}
                        {reason.icon === "database" && <ellipse cx="12" cy="5" rx="9" ry="3"/>}
                        {reason.icon === "crop" && <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/>}
                        {reason.icon === "layer-group" && <polygon points="12 2 2 7 12 12 22 7 12 2"/>}
                        {reason.icon === "clock" && <circle cx="12" cy="12" r="10"/>}
                        {reason.icon === "headphones" && <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>}
                        {reason.icon === "briefcase" && <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>}
                        {reason.icon === "heart" && <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>}
                      </svg>
                    </div>
                    <h4 style={{ margin: 0, fontSize: "0.95rem", color: "#fff", fontFamily: "var(--font-title)", fontWeight: 700 }}>{reason.title}</h4>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.5" }}>{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. OUR PROCESS SECTION ── */}
      <section className="svc-grid-section" id="process" aria-label="Our Process" style={{ padding: "100px 0" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" /> Our Process
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            How We <span className="svc-heading-gradient">Get Things Done</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A reliable process structure that guarantees transparency, quality, and fast delivery at every phase.
          </p>
        </div>

        <style>{`
          @keyframes processMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .process-flow-marquee {
            display: flex;
            gap: 24px;
            padding-bottom: 20px;
            width: max-content;
            animation: processMarquee 30s linear infinite;
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
                {/* Connector Arrow always visible for seamless flow */}
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

      {/* ── 6. TECHNOLOGIES & ACHIEVEMENTS (TWO COLUMNS) ── */}
      <section className="svc-grid-section" id="tech-and-stats" aria-label="Technologies and Achievements" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-combined-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px" }}>
            
            {/* Left Column - Tech Icons Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span className="hs-eyebrow">
                  <span className="hs-eyebrow-dot" /> Tech Stack
                </span>
                <h2 className="svc-heading" style={{ textAlign: "left", margin: "12px 0 0 0" }}>
                  Powered By Modern <br />
                  <span className="svc-heading-gradient">Technologies</span>
                </h2>
              </div>

              <div className="portfolio-tech-logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
                {TECH_ICONS.map((tech, idx) => (
                  <div
                    key={idx}
                    className="svc-tech-box anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.03}s`,
                      padding: "16px 10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "12px"
                    }}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      style={{ width: "32px", height: "32px", marginBottom: "8px", objectFit: "contain", filter: tech.name === "Next.js" || tech.name === "Express.js" ? "invert(1)" : "none" }}
                    />
                    <span style={{ fontSize: "0.68rem", color: "#fff", fontWeight: "600", textAlign: "center", display: "block" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Our Achievements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span className="hs-eyebrow">
                  <span className="hs-eyebrow-dot" /> Statistics
                </span>
                <h2 className="svc-heading" style={{ textAlign: "left", margin: "12px 0 0 0" }}>
                  Our Achievements <br />
                  <span className="svc-heading-gradient">In Numbers</span>
                </h2>
              </div>

              <div className="about-achievements-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div
                    key={idx}
                    className="why-card anim-3d-reveal"
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                      padding: "24px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--purple-glow)", fontFamily: "var(--font-title)", lineHeight: 1 }}>
                      {ach.num}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-lavender)", fontWeight: "500" }}>
                      {ach.lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. MEET THE CREATIVE MINDS SECTION ── */}
      <section className="svc-grid-section" id="team" aria-label="Our Team" style={{ padding: "100px 0" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" /> Our Team
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Meet The <span className="svc-heading-gradient">Creative Minds</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            Our talented team of designers, engineers, and project leaders dedicated to building next-generation digital products.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "30px" }}>
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                className="why-card anim-3d-reveal"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                {/* Member Avatar */}
                <div style={{ width: "110px", height: "110px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(168,85,247,0.3)", boxShadow: "0 0 20px rgba(168,85,247,0.15)", marginBottom: "20px" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <h3 style={{ margin: "0 0 4px 0", fontSize: "1.15rem", fontWeight: "700", color: "#fff", fontFamily: "var(--font-title)" }}>{member.name}</h3>
                <span style={{ fontSize: "0.78rem", color: "var(--purple-glow)", fontWeight: "600", marginBottom: "20px" }}>{member.role}</span>

                {/* Social Links */}
                <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                  {member.socials.map((soc, sIdx) => (
                    <a
                      key={sIdx}
                      href={soc.url}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "var(--text-muted)",
                        transition: "all 0.3s ease"
                      }}
                      className="footer-social"
                    >
                      {soc.type === "linkedin" && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                      {soc.type === "twitter" && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                      {soc.type === "instagram" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>}
                      {soc.type === "github" && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}
                      {soc.type === "behance" && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 10.5H16.5v1.2H22v-1.2zm-.3 3.6c-.3-.5-.7-.9-1.2-1.1s-1-.3-1.6-.3c-.7 0-1.3.1-1.8.4s-.9.7-1.2 1.2c-.3.5-.4 1.1-.4 1.8 0 .7.1 1.3.4 1.8s.7.9 1.2 1.2c.5.3 1.1.4 1.8.4.9 0 1.6-.2 2.2-.7s.9-1.1 1-1.9H20c-.1.4-.3.7-.6.9s-.7.3-1.1.3c-.5 0-.9-.1-1.2-.4s-.5-.7-.6-1.2h5.5c0-.9-.2-1.7-.5-2.2zm-4.7 2.1c.1-.4.3-.7.6-.9s.6-.3 1.1-.3c.4 0 .8.1 1 .3s.4.5.5.9h-3.2zm-8.8-6.9H2V18h6.4c1 0 1.8-.2 2.4-.7s1-.9 1.2-1.5c.2-.6.3-1.2.3-1.8 0-1.1-.4-2-1.2-2.5.6-.4.9-1.1.9-2 0-.8-.1-1.4-.4-1.9s-.7-.8-1.2-1.1-1.2-.3-2.2-.3zm-.3 3.3H5.2V7.1H8c.5 0 .9.1 1.2.3s.4.5.4 1c0 .4-.1.7-.4.9s-.7.3-1.2.3zm.4 4.5H5.2v-2.8H8.4c.5 0 .9.1 1.2.3s.4.6.4 1.1c0 .5-.1.8-.4 1s-.7.4-1.2.4z"/></svg>}
                      {soc.type === "web" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS & FAQS SECTION ── */}
      <section className="svc-grid-section" id="about-faqs" aria-label="Testimonials and FAQs" style={{ background: "rgba(3,1,8,0.25)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "100px 0" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-feedback-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "flex-start" }}>
            
            {/* Left Column - Client Testimonial */}
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> REVIEWS
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                What Our <span className="svc-heading-gradient">Clients Say</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0", maxWidth: "480px" }}>
                Read how our client partnerships translate directly into technical excellence and commercial success.
              </p>

              <div className="portfolio-testimonial-card why-card anim-3d-reveal" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <img src="/images/dimitri_avatar.png" alt="TechNova CEO" style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", background: "#1c1236" }} />
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)" }}>TechNova Solutions</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>CEO</p>
                  </div>
                </div>
                <div style={{ color: "var(--purple-glow)", fontSize: "0.9rem", marginBottom: "8px" }}>
                  ★★★★★
                </div>
                <p className="why-card-desc" style={{ fontSize: "0.88rem", fontStyle: "italic", lineHeight: "1.6" }}>
                  "DCS delivered an exceptional solution that exceeded our expectations. Their team is highly professional, skilled, and committed to our success."
                </p>
              </div>
            </div>

            {/* Right Column - FAQs Accordion */}
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: "16px" }}>
                <span className="hs-eyebrow-dot" /> FAQS
              </div>
              <h2 className="svc-heading" style={{ textAlign: "left", margin: "0 0 16px 0" }}>
                Frequently Asked <span className="svc-heading-gradient">Questions</span>
              </h2>
              <p className="svc-subheading" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
                Got questions? We've got answers about working with Digital Code Solution.
              </p>

              <div className="faq-accordions-list" style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`faq-accordion-item ${activeFaq === idx ? "active" : ""}`}
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid",
                      borderColor: activeFaq === idx ? "rgba(168,85,247,0.3)" : "var(--glass-border)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
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
                        {activeFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: activeFaq === idx ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        padding: activeFaq === idx ? "0 24px 20px" : "0 24px"
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
        </div>
      </section>

      {/* ── 9. LET'S BUILD CTA BANNER ── */}
      <section className="svc-grid-section" id="extraordinary-cta" aria-label="CTA banner" style={{ padding: "80px 0 100px" }}>
        <div className="svc-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
          <div className="portfolio-cta-banner why-card" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center", padding: "48px 60px", background: "linear-gradient(135deg, rgba(13,7,30,0.85) 0%, rgba(3,1,8,0.95) 100%)", border: "1px solid rgba(168,85,247,0.25)", boxShadow: "0 0 40px rgba(122,34,255,0.1)" }}>
            
            {/* Banner Left */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div className="badge-pill-purple" style={{ marginBottom: "16px" }}>
                ✦ READY TO START?
              </div>
              <h2 className="svc-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0 0 12px 0", textAlign: "left" }}>
                Let's Build Something <br />
                <span className="svc-heading-gradient">Extraordinary Together</span>
              </h2>
              <p className="svc-subheading" style={{ fontSize: "0.92rem", margin: "0 0 32px 0", textAlign: "left", maxWidth: "480px" }}>
                Whether you're launching a startup, growing your business, or transforming your digital presence, Digital Code Solution is your trusted technology partner.
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
                  Contact Our Team
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Banner Right */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/svc_ai_chatbot.png"
                alt="AI Chatbot visual hologram"
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
