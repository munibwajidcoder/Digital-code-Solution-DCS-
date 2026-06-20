"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';

const IMAGES = [
  { src: '/images/arch_office.png', alt: 'Premium software agency workspace' },
  { src: '/images/arch_robot.png', alt: 'AI Integrated Agency' },
  { src: '/images/arch_cloud.png', alt: 'Cloud Infrastructure' },
  { src: '/images/arch_code.png', alt: 'Code Architecture' },
];

const CYCLE_MS = 3200;

export default function ArchSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  const startCycle = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % IMAGES.length);
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCycle();
        } else {
          setIsVisible(false);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startCycle]);

  return (
    <section
      className="arch-section"
      ref={sectionRef}
      aria-label="Architecture of Digital Transformation"
    >
      <div className="arch-bg" aria-hidden="true">
        <div className="arch-orb arch-orb-1" />
        <div className="arch-orb arch-orb-2" />
        <div className="arch-orb arch-orb-3" />
        <div className="arch-grid-overlay" />
      </div>

      <div className="arch-container">
        <div className="arch-header">
          <span className="arch-eyebrow">
            <span className="arch-eyebrow-dot" />
            ARCHITECTURE
            <span className="arch-eyebrow-dot" />
          </span>
          <h2 className="arch-heading">
            Architecture of Digital{' '}
            <span className="arch-heading-gradient">Transformation</span>
          </h2>
          <p className="arch-subheading">
            We design scalable digital ecosystems that help businesses innovate, automate, and grow
            with confidence through modern technologies and intelligent solutions.
          </p>
        </div>

        <div className="arch-body">
          <div className="arch-image-col">
            <div className="arch-image-frame-wrapper">
              <div className="arch-image-glow" />
              <div className="arch-image-border" />
              <div className="arch-image-overlay" />

              <div className="arch-image-viewport">
                {IMAGES.map((img, i) => (
                  <div
                    className={`arch-image-slide${i === activeIndex ? ' arch-image-slide--active' : ''}`}
                    key={i}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="arch-image"
                      draggable={false}
                    />
                    {i === 0 && (
                      <div className="arch-image-badge">
                        <div className="arch-badge-pulse" />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        <span>Live Projects Running</span>
                      </div>
                    )}
                    {i === 0 && (
                      <div className="arch-image-stats">
                        <div className="arch-stat-item">
                          <span className="arch-stat-num">150+</span>
                          <span className="arch-stat-lbl">Projects</span>
                        </div>
                        <div className="arch-stat-divider" />
                        <div className="arch-stat-item">
                          <span className="arch-stat-num">98%</span>
                          <span className="arch-stat-lbl">Satisfaction</span>
                        </div>
                        <div className="arch-stat-divider" />
                        <div className="arch-stat-item">
                          <span className="arch-stat-num">5+</span>
                          <span className="arch-stat-lbl">Years</span>
                        </div>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="arch-image-badge">
                        <div className="arch-badge-pulse" style={{ background: '#7a22ff', boxShadow: '0 0 10px #7a22ff' }} />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        <span>AI Automation Ready</span>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="arch-image-badge" style={{ top: 'auto', bottom: '20px' }}>
                        <div className="arch-badge-pulse" style={{ background: '#00e5ff', boxShadow: '0 0 10px #00e5ff' }} />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>
                        <span>Cloud Server Matrix</span>
                      </div>
                    )}
                    {i === 3 && (
                      <div className="arch-image-badge" style={{ top: 'auto', bottom: '20px' }}>
                        <div className="arch-badge-pulse" style={{ background: '#b366ff', boxShadow: '0 0 10px #b366ff' }} />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <span>Scalable Architecture</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="arch-progress-track" aria-hidden="true">
                <div
                  className="arch-progress-fill"
                  style={{ transform: `scaleY(${((activeIndex + 1) / IMAGES.length).toFixed(2)})` }}
                />
              </div>
            </div>
          </div>

          <div className="arch-content-col">
            <div className="arch-content-inner">
              <h3 className="arch-content-title">
                Architecting the Future of{' '}
                <span className="arch-content-title-accent">Digital Innovation</span>
              </h3>

              <div className="arch-content-body">
                <p>
                  At DCS, we don&apos;t just build software — we architect entire digital ecosystems. Every
                  solution we create is engineered from the ground up with scalability, performance, and
                  long-term maintainability at its core.
                </p>
              </div>

              <div className="arch-features">
                {[
                  { icon: <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>, title: "Scalable System Architecture", desc: "Engineered to handle millions of users without breaking a sweat." },
                  { icon: <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>, title: "Modern Development Workflow", desc: "Agile sprints, CI/CD pipelines, and rigorous code review standards." },
                  { icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>, title: "Cloud-Ready Infrastructure", desc: "Deploy anywhere — AWS, GCP, or Azure — with zero-downtime rollouts." },
                  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>, title: "Long-Term Maintainability", desc: "Clean, documented code that your team can own and extend with ease." },
                ].map((f, i) => (
                  <div
                    className={`arch-feature-row${activeIndex === i ? ' arch-feature-row--active' : ''}`}
                    key={i}
                  >
                    <div className="arch-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon}
                      </svg>
                    </div>
                    <div className="arch-feature-text">
                      <span className="arch-feature-title">{f.title}</span>
                      <span className="arch-feature-desc">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/contact" className="arch-cta-btn">
                <span className="arch-cta-btn-text">Start Your Digital Journey</span>
                <span className="arch-cta-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span className="arch-cta-btn-glow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
