import React, { useState, useEffect } from 'react';
import { Upload, Key, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { analyzeImage } from '../services/aiService';
import ProblemSolver from './ProblemSolver';

export default function UploadSolver() {
    const [apiKey, setApiKey] = useState('');
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [requirement, setRequirement] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [generatedProblem, setGeneratedProblem] = useState(null);

    useEffect(() => {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) setApiKey(storedKey);
    }, []);

    const handleSaveKey = (val) => {
        setApiKey(val);
        localStorage.setItem('gemini_api_key', val);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        }
    };

    const handleAnalyze = async () => {
        if (!apiKey) {
            setError("Please enter a Gemini API Key.");
            return;
        }
        if (!file) {
            setError("Please upload an image.");
            return;
        }
        if (!requirement) {
            setError("Please enter a requirement (e.g., 'Solve Question 15').");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const problemData = await analyzeImage(file, requirement, apiKey);
            // Add the image to the problem data so it can be displayed
            problemData.image = previewUrl; // Use local preview URL
            setGeneratedProblem(problemData);
        } catch (err) {
            setError(err.message || "Analysis failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (generatedProblem) {
        return <ProblemSolver problem={generatedProblem} onBack={() => setGeneratedProblem(null)} />;
    }

    return (
        <div className="glass-panel card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h2>AI 真题解析 (AI Solver)</h2>
                <p style={{ color: 'var(--text-muted)' }}>Upload an exam paper, ask a question, and get an animated solution.</p>
            </div>

            {/* API Key Section */}
            <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                <Key size={20} color="var(--primary)" />
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Gemini API Key</label>
                    <input
                        type="password"
                        className="glass-input"
                        style={{ width: '100%' }}
                        placeholder="Enter your Gemini API Key..."
                        value={apiKey}
                        onChange={(e) => handleSaveKey(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Left: Upload */}
                <div>
                    <div
                        className="glass-panel"
                        style={{
                            height: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px dashed var(--glass-border)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onClick={() => document.getElementById('file-upload').click()}
                    >
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                            <>
                                <Upload size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                                <p style={{ color: 'var(--text-muted)' }}>Click to Upload Image</p>
                            </>
                        )}
                        <input id="file-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
                    </div>
                </div>

                {/* Right: Requirement & Action */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Requirement (需求)</label>
                        <textarea
                            className="glass-input"
                            style={{ width: '100%', height: '120px', resize: 'none' }}
                            placeholder="e.g., Please solve Question 15 in the image..."
                            value={requirement}
                            onChange={(e) => setRequirement(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div style={{ padding: '0.75rem', background: 'rgba(248, 113, 113, 0.1)', border: '1px solid #f87171', borderRadius: '8px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <AlertCircle size={16} />
                            <span style={{ fontSize: '0.9rem' }}>{error}</span>
                        </div>
                    )}

                    <button
                        className="glass-button"
                        style={{
                            marginTop: 'auto',
                            background: 'var(--primary)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onClick={handleAnalyze}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <>
                                Start Analysis
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
