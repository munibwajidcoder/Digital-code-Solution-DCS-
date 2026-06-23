"use client";

import React, { useRef } from "react";

export default function PortfolioItem3D({
  num,
  title,
  desc,
  features = [],
  imgSrc,
  imgAlt,
  ctaLink = "/portfolio",
  imagePosition = "left",
  delayClass = "",
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Premium 3D Tilt - Maximum 12 degrees
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Interactive spotlight reflection coordinates (0-100%)
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    // Parallax depth offset for the inner image - Maximum 10px
    const parallaxX = ((centerX - x) / centerX) * 10;
    const parallaxY = ((centerY - y) / centerY) * 10;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.setProperty("--parallax-x", `${parallaxX}px`);
    card.style.setProperty("--parallax-y", `${parallaxY}px`);
    card.style.setProperty("--port-y", "-12px");
    card.style.setProperty("--port-scale", "1.03");
    card.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Smoothly reset 3D transformations and glare opacity
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
    card.style.setProperty("--parallax-x", "0px");
    card.style.setProperty("--parallax-y", "0px");
    card.style.setProperty("--port-y", "0px");
    card.style.setProperty("--port-scale", "1");
    card.style.setProperty("--glow-opacity", "0");
  };

  const renderImageWrap = () => (
    <div className={`port-image-wrap port-image-${imagePosition}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="port-image-glass"
      >
        <div className="port-image-inner">
          <img src={imgSrc} alt={imgAlt} className="port-img" />
        </div>
        <div className="port-image-glow" />
      </div>
    </div>
  );

  const renderInfoWrap = () => (
    <div className={`port-info port-info-${imagePosition === "left" ? "right" : "left"}`}>
      <span className="port-num-badge">{num}</span>
      <h3 className="port-project-title">{title}</h3>
      <p className="port-project-desc">{desc}</p>
      <ul className="port-features">
        {features.map((feat, index) => (
          <li key={index}>
            <span className="port-feat-icon">◈</span>
            {feat}
          </li>
        ))}
      </ul>
      <a href={ctaLink} className="port-cta-btn">
        View Case Study
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );

  return (
    <div className={`port-item anim-3d-reveal ${delayClass}`}>
      {imagePosition === "left" ? (
        <>
          {renderImageWrap()}
          {renderInfoWrap()}
        </>
      ) : (
        <>
          {renderInfoWrap()}
          {renderImageWrap()}
        </>
      )}
    </div>
  );
}
