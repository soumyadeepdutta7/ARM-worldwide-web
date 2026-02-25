import React, { useRef } from 'react';
import './Testimonials.css';

export default function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            id: 1,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
        },
        {
            id: 2,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
        },
        {
            id: 3,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
        },
        {
            id: 4,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
        },
        {
            id: 5,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
        },
        {
            id: 6,
            quote: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
            author: "Mr. Vinod Mittal"
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
        <section className="testimonials-section">
            <div className="container testimonials-container">
                <h2 className="testimonials-title">
                    What Our Customers Have to Say
                    <span className="testimonials-title-underline"></span>
                </h2>
            </div>

            <div className="testimonials-carousel-wrapper">
                <div className="testimonials-scroll-container" ref={scrollContainerRef}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="quote-icon">
                                <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4583 33.0039H0V16.5011L9.16667 0.00390625H16.0417L10.3125 15.356H11.4583V33.0039ZM35.4167 33.0039H23.9583V16.5011L33.125 0.00390625H40L34.2708 15.356H35.4167V33.0039Z" fill="white" />
                                </svg>
                            </div>
                            <p className="testimonial-text">{testimonial.quote}</p>
                            <p className="testimonial-author">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container testimonials-bottom-container">

                {/* Carousel Controls */}
                <div className="testimonials-controls">
                    <button className="control-btn prev-btn" onClick={scrollLeft} aria-label="Previous Testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#004d5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="pagination-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <button className="control-btn next-btn" onClick={scrollRight} aria-label="Next Testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                            <path d="M15 18L9 12L15 6" stroke="#004d5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="explore-more-container">
                    <a href="#explore" className="explore-more-link">Explore More</a>
                </div>
            </div>
        </section>
    );
}
