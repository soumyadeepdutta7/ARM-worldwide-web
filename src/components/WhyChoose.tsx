import React, { useState, useRef, useEffect } from "react";
import "./WhyChoose.css";

const reasons = [
  {
    id: "duranium",
    title: "Stronger. Sleeker. Smarter.",

    logoUrl: "/images/logos/Duranium-logo.svg",
    features: [
      "Patented alloy, 40% stronger than standard aluminium.",
      "Enables larger windows with slimmer profiles.",
      "Cyclone-tested for extreme durability & reliability.",
    ],
  },
  {
    id: "wiwa",
    title: "Tested. Trusted. Strong.",

    logoUrl: "/images/logos/WIWA-certified-logo.svg",
    features: [
      "Windows tested for wind, water, and air performance.",
      "Leak-proof, rattle-free & weather-resistant Windows.",
      "Transparent scoring system for consumer confidence.",
    ],
  },
  {
    id: "sustainability",
    title: "Assured Service Guarantee",
    subtitle: "",
    logoUrl: "/images/logos/Sustanibility-logo.svg",
    features: [
      "12-Year Warranty",
      "Dedicated 7-Day Call Center for support.",
      "Rigorous post-installation checks for complete satisfaction.",
    ],
  },
  {
    id: "care",
    title: "Greener Homes Promise",
    subtitle: "",
    logoUrl: "/images/logos/Eternia-care-logo.svg",
    features: [
      "Aluminium – the world’s only eternally recyclable material.",
      "GreenPro Certified products for a greener future.",
      "Sustainable production processes for eco-conscious living.",
    ],
  },
];

// Fallback Icon for checklist
const IconCheck = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="check-icon"
  >
    <rect
      width="20"
      height="20"
      x="2"
      y="2"
      rx="4"
      fill="rgba(255, 255, 255, 0.15)"
    />
    <path
      d="M7 12L10.5 15.5L18 8"
      stroke="#3b82f6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll snap events to update dots on mobile
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;

    // Calculate which card is currently mostly in view
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < reasons.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  // Allow clicking dots to scroll to specific card on mobile
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / reasons.length;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="why-title">
          Why Choose Eternia
          <span className="why-title-underline"></span>
        </h2>

        <div className="reasons-container" ref={scrollContainerRef}>
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="card-header">
                <div className="card-header-logo-container">
                  <img
                    src={reason.logoUrl}
                    alt={reason.id}
                    className={`card-logo-img ${reason.id === "sustainability" || reason.id === "care" ? "wide" : ""}`}
                    width={
                      reason.id === "sustainability" || reason.id === "care"
                        ? "228.88"
                        : "133.33"
                    }
                    height={
                      reason.id === "sustainability" || reason.id === "care"
                        ? "49.9"
                        : "50"
                    }
                  />
                  <div className="card-header-text">
                    <span className="card-subtitle">{reason.subtitle}</span>
                  </div>
                </div>
                <h3 className="card-title">{reason.title}</h3>
                <div className="card-divider"></div>
              </div>

              <ul className="card-features">
                {reason.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <div className="feature-icon-wrapper">
                      <IconCheck />
                    </div>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="mobile-pagination">
          {reasons.map((_, idx) => (
            <span
              key={idx}
              className={`pagination-dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => scrollToCard(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
