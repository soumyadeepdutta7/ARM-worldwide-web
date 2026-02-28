import React, { useState, useEffect } from 'react';
import './Footer.css';

const footerData = [
    {
        title: 'Products',
        items: [
            { subtitle: 'By range', links: ['Eternia Duraslim Edge', 'Eternia Duraslim', 'Eternia Essentials'] },
            { subtitle: 'By type', links: ['Sliding Windows and Doors', 'Openable Windows and Doors'] },
            { subtitle: 'By room', links: ['Living room windows and doors', 'Bedroom windows and doors', 'Balcony windows and doors', 'Kitchen windows and doors'] }
        ]
    },
    {
        title: 'Why Eternia',
        items: [
            { links: ['Duranium™', 'WiWA©', 'Service and support', 'About Us'] },
            { isTitle: true, subtitle: 'Find the right window', links: ['Find the right window'] }
        ]
    },
    {
        title: 'Features',
        items: [
            { links: ['Sound Proof', 'Energy Efficient', 'Waterproof', 'Enhanced Security', 'Dust and Pollution Proof', 'Large Openings', 'Storm Resistant', 'Low Maintenance'] }
        ]
    },
    {
        title: 'Contact & Support',
        items: [
            { links: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of use'] }
        ]
    }
];

export default function Footer() {
    const [openMenus, setOpenMenus] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = (title: string) => {
        if (!isMobile) return;
        setOpenMenus(prev =>
            prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
        );
    };

    return (
        <footer className="footer">
            <div className="container footer-top">
                <div className="footer-logos">
                    <div className="footer-logo-eternia">
                        <img src="/images/logos/main-logo.svg" alt="Eternia" width="275" height="80" />
                    </div>
                    <div className="footer-logo-aditya">
                        <img src="/images/logos/Aditya-birla.svg" alt="Aditya Birla Hindalco" width="82" height="80" />
                    </div>
                </div>

                <p className="footer-description">
                    Eternia is the latest product offering from Hindalco (Aditya Birla Group): India's first WiWA© tested and certified windows made with <br /> a specially invented Duranium™ alloy
                </p>

                <div className="footer-social">
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
            </div>

            <div className="footer-divider-top"></div>

            <div className="container footer-links-grid">
                {footerData.map((section) => (
                    <div key={section.title} className={`footer-column ${isMobile && openMenus.includes(section.title) ? 'open' : ''}`}>
                        <h3
                            className="footer-column-title"
                            onClick={() => toggleMenu(section.title)}
                        >
                            {section.title}
                            {isMobile && (
                                <svg className="mobile-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            )}
                        </h3>
                        <div className="footer-links-content">
                            {section.items.map((item, idx) => (
                                <div key={idx} className="footer-link-group">
                                    {'subtitle' in item && (
                                        <h4 className={('isTitle' in item && item.isTitle) ? "footer-column-title" : "footer-link-subtitle"} style={('isTitle' in item && item.isTitle) ? { marginTop: '1.5rem', marginBottom: '1.5rem', padding: 0 } : {}}>
                                            {item.subtitle as string}
                                        </h4>
                                    )}
                                    <ul className="footer-link-list">
                                        {item.links.map(link => (
                                            <li key={link}><a href="#">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-disclaimer">
                        *Eternia™, Duranium™ and WiWA© are proprietary to Hindalco Industries Limited. Hindalco Industries Limited has a patent filed right for Duranium alloy. Nothing contained here shall be construed as conferring any license or right under a Hindalco trademark, copyright or patent. Images on the website are indicative. The final product may be different from the images displayed.
                    </p>
                </div>
            </div>
        </footer>
    );
}
