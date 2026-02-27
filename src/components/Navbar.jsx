import React, { useState, useEffect } from 'react';
import { Briefcase, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Free Consultation', href: '#contact', primary: true },
  ];

  return (
    <nav className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          <Briefcase size={32} className="logo-icon" />
          <span>Job<span>Cons</span></span>
        </a>

        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={link.primary ? 'btn btn-primary' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: var(--transition-smooth);
          background: transparent;
        }

        .nav-header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 0;
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-deep-blue);
        }

        .logo-icon {
          color: var(--accent-orange);
        }

        .logo span span {
          color: var(--accent-orange);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent-orange);
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--primary-deep-blue);
        }

        @media (max-width: 991px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 40px 24px;
            gap: 24px;
            transform: translateY(-150%);
            transition: transform 0.4s ease-in-out;
            box-shadow: var(--shadow-md);
          }

          .nav-links.mobile-open {
            transform: translateY(0);
          }

          .mobile-toggle {
            display: block;
          }

          .nav-header.scrolled .nav-links {
            top: 100%;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
