import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">
                    Imagine <span className="highlight-text">Windows.</span> Not <span className="highlight-text">Walls.</span>
                </h1>
                <p className="hero-subtitle">
                    Luxury aluminium windows and doors designed to bring in light, views and lasting strength.
                </p>
                <button className="btn btn-outline hero-cta">
                    Book a Window Consultation
                </button>
            </div>
        </section>
    );
}
