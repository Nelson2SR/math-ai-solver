import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function Sequences({ externalState, isProblemMode }) {
    const [type, setType] = useState('arithmetic'); // 'arithmetic' | 'geometric'
    const [a1, setA1] = useState(1);
    const [d, setD] = useState(2); // common difference
    const [q, setQ] = useState(2); // common ratio
    const [n, setN] = useState(10);

    // Sync with external state
    useEffect(() => {
        if (externalState) {
            if (externalState.type) setType(externalState.type);
            if (externalState.a1 !== undefined) setA1(externalState.a1);
            if (externalState.d !== undefined) setD(externalState.d);
            if (externalState.q !== undefined) setQ(externalState.q);
            if (externalState.n !== undefined) setN(externalState.n);
        }
    }, [externalState]);

    const data = useMemo(() => {
        const result = [];
        let current = a1;
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            sum += current;
            result.push({
                index: i,
                value: current,
                sum: sum
            });

            if (type === 'arithmetic') {
                current += d;
            } else {
                current *= q;
            }
        }
        return result;
    }, [type, a1, d, q, n]);

    // Formula display
    const formula = type === 'arithmetic'
        ? `a_n = ${a1} + (n-1) × ${d}`
        : `a_n = ${a1} × ${q}^{n-1}`;

    const sumFormula = type === 'arithmetic'
        ? `S_n = \\frac{n(${a1} + a_n)}{2}`
        : `S_n = \\frac{${a1}(1 - ${q}^n)}{1 - ${q}}`;

    return (
        <div className="glass-panel card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>数列可视化 (Sequences)</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        className={`glass-button ${type === 'arithmetic' ? 'active' : ''}`}
                        style={{ background: type === 'arithmetic' ? 'var(--primary)' : '' }}
                        onClick={() => !isProblemMode && setType('arithmetic')}
                        disabled={isProblemMode}
                    >
                        等差数列 (Arithmetic)
                    </button>
                    <button
                        className={`glass-button ${type === 'geometric' ? 'active' : ''}`}
                        style={{ background: type === 'geometric' ? 'var(--primary)' : '' }}
                        onClick={() => !isProblemMode && setType('geometric')}
                        disabled={isProblemMode}
                    >
                        等比数列 (Geometric)
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                {/* Controls */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3>参数设置 (Parameters)</h3>

                    <div className="control-panel">
                        <div className="slider-container">
                            <label className="slider-label">
                                <span>首项 (First Term, a₁)</span>
                                <span>{a1}</span>
                            </label>
                            <input
                                type="range" min="-10" max="10" step="1"
                                value={a1} onChange={(e) => !isProblemMode && setA1(parseFloat(e.target.value))}
                                disabled={isProblemMode}
                            />
                        </div>

                        {type === 'arithmetic' ? (
                            <div className="slider-container">
                                <label className="slider-label">
                                    <span>公差 (Difference, d)</span>
                                    <span>{d}</span>
                                </label>
                                <input
                                    type="range" min="-10" max="10" step="0.5"
                                    value={d} onChange={(e) => !isProblemMode && setD(parseFloat(e.target.value))}
                                    disabled={isProblemMode}
                                />
                            </div>
                        ) : (
                            <div className="slider-container">
                                <label className="slider-label">
                                    <span>公比 (Ratio, q)</span>
                                    <span>{q}</span>
                                </label>
                                <input
                                    type="range" min="-2" max="3" step="0.1"
                                    value={q} onChange={(e) => !isProblemMode && setQ(parseFloat(e.target.value))}
                                    disabled={isProblemMode}
                                />
                            </div>
                        )}

                        <div className="slider-container">
                            <label className="slider-label">
                                <span>项数 (Terms, n)</span>
                                <span>{n}</span>
                            </label>
                            <input
                                type="range" min="5" max="50" step="1"
                                value={n} onChange={(e) => !isProblemMode && setN(parseInt(e.target.value))}
                                disabled={isProblemMode}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>公式 (Formulas)</h3>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem', fontFamily: 'monospace' }}>
                            <div style={{ marginBottom: '0.5rem' }}>通项: {formula}</div>
                            <div>求和: {sumFormula}</div>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', height: '300px' }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>通项分布 (Terms a_n)</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="index" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip
                                    contentStyle={{ background: '#1e293b', border: '1px solid var(--glass-border)', color: '#fff' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} name="Value (an)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="glass-panel" style={{ padding: '1rem', height: '300px' }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>前n项和 (Sum S_n)</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="index" stroke="var(--text-muted)" />
                                <YAxis stroke="var(--text-muted)" />
                                <Tooltip
                                    contentStyle={{ background: '#1e293b', border: '1px solid var(--glass-border)', color: '#fff' }}
                                />
                                <Line type="monotone" dataKey="sum" stroke="#4ade80" strokeWidth={3} dot={{ r: 4 }} name="Sum (Sn)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
