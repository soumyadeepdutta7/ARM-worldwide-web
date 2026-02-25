import React, { useState } from 'react';
import './Features.css';

const features = [
    {
        id: 0,
        title: 'Energy Efficient',
        description: 'Designed to enhance thermal performance while maintaining year-round indoor comfort.',
        icon: (
            <img
                src="/images/logos/energy-efficient-logo.svg"
                alt="Energy Efficient"
                width="85"
                height="80"
            />
        )
    },
    {
        id: 1,
        title: 'Noise Insulation',
        description: 'Carefully engineered to significantly reduce external noise and create serene living spaces.',
        icon: (
            <img
                src="/images/logos/noise-insulation-logo.svg"
                alt="Noise Insulation"
                width="85"
                height="80"
            />
        )
    },
    {
        id: 2,
        title: 'Rainwater Insulation',
        description: 'Precision sealing systems prevent water ingress, even during intense monsoon conditions.',
        icon: (
            <img
                src="/images/logos/rainwater-logo.svg"
                alt="Rainwater Insulation"
                width="85"
                height="80"
            />
        )
    },
    {
        id: 3,
        title: 'Storm Resistant',
        description: 'Tested to endure high wind loads and extreme weather with lasting reliable strength.',
        icon: (
            <img
                src="/images/logos/storm-logo.svg"
                alt="Storm Resistant"
                width="85"
                height="80"
            />
        )
    }
];

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">
                    Design. Performance. Longevity.
                    <span className="title-underline"></span>
                </h2>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`feature-card ${index === activeIndex ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-name">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                            <a href="#" className="feature-link">Learn More</a>
                        </div>
                    ))}
                </div>

                <div className="features-controls">
                    <button
                        className="control-arrow"
                        onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                        disabled={activeIndex === 0}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="control-dots">
                        {features.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            ></span>
                        ))}
                    </div>

                    <button
                        className="control-arrow"
                        onClick={() => setActiveIndex(prev => Math.min(features.length - 1, prev + 1))}
                        disabled={activeIndex === features.length - 1}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
