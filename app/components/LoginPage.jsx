'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './LoginPage.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState('email');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const validateEmail = () => {
        if (!email) {
            setErrors({ email: 'Email is required' });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrors({ email: 'Please enter a valid email' });
            return false;
        }
        return true;
    };

    const validateOtp = () => {
        if (!otp) {
            setErrors({ otp: 'OTP is required' });
            return false;
        }
        if (otp.length !== 6 || !/^\d+$/.test(otp)) {
            setErrors({ otp: 'OTP must be 6 digits' });
            return false;
        }
        return true;
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();

        if (!validateEmail()) return;

        setIsLoading(true);
        setErrors({});
        setSuccessMessage('');

        try {
            const response = await fetch(`${apiBaseUrl}/send-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setStep('otp');
                setSuccessMessage('OTP sent to your email!');
                setTimeout(() => setSuccessMessage(''), 3000);
            } else {
                setErrors({ form: data.message || 'Failed to send OTP' });
            }
        } catch (error) {
            setErrors({ form: 'An error occurred. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        if (!validateOtp()) return;

        setIsLoading(true);
        setErrors({});

        try {
            const response = await fetch(`${apiBaseUrl}/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccessMessage('OTP verified successfully!');
                setTimeout(() => {
                    router.push('/Home');
                }, 1500);
            } else {
                setErrors({ form: data.message || 'Invalid OTP' });
            }
        } catch (error) {
            setErrors({ form: 'An error occurred. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToEmail = () => {
        setStep('email');
        setOtp('');
        setErrors({});
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <span className="login-icon">🌱</span>
                    <h1>Plant Therapist</h1>
                    <p className="login-subtitle">
                        {step === 'email' ? 'Enter your email' : 'Verify your OTP'}
                    </p>
                </div>

                {step === 'email' ? (
                    <form onSubmit={handleSendOtp} className="login-form">
                        {errors.form && (
                            <div className="form-error-message">{errors.form}</div>
                        )}

                        {successMessage && (
                            <div className="form-success-message">{successMessage}</div>
                        )}

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={`form-input ${
                                    errors.email ? 'input-error' : ''
                                }`}
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                            {errors.email && (
                                <span className="field-error">{errors.email}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending OTP...' : 'Send OTP'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp} className="login-form">
                        {errors.form && (
                            <div className="form-error-message">{errors.form}</div>
                        )}

                        {successMessage && (
                            <div className="form-success-message">{successMessage}</div>
                        )}

                        <div className="email-display">
                            <span className="email-label">Email:</span>
                            <span className="email-value">{email}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="otp" className="form-label">
                                Enter OTP
                            </label>
                            <input
                                id="otp"
                                type="text"
                                className={`form-input otp-input ${
                                    errors.otp ? 'input-error' : ''
                                }`}
                                placeholder="000000"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))
                                }
                                disabled={isLoading}
                                maxLength="6"
                            />
                            {errors.otp && (
                                <span className="field-error">{errors.otp}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Verify OTP'}
                        </button>

                        <button
                            type="button"
                            className="back-button"
                            onClick={handleBackToEmail}
                            disabled={isLoading}
                        >
                            ← Change Email
                        </button>
                    </form>
                )}

                <div className="login-footer">
                    <Link href="/Home" className="back-link">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
