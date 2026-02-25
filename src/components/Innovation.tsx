import React from "react";
import "./Innovation.css";

const callouts = [
  {
    id: "storm",
    title: "Storm-Proof Strength",
    description: "Designed to withstand cyclonic winds",
    position: { top: "15%", left: "15%" },
    line: {
      width: "80px",
      height: "100px",
      top: "100%",
      left: "50%",
      borderLeft: "1px solid #005A64",
      borderBottom: "1px solid #005A64",
      borderBottomLeftRadius: "0px",
    },
    target: { top: "35%", left: "28%" },
  },
  {
    id: "wider",
    title: "Wider Views",
    description: "Larger panel sizes",
    position: { top: "15%", left: "40%" },
    line: {
      width: "1px",
      height: "80px",
      top: "100%",
      left: "50%",
      backgroundColor: "#005A64",
    },
    target: { top: "30%", left: "46%" },
  },
  {
    id: "rattling",
    title: "No Rattling",
    description: "Sturdy accessories with premium woolpile",
    position: { top: "15%", left: "60%" },
    line: {
      width: "1px",
      height: "60px",
      top: "100%",
      left: "50%",
      backgroundColor: "#005A64",
    },
    target: { top: "28%", left: "63%" },
  },
  {
    id: "noise",
    title: "Noise Insulation",
    description: "High-quality gaskets with fin-based woolpile",
    position: { top: "22%", left: "85%" },
    line: {
      width: "80px",
      height: "60px",
      top: "50%",
      right: "100%",
      borderBottom: "1px solid #005A64",
      borderLeft: "1px solid #005A64",
      borderBottomLeftRadius: "0px",
      transform: "translateY(-100%)",
    },
    target: { top: "20%", left: "72%" },
  },
  {
    id: "drips",
    title: "No Drips or Leaks",
    description: "Efficient and intelligent water drainage system",
    position: { top: "48%", left: "80%" },
    line: {
      width: "60px",
      height: "1px",
      top: "50%",
      right: "100%",
      backgroundColor: "#005A64",
    },
    target: { top: "48%", left: "72%" },
  },
  {
    id: "peace",
    title: "Peace of Mind",
    description:
      "12-year warranty on aluminium profiles + 5-year warranty on hardware",
    position: { top: "65%", left: "80%" },
    line: {
      width: "60px",
      height: "1px",
      top: "50%",
      right: "100%",
      backgroundColor: "#005A64",
    },
    target: { top: "65%", left: "72%" },
  },
  {
    id: "sealing",
    title: "High-Quality Sealing",
    description: "Silicated fin-based woolpile blocks water, dust, and sound",
    position: { top: "85%", left: "75%" },
    line: {
      width: "80px",
      height: "60px",
      bottom: "100%",
      left: "20%",
      borderTop: "1px solid #005A64",
      borderLeft: "1px solid #005A64",
      borderTopLeftRadius: "0px",
    },
    target: { top: "78%", left: "65%" },
  },
  {
    id: "smooth",
    title: "Smooth Operation",
    description: "Rollers and hinges tested for over 1 lakh cycles",
    position: { top: "90%", left: "45%" },
    line: {
      width: "1px",
      height: "80px",
      bottom: "100%",
      left: "50%",
      backgroundColor: "#005A64",
    },
    target: { top: "78%", left: "52%" },
  },
  {
    id: "indian",
    title: "Made for Indian Conditions",
    description: "Integrated collapsible insect-proof mesh",
    position: { top: "85%", left: "20%" },
    line: {
      width: "80px",
      height: "50px",
      bottom: "100%",
      right: "20%",
      borderTop: "1px solid #005A64",
      borderRight: "1px solid #005A64",
      borderTopRightRadius: "0px",
    },
    target: { top: "78%", left: "38%" },
  },
  {
    id: "security",
    title: "Enhanced Security",
    description: "Multi-point locking mechanisms for added protection",
    position: { top: "65%", left: "10%" },
    line: {
      width: "60px",
      height: "1px",
      top: "50%",
      left: "100%",
      backgroundColor: "#005A64",
    },
    target: { top: "65%", left: "26%" },
  },
  {
    id: "reliability",
    title: "Rugged Reliability",
    description: "40% stronger than standard aluminium",
    position: { top: "48%", left: "10%" },
    line: {
      width: "60px",
      height: "1px",
      top: "50%",
      left: "100%",
      backgroundColor: "#005A64",
    },
    target: { top: "50%", left: "26%" },
  },
];

export default function Innovation() {
  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <h2 className="innovation-title">
          Where Innovation Meets Precision
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

          {/* Callout Cards & Lines */}
          <div className="callouts-layer">
            {callouts.map((callout) => (
              <React.Fragment key={callout.id}>
                <div
                  className="callout-card"
                  style={{
                    top: callout.position.top,
                    left: callout.position.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h4 className="callout-title">{callout.title}</h4>
                  <p className="callout-desc">{callout.description}</p>

                  <div className="callout-connector" style={callout.line}></div>
                </div>

                {/* The dot on the image */}
                <div
                  className="callout-target-dot"
                  style={{ top: callout.target.top, left: callout.target.left }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
