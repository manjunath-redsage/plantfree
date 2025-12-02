'use client';

import './AboutPage.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">
                    About <span className="gradient-text">Plant Therapist</span>
                </h1>
                <p className="about-subtitle">
                    Your AI-powered companion for plant care and motivation
                </p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <div className="section-icon">🌱</div>
                    <h2 className="section-title">Our Mission</h2>
                    <p className="section-text">
                        Plant Therapist was created to help plant lovers diagnose and treat their plants'
                        health issues while providing daily motivation and inspiration. We believe that every
                        plant deserves expert care, and every gardener deserves encouragement on their journey.
                    </p>
                </section>

                <section className="about-section">
                    <div className="section-icon">🤖</div>
                    <h2 className="section-title">AI-Powered Technology</h2>
                    <p className="section-text">
                        Our advanced AI technology analyzes plant photos to identify diseases, pests,
                        nutrient deficiencies, and other health issues with high accuracy. Get instant
                        diagnosis and expert treatment recommendations tailored to your plant's specific needs.
                    </p>
                </section>

                <section className="about-section">
                    <div className="section-icon">💚</div>
                    <h2 className="section-title">Motivation & Inspiration</h2>
                    <p className="section-text">
                        Plant care is a journey that requires patience and dedication. That's why we provide
                        daily motivational quotes and tips to keep you inspired and engaged. Because when you
                        thrive, your plants thrive too!
                    </p>
                </section>

                <section className="about-section">
                    <div className="section-icon">🌿</div>
                    <h2 className="section-title">Join Our Community</h2>
                    <p className="section-text">
                        Become part of a growing community of plant enthusiasts who are passionate about
                        nurturing their green friends. Share your success stories, learn from others, and
                        grow together in this wonderful journey of plant parenthood.
                    </p>
                </section>
            </div>

            <div className="features-highlight">
                <h2 className="highlight-title">What Makes Us Special</h2>
                <div className="features-list">
                    <div className="feature-item">
                        <span className="feature-emoji">⚡</span>
                        <h3>Instant Diagnosis</h3>
                        <p>Get results in seconds, not days</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-emoji">🎯</span>
                        <h3>High Accuracy</h3>
                        <p>AI trained on thousands of plant images</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-emoji">📱</span>
                        <h3>Easy to Use</h3>
                        <p>Simple interface, powerful results</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-emoji">🆓</span>
                        <h3>Free Access</h3>
                        <p>No hidden fees or subscriptions</p>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h2 className="cta-title">Ready to Start?</h2>
                <p className="cta-text">
                    Begin your plant care journey with Plant Therapist today!
                </p>
                <div className="cta-buttons">
                    <a href="/diagnosis" className="btn btn-primary">
                        <span>Diagnose Now</span>
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="/quotes" className="btn btn-secondary">
                        <span>Get Inspired</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
