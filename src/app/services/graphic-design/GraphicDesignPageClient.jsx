"use client";

import React, { useRef, useState } from "react";
import ResponsiveNav from "../../../components/ResponsiveNav";
import GlobalScrollObserver from "../../../components/GlobalScrollObserver";

const TOOLS = [
  { name: "Photoshop", cat: "Design", img: "https://cdn.simpleicons.org/adobephotoshop/white" },
  { name: "Illustrator", cat: "Design", img: "https://cdn.simpleicons.org/adobeillustrator/white" },
  { name: "InDesign", cat: "Design", img: "https://cdn.simpleicons.org/adobeindesign/white" },
  { name: "Figma", cat: "Design", img: "https://cdn.simpleicons.org/figma/white" },
  { name: "Creative Cloud", cat: "Branding", img: "https://cdn.simpleicons.org/adobecreativecloud/white" },
  { name: "Notion", cat: "Branding", img: "https://cdn.simpleicons.org/notion/white" },
  { name: "Slack", cat: "Branding", img: "https://cdn.simpleicons.org/slack/white" },
  { name: "PowerPoint", cat: "Presentation", img: "https://cdn.simpleicons.org/microsoftpowerpoint/white" },
  { name: "Google Slides", cat: "Presentation", img: "https://cdn.simpleicons.org/googledrive/white" },
  { name: "Canva Pro", cat: "Presentation", img: "https://cdn.simpleicons.org/canva/white" },
  { name: "Figma", cat: "Mockups", img: "https://cdn.simpleicons.org/figma/white" },
  { name: "Adobe XD", cat: "Mockups", img: "https://cdn.simpleicons.org/adobexd/white" }
];

const SERVICES = [
  { title: "Logo Design", desc: "Unique, memorable logos that instantly communicate your brand's core values to your audience.", tags: ["Wordmarks", "Symbols", "Lettermarks"] },
  { title: "Brand Identity Design", desc: "Comprehensive visual systems including typography, color palettes, and brand guidelines for consistency.", tags: ["Style Guides", "Brand Book", "Consistency"] },
  { title: "Social Media Design", desc: "Engaging and shareable graphics optimized for Instagram, LinkedIn, Twitter, and Facebook.", tags: ["Posters", "Banners", "Carousels"] },
  { title: "Marketing Materials", desc: "High-impact digital and print marketing collaterals including brochures, flyers, and sales decks.", tags: ["Brochures", "Flyers", "Posters"] },
  { title: "Business Profile Design", desc: "Professional corporate profiles, whitepapers, and annual reports that build investor and client trust.", tags: ["Corporate", "B2B", "Reports"] },
  { title: "Packaging Design", desc: "Striking product packaging concepts that stand out on shelves and create delightful unboxing experiences.", tags: ["Labels", "Boxes", "Products"] },
  { title: "Print Design", desc: "Print-ready creatives optimized for high-resolution physical production across various mediums.", tags: ["CMYK", "Bleeds", "High-Res"] },
  { title: "Presentation Design", desc: "Persuasive and beautifully crafted pitch decks and presentations that captivate investors.", tags: ["Pitch Decks", "Slides", "Keynote"] },
  { title: "Advertising Creatives", desc: "Conversion-focused ad creatives for Google, Facebook, and native ad networks.", tags: ["Display Ads", "Social Ads", "Banners"] },
  { title: "Rebranding Services", desc: "Modernize and refresh outdated visual identities to align with new business goals and modern trends.", tags: ["Brand Refresh", "Modernization", "Evolution"] }
];

