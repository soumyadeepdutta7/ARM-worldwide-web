import React, { useRef } from 'react';
import './CraftedSpaces.css';

export default function CraftedSpaces() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            id: 1,
            image: '/images/projects/Runwal-img.svg'
        },
        {
            id: 2,
            image: '/images/projects/Rustomjee-img.svg'
        },
        {
            id: 3,
            image: '/images/projects/L&T-img.svg'

        },
        {
            id: 4,
            image: '/images/projects/Birla-img.svg'

        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <section className="crafted-spaces-section">
            {/* Background Split */}
            <div className="crafted-bg-top">
                <div className="crafted-pattern-overlay"></div>
            </div>
            <div className="crafted-bg-bottom"></div>

            <div className="container crafted-container">
                <h2 className="crafted-title">
                    Crafted or Iconic Spaces
                    <span className="crafted-title-underline"></span>
                </h2>

                <div className="crafted-carousel-wrapper">
                    <div className="crafted-scroll-container" ref={scrollContainerRef}>
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <img src={project.image} alt="" className="project-image" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="crafted-controls">
                    <button className="control-btn prev-btn" onClick={scrollLeft} aria-label="Previous Project">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#004d5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="pagination-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <button className="control-btn next-btn" onClick={scrollRight} aria-label="Next Project">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                            <path d="M15 18L9 12L15 6" stroke="#004d5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
