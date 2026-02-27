import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import {
  Users,
  BarChart,
  Clock,
  DollarSign,
  HeartHandshake,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Quote
} from 'lucide-react';

const About = () => (
  <section id="about" className="about">
    <div className="container about-grid">
      <div className="about-content">
        <span className="hero-badge">About Us</span>
        <h2>Personalized Guidance for Professional Success</h2>
        <p>
          JobCons is dedicated to helping individuals achieve their career goals through personalized guidance,
          professional resume services, and strategic job application support. We bridge the gap between
          ambition and achievement.
        </p>
        <div className="stats-mini">
          <div className="stat-box">
            <h4>10k+</h4>
            <p>Careers Launched</p>
          </div>
          <div className="stat-box">
            <h4>15+</h4>
            <p>Industry Experts</p>
          </div>
        </div>
      </div>
      <div className="why-choose">
        <h3>Why Choose JobCons?</h3>
        <div className="why-grid">
          {[
            { icon: <Users size={20} />, title: "Strategy", text: "Personalized Career Strategy" },
            { icon: <BarChart size={20} />, title: "Success", text: "High Success Rate" },
            { icon: <Clock size={20} />, title: "Support", text: "Ongoing Career Support" },
            { icon: <DollarSign size={20} />, title: "Affordable", text: "Competitive Pricing" },
          ].map((item, i) => (
            <div key={i} className="why-item">
              <div className="why-icon">{item.icon}</div>
              <div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }
      .about-content h2 { font-size: 2.5rem; margin-bottom: 24px; }
      .about-content p { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 30px; }
      .stats-mini { display: flex; gap: 40px; }
      .stat-box h4 { font-size: 2rem; color: var(--accent-orange); margin-bottom: 4px; }
      .why-choose { background: white; padding: 40px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); border-top: 4px solid var(--accent-teal); }
      .why-choose h3 { margin-bottom: 30px; }
      .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .why-item { display: flex; gap: 12px; }
      .why-icon { color: var(--accent-teal); margin-top: 4px; }
      .why-item h5 { font-size: 1rem; margin-bottom: 2px; }
      .why-item p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0; }
      @media (max-width: 991px) { .about-grid { grid-template-columns: 1fr; } }
    `}} />
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="section-title">
        <h2>What Our Clients Say</h2>
        <p>Real stories from professionals who transformed their careers with JobCons.</p>
      </div>
      <div className="testimonial-grid">
        {[
          { name: "Sarah Jenkins", role: "Product Manager", text: "JobCons helped me pivot from marketing to product management. Their interview coaching was a game changer!" },
          { name: "Michael Chen", role: "Software Engineer", text: "My LinkedIn profile views tripled within a week of their optimization service. Truly professional team." },
          { name: "Emily Rodriquez", role: "HR Consultant", text: "The resume rewrite was so effective I landed three interviews in one week. Highly recommended!" }
        ].map((t, i) => (
          <div key={i} className="testi-card">
            <Quote className="quote-icon" size={32} />
            <p>"{t.text}"</p>
            <div className="testi-user">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
      .testimonials { background: #f0f7ff; }
      .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
      .testi-card { background: white; padding: 40px; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); position: relative; }
      .quote-icon { color: var(--accent-orange); opacity: 0.2; margin-bottom: 20px; }
      .testi-card p { font-style: italic; color: var(--text-main); margin-bottom: 24px; font-size: 1.1rem; }
      .testi-user strong { display: block; color: var(--primary-deep-blue); }
      .testi-user span { color: var(--text-muted); font-size: 0.85rem; }
    `}} />
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo white">Job<span>Cons</span></div>
          <p>Your journey to professional excellence starts here. Expert guidance for every step of your career.</p>
          <div className="social-links">
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Resume Writing</a></li>
            <li><a href="#">Career Coaching</a></li>
            <li><a href="#">LinkedIn Prep</a></li>
            <li><a href="#">Interview Skills</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 JobCons Career Services. All rights reserved.</p>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
      .footer { background: var(--primary-deep-blue); color: white; padding: 80px 0 30px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 80px; margin-bottom: 60px; }
      .footer-brand .logo { font-size: 1.8rem; font-weight: 800; color: white; margin-bottom: 20px; }
      .footer-brand .logo span { color: var(--accent-orange); }
      .footer-brand p { color: rgba(255,255,255,0.7); max-width: 300px; margin-bottom: 24px; }
      .social-links { display: flex; gap: 16px; }
      .social-links a { color: white; background: rgba(255,255,255,0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); }
      .social-links a:hover { background: var(--accent-orange); color: white; transform: translateY(-3px); }
      .footer-links h4 { color: white; margin-bottom: 24px; font-size: 1.2rem; }
      .footer-links ul li { margin-bottom: 12px; }
      .footer-links ul li a { color: rgba(255,255,255,0.7); }
      .footer-links ul li a:hover { color: var(--accent-orange); padding-left: 5px; }
      .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; text-align: center; color: rgba(255,255,255,0.5); font-size: 0.9rem; }
      @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; gap: 40px; } }
    `}} />
  </footer>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