const BENEFITS = [
  { title: "Stronger Brand Identity", desc: "Establish a clear, memorable identity that sets you apart from your competitors." },
  { title: "Increased Brand Recognition", desc: "Ensure your brand is easily recognizable across all channels and touchpoints." },
  { title: "Better Customer Trust", desc: "Professional design builds immediate credibility and trust with prospective clients." },
  { title: "Higher Engagement Rates", desc: "Visually appealing content drives higher interaction rates on social and digital platforms." },
  { title: "Professional Business Image", desc: "Project authority and premium quality through every piece of marketing collateral." },
  { title: "Consistent Visual Branding", desc: "Maintain a cohesive look and feel that strengthens brand recall and loyalty." },
  { title: "Improved Marketing Performance", desc: "Better creatives lead directly to higher click-through and conversion rates." },
  { title: "Memorable Customer Experience", desc: "Create positive emotional connections through stunning aesthetic interactions." },
  { title: "Competitive Market Positioning", desc: "Position your brand as an industry leader through superior visual presentation." },
  { title: "Long-Term Business Growth", desc: "Invest in design that builds a lasting foundation for scaling your business." }
];

const PROCESS_STEPS = [
  { num: "01", title: "Brand Discovery", desc: "Understanding your vision, target audience, and business objectives." },
  { num: "02", title: "Research & Strategy", desc: "Analyzing competitors and defining the visual direction and brand positioning." },
  { num: "03", title: "Concept Development", desc: "Creating initial design concepts and moodboards for your visual identity." },
  { num: "04", title: "Design Creation", desc: "Fleshing out the chosen concept into full high-fidelity branding assets." },
  { num: "05", title: "Feedback & Refinement", desc: "Collaborating with you to refine the designs based on your valuable feedback." },
  { num: "06", title: "Delivery & Support", desc: "Providing final source files, brand guidelines, and ongoing design support." }
];

const PROJECTS = [
  { title: "Luxury Brand Identity", cat: "Brand Identity", metric: "+60% Brand Recall", desc: "A comprehensive brand identity overhaul for a premium luxury goods retailer.", tags: ["Logo", "Typography", "Colors"], img: "/images/svc_graphic_design.png", beforeAfter: "Modernized outdated crest into sleek minimalist wordmark." },
  { title: "Restaurant Branding", cat: "Print & Branding", metric: "2x Foot Traffic", desc: "Vibrant branding package including menus, signage, and social media templates.", tags: ["Menus", "Signage", "Social"], img: "/images/digital_product.png", beforeAfter: "Unified disparate visual styles into one cohesive theme." },
  { title: "SaaS Startup Brand", cat: "Digital Branding", metric: "+45% Signups", desc: "Tech-forward visual identity designed to convey trust, speed, and innovation.", tags: ["Web Assets", "Ad Creatives", "Pitch Deck"], img: "/images/data_viz.png", beforeAfter: "Established professional trust from day one." },
  { title: "Corporate Profile", cat: "Print Design", metric: "3x Investor Meetings", desc: "A 40-page corporate company profile and annual report design.", tags: ["Brochure", "Layout", "Typography"], img: "/images/office_workspace.png", beforeAfter: "Transformed text-heavy documents into engaging visual stories." },
  { title: "Product Packaging", cat: "Packaging Design", metric: "Sold Out Q1", desc: "Eco-friendly, minimalist packaging design for a modern skincare line.", tags: ["Labels", "Boxes", "Print"], img: "/images/svc_ai_chatbot.png", beforeAfter: "Stood out on retail shelves against established competitors." },
  { title: "Social Campaign", cat: "Social Media", metric: "+300% Engagement", desc: "A series of high-impact graphic assets for a month-long product launch campaign.", tags: ["Instagram", "Twitter", "Ads"], img: "/images/svc_ui_ux.png", beforeAfter: "Significantly boosted organic reach through shareable graphics." }
];

const TESTIMONIALS = [
  { name: "Elena Rostova", role: "CMO, NovaStyle", text: "DCS completely transformed our brand. The new visual identity is absolutely stunning, and our marketing materials finally reflect the premium quality of our products.", stars: 5 },
  { name: "David Chen", role: "Founder, TechLaunch", text: "Their graphic design team is incredible. They nailed our SaaS startup branding on the first concept. The pitch deck they designed helped us secure our seed funding.", stars: 5 },
  { name: "Sarah Jenkins", role: "Owner, The Daily Grind", text: "The restaurant branding package was exactly what we needed. From menus to social media templates, everything is cohesive, modern, and visually striking.", stars: 5 }
];

