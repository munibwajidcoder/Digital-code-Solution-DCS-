"use client";

import React, { useRef, useState, useEffect } from "react";
import ResponsiveNav from "../../../components/ResponsiveNav";
import GlobalScrollObserver from "../../../components/GlobalScrollObserver";

const TECH_STACK = [
  { name: "Unity", img: "https://cdn.simpleicons.org/unity/white" },
  { name: "Unreal Engine", img: "https://cdn.simpleicons.org/unrealengine/white" },
  { name: "Godot Engine", img: "https://cdn.simpleicons.org/godotengine/white" },
  { name: "C#", img: "https://cdn.simpleicons.org/csharp/white" },
  { name: "C++", img: "https://cdn.simpleicons.org/cplusplus/white" },
  { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/white" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript/white" },
  { name: "Blender", img: "https://cdn.simpleicons.org/blender/white" },
  { name: "Maya", img: "https://cdn.simpleicons.org/autodesk/white" },
  { name: "Adobe Photoshop", img: "https://cdn.simpleicons.org/adobephotoshop/white" },
  { name: "Spine 2D", img: "https://cdn.simpleicons.org/spine/white" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/white" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase/white" },
  { name: "PlayFab", img: "https://cdn.simpleicons.org/playfab/white" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/white" },
  { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql/white" },
  { name: "Amazon AWS", img: "https://cdn.simpleicons.org/amazonwebservices/white" },
  { name: "Microsoft Azure", img: "https://cdn.simpleicons.org/microsoftazure/white" },
  { name: "Google Cloud", img: "https://cdn.simpleicons.org/googlecloud/white" },
  { name: "Steam", img: "https://cdn.simpleicons.org/steam/white" },
  { name: "Google Play", img: "https://cdn.simpleicons.org/googleplay/white" },
  { name: "App Store", img: "https://cdn.simpleicons.org/appstore/white" }
];

const SERVICES = [
  {
    title: "2D Game Development",
    desc: "Interactive 2D games with engaging mechanics, retro/modern art styles, and optimized performance.",
    tags: ["Unity 2D", "Android", "iOS"]
  },
  {
    title: "3D Game Development",
    desc: "High-quality 3D gaming experiences with immersive environments, realistic lighting, and fluid dynamics.",
    tags: ["Unity 3D", "Unreal", "3D Modeling"]
  },
  {
    title: "Mobile Game Development",
    desc: "Engaging and additive mobile games natively built and optimized for Android and iOS devices.",
    tags: ["Android", "iOS", "Monetization"]
  },
  {
    title: "PC Game Development",
    desc: "Scalable and high-performance desktop gaming solutions with rich storylines and advanced mechanics.",
    tags: ["Steam", "Windows", "MacOS"]
  },
  {
    title: "Multiplayer Game Development",
    desc: "Real-time multiplayer systems and online experiences with low-latency matchmaking and state sync.",
    tags: ["Photon", "Mirror", "WebSockets"]
  },
  {
    title: "Unity Game Development",
    desc: "Cross-platform games developed using Unity Engine, leveraging full hardware acceleration.",
    tags: ["Unity Engine", "C#", "Cross-Platform"]
  },
  {
    title: "Unreal Engine Development",
    desc: "AAA-quality game development using Unreal Engine for photorealistic visuals and cinematic experiences.",
    tags: ["Unreal Engine", "C++", "Blueprints"]
  },
  {
    title: "Game UI/UX Design",
    desc: "Modern and intuitive game interfaces that enhance gameplay immersion, menus, and HUD displays.",
    tags: ["Figma", "UI/UX", "HUD Design"]
  },
  {
    title: "Game Testing & QA",
    desc: "Comprehensive testing for performance, stability, compatibility, and seamless user experiences.",
    tags: ["Bug Fixing", "Profiling", "Optimization"]
  },
  {
    title: "Game Maintenance & Updates",
    desc: "Ongoing improvements, live-ops coordination, feature updates, and customer support post-launch.",
    tags: ["Live Ops", "Updates", "Support"]
  }
];

const FEATURES = [
  { title: "Stunning Visuals", desc: "Create visually engaging and photorealistic gaming experiences." },
  { title: "Cross-Platform Compatibility", desc: "Launch and sync games across multiple devices, consoles, and platforms." },
  { title: "Scalable Architecture", desc: "Support massive player demand and real-time database state sync." },
  { title: "Multiplayer Integration", desc: "Enable real-time player lobbies, matchmaking, and multiplayer interactions." },
  { title: "Optimized Performance", desc: "Smooth gameplay rendering at high frame rates and fast load times." },
  { title: "Custom Game Mechanics", desc: "Unique gameplay loop scripts tailored specifically to your design vision." },
  { title: "Advanced Analytics", desc: "Track player behavior metrics, session heatmaps, and retention data." },
  { title: "Secure Development", desc: "Protect client game source code, assets, and player database logs." },
  { title: "Ongoing Support", desc: "Continuous live ops management, server scaling, and content updates." },
  { title: "Business Growth", desc: "Proven in-app purchase funnels and player retention loops." }
];

const PROCESS_STEPS = [
  { num: "01", title: "Concept & Idea", desc: "We listen to your idea and understand your game objectives, target audience, and vision." },
  { num: "02", title: "Game Planning", desc: "Defining gameplay loops, mechanics, features list, and system design documents." },
  { num: "03", title: "Art & Assets", desc: "Creating characters, 2D/3D sprites, levels layouts, HUD, and audio assets." },
  { num: "04", title: "Development", desc: "Building the game logic, server pipelines, physics scripts, and database integrations." },
  { num: "05", title: "Testing & QA", desc: "Testing and profiling for performance, stability, bugs, and overall player experience." },
  { num: "06", title: "Optimization", desc: "Polishing frame rates, asset sizing, textures compression, and mobile rendering." },
  { num: "07", title: "Launch & Support", desc: "Publishing to stores (Steam, Play, App Store) and managing live support cycles." }
];

const PROJECTS = [
  {
    title: "Galaxy Warriors",
    cat: "Action / Adventure",
    desc: "3D space action-adventure game with stunning graphics, intense combat systems, and custom weapons.",
    tags: ["Unity", "3D", "Multiplayer"],
    img: "/images/office_workspace.png"
  },
  {
    title: "Speed Rush 2026",
    cat: "Racing",
    desc: "High-speed mobile racing game with realistic physics simulation, custom cars, and online leaderboards.",
    tags: ["Unity", "Mobile", "Racing"],
    img: "/images/svc_game_dev.png"
  },
  {
    title: "Block Master",
    cat: "Puzzle / Casual",
    desc: "Addictive spatial puzzle game with 100+ stages, clean animations, and custom power-ups.",
    tags: ["Unity", "2D", "Casual"],
    img: "/images/robotic_code.png"
  }
];

const TESTIMONIALS = [
  {
    name: "Alex Sterling",
    role: "Studio Director, PixelForge Games",
    text: "Working with DCS was an incredible experience. They brought our multiplayer vision to life on time and under budget. Player engagement grew by 300% post-launch!",
    stars: 5
  },
  {
    name: "Riana Vance",
    role: "Founder, MobilePlay Labs",
    text: "Their optimization skills are top-notch. Our 3D mobile game loads in under 3 seconds on mid-range devices now. Highly recommended developers!",
    stars: 5
  },
  {
    name: "Dimitri Santos",
    role: "Product Owner, GameMinds",
    text: "The custom game mechanics and level design DCS built for our casual arcade game are exceptionally polished. Players love the responsiveness.",
    stars: 5
  }
];

const FAQS = [
  { q: "How long does game development take?", a: "Timelines depend on scope. A simple hyper-casual game takes 4 to 8 weeks, while complex 3D multiplayer projects can take 6 months or longer. We provide a detailed timeline during strategy." },
  { q: "Which game engines do you use?", a: "We primarily build in Unity and Unreal Engine. We pick the engine based on target platform, art style (2D vs 3D), and performance goals." },
  { q: "Can you develop multiplayer games?", a: "Yes, we integrate low-latency multiplayer networks using systems like Photon Fusion, Mirror, or custom Node.js/WebSocket servers." },
  { q: "Do you create both 2D and 3D games?", a: "Yes, our team has extensive expertise in both 2D sprite mechanics and fully immersive 3D level modeling and rendering." },
  { q: "Do you provide post-launch support?", a: "Absolutely. We manage Live Ops, monitor server loads, resolve bugs, and build new content updates post-release." },
  { q: "Can you publish games on app stores?", a: "Yes, we handle the entire release process, including Steam setups, Google Play Store policies, and Apple App Store guidelines." },
  { q: "Do you develop PC games?", a: "Yes, we build high-performance PC games optimized for modern hardware and deploy them via Steam or direct digital packaging." },
  { q: "Can you build custom game mechanics?", a: "Absolutely. We write custom scripts for any vision, whether it's specialized vehicle physics, unique AI pathfinding, or card battle logs." },
  { q: "Do you provide game UI/UX design?", a: "Yes, our graphic designers craft immersive game UI menus, HUD overlays, selection hubs, and transition animations." },
  { q: "Can you maintain and update existing games?", a: "Yes. We can refactor existing code, optimize asset sizing for faster loads, upgrade game engine versions, and add new features." }
];

export default function GameDevPageClient() {
  const cardRefs = useRef([]);
  const showRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState(["Mobile"]);
  const [multiplayerReq, setMultiplayerReq] = useState("No");

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
      <section className="svc-hero" aria-label="Game Development Hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout" style={{ maxWidth: "1250px" }}>
          {/* Left info column */}
          <div className="ai-hero-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> GAME STUDIO
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200">
              Build Engaging <br />
              <span className="text-gradient-purple">Games That Captivate</span> Players
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300">
              We design and develop immersive gaming experiences with stunning visuals, engaging gameplay mechanics, and scalable architectures that keep players entertained and businesses growing.
            </p>

            <div className="app-dev-hero-bullets anim-3d-reveal delay-300" style={{ width: "100%", justifyContent: "flex-start", marginBottom: "28px" }}>
              <span>2D & 3D Games</span> <span className="bullet-dot">•</span> 
              <span>Mobile & PC</span> <span className="bullet-dot">•</span> 
              <span>Unity Expert</span> <span className="bullet-dot">•</span> 
              <span>Fast Delivery</span>
            </div>

            <div className="svc-hero-buttons anim-3d-reveal delay-400">
              <a href="#contact" className="btn-primary">
                Start My Game Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#portfolio" className="btn-outline">
                View Game Portfolio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right graphics column - Tilt controller widget */}
          <div className="ai-hero-right anim-3d-reveal delay-300">
            <div 
              ref={(el) => (showRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 99)}
              onMouseLeave={() => handleMouseLeave(99)}
              className="why-card" 
              style={{ 
                padding: "24px", 
                borderRadius: "30px", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                position: "relative",
                height: "440px",
                overflow: "visible"
              }}
            >
              {/* Layered gamepad display mockup */}
              <div 
                className="hero-controller-showcase" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  position: "relative" 
                }}
              >
                {/* Visual mockup controller svg */}
                <svg 
                  width="260" 
                  height="180" 
                  viewBox="0 0 260 180" 
                  fill="none" 
                  style={{ 
                    filter: "drop-shadow(0 15px 35px rgba(122,34,255,0.65))", 
                    animation: "bob-vertical 4s ease-in-out infinite alternate" 
                  }}
                >
                  {/* Outer grips */}
                  <path d="M40 30 C 5 130, 25 170, 75 165 C 100 162, 115 140, 130 140 C 145 140, 160 162, 185 165 C 235 170, 255 130, 220 30 C 205 10, 175 10, 130 25 C 85 10, 55 10, 40 30 Z" fill="#0c0818" stroke="#7a22ff" strokeWidth="6" />
                  {/* Grip Inner Glow */}
                  <path d="M48 38 C 20 120, 35 155, 75 152 C 92 150, 105 132, 130 132 C 155 132, 168 150, 185 152 C 225 155, 240 120, 212 38" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Analog Sticks (Left and Right) */}
                  <circle cx="95" cy="105" r="28" fill="#1c1236" stroke="#7a22ff" strokeWidth="3.5" />
                  <circle cx="95" cy="105" r="16" fill="#0d071e" stroke="#a855f7" strokeWidth="2" />
                  <circle cx="91" cy="101" r="5" fill="#a855f7" opacity="0.8" />

                  <circle cx="165" cy="105" r="28" fill="#1c1236" stroke="#7a22ff" strokeWidth="3.5" />
                  <circle cx="165" cy="105" r="16" fill="#0d071e" stroke="#a855f7" strokeWidth="2" />
                  <circle cx="161" cy="101" r="5" fill="#a855f7" opacity="0.8" />

                  {/* D-Pad (Left Side) */}
                  <path d="M55 70 H 75 V 50 H 87 V 70 H 107 V 82 H 87 V 102 H 75 V 82 H 55 Z" fill="#1c1236" stroke="#7a22ff" strokeWidth="3" />
                  <circle cx="81" cy="76" r="3" fill="#a855f7" />

                  {/* Buttons Grid (Right Side) */}
                  {/* X Button */}
                  <circle cx="160" cy="62" r="9" fill="#1c1236" stroke="#7a22ff" strokeWidth="2" />
                  <text x="156" y="66" fill="#fff" fontSize="10" fontFamily="var(--font-title)" fontWeight="bold">X</text>
                  
                  {/* Y Button */}
                  <circle cx="178" cy="46" r="9" fill="#1c1236" stroke="#7a22ff" strokeWidth="2" />
                  <text x="175" y="50" fill="#fff" fontSize="10" fontFamily="var(--font-title)" fontWeight="bold">Y</text>

                  {/* A Button */}
                  <circle cx="178" cy="78" r="9" fill="#1c1236" stroke="#7a22ff" strokeWidth="2" />
                  <text x="175" y="82" fill="#fff" fontSize="10" fontFamily="var(--font-title)" fontWeight="bold">A</text>

                  {/* B Button */}
                  <circle cx="196" cy="62" r="9" fill="#1c1236" stroke="#7a22ff" strokeWidth="2" />
                  <text x="193" y="66" fill="#fff" fontSize="10" fontFamily="var(--font-title)" fontWeight="bold">B</text>

                  {/* Logo Emblem (Center) */}
                  <polygon points="120,55 140,55 130,73" fill="#a855f7" />
                  <path d="M116 50 H 144 V 80 H 116 Z" stroke="#7a22ff" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* Left Floating Stat Widget */}
                <div 
                  className="metric-pill-card anim-bob-slow"
                  style={{ 
                    position: "absolute", 
                    top: "10%", 
                    left: "-35px", 
                    zIndex: 10, 
                    background: "rgba(13, 7, 30, 0.8)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    boxShadow: "0 8px 30px rgba(122,34,255,0.25)"
                  }}
                >
                  <div className="metric-badge-icon">🎮</div>
                  <div style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>Games Launched</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "#fff" }}>50+</div>
                  </div>
                </div>

                {/* Right Floating Stat Widget */}
                <div 
                  className="metric-pill-card anim-bob-fast"
                  style={{ 
                    position: "absolute", 
                    bottom: "12%", 
                    right: "-35px", 
                    zIndex: 10, 
                    background: "rgba(13, 7, 30, 0.8)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    boxShadow: "0 8px 30px rgba(122,34,255,0.25)"
                  }}
                >
                  <div className="metric-badge-icon">⚡</div>
                  <div style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>Framework Support</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "#fff" }}>Unity & Unreal</div>
                  </div>
                </div>

                {/* Center Badge Widget */}
                <div 
                  className="metric-pill-card anim-bob-slow"
                  style={{ 
                    position: "absolute", 
                    bottom: "5%", 
                    left: "20px", 
                    zIndex: 10, 
                    background: "rgba(13, 7, 30, 0.8)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    boxShadow: "0 8px 30px rgba(122,34,255,0.25)",
                    padding: "6px 14px"
                  }}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span className="hs-eyebrow-dot" style={{ background: "var(--purple-glow)", boxShadow: "0 0 6px var(--purple-glow)" }} /> 
                    2D & 3D Expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STATS STRIP BANNER ── */}
      <section className="stats-strip-bar" aria-label="Game studio achievements" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px" }}>
          <div className="svc-stats-bar" style={{ flexWrap: "wrap", justifyContent: "space-between", gap: "24px" }}>
            <div className="svc-stat-item">
              <span className="svc-stat-num">50+</span>
              <span className="svc-stat-lbl">Games Launched</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">15+</span>
              <span className="svc-stat-lbl">Countries Reached</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">98%</span>
              <span className="svc-stat-lbl">Client Rating</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">4+ Years</span>
              <span className="svc-stat-lbl">Studio Experience</span>
            </div>
            <div className="svc-stat-item">
              <span className="svc-stat-num">100%</span>
              <span className="svc-stat-lbl">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID SECTION (WHAT WE CREATE) ── */}
      <section className="svc-grid-section" id="solutions" aria-label="Game Solutions">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHAT WE CREATE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Every Type of Game <span className="svc-heading-gradient">You Can Imagine</span>
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
                    <rect x="2" y="6" width="20" height="12" rx="3"></rect>
                    <line x1="6" y1="12" x2="10" y2="12"></line>
                    <line x1="8" y1="10" x2="8" y2="14"></line>
                    <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor"></circle>
                    <circle cx="18.5" cy="9.5" r="1.5" fill="currentColor"></circle>
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

      {/* ── 4. PROCESS TIMELINE SECTION ── */}
      <section className="svc-grid-section" id="process" aria-label="Game Development Process" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            OUR PIPELINE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            How We Build <span className="svc-heading-gradient">Your Game</span>
          </h2>
        </div>

        <div className="process-timeline-container" style={{ maxWidth: "1200px" }}>
          {/* Center line connector */}
          <div className="process-timeline-track" style={{ left: "60px", right: "60px", background: "linear-gradient(90deg, var(--purple-primary) 0%, var(--purple-glow) 100%)" }} />

          <div className="process-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
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

      {/* ── 5. TECHNOLOGIES GRID SECTION ── */}
      <section className="svc-grid-section" id="technologies" aria-label="Technologies We Use">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            TECH STACKS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Powerful Technologies. <span className="svc-heading-gradient">Epic Games.</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "20px", marginTop: "40px" }}>
            {TECH_STACK.map((tech, idx) => (
              <div key={tech.name} className="svc-tech-box anim-3d-reveal" style={{ animationDelay: `${idx * 0.03}s`, padding: "16px 12px" }}>
                <img src={tech.img} alt={tech.name} style={{ width: "32px", height: "32px", marginBottom: "8px", objectFit: "contain" }} />
                <span style={{ fontSize: "0.8rem", color: "#fff", fontWeight: "600", textAlign: "center" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE OUR GAME SERVICES SECTION ── */}
      <section className="svc-grid-section" id="why-choose-us" aria-label="Why Choose DCS" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            WHY CHOOSE DCS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            We Don't Just Build Games — <span className="svc-heading-gradient">We Create Experiences</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {FEATURES.map((feature, idx) => (
              <div 
                key={feature.title}
                ref={(el) => (cardRefs.current[idx + 10] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx + 10)}
                onMouseLeave={() => handleMouseLeave(idx + 10)}
                className="why-card anim-3d-reveal"
                style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className="why-icon-wrap" style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.35)", boxShadow: "0 0 12px rgba(168, 85, 247, 0.15)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--purple-glow)" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="why-card-title" style={{ fontSize: "1.02rem" }}>{feature.title}</h4>
                <p className="why-card-desc" style={{ fontSize: "0.85rem" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FEATURED PORTFOLIO PROJECTS SECTION ── */}
      <section className="svc-grid-section" id="portfolio" aria-label="Featured Game Projects">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            STUDIO PROJECTS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Featured Game <span className="svc-heading-gradient">Case Studies</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ai-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "40px" }}>
            {PROJECTS.map((proj, idx) => (
              <div 
                key={proj.title}
                ref={(el) => (cardRefs.current[idx + 20] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx + 20)}
                onMouseLeave={() => handleMouseLeave(idx + 20)}
                className="why-card anim-3d-reveal" 
                style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column", animationDelay: `${idx * 0.1}s` }}
              >
                {/* Visual Image Preview */}
                <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(13,7,30,0.8)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "6px", padding: "4px 10px", fontSize: "0.72rem", color: "var(--purple-glow)", fontFamily: "var(--font-title)", fontWeight: "700" }}>
                    {proj.cat}
                  </div>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.22rem", color: "#fff", marginBottom: "10px" }}>{proj.title}</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5", marginBottom: "20px" }}>{proj.desc}</p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.68rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", padding: "2px 6px", color: "var(--text-lavender)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="svc-card-cta" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
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
      <section className="svc-grid-section" id="testimonials" aria-label="Customer Testimonials" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            CLIENT TRUST
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What Our Clients Say About <span className="svc-heading-gradient">DCS Game Studio</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.name} className="why-card anim-3d-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1c1236", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem" }}>👤</div>
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

      {/* ── 9. FAQS ACCORDION SECTION ── */}
      <section className="svc-grid-section" id="faq" aria-label="Frequently Asked Questions">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            SUPPORT FAQS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Frequently Asked <span className="svc-heading-gradient">Questions</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "850px", margin: "0 auto", padding: "0 24px" }}>
          <div className="faq-accordions-list anim-3d-reveal delay-200" style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "30px" }}>
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className={`faq-accordion-item ${activeFaq === idx ? "active" : ""}`}
                style={{ 
                  background: "rgba(13, 7, 30, 0.45)", 
                  border: "1px solid rgba(255,255,255,0.06)", 
                  borderRadius: "14px", 
                  overflow: "hidden", 
                  transition: "all 0.3s ease" 
                }}
              >
                <button
                  type="button"
                  className="faq-header-btn"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ 
                    width: "100%", 
                    padding: "20px 24px", 
                    background: "transparent", 
                    border: "none", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    cursor: "pointer", 
                    textAlign: "left" 
                  }}
                >
                  <span style={{ fontFamily: "var(--font-title)", fontWeight: "600", fontSize: "0.98rem", color: "#fff" }}>
                    {faq.q}
                  </span>
                  <span style={{ fontSize: "1.3rem", color: "var(--purple-glow)", transform: activeFaq === idx ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s ease", display: "inline-block" }}>
                    +
                  </span>
                </button>
                
                <div 
                  className="faq-body-content"
                  style={{ 
                    maxHeight: activeFaq === idx ? "200px" : "0px", 
                    overflow: "hidden", 
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)", 
                    background: "rgba(3,1,8,0.25)" 
                  }}
                >
                  <p style={{ padding: "0 24px 20px", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. GAME INQUIRY CONSULTATION FORM ── */}
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
                LET'S BUILD YOUR GAME
              </span>
              <h2 className="contact-heading anim-3d-reveal delay-100">
                Turn Your Game Idea Into An <span className="contact-heading-gradient">Unforgettable Experience.</span>
              </h2>
              <p className="contact-desc anim-3d-reveal delay-200">
                Let's create a captivating game that engages players, builds communities, and drives long-term success. Complete the project brief and our game architects will reach out within 24 hours.
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
                    <input type="text" className="contact-input" placeholder="Acme Games" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Phone Number</label>
                    <input type="tel" className="contact-input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Game Type</label>
                    <select className="contact-input contact-select-input" defaultValue="3D Mobile">
                      <option value="2D Mobile">2D Mobile Game</option>
                      <option value="3D Mobile">3D Mobile Game</option>
                      <option value="PC Game">PC / Desktop Game</option>
                      <option value="Multiplayer">Real-time Multiplayer Game</option>
                      <option value="AR Game">AR / VR Interactive Game</option>
                      <option value="Web Game">Web-Based HTML5/WebGL Game</option>
                      <option value="Prototype">Rapid Game Prototype</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Multiplayer Requirement</label>
                    <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                      {["No", "Yes"].map(option => (
                        <button
                          key={option}
                          type="button"
                          className={`platform-toggle-btn ${multiplayerReq === option ? "active" : ""}`}
                          onClick={() => setMultiplayerReq(option)}
                          style={{ flex: 1, padding: "10px" }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Target Platform</label>
                    <div className="platform-toggle-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {["Mobile", "PC", "Console", "Multiple"].map(plat => (
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

                  <div className="contact-field">
                    <label className="contact-label">Estimated Budget</label>
                    <select className="contact-input contact-select-input" defaultValue="$10k - $25k">
                      <option value="<$10k">Less than $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k - $50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000 +</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Project Timeline</label>
                    <select className="contact-input contact-select-input" defaultValue="3-6 Months">
                      <option value="<2 Months">Less than 2 Months</option>
                      <option value="2-3 Months">2 - 3 Months</option>
                      <option value="3-6 Months">3 - 6 Months</option>
                      <option value="6+ Months">6+ Months</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Required Features</label>
                    <input type="text" className="contact-input" placeholder="e.g. Leaderboards, Chat, Daily Quests, Ad Monetization..." />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Project Description</label>
                  <textarea className="contact-textarea" rows="4" placeholder="Describe the gameplay core loops, art themes, target engine, or multiplayer specs..."></textarea>
                </div>

                <button type="submit" className="contact-submit-btn" style={{ marginTop: "12px" }}>
                  Start Your Game Project
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
