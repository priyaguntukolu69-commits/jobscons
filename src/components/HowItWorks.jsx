import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Target, TrendingUp, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <CalendarCheck size={32} />,
            title: "Book a Consultation",
            desc: "Schedule a free introductory session to discuss your career goals."
        },
        {
            icon: <Target size={32} />,
            title: "Career Assessment",
            desc: "Our experts evaluate your profile and identify target industries."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Optimization",
            desc: "We refine your resume, LinkedIn, and prepare you for interviews."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Apply & Get Hired",
            desc: "Launch your applications with a winning strategy and land your job."
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-title">
                    <h2>How It Works</h2>
                    <p>A simple, structured approach to accelerating your career progress.</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            className="step-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="step-count">{index + 1}</div>
                            <div className="step-icon-wrap">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .how-it-works {
          background-color: var(--primary-deep-blue);
          color: white;
        }

        .how-it-works .section-title h2 {
          color: white;
        }

        .how-it-works .section-title p {
          color: rgba(255, 255, 255, 0.7);
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 60px;
          position: relative;
        }

        .step-item {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .step-count {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: var(--accent-orange);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          color: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .step-icon-wrap {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--accent-teal);
          border: 2px dashed rgba(255, 255, 255, 0.2);
        }

        .step-item h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .step-item p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        .step-connector {
          position: absolute;
          top: 50px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          z-index: -1;
        }

        @media (max-width: 991px) {
          .steps-container {
            grid-template-columns: 1fr 1fr;
            gap: 60px 30px;
          }
          .step-connector {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }
      `}} />
        </section>
    );
};

export default HowItWorks;
