import React, { useRef } from 'react';
import './ThoughtfulReads.css';

const articles = [
    {
        id: 1,
        title: "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
        image: "/images/projects/living-img-1.svg",
        link: "#"
    },
    {
        id: 2,
        title: "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
        image: "/images/projects/living-img-2.svg",
        link: "#"
    },
    {
        id: 3,
        title: "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
        image: "/images/projects/living-img-3.svg",
        link: "#"
    },
    {
        id: 4,
        title: "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
        image: "/images/projects/living-img-4.svg",
        link: "#"
    }
];

export default function ThoughtfulReads() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="reads-section">
            {/* Background Split */}
            <div className="reads-bg-top">
                <div className="reads-pattern-overlay"></div>
            </div>
            <div className="reads-bg-bottom"></div>

            <div className="container reads-container">
                <h2 className="reads-title">
                    Thoughtful Reads for Modern Living
                    <span className="reads-title-underline"></span>
                </h2>
            </div>

            <div className="reads-carousel-wrapper">
                <div className="reads-scroll-container" ref={scrollContainerRef}>
                    {articles.map((article) => (
                        <div key={article.id} className="read-card">
                            <img src={article.image} alt={article.title} className="read-image" />
                            <div className="read-overlay">
                                <h3 className="read-card-title">{article.title}</h3>
                                <a href={article.link} className="read-more-link">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container reads-bottom-container">
                <div className="explore-more-container">
                    <a href="#explore" className="explore-more-link">Explore More</a>
                </div>
            </div>
        </section>
    );
}