const FAQS = [
  { q: "What is included in a Brand Identity package?", a: "A standard brand identity package includes logo design (primary and secondary), color palette, typography guidelines, brand pattern/imagery direction, and a comprehensive brand book." },
  { q: "Do you provide source files?", a: "Yes, we always provide the final, editable source files (AI, PSD, INDD, Figma) along with exported formats (PNG, JPG, SVG, PDF)." },
  { q: "How long does a branding project take?", a: "A typical full brand identity project takes between 3 to 6 weeks, depending on the complexity and revision cycles." },
  { q: "Can you design marketing materials for print?", a: "Absolutely. We design print-ready files with correct CMYK color profiles, bleeds, and safe margins for brochures, flyers, and banners." },
  { q: "Do you design social media graphics?", a: "Yes, we create custom social media graphics, templates, and carousel posts optimized for all major platforms." },
  { q: "How many logo concepts do you provide?", a: "We typically provide 3 distinct logo concepts based on our initial discovery phase, and then refine your chosen concept." },
  { q: "What if I don't like the initial designs?", a: "We involve you throughout the process. If the initial concepts aren't quite right, we gather your feedback and iterate until we achieve the perfect result." },
  { q: "Can you help with an existing brand refresh?", a: "Yes, we specialize in rebranding and modernizing existing visual identities while maintaining core brand recognition." },
  { q: "Do you design packaging?", a: "Yes, we create striking, production-ready packaging designs for a variety of physical products." },
  { q: "What do you need from me to start?", a: "We'll need an understanding of your business goals, target audience, competitors, and any existing brand assets or design inspiration you may have." }
];

