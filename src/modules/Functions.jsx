import React, { useEffect, useRef, useState } from 'react';
import functionPlot from 'function-plot';

export default function Functions() {
    const rootRef = useRef(null);
    const [funcType, setFuncType] = useState('quadratic'); // 'quadratic' | 'sinusoidal' | 'exponential'

    // Quadratic params: ax^2 + bx + c
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    // Sinusoidal params: A sin(wx + phi) + k
    const [amp, setAmp] = useState(1);
    const [freq, setFreq] = useState(1);
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (!rootRef.current) return;

        let fn = '';
        if (funcType === 'quadratic') {
            fn = `${a} * x^2 + ${b} * x + ${c}`;
        } else if (funcType === 'sinusoidal') {
            fn = `${amp} * sin(${freq} * x + ${phase})`;
        } else if (funcType === 'exponential') {
            fn = `${a} * exp(${b} * x)`;
        }

        try {
            functionPlot({
                target: rootRef.current,
                width: 800,
                height: 500,
                yAxis: { domain: [-10, 10] },
                xAxis: { domain: [-10, 10] },
                grid: true,
                data: [
                    {
                        fn: fn,
                        color: '#3b82f6',
                        graphType: 'polyline'
                    }
                ],
                tip: {
                    xLine: true,
                    yLine: true,
                }
            });
        } catch (e) {
            console.error("Plot error", e);
        }
    }, [funcType, a, b, c, amp, freq, phase]);

    return (
        <div className="glass-panel card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>函数图像 (Functions)</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        className={`glass-button ${funcType === 'quadratic' ? 'active' : ''}`}
                        onClick={() => setFuncType('quadratic')}
                    >
                        二次函数 (Quadratic)
                    </button>
                    <button
                        className={`glass-button ${funcType === 'sinusoidal' ? 'active' : ''}`}
                        onClick={() => setFuncType('sinusoidal')}
                    >
                        三角函数 (Sinusoidal)
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                {/* Controls */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3>参数 (Parameters)</h3>

                    {funcType === 'quadratic' && (
                        <div className="control-panel">
                            <div style={{ marginBottom: '1rem', fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)' }}>
                                y = {a}x² + {b}x + {c}
                            </div>

                            <div className="slider-container">
                                <label className="slider-label"><span>a (开口/Curvature)</span><span>{a}</span></label>
                                <input type="range" min="-5" max="5" step="0.1" value={a} onChange={e => setA(parseFloat(e.target.value))} />
                            </div>
                            <div className="slider-container">
                                <label className="slider-label"><span>b (位置/Slope)</span><span>{b}</span></label>
                                <input type="range" min="-10" max="10" step="0.5" value={b} onChange={e => setB(parseFloat(e.target.value))} />
                            </div>
                            <div className="slider-container">
                                <label className="slider-label"><span>c (截距/Intercept)</span><span>{c}</span></label>
                                <input type="range" min="-10" max="10" step="0.5" value={c} onChange={e => setC(parseFloat(e.target.value))} />
                            </div>
                        </div>
                    )}

                    {funcType === 'sinusoidal' && (
                        <div className="control-panel">
                            <div style={{ marginBottom: '1rem', fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)' }}>
                                y = {amp}sin({freq}x + {phase})
                            </div>

                            <div className="slider-container">
                                <label className="slider-label"><span>A (振幅/Amplitude)</span><span>{amp}</span></label>
                                <input type="range" min="0.1" max="5" step="0.1" value={amp} onChange={e => setAmp(parseFloat(e.target.value))} />
                            </div>
                            <div className="slider-container">
                                <label className="slider-label"><span>ω (频率/Frequency)</span><span>{freq}</span></label>
                                <input type="range" min="0.1" max="5" step="0.1" value={freq} onChange={e => setFreq(parseFloat(e.target.value))} />
                            </div>
                            <div className="slider-container">
                                <label className="slider-label"><span>φ (相位/Phase)</span><span>{phase}</span></label>
                                <input type="range" min="-3.14" max="3.14" step="0.1" value={phase} onChange={e => setPhase(parseFloat(e.target.value))} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Plot */}
                <div className="glass-panel" style={{ padding: '1rem', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
                    <div ref={rootRef} style={{ width: '100%', height: '100%' }}></div>
                </div>
            </div>
        </div>
    );
}
