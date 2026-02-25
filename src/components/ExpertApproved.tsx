import React, { useState, useRef, useEffect } from 'react';
import './ExpertApproved.css';

const slidesData = [
    {
        id: 1,
        url: "/images/projects/Slide-5.svg"
    },
    {
        id: 2,
        url: "/images/projects/Slide-4.svg"
    },
    {
        id: 3,
        url: "/images/projects/Slide-1.svg"
    },
    {
        id: 4,
        url: "/images/projects/Slide-2.svg"
    },
    {
        id: 5,
        url: "/images/projects/Slide-3.svg"
    }
];

export default function ExpertApproved() {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % slidesData.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);

    const getOffset = (index: number) => {
        let diff = index - activeIndex;
        const half = Math.floor(slidesData.length / 2);
        if (diff > half) diff -= slidesData.length;
        if (diff < -half) diff += slidesData.length;
        return diff;
    };

    const handleCardClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <section className="expert-approved-section">
            <div className="container expert-container">
                <h2 className="expert-title">
                    Expert-Approved Performance
                    <span className="expert-title-underline"></span>
                </h2>

                <div className="expert-carousel-wrapper">
                    {slidesData.map((item, index) => {
                        const offset = getOffset(index);
                        let classNameStr = `expert-card offset-${offset < 0 ? 'm' + Math.abs(offset) : offset}`;
                        if (offset === 0) classNameStr += ' active';

                        return (
                            <div
                                key={item.id}
                                className={classNameStr}
                                onClick={() => handleCardClick(index)}
                            >
                                <img
                                    src={item.url}
                                    alt={`Slide ${item.id}`}
                                    className="expert-video" // Keeping class name for layout consistency
                                />
                                {/* Dark overlay for side cards */}
                                <div className="expert-card-overlay"></div>
                            </div>
                        )
                    })}
                </div>

                <div className="expert-controls">
                    <button className="control-btn prev-btn dark-btn" onClick={handlePrev} aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="pagination-dots dark-dots">
                        {slidesData.map((_, i) => (
                            <span
                                key={i}
                                className={`dot ${i === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(i)}
                            ></span>
                        ))}
                    </div>

                    <button className="control-btn next-btn dark-btn" onClick={handleNext} aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
