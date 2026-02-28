import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Innovation.css";

// Desktop Layout Configuration
const desktopCallouts = [
  {
    id: "storm",
    title: "Storm-Proof Strength",
    description: "Designed to withstand cyclonic winds",
    cardPos: { top: "15%", left: "30%" },
    targetPos: { top: "35%", left: "32%" },
    lines: [
      { x1: "30", y1: "15", x2: "30", y2: "25" },
      { x1: "30", y1: "25", x2: "32", y2: "25" },
      { x1: "32", y1: "25", x2: "32", y2: "35" }
    ],
  },
  {
    id: "wider",
    title: "Wider Views",
    description: "Larger panel sizes",
    cardPos: { top: "15%", left: "50%" },
    targetPos: { top: "30%", left: "46%" },
    lines: [
      { x1: "50", y1: "15", x2: "50", y2: "22" },
      { x1: "50", y1: "22", x2: "46", y2: "22" },
      { x1: "46", y1: "22", x2: "46", y2: "30" }
    ],
  },
  {
    id: "rattling",
    title: "No Rattling",
    description: "Sturdy accessories with premium woolpile",
    cardPos: { top: "15%", left: "70%" },
    targetPos: { top: "35%", left: "63%" },
    lines: [
      { x1: "70", y1: "15", x2: "70", y2: "25" },
      { x1: "70", y1: "25", x2: "63", y2: "25" },
      { x1: "63", y1: "25", x2: "63", y2: "35" }
    ],
  },
  {
    id: "noise",
    title: "Noise Insulation",
    description: "High-quality gaskets with fin-based woolpile",
    cardPos: { top: "28%", left: "85%" },
    targetPos: { top: "28%", left: "70%" },
    lines: [
      { x1: "85", y1: "28", x2: "70", y2: "28" },
    ],
  },
  {
    id: "drips",
    title: "No Drips or Leaks",
    description: "Efficient and intelligent water drainage system",
    cardPos: { top: "48%", left: "85%" },
    targetPos: { top: "48%", left: "70%" },
    lines: [
      { x1: "85", y1: "48", x2: "70", y2: "48" },
    ],
  },
  {
    id: "peace",
    title: "Peace of Mind",
    description: "12-year warranty on aluminium profiles + 5-year warranty on hardware",
    cardPos: { top: "68%", left: "82%" },
    targetPos: { top: "68%", left: "70%" },
    lines: [
      { x1: "82", y1: "68", x2: "70", y2: "68" },
    ],
  },
  {
    id: "sealing",
    title: "High-Quality Sealing",
    description: "Silicated fin-based woolpile blocks water, dust, and sound",
    cardPos: { top: "85%", left: "70%" },
    targetPos: { top: "72%", left: "63%" },
    lines: [
      { x1: "70", y1: "85", x2: "70", y2: "78" },
      { x1: "70", y1: "78", x2: "63", y2: "78" },
      { x1: "63", y1: "78", x2: "63", y2: "72" }
    ],
  },
  {
    id: "smooth",
    title: "Smooth Operation",
    description: "Rollers and hinges tested for over 1 lakh cycles",
    cardPos: { top: "88%", left: "50%" },
    targetPos: { top: "72%", left: "50%" },
    lines: [
      { x1: "50", y1: "88", x2: "50", y2: "72" }
    ],
  },
  {
    id: "indian",
    title: "Made for Indian Conditions",
    description: "Integrated collapsible insect-proof mesh",
    cardPos: { top: "85%", left: "30%" },
    targetPos: { top: "75%", left: "38%" },
    lines: [
      { x1: "30", y1: "85", x2: "30", y2: "80" },
      { x1: "30", y1: "80", x2: "38", y2: "80" },
      { x1: "38", y1: "80", x2: "38", y2: "75" }
    ],
  },
  {
    id: "security",
    title: "Enhanced Security",
    description: "Multi-point locking mechanisms for added protection",
    cardPos: { top: "68%", left: "18%" },
    targetPos: { top: "68%", left: "30%" },
    lines: [
      { x1: "18", y1: "68", x2: "30", y2: "68" },
    ],
  },
  {
    id: "reliability",
    title: "Rugged Reliability",
    description: "40% stronger than standard aluminium",
    cardPos: { top: "48%", left: "15%" },
    targetPos: { top: "48%", left: "28%" },
    lines: [
      { x1: "15", y1: "48", x2: "28", y2: "48" },
    ],
  },
];

