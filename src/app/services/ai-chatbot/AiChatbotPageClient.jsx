"use client";

import React, { useRef, useState, useEffect } from "react";
import ResponsiveNav from "../../../components/ResponsiveNav";
import GlobalScrollObserver from "../../../components/GlobalScrollObserver";

const TECH_AI = [
  { name: "OpenAI GPT-4", img: "https://cdn.simpleicons.org/openai/white" },
  { name: "Claude 3.5 Sonnet", img: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Gemini 1.5 Pro", img: "https://cdn.simpleicons.org/google/white" },
  { name: "LangChain", img: "https://cdn.simpleicons.org/python/white" },
];

const TECH_FRONTEND = [
  { name: "React.js", img: "https://cdn.simpleicons.org/react/white" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript/white" },
  { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss/white" },
];

const TECH_BACKEND = [
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/white" },
  { name: "Express.js", img: "https://cdn.simpleicons.org/express/white" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/white" },
];

const TECH_DB = [
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/white" },
  { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql/white" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase/white" },
];

const TECH_INT = [
  { name: "WhatsApp API", img: "https://cdn.simpleicons.org/whatsapp/white" },
  { name: "CRM Connectors", img: "https://cdn.simpleicons.org/salesforce/white" },
  { name: "Zapier & Make", img: "https://cdn.simpleicons.org/zapier/white" },
];

const TECH_DEP = [
  { name: "Amazon AWS", img: "https://cdn.simpleicons.org/amazonwebservices/white" },
  { name: "Vercel Host", img: "https://cdn.simpleicons.org/vercel/white" },
  { name: "DigitalOcean", img: "https://cdn.simpleicons.org/digitalocean/white" },
];

const SIMULATED_CONVERSATION = [
  { sender: "user", text: "Hi, can you help qualify leads on our site?" },
  { sender: "bot", text: "Absolutely! I can qualify website visitors 24/7, ask smart qualifying questions, and instantly sync details into your CRM." },
  { sender: "user", text: "Amazing. Does it support WhatsApp too?" },
  { sender: "bot", text: "Yes! I deploy natively on WhatsApp, Messenger, and Web so you can engage users wherever they prefer." },
  { sender: "user", text: "How long does setup take?" },
  { sender: "bot", text: "We can deploy a custom GPT assistant trained on your database in under 2 weeks. Ready to scale?" }
];

export default function AiChatbotPageClient() {
  const cardRefs = useRef([]);
  const showRefs = useRef([]);
  // Chat Simulation State
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [convoIndex, setConvoIndex] = useState(0);

  // Chat Simulation Effect
  useEffect(() => {
    if (convoIndex >= SIMULATED_CONVERSATION.length) {
      const resetTimeout = setTimeout(() => {
        setChatMessages([]);
        setConvoIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const currentMsg = SIMULATED_CONVERSATION[convoIndex];
    if (currentMsg.sender === "user") {
      const timer = setTimeout(() => {
        setChatMessages(prev => [...prev, currentMsg]);
        setConvoIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setChatMessages(prev => [...prev, currentMsg]);
        setConvoIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(typingTimer);
    }
  }, [convoIndex]);

  // Card perspective tilts
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
      <section className="svc-hero" aria-label="AI Chatbot Development Hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-glow-1" />
          <div className="svc-hero-glow-2" />
          <div className="svc-hero-grid" />
        </div>

        <div className="svc-hero-content ai-hero-layout">
          {/* Left Columns info */}
          <div className="ai-hero-left">
            <div className="badge-pill-purple anim-3d-reveal delay-100">
              <span style={{ color: "#a855f7" }}>✦</span> AI CHATBOT DEVELOPMENT SERVICES
            </div>

            <h1 className="svc-hero-heading anim-3d-reveal delay-200">
              Build Intelligent <br />
              <span className="text-gradient-purple">AI Chatbots</span> That Automate Business Growth
            </h1>

            <p className="svc-hero-desc anim-3d-reveal delay-300">
              We design and develop powerful AI chatbot solutions that automate customer support, capture leads, answer questions instantly, and improve business efficiency through intelligent conversations.
            </p>

            <div className="svc-hero-buttons anim-3d-reveal delay-400">
              <a href="#contact" className="btn-primary">
                Get Free Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#solutions" className="btn-outline">
                View AI Solutions
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Stats bar */}
            <div className="svc-stats-bar anim-3d-reveal delay-500" style={{ marginTop: "40px" }}>
              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">24/7</div>
                  <div className="svc-stat-lbl">Active Support</div>
                </div>
              </div>

              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="10" x2="2" y2="10"></line>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">70%+</div>
                  <div className="svc-stat-lbl">Costs Reduced</div>
                </div>
              </div>

              <div className="svc-stat-item">
                <div className="svc-stat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="svc-stat-num">&lt;2s</div>
                  <div className="svc-stat-lbl">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Visual - Futuristic Chat Interface */}
          <div className="ai-hero-right anim-3d-reveal delay-300">
            <div className="chatbot-widget-container">
              {/* Widget Header */}
              <div className="chatbot-widget-header">
                <div className="bot-avatar-glowing">
                  <span className="online-indicator"></span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4>DCS AI Assistant</h4>
                  <p>Conversational AI Engine</p>
                </div>
                <div className="header-badge">GPT-4 Active</div>
              </div>

              {/* Chat Messages Body */}
              <div className="chatbot-widget-body">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`chat-message-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
                    <div className="msg-icon">
                      {msg.sender === "user" ? "👤" : "🤖"}
                    </div>
                    <div className="msg-text">{msg.text}</div>
                  </div>
                ))}

                {isTyping && (
                  <div className="chat-message-bubble bot-bubble">
                    <div className="msg-icon">🤖</div>
                    <div className="typing-indicator-wave">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Footer */}
              <div className="chatbot-widget-footer">
                <div className="mock-input-field">AI Assistant is typing custom answers...</div>
                <button className="chat-send-btn-mock" aria-label="Send Message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>

              {/* Ambient neural graphics background glows */}
              <div className="ai-widget-ambient-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. AI SERVICES SECTION ── */}
      <section className="svc-grid-section" id="solutions" aria-label="AI Chatbot Solutions">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            COMPREHENSIVE SOLUTIONS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Comprehensive <span className="svc-heading-gradient">AI Chatbot Solutions</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            Intelligent conversational platforms tailored for standard channels, workflows, and lead automations.
          </p>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-cards-grid">
            {/* Card 1: Custom AI Chatbots */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Custom AI Chatbots</h3>
              <p className="svc-card-desc">Tailored AI chatbot solutions built specifically for your business requirements and database integrations.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 2: Customer Support Bots */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Customer Support Bots</h3>
              <p className="svc-card-desc">24/7 automated support assistants that resolve customer queries and improve satisfaction levels.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 3: Website AI Assistants */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 className="svc-card-title">Website AI Assistants</h3>
              <p className="svc-card-desc">Smart website chatbots that engage online visitors, answer questions, and increase checkout conversions.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 4: WhatsApp AI Chatbots */}
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={() => handleMouseLeave(3)}
              className="svc-card anim-3d-reveal delay-400"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">WhatsApp AI Chatbots</h3>
              <p className="svc-card-desc">Automated WhatsApp pipelines built to manage customer sales, supports, and direct notifications.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 5: Lead Generation Bots */}
            <div
              ref={(el) => (cardRefs.current[4] = el)}
              onMouseMove={(e) => handleMouseMove(e, 4)}
              onMouseLeave={() => handleMouseLeave(4)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="svc-card-title">Lead Generation Bots</h3>
              <p className="svc-card-desc">Interact, qualify, and capture leads automatically, filtering opportunities directly into sales lists.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 6: FAQ Automation */}
            <div
              ref={(el) => (cardRefs.current[5] = el)}
              onMouseMove={(e) => handleMouseMove(e, 5)}
              onMouseLeave={() => handleMouseLeave(5)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">FAQ Automation</h3>
              <p className="svc-card-desc">Instantly answer repetitive customer inquiries with AI model setups matching business datasets.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 7: AI Business Assistants */}
            <div
              ref={(el) => (cardRefs.current[6] = el)}
              onMouseMove={(e) => handleMouseMove(e, 6)}
              onMouseLeave={() => handleMouseLeave(6)}
              className="svc-card anim-3d-reveal delay-300"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className="svc-card-title">AI Business Assistants</h3>
              <p className="svc-card-desc">Virtual internal agents built to schedule actions, fetch datasets, and streamline routine works.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 8: Chatbot Integration */}
            <div
              ref={(el) => (cardRefs.current[7] = el)}
              onMouseMove={(e) => handleMouseMove(e, 7)}
              onMouseLeave={() => handleMouseLeave(7)}
              className="svc-card anim-3d-reveal delay-400"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <h3 className="svc-card-title">Chatbot Integration Services</h3>
              <p className="svc-card-desc">Seamless sync with Salesforce, HubSpot, Stripe, internal databases, custom APIs, and webhooks.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 9: OpenAI & GPT Integration */}
            <div
              ref={(el) => (cardRefs.current[8] = el)}
              onMouseMove={(e) => handleMouseMove(e, 8)}
              onMouseLeave={() => handleMouseLeave(8)}
              className="svc-card anim-3d-reveal delay-100"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                </svg>
              </div>
              <h3 className="svc-card-title">OpenAI & GPT Integration</h3>
              <p className="svc-card-desc">Integration of OpenAI, Claude, or LLaMA APIs to provide context-aware, human-like conversations.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 10: Automation Workflows */}
            <div
              ref={(el) => (cardRefs.current[9] = el)}
              onMouseMove={(e) => handleMouseMove(e, 9)}
              onMouseLeave={() => handleMouseLeave(9)}
              className="svc-card anim-3d-reveal delay-200"
            >
              <div className="svc-card-glow" />
              <div className="svc-card-icon-wrap svc-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="svc-card-title">Automation Workflows</h3>
              <p className="svc-card-desc">Intelligent triggers connecting dialog flows to backend databases for automated operational growth.</p>
              <a href="#contact" className="svc-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FEATURES & BENEFITS SECTION ── */}
      <section className="svc-grid-section" id="features" aria-label="AI Features" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            BENEFITS & POWERFUL FEATURES
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Why Choose Our <span className="svc-heading-gradient">AI Chatbot Solutions</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid">
            {/* Benefit 1 */}
            <div className="why-card anim-3d-reveal delay-100">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4 className="why-card-title">Smart Automation</h4>
              <p className="why-card-desc">Automate repetitive backend business processes and conversational customer pipelines effortlessly.</p>
            </div>

            {/* Benefit 2 */}
            <div className="why-card anim-3d-reveal delay-200">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 className="why-card-title">24/7 Availability</h4>
              <p className="why-card-desc">Provide context-aware assistance to global visitors instantly without hiring support staff.</p>
            </div>

            {/* Benefit 3 */}
            <div className="why-card anim-3d-reveal delay-300">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">Faster Response Times</h4>
              <p className="why-card-desc">Deliver immediate, precise responses to multiple customer threads concurrently under 2 seconds.</p>
            </div>

            {/* Benefit 4 */}
            <div className="why-card anim-3d-reveal delay-400">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4 className="why-card-title">Lead Generation</h4>
              <p className="why-card-desc">Convert standard site traffic into structured leads through qualification dialogues.</p>
            </div>

            {/* Benefit 5 */}
            <div className="why-card anim-3d-reveal delay-500">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4 className="why-card-title">AI-Powered Conversations</h4>
              <p className="why-card-desc">Deploy LLM-trained networks that adapt answers dynamically matching database contexts.</p>
            </div>

            {/* Benefit 6 */}
            <div className="why-card anim-3d-reveal delay-600">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                </svg>
              </div>
              <h4 className="why-card-title">CRM Integration</h4>
              <p className="why-card-desc">Instantly populate customer datasets directly into your Salesforce, HubSpot, or custom CRM.</p>
            </div>

            {/* Benefit 7 */}
            <div className="why-card anim-3d-reveal delay-100">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h4 className="why-card-title">Multi-Platform Support</h4>
              <p className="why-card-desc">Deploy chatbots natively across Websites, WhatsApp, Facebook Messenger, and Slack channels.</p>
            </div>

            {/* Benefit 8 */}
            <div className="why-card anim-3d-reveal delay-200">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                </svg>
              </div>
              <h4 className="why-card-title">Scalable Architecture</h4>
              <p className="why-card-desc">Build modular agent workflows that expand smoothly as your customer baseline grows.</p>
            </div>

            {/* Benefit 9 */}
            <div className="why-card anim-3d-reveal delay-300">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4 className="why-card-title">Cost Reduction</h4>
              <p className="why-card-desc">Cut manual operation expenses by automating up to 80% of customer ticket flows.</p>
            </div>

            {/* Benefit 10 */}
            <div className="why-card anim-3d-reveal delay-400">
              <div className="why-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h4 className="why-card-title">Data Insights</h4>
              <p className="why-card-desc">Analyze chat statistics, customer topics, and conversion ratios from visual logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS TIMELINE ── */}
      <section className="svc-grid-section" id="process" aria-label="Development Process">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            DEVELOPMENT TIMELINE
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Our AI Chatbot <span className="svc-heading-gradient">Development Process</span>
          </h2>
          <p className="svc-subheading anim-3d-reveal delay-200">
            A reliable 6-step lifecycle structured to deploy smart automations to your servers.
          </p>
        </div>

        <div className="process-timeline-container anim-3d-reveal delay-300">
          <div className="process-timeline-track" />
          
          <div className="process-grid process-6-grid">
            {/* Step 1 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">1</div>
              </div>
              <h4 className="process-step-title">Discovery & Consultation</h4>
              <p className="process-step-desc">Understanding your business targets and specific workflow automation needs.</p>
            </div>

            {/* Step 2 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">2</div>
              </div>
              <h4 className="process-step-title">Strategy & Planning</h4>
              <p className="process-step-desc">Mapping communication pipelines, tool APIs, and LLM training criteria.</p>
            </div>

            {/* Step 3 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">3</div>
              </div>
              <h4 className="process-step-title">Conversation Design</h4>
              <p className="process-step-desc">Drafting interaction flows, system prompts, and fallbacks.</p>
            </div>

            {/* Step 4 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">4</div>
              </div>
              <h4 className="process-step-title">AI Development</h4>
              <p className="process-step-desc">Configuring LLM chains, training vector databases, and coding API integrations.</p>
            </div>

            {/* Step 5 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">5</div>
              </div>
              <h4 className="process-step-title">Testing & Optimization</h4>
              <p className="process-step-desc">Running accuracy triggers, checking intent match percentages, and polishing logs.</p>
            </div>

            {/* Step 6 */}
            <div className="process-step-item">
              <div className="process-node-wrap">
                <div className="process-node-circle">6</div>
              </div>
              <h4 className="process-step-title">Deployment & Support</h4>
              <p className="process-step-desc">Going live across WhatsApp or Web, followed by optimization iterations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TECHNOLOGIES WE USE ── */}
      <section className="svc-grid-section" id="technologies" aria-label="Technologies We Use" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            INTELLIGENT TECH STACK
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Technologies <span className="svc-heading-gradient">We Integrate</span>
          </h2>
        </div>

        <div className="tech-rows-wrapper anim-3d-reveal delay-200" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          {/* AI Row */}
          <div className="tech-row-group" style={{ marginBottom: "32px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>AI Models & LLMs</div>
            <div className="svc-tech-grid">
              {TECH_AI.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Row */}
          <div className="tech-row-group" style={{ marginBottom: "32px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Frontend UI</div>
            <div className="svc-tech-grid">
              {TECH_FRONTEND.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Row */}
          <div className="tech-row-group" style={{ marginBottom: "32px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Backend Processing</div>
            <div className="svc-tech-grid">
              {TECH_BACKEND.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases Row */}
          <div className="tech-row-group" style={{ marginBottom: "32px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Databases & Vector Storage</div>
            <div className="svc-tech-grid">
              {TECH_DB.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Row */}
          <div className="tech-row-group" style={{ marginBottom: "32px" }}>
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>CRM & API Channels</div>
            <div className="svc-tech-grid">
              {TECH_INT.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployments Row */}
          <div className="tech-row-group">
            <div className="tech-row-header" style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.1rem", color: "var(--purple-glow)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cloud Infrastructure</div>
            <div className="svc-tech-grid">
              {TECH_DEP.map((tech, idx) => (
                <div key={tech.name} className="svc-tech-box" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RESULTS & IMPACT SECTION ── */}
      <section className="svc-grid-section" id="impact" aria-label="Results and Impact">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            BUSINESS RESULTS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What You Achieve With <span className="svc-heading-gradient">DCS AI Bots</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-impact-grid-container">
            <div className="impact-box-card">Automated Customer Support</div>
            <div className="impact-box-card">Higher Lead Conversion</div>
            <div className="impact-box-card">Faster Customer Response</div>
            <div className="impact-box-card">Improved Customer Satisfaction</div>
            <div className="impact-box-card">Reduced Support Costs</div>
            <div className="impact-box-card">Increased Productivity</div>
            <div className="impact-box-card">Better Customer Engagement</div>
            <div className="impact-box-card">Business Growth</div>
            <div className="impact-box-card">AI-Powered Automation</div>
            <div className="impact-box-card">Competitive Advantage</div>
          </div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES SECTION ── */}
      <section className="svc-grid-section" id="portfolio" aria-label="Recent Chatbot Projects">
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            RECENT DEPLOYMENTS
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            Recent AI Chatbot <span className="svc-heading-gradient">Case Studies</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ai-projects-grid">
            {/* Project 1 */}
            <div className="why-card anim-3d-reveal delay-100" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">Customer Support AI Assistant</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>Automated E-Commerce Agent</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>Implemented a GPT-4 assistant that automatically manages client tracking details, inventory requests, and ticket resolutions.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>90% Automatic Resolutions</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="why-card anim-3d-reveal delay-200" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">WhatsApp Sales Bot</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>Real-Estate Dialog Engine</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>WhatsApp sales funnel qualifying home buyers, scheduling site inspections, and pushing leads directly to HubSpot CRM.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>+40% Lead Rate</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="why-card anim-3d-reveal delay-300" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">Lead Generation Chatbot</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>SaaS Trial Qualification Bot</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>Website bot filtering trial accounts by target industry, team size, and goals, scheduling calls automatically.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>3x Conversions</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="why-card anim-3d-reveal delay-400" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">AI FAQ Assistant</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>Internal Knowledge Bot</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>AI chatbot trained on company handbooks, answering complex staff questions and fetching internal wiki files.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>100% Instant Answers</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="why-card anim-3d-reveal delay-500" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">CRM Integrated Chatbot</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>Salesforce Smart Sync Bot</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>Customer chatbot validating account subscriptions and updating billing status fields directly in CRM sheets.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>12k Monthly Syncs</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="why-card anim-3d-reveal delay-600" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="ai-proj-badge">AI Business Automation Platform</div>
              <div style={{ padding: "28px" }}>
                <h4 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>Autonomous Agent Flows</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.5" }}>Configuring workflow triggers routing client orders, billing tasks, and receipts autonomously.</p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--purple-glow)", fontWeight: "600" }}>-30h Manual Work/Wk</span>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#fff", textDecoration: "none", fontWeight: "700" }}>
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS SECTION ── */}
      <section className="svc-grid-section" id="testimonials" aria-label="Customer Testimonials" style={{ background: "rgba(3,1,8,0.4)" }}>
        <div className="svc-section-header">
          <div className="hs-eyebrow anim-3d-reveal">
            <span className="hs-eyebrow-dot" />
            CLIENT TRUST
            <span className="hs-eyebrow-dot" />
          </div>
          <h2 className="svc-heading anim-3d-reveal delay-100">
            What Our Clients Say About <span className="svc-heading-gradient">DCS AI Bots</span>
          </h2>
        </div>

        <div className="svc-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="why-choose-grid">
            {/* Testimonial 1 */}
            <div className="why-card anim-3d-reveal delay-100">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1c1236", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem" }}>👤</div>
                <div>
                  <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)" }}>Sarah Jenkins</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>COO, GrowthTech Labs</p>
                </div>
              </div>
              <div style={{ color: "var(--purple-glow)", fontSize: "0.9rem", marginBottom: "8px" }}>★★★★★</div>
              <p className="why-card-desc" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                "The support chatbot designed by DCS manages 80% of our daily customer support tickets autonomously. Response times fell from hours to under 2 seconds instantly!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="why-card anim-3d-reveal delay-200">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1c1236", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem" }}>👤</div>
                <div>
                  <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)" }}>Marcus Chen</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>VP Sales, RealEstate Direct</p>
                </div>
              </div>
              <div style={{ color: "var(--purple-glow)", fontSize: "0.9rem", marginBottom: "8px" }}>★★★★★</div>
              <p className="why-card-desc" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                "We deployed their WhatsApp AI bot to qualify incoming properties interest. It gathers budgets and areas, feeding lead cards automatically into Salesforce."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="why-card anim-3d-reveal delay-300">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1c1236", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem" }}>👤</div>
                <div>
                  <h4 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: "700", fontFamily: "var(--font-title)" }}>Evelyn Thorne</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Founder, StyleSaaS</p>
                </div>
              </div>
              <div style={{ color: "var(--purple-glow)", fontSize: "0.9rem", marginBottom: "8px" }}>★★★★★</div>
              <p className="why-card-desc" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                "Our website lead conversion rate grew by 200% since launching DCS's context-aware GPT trial assistant. It answers questions instantly and triggers trial signups."
              </p>
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