export default function GraphicDesignPageClient() {
  const cardRefs = useRef([]);
  const showRefs = useRef([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(["Web", "SaaS"]);

  const togglePlatform = (plat) => {
    if (selectedPlatforms.includes(plat)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(p => p !== plat));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, plat]);
    }
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
    card.style.setProperty("--tilt-y-offset", "-5px");
    card.style.setProperty("--tilt-scale", "1.015");
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

      {/* ── 1. HERO SECTION ── */}
      <section className="svc-hero" aria-label="UI/UX Design Hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1250px" }}>
          {/* Left info column */}
          <div className="ai-hero-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> GRAPHIC DESIGN & BRANDING SERVICES
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200">
              Create A Brand <br />
              <span className="text-gradient-purple">That People</span> Remember
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300">
              We craft premium visual identities, striking marketing materials, and cohesive brand systems designed to leave a lasting impression on your audience.
            </p>

            <div className="app-dev-hero-bullets anim-3d-reveal delay-300" style={{ width: "100%", justifyContent: "flex-start", marginBottom: "28px" }}>
              <span>Visual Identities</span> <span className="bullet-dot">•</span> 
              <span>Marketing Materials</span> <span className="bullet-dot">•</span> 
              <span>Packaging Systems</span> <span className="bullet-dot">•</span> 
              <span>Consistent Brand Assets</span>
            </div>

            <div className="svc-hero-buttons anim-3d-reveal delay-400">
              <a href="#contact" className="btn-primary">
                Get Free Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#portfolio" className="btn-outline">
                View Design Portfolio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right graphics column - Interactive Figma interface widget */}
          <div className="ai-hero-right anim-3d-reveal delay-300">
            <div 
              ref={(el) => (showRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 99)}
              onMouseLeave={() => handleMouseLeave(99)}
              className="why-card" 
              style={{ 
                padding: "16px", 
                borderRadius: "24px", 
                position: "relative",
                height: "450px",
                overflow: "hidden",
                border: "1px solid rgba(168, 85, 247, 0.15)",
                background: "rgba(13, 7, 30, 0.4)"
              }}
            >
              {/* Figma Window Simulation */}
              <div 
                className="figma-window"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  background: "#1e1e1e",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
                }}
              >
                {/* Figma Topbar */}
                <div 
                  style={{ 
                    height: "36px", 
                    background: "#2c2c2c", 
                    borderBottom: "1px solid #1a1a1a", 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "0 12px", 
                    gap: "14px" 
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                  </div>
                  {/* Figma logo vector */}
                  <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                    <path d="M3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6H6V0H3Z" fill="#F24E1E"/>
                    <path d="M9 0C7.34 0 6 1.34 6 3V6H9C10.66 6 12 4.66 12 3C12 1.34 10.66 0 9 0Z" fill="#FF7262"/>
                    <path d="M3 6C1.34 6 0 7.34 0 9C0 10.66 1.34 12 3 12H6V6H3Z" fill="#A259FF"/>
                    <path d="M0 15C0 16.66 1.34 18 3 18C4.66 18 6 16.66 6 15V12H3C1.34 12 0 13.34 0 15Z" fill="#1ABC9C"/>
                    <path d="M9 12C7.34 12 6 13.34 6 15C6 16.66 7.34 18 9 18C10.66 18 12 16.66 12 15C12 13.34 10.66 12 9 12Z" fill="#19BCFE"/>
                  </svg>
                  
                  {/* Tool selection icons */}
                  <div style={{ display: "flex", gap: "10px", color: "#aaa", fontSize: "0.75rem" }}>
                    <span>📍</span>
                    <span style={{ color: "var(--purple-glow)" }}>📐</span>
                    <span>✎</span>
                    <span>T</span>
                    <span>💬</span>
                  </div>

                  <div style={{ margin: "0 auto", fontSize: "0.68rem", color: "#999", fontFamily: "monospace" }}>dcs_product_design.fig</div>
                </div>

                {/* Main panel layout */}
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  {/* Left Sidebar - Layers Panel */}
                  <div style={{ width: "90px", background: "#2c2c2c", borderRight: "1px solid #1a1a1a", padding: "8px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.6rem", color: "#ccc" }}>
                    <div style={{ fontWeight: "700", color: "#888", fontSize: "0.55rem" }}>LAYERS</div>
                    <div style={{ paddingLeft: "2px" }}>📂 Home View</div>
                    <div style={{ paddingLeft: "8px" }}>✦ Header</div>
                    <div style={{ paddingLeft: "8px" }}>✦ Hero section</div>
                    <div style={{ paddingLeft: "8px", color: "var(--purple-glow)" }}>◈ AppMockup</div>
                    <div style={{ paddingLeft: "14px" }}>⚿ CardBalance</div>
                    <div style={{ paddingLeft: "14px" }}>⚿ ChartWidget</div>
                    <div style={{ paddingLeft: "8px" }}>✦ Footer</div>
                  </div>

                  {/* Canvas Grid Area */}
                  <div style={{ flex: 1, background: "#1e1e1e", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
                    {/* Simulated Figma Grid */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "12px 12px", opacity: 0.8 }} />

                    {/* Canvas Frame Wrapper */}
                    <div 
                      style={{ 
                        width: "140px", 
                        height: "260px", 
                        background: "#0c0818", 
                        borderRadius: "20px", 
                        border: "2px solid #7a22ff", 
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        padding: "16px 8px 8px",
                        boxShadow: "0 0 25px rgba(122,34,255,0.4)",
                        animation: "bob-vertical 4s ease-in-out infinite alternate"
                      }}
                    >
                      {/* Phone Screen Mock */}
                      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#a855f7", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.5rem" }}>👤</div>
                          <div style={{ height: "4px", width: "30px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
                        </div>

                        <div style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.25)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "0.45rem", color: "var(--text-muted)" }}>Total Balance</span>
                          <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#fff" }}>$10,249.00</span>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                          <div style={{ height: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }} />
                          <div style={{ height: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }} />
                        </div>

                        <div className="dash-chart-bars" style={{ height: "50px", padding: "4px", margin: 0, borderRadius: "6px" }}>
                          <div className="bar" style={{ height: "40%" }} />
                          <div className="bar" style={{ height: "80%" }} />
                          <div className="bar" style={{ height: "55%" }} />
                          <div className="bar" style={{ height: "95%" }} />
                        </div>
                      </div>

                      {/* Figma Selected Frame outlines */}
                      <div style={{ position: "absolute", top: "-5px", left: "-5px", right: "-5px", bottom: "-5px", border: "1px solid #18a0fb", pointerEvents: "none", borderRadius: "23px" }} />
                      <div style={{ position: "absolute", top: "-8px", left: "-8px", width: "6px", height: "6px", background: "#fff", border: "1px solid #18a0fb" }} />
                      <div style={{ position: "absolute", top: "-8px", right: "-8px", width: "6px", height: "6px", background: "#fff", border: "1px solid #18a0fb" }} />
                      <div style={{ position: "absolute", bottom: "-8px", left: "-8px", width: "6px", height: "6px", background: "#fff", border: "1px solid #18a0fb" }} />
                      <div style={{ position: "absolute", bottom: "-8px", right: "-8px", width: "6px", height: "6px", background: "#fff", border: "1px solid #18a0fb" }} />
                    </div>

                    {/* Designer Cursor */}
                    <div 
                      style={{ 
                        position: "absolute", 
                        top: "35%", 
                        left: "65%", 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "flex-start",
                        zIndex: 10,
                        animation: "bob-vertical 3s ease-in-out infinite alternate-reverse"
                      }}
                    >
                      <svg width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path d="M0 0V14L4.5 9.5L11 9L0 0Z" fill="#18a0fb"/>
                      </svg>
                      <span style={{ background: "#18a0fb", color: "#fff", fontSize: "0.5rem", padding: "2px 6px", borderRadius: "3px", fontWeight: "700", marginLeft: "8px", marginTop: "2px", whiteSpace: "nowrap" }}>
                        Alex (DCS Designer)
                      </span>
                    </div>

                    {/* Floating Design Component Widget */}
                    <div 
                      className="metric-pill-card anim-bob-fast"
                      style={{ 
                        position: "absolute", 
                        top: "10%", 
                        right: "10px", 
                        zIndex: 12, 
                        background: "rgba(30, 30, 30, 0.95)",
                        border: "1px solid rgba(168, 85, 247, 0.35)",
                        padding: "6px 12px"
                      }}
                    >
                      <div style={{ display: "flex", gap: "4px" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a855f7" }} />
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#d946ef" }} />
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffffff" }} />
                      </div>
                      <span style={{ fontSize: "0.58rem", color: "#eee", fontWeight: "600" }}>Color Swatch</span>
                    </div>
                  </div>

                  {/* Right Sidebar - Design Parameters */}
                  <div style={{ width: "95px", background: "#2c2c2c", borderLeft: "1px solid #1a1a1a", padding: "8px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.58rem", color: "#ccc" }}>
                    <div style={{ fontWeight: "700", color: "#888", fontSize: "0.55rem" }}>PROPERTIES</div>
                    
                    <div>
                      <div style={{ color: "#777", marginBottom: "3px" }}>ALIGN</div>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <span>¦⚙</span> <span>⚙¦</span> <span>⚙</span>
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid #333", paddingTop: "6px" }}>
                      <div style={{ color: "#777", marginBottom: "3px" }}>FRAME</div>
                      <div>W: 390  H: 844</div>
                    </div>

                    <div style={{ borderTop: "1px solid #333", paddingTop: "6px" }}>
                      <div style={{ color: "#777", marginBottom: "3px" }}>FILL</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <div style={{ width: "10px", height: "10px", background: "#0c0818", border: "1px solid #555" }} />
                        <span>#0C0818</span>
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid #333", paddingTop: "6px" }}>
                      <div style={{ color: "#777", marginBottom: "3px" }}>EFFECTS</div>
                      <div>✦ Glow Purple</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STATS STRIP BANNER ── */}
      <section className="stats-strip-bar" aria-label="UI/UX achievements" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px" }}>
          <div className="svc-stats-bar" style={{ flexWrap: "wrap", justifyContent: "space-between", gap: "24px" }}>
            <div className="svc-stat-item">
              <span className="svc-stat-num">250+</span>
              <span className="svc-stat-lbl">Creative Projects</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">98%</span>
              <span className="svc-stat-lbl">Client Satisfaction</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">10K+</span>
              <span className="svc-stat-lbl">Designs Delivered</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">100+</span>
              <span className="svc-stat-lbl">Brands Transformed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID SECTION (WHAT WE CREATE) ── */}
      <section className="svc-grid-section" id="solutions" aria-label="UI/UX Solutions">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            COMPLETE BRANDING SOLUTIONS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Comprehensive Graphic <span className="svc-heading-gradient">Design Solutions</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {SERVICES.map((svc, idx) => (
              <div 
                key={svc.title}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="why-card anim-3d-reveal"
                style={{ animationDelay: `${(idx % 4) * 0.1}s`, cursor: "pointer" }}
              >
                <div className="why-icon-wrap" style={{ background: "rgba(168, 85, 247, 0.12)", border: "1px solid rgba(168, 85, 247, 0.35)", boxShadow: "0 0 12px rgba(168, 85, 247, 0.15)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--purple-glow)" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  </svg>
                </div>
                <h4 className="why-card-title" style={{ fontSize: "1.12rem" }}>{svc.title}</h4>
                <p className="why-card-desc" style={{ fontSize: "0.86rem", minHeight: "68px" }}>{svc.desc}</p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {svc.tags.map(t => (
                    <span key={t} style={{ fontSize: "0.72rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "3px 8px", color: "var(--text-lavender)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR DESIGN PROCESS TIMELINE ── */}
      <section className="svc-grid-section" id="process" aria-label="UI/UX Design Process" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            DESIGN PIPELINE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Our Creative <span className="svc-heading-gradient">Design Process</span>
          </h2>
        </div>

        <div className="process-timeline-container" style={{ maxWidth: "1200px" }}>
          {/* Center line connector */}
          <div className="process-timeline-track" style={{ left: "60px", right: "60px", background: "linear-gradient(90deg, var(--purple-primary) 0%, var(--purple-glow) 100%)" }} />

          <div className="process-grid process-6-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.num} className={`process-step-item anim-3d-reveal delay-${idx * 100}`}>
                <div className="process-node-wrap">
                  <div className="process-node-circle" style={{ border: "2.5px solid var(--purple-glow)", boxShadow: "0 0 15px rgba(168,85,247,0.3)" }}>
                    {step.num}
                  </div>
                </div>
                <div style={{ padding: "0 8px" }}>
                  <h4 className="process-step-title" style={{ fontSize: "0.88rem", fontWeight: "700" }}>{step.title}</h4>
                  <p className="process-step-desc" style={{ fontSize: "0.74rem" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TOOLS WE USE GRID ── */}
      <section className="svc-grid-section" id="technologies" aria-label="Tools We Use">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            DESIGN SYSTEM STACK
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Professional Design Tools <span className="svc-heading-gradient">We Leverage</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "20px", marginTop: "40px" }}>
            {TOOLS.map((tool, idx) => (
              <div key={tool.name} className="svc-tech-box anim-3d-reveal" style={{ animationDelay: `${idx * 0.03}s`, padding: "16px 12px" }}>
                <img src={tool.img} alt={tool.name} style={{ width: "32px", height: "32px", marginBottom: "8px", objectFit: "contain" }} />
                <span style={{ fontSize: "0.8rem", color: "#fff", fontWeight: "600", textAlign: "center" }}>{tool.name}</span>
                <span style={{ fontSize: "0.58rem", color: "var(--text-muted)", marginTop: "2px" }}>{tool.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DESIGN SHOWCASE & WHAT YOU GAIN SECTION ── */}
      <section className="svc-grid-section" id="benefits" aria-label="Why Choose Our Design Services" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHY WORK WITH US
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Design Built for <span className="svc-heading-gradient">Business Growth</span>
          </h2>
        </div>

        {/* Centered 3-Column Benefits Grid Layout */}
        <div className="svc-container" style={{ maxWidth: "1200px", margin: "40px auto 0", padding: "0 24px" }}>
          <div className="benefits-grid-3col">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={benefit.title}
                ref={(el) => (cardRefs.current[idx + 20] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx + 20)}
                onMouseLeave={() => handleMouseLeave(idx + 20)}
                className="why-card anim-3d-reveal"
                style={{ padding: "20px", animationDelay: `${(idx % 3) * 0.08}s` }}
              >
                <div className="why-icon-wrap" style={{ width: "40px", height: "40px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.35)", boxShadow: "0 0 12px rgba(168, 85, 247, 0.15)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--purple-glow)" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="why-card-title" style={{ fontSize: "1.02rem", marginTop: "12px" }}>{benefit.title}</h4>
                <p className="why-card-desc" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FEATURED PORTFOLIO PROJECTS SECTION ── */}
      <section className="svc-grid-section" id="portfolio" aria-label="Featured Design Projects">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            STUDIO SHOWCASE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Featured Design <span className="svc-heading-gradient">Case Studies</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ai-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "40px" }}>
            {PROJECTS.map((proj, idx) => (
              <div 
                key={proj.title}
                ref={(el) => (cardRefs.current[idx + 30] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx + 30)}
                onMouseLeave={() => handleMouseLeave(idx + 30)}
                className="why-card anim-3d-reveal" 
                style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column", animationDelay: `${idx * 0.1}s` }}
              >
                {/* Visual Image Preview */}
                <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden" }}>
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(13,7,30,0.85)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "6px", padding: "4px 10px", fontSize: "0.7rem", color: "var(--purple-glow)", fontFamily: "var(--font-title)", fontWeight: "700" }}>
                    {proj.metric}
                  </div>
                </div>

                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <span style={{ fontSize: "0.68rem", color: "var(--purple-glow)", fontWeight: "700", textTransform: "uppercase" }}>{proj.cat}</span>
                  <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.15rem", color: "#fff", margin: "6px 0 10px" }}>{proj.title}</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: "1.5", marginBottom: "12px" }}>{proj.desc}</p>
                  
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 12px", marginBottom: "16px", fontSize: "0.74rem", color: "#ccc" }}>
                    <strong>UX Impact:</strong> {proj.beforeAfter}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.65rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", padding: "2px 6px", color: "var(--text-lavender)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="svc-card-cta" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CLIENT TESTIMONIALS SECTION ── */}
      <section className="svc-grid-section" id="testimonials" aria-label="Customer Reviews" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            CLIENT TRUST
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What Clients Say About <span className="svc-heading-gradient">Our Designs</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.name} className="why-card anim-3d-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1c1236", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", border: "1px solid rgba(168,85,247,0.3)" }}>👤</div>
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)" }}>{t.name}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{t.role}</p>
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



      {/* ── 10. UI/UX CONSULTATION INQUIRY FORM ── */}
      <section className="contact-section" id="contact" style={{ paddingBottom: "80px" }}>
        <div className="contact-bg" aria-hidden="true">
          <div className="contact-orb contact-orb-1" />
          <div className="contact-orb contact-orb-2" />
        </div>

        <div className="contact-container">
          <div className="contact-inner" style={{ background: "transparent", border: "none", boxShadow: "none" }}>
            {/* Left Info Block */}
            <div className="contact-info">
              <span className="contact-eyebrow anim-3d-reveal">
                <span className="contact-eyebrow-dot" />
                LET'S DESIGN YOUR BRAND
              </span>
              <h2 className="contact-heading anim-3d-reveal delay-100">
                Transform Your Ideas Into <span className="contact-heading-gradient">Exceptional Visual Identities.</span>
              </h2>
              <p className="contact-desc anim-3d-reveal delay-200">
                Let's create premium visual identities, stunning marketing materials, and cohesive brand systems designed to leave a lasting impression on your audience. Complete the brief and our designers will reach out within 24 hours.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item anim-3d-reveal delay-300">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email Us</span>
                    <span className="contact-detail-value">digitalcodesolution.company@gmail.com</span>
                  </div>
                </div>

                <div className="contact-detail-item anim-3d-reveal delay-400">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Call Us</span>
                    <span className="contact-detail-value">+92 370 302 2622</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Block */}
            <div className="contact-form-wrap anim-3d-reveal delay-200">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Full Name</label>
                    <input type="text" className="contact-input" placeholder="John Doe" required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address</label>
                    <input type="email" className="contact-input" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Company Name</label>
                    <input type="text" className="contact-input" placeholder="Acme Inc." />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Phone Number</label>
                    <input type="tel" className="contact-input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Project Type</label>
                    <select className="contact-input contact-select-input" defaultValue="SaaS Dashboard">
                      <option value="Mobile App">Mobile App Design</option>
                      <option value="SaaS Dashboard">SaaS Dashboard Interface</option>
                      <option value="Landing Page">Website / Landing Page</option>
                      <option value="Full Redesign">Complete Product Redesign</option>
                      <option value="Design System">Custom Design System</option>
                      <option value="Wireframe">UX Wireframing & Flow Analysis</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Platform Selection</label>
                    <div className="platform-toggle-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "6px" }}>
                      {["Web", "Mobile", "SaaS", "Dashboard"].map(plat => (
                        <button
                          key={plat}
                          type="button"
                          className={`platform-toggle-btn ${selectedPlatforms.includes(plat) ? "active" : ""}`}
                          onClick={() => togglePlatform(plat)}
                          style={{ padding: "8px" }}
                        >
                          {plat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Estimated Budget</label>
                    <select className="contact-input contact-select-input" defaultValue="$5k - $10k">
                      <option value="<$5k">Less than $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k+">$25,000 +</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Project Timeline</label>
                    <select className="contact-input contact-select-input" defaultValue="1-2 Months">
                      <option value="<3 Weeks">Less than 3 Weeks</option>
                      <option value="3-6 Weeks">3 - 6 Weeks</option>
                      <option value="1-2 Months">1 - 2 Months</option>
                      <option value="2+ Months">2+ Months</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Existing Product URL (Optional)</label>
                    <input type="url" className="contact-input" placeholder="https://example.com" />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Design Requirements</label>
                    <input type="text" className="contact-input" placeholder="e.g. Figma Source, Styleguide, Dark Mode, Component Library..." />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Project Description</label>
                  <textarea className="contact-textarea" rows="4" placeholder="Describe the product objectives, user challenges, features list, or design inspirations..."></textarea>
                </div>

                <button type="submit" className="contact-submit-btn" style={{ marginTop: "12px" }}>
                  Schedule Free Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand anim-footer-lift delay-100">
              <a href="#" className="footer-logo">
                <img src="/images/logo.png" alt="DCS Logo" style={{ width: '44px', height: 'auto', filter: 'drop-shadow(0 0 8px rgba(122,34,255,0.5))' }} />
                <div>
                  <div className="footer-logo-name">Digital <span className="footer-logo-accent">Code</span> Solution</div>
                  <div className="footer-logo-tag">Premium Digital Agency</div>
                </div>
              </a>
              <p className="footer-brand-desc">
                We craft exceptional digital experiences that help businesses grow, scale, and stand out in competitive markets.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </a>
              </div>
            </div>

            <div className="footer-links-group anim-footer-lift delay-200">
              <span className="footer-links-title">Services</span>
              <ul className="footer-links-list">
                <li><a href="/services/web-development">Web Development</a></li>
                <li><a href="/services/app-development">App Development</a></li>
                <li><a href="/services/ai-chatbot">AI Chatbot Development</a></li>
                <li><a href="/services/game-development">Game Development</a></li>
                <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
                <li><a href="/services/graphic-design">Graphic Design</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-300">
              <span className="footer-links-title">Company</span>
              <ul className="footer-links-list">
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#portfolio">Our Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-400">
              <span className="footer-links-title">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom anim-footer-lift delay-500">
            <p className="footer-copy">
              © 2026 Digital Code Solution. All rights reserved. Designed by Muhammad Mohib or Muhammad Muneeb
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
