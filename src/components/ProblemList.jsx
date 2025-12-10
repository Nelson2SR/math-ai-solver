import React, { useState, useMemo } from 'react';
import { problems as localProblems } from '../data/problems';
import { gaokaoProblems } from '../data/gaokao_problems';
import { trigProblemsExtended } from '../data/trig_problems_extended';
import { BookOpen, ArrowRight, Filter } from 'lucide-react';

const allProblems = [...localProblems, ...gaokaoProblems, ...trigProblemsExtended];

export default function ProblemList({ onSelectProblem, onUploadMode }) {
    const [filters, setFilters] = useState({
        module: 'all',
        region: 'all',
        year: 'all',
        examType: 'all'
    });

    const filteredProblems = useMemo(() => {
        return allProblems.filter(p => {
            if (filters.module !== 'all' && p.module !== filters.module) return false;
            if (filters.region !== 'all' && p.region !== filters.region) return false;
            // Handle number vs string for year comparison
            if (filters.year !== 'all' && String(p.year) !== String(filters.year)) return false;
            if (filters.examType !== 'all' && p.examType !== filters.examType) return false;
            return true;
        });
    }, [filters]);

    // Extract unique options for dropdowns
    const regions = ['all', ...new Set(allProblems.filter(p => p.region).map(p => p.region))];
    const years = ['all', ...new Set(allProblems.filter(p => p.year).map(p => p.year))].sort((a, b) => b - a);
    const examTypes = ['all', ...new Set(allProblems.filter(p => p.examType).map(p => p.examType))];

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="glass-panel card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2>高考真题演练 (Gaokao Problems)</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Select a problem to start. Found {filteredProblems.length} problems.
                    </p>
                </div>
                <button
                    className="glass-button"
                    style={{ background: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onClick={onUploadMode}
                >
                    <span>Upload & Solve</span>
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Filters Bar */}
            <div className="glass-panel" style={{ marginBottom: '2rem', padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Filter size={16} />
                    <span>Filters:</span>
                </div>

                <select
                    className="glass-input"
                    value={filters.module}
                    onChange={e => handleFilterChange('module', e.target.value)}
                    style={{ padding: '0.25rem 0.5rem' }}
                >
                    <option value="all">所有题型 (All Types)</option>
                    <option value="trig">三角函数 (Trig)</option>
                    <option value="geometry">几何 (Geometry)</option>
                </select>

                <select
                    className="glass-input"
                    value={filters.region}
                    onChange={e => handleFilterChange('region', e.target.value)}
                    style={{ padding: '0.25rem 0.5rem' }}
                >
                    <option value="all">所有地区 (All Regions)</option>
                    {regions.filter(r => r !== 'all').map(r => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>

                <select
                    className="glass-input"
                    value={filters.years}
                    onChange={e => handleFilterChange('year', e.target.value)}
                    style={{ padding: '0.25rem 0.5rem' }}
                >
                    <option value="all">所有年份 (All Years)</option>
                    {years.filter(y => y !== 'all').map(y => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                <select
                    className="glass-input"
                    value={filters.examType}
                    onChange={e => handleFilterChange('examType', e.target.value)}
                    style={{ padding: '0.25rem 0.5rem' }}
                >
                    <option value="all">所有试卷 (All Exams)</option>
                    {examTypes.filter(t => t !== 'all').map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {filteredProblems.map(problem => (
                    <div
                        key={problem.id}
                        className="glass-panel"
                        style={{ padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.2s' }}
                        onClick={() => onSelectProblem(problem)}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    color: '#60a5fa',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.8rem'
                                }}>
                                    {problem.module.toUpperCase()}
                                </span>
                                {problem.year && (
                                    <span style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-muted)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {problem.year}
                                    </span>
                                )}
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{problem.difficulty}</span>
                        </div>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{problem.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {problem.description}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                            <BookOpen size={16} />
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Start Solving</span>
                            <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
