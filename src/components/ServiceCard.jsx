"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  illustration,
  icon,
  link,
  delayClass = "",
  cardClass = "",
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

    // Subtle 3D tilt (max 12 degrees)
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset tilt smoothly
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`hs-card anim-3d-reveal ${delayClass} ${cardClass}`}
      style={{
        transform: "perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale3d(var(--card-scale, 1), var(--card-scale, 1), var(--card-scale, 1))",
        transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
      }}
    >
      {/* 3D Illustration Header */}
      {illustration && (
        <div className="hs-card-image-wrap">
          <Image
            src={illustration}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="hs-card-image"
            style={{ objectFit: "contain", padding: "10px" }}
          />
          <div className="hs-card-image-overlay" />
        </div>
      )}

      {/* Glowing Orb Floating over Image border */}
      <div className="hs-card-icon-wrap">
        <div className="hs-icon-orb">
          {icon}
        </div>
      </div>

      <h3 className="hs-card-title">{title}</h3>
      <p className="hs-card-desc">{description}</p>
      
      <a href={link} className="hs-arrow-btn" aria-label={`Learn more about ${title}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  );
}
