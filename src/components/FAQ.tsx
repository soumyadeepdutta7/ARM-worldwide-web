import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
    id: string;
    question: string;
    answer: React.ReactNode;
}

const faqs: FAQItem[] = [
    {
        id: 'faq-1',
        question: 'What are the different windows offered by Eternia?',
        answer: (
            <>
                <p>Eternia offers aluminium windows and doors of every type, size and colour! Our main offerings include:</p>
                <br />
                <p>Sliding aluminium windows and doors</p>
                <p>Openable/casement aluminium windows and doors.</p>
                <p>We also offer aluminium windows and doors for all rooms: including living rooms, kitchens and bedrooms.</p>
                <br />
                <p>Our aluminium windows and doors can be classified into Duraslim Edge, Duraslim and Essentials - which are three ranges of high-quality products designed to ensure that every Indian home can have aluminium windows.</p>
            </>
        )
    },
    {
        id: 'faq-2',
        question: 'Which window is better for me: aluminium, wood or uPVC?',
        answer: (
            <p>Aluminium is generally stronger, more durable, and offers slimmer sightlines compared to uPVC or wood. It is also highly resistant to weather and requires minimal maintenance.</p>
        )
    },
    {
        id: 'faq-3',
        question: 'Do you manufacture aluminium windows and doors?',
        answer: (
            <p>Yes, Eternia by Hindalco manufactures high-quality, precision-engineered aluminium windows and doors using our patented Duranium® alloy.</p>
        )
    },
    {
        id: 'faq-4',
        question: 'What are the different colours you offer in aluminium windows?',
        answer: (
            <p>We offer a wide range of colors and finishes, including wood-finish and customized powder-coated options to perfectly match your home's aesthetics.</p>
        )
    }
];

export default function FAQ() {
    const [openId, setOpenId] = useState<string | null>('faq-1'); 

    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="container faq-container">
                <h2 className="faq-title">
                    Frequently Asked Questions
                    <span className="faq-title-underline"></span>
                </h2>

                <div className="faq-list">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openId === faq.id ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question-btn"
                                onClick={() => toggleFaq(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                <span className="faq-question-text">{faq.question}</span>
                                <span className="faq-icon">
                                    {openId === faq.id ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            <div
                                className="faq-answer-wrapper"
                                style={{ height: openId === faq.id ? 'auto' : 0 }}
                            >
                                <div className="faq-answer-content">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
