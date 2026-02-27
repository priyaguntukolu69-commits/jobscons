import React from 'react';
import {
    Send,
    FileText,
    Users,
    UserCheck,
    GraduationCap,
    Linkedin
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <Send className="service-icon" />,
            title: "Job Application Support",
            desc: "Comprehensive support for domestic and international applications, ensuring you stay ahead of the competition."
        },
        {
            icon: <FileText className="service-icon" />,
            title: "Resume & CV Writing",
            desc: "Tailor-made, ATS-friendly resumes that highlight your strengths and grab the attention of recruiters."
        },
        {
            icon: <Users className="service-icon" />,
            title: "Career Consultation",
            desc: "One-on-one sessions to map out your career path and identify the best opportunities for your growth."
        },
        {
            icon: <UserCheck className="service-icon" />,
            title: "Interview Coaching",
            desc: "Master your interview skills with mock sessions and personalized feedback from industry experts."
        },
        {
            icon: <GraduationCap className="service-icon" />,
            title: "Skill Development Guidance",
            desc: "Identify critical skill gaps and get recommendations for certifications and training to boost your profile."
        },
        {
            icon: <Linkedin className="service-icon" />,
            title: "LinkedIn Profile Optimization",
            desc: "Project a professional digital presence that attracts headhunters and expands your networking reach."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Professional Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We offer a comprehensive suite of career support services designed to help you navigate the job market with confidence.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .services {
          background-color: var(--bg-white);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          padding: 40px;
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0,0,0,0.03);
          transition: var(--transition-smooth);
        }

        .service-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-teal);
        }

        .icon-box {
          width: 60px;
          height: 60px;
          background: rgba(45, 156, 219, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--accent-teal);
        }

        .service-icon {
          width: 30px;
          height: 30px;
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--primary-deep-blue);
        }

        .service-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}} />
        </section>
    );
};

export default Services;
