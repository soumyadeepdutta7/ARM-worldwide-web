import React, { useState, useRef, useEffect, useCallback } from "react";
import "./SpacesComeAlive.css";

export default function SpacesComeAlive() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(clientX - containerRect.left, containerRect.width),
    );
    const percent = Math.max(0, Math.min((x / containerRect.width) * 100, 100));

    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;

      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent text selection/image dragging native behaviors
    setIsDragging(true);

    // Also move to the clicked position immediately
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove((e as React.MouseEvent).clientX);
    }
  };

  return (
    <section className="spaces-section">
      <div className="spaces-bg-pattern"></div>

      <div className="container spaces-container">
        <h2 className="spaces-title">
          Where Spaces Come Alive
          <span className="spaces-title-underline"></span>
        </h2>

        <div className="slider-wrapper">
          <div
            className="slider-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* The Before Image (Background) */}
            <div className="slider-image-before">
              <img
                src="/images/Before.svg"
                alt="Before"
                className="slider-img"
              />
              <div className="label-pill before-label">Before</div>
            </div>

            {/* The After Image (Clipped overlay) */}
            <div
              className="slider-image-after"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            >
              <img src="/images/After.svg" alt="After" className="slider-img" />
              <div className="label-pill after-label">After</div>
            </div>

            {/* The Slider Handle */}
            <div
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="slider-handle-line"></div>
              <div className="slider-handle-button">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 16L6 12L10 8"
                    stroke="#004d5a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 16L18 12L14 8"
                    stroke="#004d5a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="spaces-view-all">
          <a href="#gallery" className="view-all-link">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
