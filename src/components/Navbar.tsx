import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container glass-panel">
        <div className="navbar-content">
          {/* Logo */}
          <a href="/" className="logo">
            <img
              src="/images/logos/Eternia_logo.png"
              alt="Eternia Logo"
              className="logo-img"
              width="132"
              height="41"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-menu">
            <div className="nav-item">
              <a href="#products">Products</a>
              <ChevronDown className="dropdown-icon" size={16} />
            </div>
            <div className="nav-item">
              <a href="#why-eternia">Why Eternia</a>
              <ChevronDown className="dropdown-icon" size={16} />
            </div>
            <div className="nav-item">
              <a href="#services">Services & Supports</a>
            </div>
            <div className="nav-item">
              <a href="#news">News and Events</a>
            </div>
          </div>

          {/* CTA Button and Help */}
          <div className="navbar-actions">
            <div className="nav-item help-item">
              <a href="#help">Help</a>
            </div>
            <button className="btn btn-primary cta-button">
              Book a Consultation
              <ArrowRight className="cta-icon" size={16} />
            </button>

            {/* Mobile Menu Toggle */}
            <div className="mobile-actions">
              <img
                src="/images/logos/Aditya-birla.svg"
                alt="Aditya Birla"
                className="navbar-mobile-logo"
                width="40"
                height="40"
              />
              <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu glass-panel">
            <div className="mobile-nav-item">
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#why-eternia" onClick={() => setIsMobileMenuOpen(false)}>Why Eternia</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services & Supports</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#news" onClick={() => setIsMobileMenuOpen(false)}>News and Events</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#help" onClick={() => setIsMobileMenuOpen(false)}>Help</a>
            </div>
            <button className="btn btn-primary cta-button mobile-cta">
              Book a Consultation
              <ArrowRight className="cta-icon" size={16} />
            </button>
          </div>
        )}
      </div>
    </nav >
  );
}
