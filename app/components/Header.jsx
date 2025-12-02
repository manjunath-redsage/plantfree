'use client';

import { useState } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link href="/" className="logo">
                    <span className="logo-icon">🌱</span>
                    <span className="logo-text">Plant Therapist</span>
                </Link>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        <span className="nav-icon">🏠</span>
                        Home
                    </Link>
                    <Link href="/diagnosis" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        <span className="nav-icon">🔍</span>
                        Diagnose
                    </Link>
                    <Link href="/quotes" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        <span className="nav-icon">✨</span>
                        Quotes
                    </Link>
                    <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        <span className="nav-icon">ℹ️</span>
                        About
                    </Link>
                </nav>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
        </header>
    );
}
