'use client';

import { useState, useEffect } from 'react';
import './HomePage.css';

export default function HomePage() {
    const [currentQuote, setCurrentQuote] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const motivationalQuotes = [
        {
            text: "Every plant has a story. Let's help yours thrive!",
            author: "Plant Therapist"
        },
        {
            text: "Growth is a journey, not a destination. We're here for every leaf.",
            author: "Plant Therapist"
        },
        {
            text: "Your plants deserve the best care. Let's diagnose and nurture together!",
            author: "Plant Therapist"
        },
        {
            text: "From wilting to thriving - transformation starts here.",
            author: "Plant Therapist"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
                setIsAnimating(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleGetStarted = () => {
        // Navigate to diagnosis page
        console.log('Navigate to diagnosis');
    };

    const handleLearnMore = () => {
        // Scroll to features or navigate to about
        console.log('Learn more clicked');
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="floating-leaf leaf-1">🌿</div>
                    <div className="floating-leaf leaf-2">🍃</div>
                    <div className="floating-leaf leaf-3">🌱</div>
                    <div className="floating-leaf leaf-4">🌿</div>
                    <div className="floating-leaf leaf-5">🍃</div>
                </div>

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">🌱</span>
                        <span>Your Plant's Best Friend</span>
                    </div>

                    <h1 className="hero-title">
                        Plant <span className="gradient-text">Therapist</span>
                    </h1>

                    <p className="hero-subtitle">
                        Diagnose plant problems with AI precision and get inspired with motivational quotes.
                        Because every plant deserves expert care and every gardener deserves encouragement.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={handleGetStarted}>
                            <span>Start Diagnosis</span>
                            <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn btn-secondary" onClick={handleLearnMore}>
                            <span>Learn More</span>
                        </button>
                    </div>

                    {/* Quote Display */}
                    <div className={`quote-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                        <div className="quote-icon">💚</div>
                        <blockquote className="quote-text">
                            "{motivationalQuotes[currentQuote].text}"
                        </blockquote>
                        <cite className="quote-author">— {motivationalQuotes[currentQuote].author}</cite>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Plant Therapist?</h2>
                <p className="section-subtitle">Everything you need to keep your plants healthy and happy</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon">🔍</div>
                        </div>
                        <h3 className="feature-title">AI-Powered Diagnosis</h3>
                        <p className="feature-description">
                            Upload a photo and get instant, accurate diagnosis of your plant's health issues using advanced AI technology.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon">💡</div>
                        </div>
                        <h3 className="feature-title">Expert Solutions</h3>
                        <p className="feature-description">
                            Receive detailed treatment plans and care instructions tailored to your plant's specific needs.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon">✨</div>
                        </div>
                        <h3 className="feature-title">Daily Inspiration</h3>
                        <p className="feature-description">
                            Get motivated with uplifting quotes and tips to keep you engaged in your plant care journey.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon">📊</div>
                        </div>
                        <h3 className="feature-title">Track Progress</h3>
                        <p className="feature-description">
                            Monitor your plant's recovery and growth over time with our comprehensive tracking system.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Three simple steps to healthier plants</p>

                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3 className="step-title">Upload Photo</h3>
                            <p className="step-description">Take a clear photo of your plant showing the problem area</p>
                        </div>
                    </div>

                    <div className="step-connector"></div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3 className="step-title">Get Diagnosis</h3>
                            <p className="step-description">Our AI analyzes the image and identifies the issue</p>
                        </div>
                    </div>

                    <div className="step-connector"></div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3 className="step-title">Apply Solution</h3>
                            <p className="step-description">Follow our expert recommendations to heal your plant</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Transform Your Plant Care?</h2>
                    <p className="cta-subtitle">Join thousands of plant lovers who trust Plant Therapist</p>
                    <button className="btn btn-cta" onClick={handleGetStarted}>
                        <span>Get Started Now</span>
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}
