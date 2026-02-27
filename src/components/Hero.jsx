import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-badge">Expert Career Support</span>
                    <h1>Your Career Starts with the Right Guidance</h1>
                    <p>Expert Job Consulting, Resume Building & Career Support to Help You Land Your Dream Job</p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Book Free Consultation</a>
                        <a href="#services" className="btn btn-secondary">Get Started</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="img-wrapper">
                        <img src={heroImg} alt="Career Coaching" />
                        <div className="hero-stat">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .hero {
          padding-top: 180px;
          padding-bottom: 100px;
          background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(45, 156, 219, 0.1);
          color: var(--accent-teal);
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
        }

        .hero-image {
          position: relative;
        }

        .img-wrapper {
          position: relative;
          z-index: 1;
        }

        .img-wrapper img {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .img-wrapper::before {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 70%;
          height: 70%;
          background: var(--accent-orange);
          opacity: 0.1;
          border-radius: var(--radius-lg);
          z-index: -1;
        }

        .hero-stat {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: white;
          padding: 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          border-left: 4px solid var(--accent-orange);
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-deep-blue);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        @media (max-width: 991px) {
          .hero {
            padding-top: 140px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 80px;
          }
          .hero-content h1 {
            font-size: 2.75rem;
          }
          .hero-content p {
            margin: 0 auto 40px;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-stat {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}} />
        </section>
    );
};

export default Hero;
