'use client';

import { useState, useRef } from 'react';
import './DiagnosisPage.css';

export default function DiagnosisPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setShowResults(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setShowResults(false);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleAnalyze = async () => {
        if (!selectedImage) return;

        setIsAnalyzing(true);

        // Simulate API call
        setTimeout(() => {
            setIsAnalyzing(false);
            setShowResults(true);
        }, 3000);
    };

    const handleReset = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        setShowResults(false);
        setIsAnalyzing(false);
    };

    return (
        <div className="diagnosis-container">
            <div className="diagnosis-header">
                <h1 className="diagnosis-title">
                    Plant <span className="gradient-text">Diagnosis</span>
                </h1>
                <p className="diagnosis-subtitle">
                    Upload a photo of your plant and let our AI identify any health issues
                </p>
            </div>

            <div className="diagnosis-content">
                {!previewUrl ? (
                    <div
                        className="upload-area"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div className="upload-icon">📸</div>
                        <h3 className="upload-title">Drop your plant photo here</h3>
                        <p className="upload-subtitle">or click to browse</p>
                        <p className="upload-hint">Supports: JPG, PNG, WEBP (Max 10MB)</p>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageSelect}
                            className="file-input"
                        />
                    </div>
                ) : (
                    <div className="preview-section">
                        <div className="image-preview">
                            <img src={previewUrl} alt="Plant preview" className="preview-image" />
                            {isAnalyzing && (
                                <div className="analyzing-overlay">
                                    <div className="spinner"></div>
                                    <p className="analyzing-text">Analyzing your plant...</p>
                                </div>
                            )}
                        </div>

                        {!showResults && !isAnalyzing && (
                            <div className="action-buttons">
                                <button className="btn btn-primary" onClick={handleAnalyze}>
                                    <span className="btn-icon">🔍</span>
                                    Analyze Plant
                                </button>
                                <button className="btn btn-secondary" onClick={handleReset}>
                                    <span className="btn-icon">🔄</span>
                                    Upload Different Photo
                                </button>
                            </div>
                        )}

                        {showResults && (
                            <div className="results-section">
                                <div className="result-card">
                                    <div className="result-header">
                                        <div className="result-icon">🌿</div>
                                        <div>
                                            <h3 className="result-title">Diagnosis Complete</h3>
                                            <p className="result-confidence">Confidence: 94%</p>
                                        </div>
                                    </div>

                                    <div className="result-body">
                                        <div className="diagnosis-item">
                                            <h4 className="diagnosis-label">Identified Issue:</h4>
                                            <p className="diagnosis-value">Leaf Spot Disease (Fungal Infection)</p>
                                        </div>

                                        <div className="diagnosis-item">
                                            <h4 className="diagnosis-label">Severity:</h4>
                                            <div className="severity-badge moderate">Moderate</div>
                                        </div>

                                        <div className="diagnosis-item">
                                            <h4 className="diagnosis-label">Recommended Treatment:</h4>
                                            <ul className="treatment-list">
                                                <li>Remove affected leaves immediately</li>
                                                <li>Apply fungicide spray every 7-10 days</li>
                                                <li>Improve air circulation around the plant</li>
                                                <li>Reduce watering frequency</li>
                                                <li>Avoid getting water on leaves</li>
                                            </ul>
                                        </div>

                                        <div className="diagnosis-item">
                                            <h4 className="diagnosis-label">Prevention Tips:</h4>
                                            <ul className="treatment-list">
                                                <li>Water at the base of the plant</li>
                                                <li>Ensure proper spacing between plants</li>
                                                <li>Remove debris from around the plant</li>
                                                <li>Monitor regularly for early signs</li>
                                            </ul>
                                        </div>

                                        <div className="motivational-quote">
                                            <div className="quote-icon">💚</div>
                                            <p className="quote-text">
                                                "Every challenge is an opportunity for growth. Your plant will thrive with your care!"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="result-actions">
                                        <button className="btn btn-primary" onClick={handleReset}>
                                            <span className="btn-icon">📸</span>
                                            Diagnose Another Plant
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="tips-section">
                <h3 className="tips-title">📋 Tips for Best Results</h3>
                <div className="tips-grid">
                    <div className="tip-card">
                        <span className="tip-icon">💡</span>
                        <p>Use good lighting - natural light works best</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">🎯</span>
                        <p>Focus on the affected area clearly</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">📏</span>
                        <p>Include some healthy parts for comparison</p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">🔍</span>
                        <p>Take close-up shots of symptoms</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