// Carousel Slides for Mobile
const mobileSlides = [
  // Slide 1
  [
    {
      id: "reliability",
      title: "Rugged Reliability",
      description: "40% stronger than standard aluminium",
      cardPos: { top: "10%", left: "25%" },
      targetPos: { top: "35%", left: "30%" },
      lines: [
        { x1: "25", y1: "14", x2: "25", y2: "25" },
        { x1: "25", y1: "25", x2: "30", y2: "25" },
        { x1: "30", y1: "25", x2: "30", y2: "35" }
      ],
    },
    {
      id: "storm",
      title: "Storm-Proof Strength",
      description: "Designed to withstand cyclonic winds",
      cardPos: { top: "10%", left: "50%" },
      targetPos: { top: "30%", left: "45%" },
      lines: [
        { x1: "50", y1: "14", x2: "50", y2: "20" },
        { x1: "50", y1: "20", x2: "45", y2: "20" },
        { x1: "45", y1: "20", x2: "45", y2: "30" }
      ],
    },
    {
      id: "wider",
      title: "Wider Views",
      description: "Larger panel sizes",
      cardPos: { top: "10%", left: "75%" },
      targetPos: { top: "35%", left: "60%" },
      lines: [
        { x1: "75", y1: "14", x2: "75", y2: "25" },
        { x1: "75", y1: "25", x2: "60", y2: "25" },
        { x1: "60", y1: "25", x2: "60", y2: "35" }
      ],
    },
    {
      id: "security",
      title: "Enhanced Security",
      description: "Multi-point locking mechanisms for added protection",
      cardPos: { top: "85%", left: "25%" },
      targetPos: { top: "65%", left: "30%" },
      lines: [
        { x1: "25", y1: "80", x2: "25", y2: "75" },
        { x1: "25", y1: "75", x2: "30", y2: "75" },
        { x1: "30", y1: "75", x2: "30", y2: "65" }
      ],
    },
    {
      id: "indian",
      title: "Made for Indian Conditions",
      description: "Integrated collapsible pest mesh",
      cardPos: { top: "85%", left: "50%" },
      targetPos: { top: "68%", left: "45%" },
      lines: [
        { x1: "50", y1: "80", x2: "50", y2: "72" },
        { x1: "50", y1: "72", x2: "45", y2: "72" },
        { x1: "45", y1: "72", x2: "45", y2: "68" }
      ],
    },
    {
      id: "smooth",
      title: "Smooth Operation",
      description: "1L+ Cycle tested rollers & hinges",
      cardPos: { top: "85%", left: "75%" },
      targetPos: { top: "65%", left: "60%" },
      lines: [
        { x1: "75", y1: "80", x2: "75", y2: "75" },
        { x1: "75", y1: "75", x2: "60", y2: "75" },
        { x1: "60", y1: "75", x2: "60", y2: "65" }
      ],
    },
  ],
  // Slide 2
  [
    {
      id: "rattling",
      title: "No Rattling",
      description: "Sturdy accessories with premium woolpile",
      cardPos: { top: "10%", left: "35%" },
      targetPos: { top: "35%", left: "40%" },
      lines: [
        { x1: "35", y1: "14", x2: "35", y2: "25" },
        { x1: "35", y1: "25", x2: "40", y2: "25" },
        { x1: "40", y1: "25", x2: "40", y2: "35" }
      ],
    },
    {
      id: "noise",
      title: "Noise Insulation",
      description: "High-quality gaskets with fin-based woolpile",
      cardPos: { top: "10%", left: "65%" },
      targetPos: { top: "35%", left: "60%" },
      lines: [
        { x1: "65", y1: "14", x2: "65", y2: "25" },
        { x1: "65", y1: "25", x2: "60", y2: "25" },
        { x1: "60", y1: "25", x2: "60", y2: "35" }
      ],
    },
    {
      id: "drips",
      title: "No Drips or Leaks",
      description: "Efficient and intelligent water drainage system",
      cardPos: { top: "85%", left: "35%" },
      targetPos: { top: "65%", left: "40%" },
      lines: [
        { x1: "35", y1: "80", x2: "35", y2: "75" },
        { x1: "35", y1: "75", x2: "40", y2: "75" },
        { x1: "40", y1: "75", x2: "40", y2: "65" }
      ],
    },
    {
      id: "peace",
      title: "Peace of Mind",
      description: "12-year warranty on profiles + 5-year hardware",
      cardPos: { top: "85%", left: "65%" },
      targetPos: { top: "65%", left: "60%" },
      lines: [
        { x1: "65", y1: "80", x2: "65", y2: "75" },
        { x1: "65", y1: "75", x2: "60", y2: "75" },
        { x1: "60", y1: "75", x2: "60", y2: "65" }
      ],
    },
    {
      id: "sealing",
      title: "High-Quality Sealing",
      description: "Silicated fin-based woolpile blocks water, dust",
      cardPos: { top: "45%", left: "80%" },
      targetPos: { top: "45%", left: "65%" },
      lines: [
        { x1: "80", y1: "45", x2: "65", y2: "45" }
      ],
    },
  ],
];

export default function Innovation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkMobile(); // Check on initial load
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = mobileSlides.length;
  const activeCallouts = isMobile ? mobileSlides[currentSlide] : desktopCallouts;

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <h2 className="innovation-title">
          Where Innovation
          {isMobile ? <br /> : " "}Meets Precision
          <span className="innovation-title-underline"></span>
        </h2>

        <div className="innovation-diagram-area">
          {/* Main Image Container */}
          <div className="innovation-image-wrapper">
            <img
              src="/images/projects/standing-lady.png"
              alt="Eternia Window System"
              className="innovation-main-image"
            />
          </div>

          {/* SVG Overlay for Lines */}
          <svg className="innovation-svg-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            {activeCallouts.map((callout) => (
              <React.Fragment key={`lines-${callout.id}`}>
                {callout.lines.map((line, idx) => (
                  <line
                    key={`${callout.id}-line-${idx}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    style={{ stroke: "#005A64", strokeWidth: isMobile ? "0.2" : "0.15" }}
                  />
                ))}
              </React.Fragment>
            ))}
          </svg>

          {/* Callout Cards Layer */}
          <div className="callouts-layer">
            {activeCallouts.map((callout) => (
              <React.Fragment key={callout.id}>
                <div
                  className={`callout-card ${isMobile ? "mobile-card" : ""}`}
                  style={{
                    top: callout.cardPos.top,
                    left: callout.cardPos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h4 className="callout-title">{callout.title}</h4>
                  <p className="callout-desc">{callout.description}</p>
                </div>
                <div
                  className="callout-target-dot"
                  style={{ top: callout.targetPos.top, left: callout.targetPos.left }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Controls */}
        {isMobile && (
          <div className="carousel-controls">
            <button className="carousel-nav-btn" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                />
              ))}
            </div>
            <button className="carousel-nav-btn" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
