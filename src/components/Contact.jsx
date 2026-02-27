import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Thank you! Your consultation request has been received.");
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Take the Next Step?</h2>
                        <p>Schedule your free consultation today and let our experts help you land your dream job.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>support@jobcons.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Office</h4>
                                    <p>123 Career Blvd, Professional Suite 400</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/15551234567" className="btn btn-whatsapp">
                            <MessageCircle size={20} /> Chat on WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        className="contact-form-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    placeholder="John Doe"
                                    className={errors.name ? 'error' : ''}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        placeholder="john@example.com"
                                        className={errors.email ? 'error' : ''}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        {...register("phone", { required: true })}
                                        placeholder="+1 (555) 000-0000"
                                        className={errors.phone ? 'error' : ''}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Service Needed</label>
                                <select {...register("service")}>
                                    <option value="resume">Resume & CV Writing</option>
                                    <option value="coaching">Interview Coaching</option>
                                    <option value="consultation">Career Consultation</option>
                                    <option value="linkedin">LinkedIn Optimization</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>How can we help?</label>
                                <textarea {...register("message")} rows="4" placeholder="Tell us about your career goals..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">Schedule Free Consultation</button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .contact {
          background-color: #f8fbff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-orange);
          box-shadow: var(--shadow-sm);
        }

        .info-item h4 {
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .btn-whatsapp {
          background-color: #25D366;
          color: white;
          margin-top: 20px;
        }

        .btn-whatsapp:hover {
          background-color: #128C7E;
          transform: translateY(-2px);
        }

        .contact-form-card {
          background: white;
          padding: 40px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary-deep-blue);
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          font-family: inherit;
          transition: var(--transition-smooth);
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-teal);
          box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.1);
        }

        input.error {
          border-color: #FF4D4F;
        }

        .w-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}} />
        </section>
    );
};

export default Contact;
