'use client';

import { useState, useEffect } from 'react';
import './QuotesPage.css';

export default function QuotesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const quotes = [
        {
            id: 1,
            text: "Every plant has a story. Let's help yours thrive!",
            author: "Plant Therapist",
            category: "motivation"
        },
        {
            id: 2,
            text: "Growth is a journey, not a destination. We're here for every leaf.",
            author: "Plant Therapist",
            category: "growth"
        },
        {
            id: 3,
            text: "Your plants deserve the best care. Let's diagnose and nurture together!",
            author: "Plant Therapist",
            category: "care"
        },
        {
            id: 4,
            text: "From wilting to thriving - transformation starts here.",
            author: "Plant Therapist",
            category: "motivation"
        },
        {
            id: 5,
            text: "Patience and persistence make the perfect gardener.",
            author: "Garden Wisdom",
            category: "wisdom"
        },
        {
            id: 6,
            text: "In every leaf, there's a lesson. In every bloom, there's hope.",
            author: "Nature's Voice",
            category: "inspiration"
        },
        {
            id: 7,
            text: "The best time to plant was yesterday. The second best time is now.",
            author: "Ancient Proverb",
            category: "motivation"
        },
        {
            id: 8,
            text: "A garden requires patient labor and attention. Plants do not grow merely to satisfy ambitions.",
            author: "Liberty Hyde Bailey",
            category: "wisdom"
        },
        {
            id: 9,
            text: "To plant a garden is to believe in tomorrow.",
            author: "Audrey Hepburn",
            category: "inspiration"
        },
        {
            id: 10,
            text: "Every challenge your plant faces is an opportunity for you to learn and grow together.",
            author: "Plant Therapist",
            category: "growth"
        },
        {
            id: 11,
            text: "The glory of gardening: hands in the dirt, head in the sun, heart with nature.",
            author: "Alfred Austin",
            category: "inspiration"
        },
        {
            id: 12,
            text: "Your plant's recovery is a testament to your dedication and love.",
            author: "Plant Therapist",
            category: "care"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Quotes', icon: '🌿' },
        { id: 'motivation', name: 'Motivation', icon: '💪' },
        { id: 'growth', name: 'Growth', icon: '🌱' },
        { id: 'care', name: 'Care', icon: '💚' },
        { id: 'wisdom', name: 'Wisdom', icon: '🧠' },
        { id: 'inspiration', name: 'Inspiration', icon: '✨' }
    ];

    const filteredQuotes = quotes.filter(quote => {
        const matchesCategory = selectedCategory === 'all' || quote.category === selectedCategory;
        const matchesSearch = quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            quote.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFavorite = (quoteId) => {
        setFavorites(prev =>
            prev.includes(quoteId)
                ? prev.filter(id => id !== quoteId)
                : [...prev, quoteId]
        );
    };

    const shareQuote = (quote) => {
        if (navigator.share) {
            navigator.share({
                title: 'Plant Therapist Quote',
                text: `"${quote.text}" - ${quote.author}`,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
            alert('Quote copied to clipboard!');
        }
    };

    return (
        <div className="quotes-container">
            <div className="quotes-header">
                <h1 className="quotes-title">
                    Motivational <span className="gradient-text">Quotes</span>
                </h1>
                <p className="quotes-subtitle">
                    Find inspiration and wisdom for your plant care journey
                </p>
            </div>

            <div className="quotes-controls">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search quotes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="quotes-grid">
                {filteredQuotes.map((quote, index) => (
                    <div
                        key={quote.id}
                        className="quote-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="quote-content">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">{quote.text}</p>
                            <cite className="quote-author">— {quote.author}</cite>
                        </div>

                        <div className="quote-actions">
                            <button
                                className={`action-btn ${favorites.includes(quote.id) ? 'favorited' : ''}`}
                                onClick={() => toggleFavorite(quote.id)}
                                aria-label="Add to favorites"
                            >
                                {favorites.includes(quote.id) ? '❤️' : '🤍'}
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => shareQuote(quote)}
                                aria-label="Share quote"
                            >
                                📤
                            </button>
                        </div>

                        <div className="quote-category-badge">
                            {categories.find(c => c.id === quote.category)?.icon} {quote.category}
                        </div>
                    </div>
                ))}
            </div>

            {filteredQuotes.length === 0 && (
                <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>No quotes found</h3>
                    <p>Try adjusting your search or filter</p>
                </div>
            )}

            <div className="daily-quote-section">
                <h2 className="section-title">Quote of the Day</h2>
                <div className="daily-quote-card">
                    <div className="daily-quote-icon">🌟</div>
                    <blockquote className="daily-quote-text">
                        "{quotes[Math.floor(Math.random() * quotes.length)].text}"
                    </blockquote>
                    <cite className="daily-quote-author">
                        — {quotes[Math.floor(Math.random() * quotes.length)].author}
                    </cite>
                </div>
            </div>
        </div>
    );
}
