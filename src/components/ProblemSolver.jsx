import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Circle } from 'lucide-react';
import Trigonometry from '../modules/Trigonometry';
import Sequences from '../modules/Sequences';
import Functions from '../modules/Functions';
import Geometry from '../modules/Geometry';

export default function ProblemSolver({ problem, onBack }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(-1); // -1 means just showing the problem

    // Add defensive checks for problem data
    const steps = problem?.steps || [];
    const currentStep = currentStepIndex >= 0 && steps[currentStepIndex] ? steps[currentStepIndex] : null;
    const animationState = currentStep?.animationState || null;

    const handleStepClick = (index) => {
        setCurrentStepIndex(index);
    };

    const renderModule = () => {
        const commonProps = {
            externalState: animationState,
            isProblemMode: true
        };

        switch (problem.module) {
            case 'trig':
                return <Trigonometry {...commonProps} />;
            case 'sequences':
                return <Sequences {...commonProps} />;
            case 'functions':
                return <Functions {...commonProps} />;
            case 'geometry':
                return <Geometry {...commonProps} />;
            default:
                return <div>Module not found</div>;
        }
    };

    return (
        <div className="glass-panel card" style={{ height: 'calc(100vh - 100px)', display: 'flex', padding: 0, overflow: 'hidden' }}>
            {/* Left Panel: Problem & Steps */}
            <div style={{ width: '550px', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <button onClick={onBack} className="glass-button" style={{ marginBottom: '1rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        ← Back to List
                    </button>
                    <h3 style={{ marginBottom: '0.5rem' }}>{problem.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{problem.description}</p>

                    {problem.extracted_text && (
                        <div style={{
                            background: '#f0f9ff',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            marginBottom: '1rem',
                            borderLeft: '2px solid var(--primary)'
                        }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: 'var(--text-main)' }}>OCR Result:</div>
                            {problem.extracted_text}
                        </div>
                    )}

                    {problem?.knowledgePoints && Array.isArray(problem.knowledgePoints) && problem.knowledgePoints.length > 0 && (
                        <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {problem.knowledgePoints.map((kp, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    background: '#f3f4f6',
                                    color: '#4b5563',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    #{kp}
                                </span>
                            ))}
                        </div>
                    )}

                    {problem.sourceUrl && (
                        <div style={{ marginTop: '0.5rem' }}>
                            <a
                                href={problem.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                            >
                                🔗 来源链接 (Source Link)
                            </a>
                        </div>
                    )}

                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>解题步骤 (Solution Steps)</h4>
                    {steps.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {steps.map((step, index) => (
                                <div
                                    key={step?.id || index}
                                    onClick={() => handleStepClick(index)}
                                    className={`glass-panel ${currentStepIndex === index ? 'active-step' : ''}`}
                                    style={{
                                        padding: '1rem',
                                        cursor: 'pointer',
                                        border: currentStepIndex === index ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                                        background: currentStepIndex === index ? '#eff6ff' : '#ffffff',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        {currentStepIndex >= index ? <CheckCircle size={16} color="#4ade80" /> : <Circle size={16} color="var(--text-muted)" />}
                                        <span style={{ fontWeight: 'bold', color: currentStepIndex === index ? 'var(--primary)' : 'var(--text-main)' }}>
                                            {step?.text || '步骤说明'}
                                        </span>
                                    </div>
                                    {currentStepIndex >= index && (
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginTop: '0.5rem', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                            {step?.explanation || '详细解释'}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                            暂无解题步骤
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Visualization */}
            <div style={{ flex: 1, padding: '1.5rem', background: '#ffffff', overflowY: 'auto' }}>
                {renderModule()}
            </div>
        </div>
    );
}
