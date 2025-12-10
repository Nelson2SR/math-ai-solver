import React, { useEffect, useRef, useState } from 'react';
import functionPlot from 'function-plot';

export default function Geometry({ externalState, isProblemMode }) {
    const rootRef = useRef(null);
    const svgRef = useRef(null);
    const [type, setType] = useState('ellipse'); // 'ellipse' | 'hyperbola' | 'triangle'
    const [a, setA] = useState(3);
    const [b, setB] = useState(2);

    // Use external state if provided for triangle mode
    const triangleData = externalState?.triangleData || null;

    useEffect(() => {
        // If in problem mode with triangle data, switch to triangle
        if (isProblemMode && triangleData) {
            setType('triangle');
        }
    }, [isProblemMode, triangleData]);

    useEffect(() => {
        if (type !== 'triangle' && rootRef.current) {
            let fn = '';
            if (type === 'ellipse') {
                fn = `x^2/${a * a} + y^2/${b * b} - 1`;
            } else {
                fn = `x^2/${a * a} - y^2/${b * b} - 1`;
            }

            let cVal = 0;
            let foci = [];
            if (type === 'ellipse') {
                cVal = Math.sqrt(Math.abs(a * a - b * b));
                if (a >= b) foci = [[-cVal, 0], [cVal, 0]];
                else foci = [[0, -cVal], [0, cVal]];
            } else {
                cVal = Math.sqrt(a * a + b * b);
                foci = [[-cVal, 0], [cVal, 0]];
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
                            fnType: 'implicit',
                            fn: fn,
                            color: '#3b82f6'
                        },
                        {
                            points: foci,
                            fnType: 'points',
                            graphType: 'scatter',
                            color: '#f87171',
                            attr: { r: 5 }
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
        }
    }, [type, a, b]);

    const renderTriangle = () => {
        const defaultData = {
            A: { x: 50, y: 50, label: 'A' },
            B: { x: 300, y: 200, label: 'B' },
            C: { x: 100, y: 200, label: 'C' },
            D: { x: 200, y: 200, label: 'D' },
            angleA: '?',
            angleB: '?',
            angleC: '?',
            showD: false,
            showRightAngle: false
        };

        if (!triangleData) {
            return renderTriangleSVG(defaultData);
        }

        // Merge defaults with provided data to prevent crashes if coordinates are missing
        const mergedData = {
            ...defaultData,
            ...triangleData,
            // Deep merge for points if they are partially provided? 
            // For now, assume if A is provided, it replaces default A.
            // But if A is missing in triangleData, we use default A.
        };

        return renderTriangleSVG(mergedData);
    };

    const renderTriangleSVG = (data) => {
        const { A, B, C, D, angleA, angleB, angleC, angleBAD, angleDAC, showD, showRightAngle } = data;

        return (
            <svg ref={svgRef} width="400" height="300" style={{ background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                {/* Triangle ABC */}
                <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--text-main)" strokeWidth="2" />
                <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="var(--text-main)" strokeWidth="2" />
                <line x1={C.x} y1={C.y} x2={A.x} y2={A.y} stroke="var(--text-main)" strokeWidth="2" />

                {/* Point D and line AD */}
                {showD && (
                    <>
                        <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#4ade80" strokeWidth="2" strokeDasharray="4 2" />
                        <circle cx={D.x} cy={D.y} r="4" fill="#4ade80" stroke="white" strokeWidth="1" />
                        <text x={D.x + 5} y={D.y + 15} fill="white" fontSize="14" fontWeight="bold">D</text>
                    </>
                )}

                {/* Right angle marker at A (if BAD = 90°) */}
                {showRightAngle && (
                    <path
                        d={`M ${A.x + 10} ${A.y} L ${A.x + 10} ${A.y + 10} L ${A.x} ${A.y + 10}`}
                        stroke="#f87171"
                        fill="none"
                        strokeWidth="1.5"
                    />
                )}

                {/* Vertices */}
                <circle cx={A.x} cy={A.y} r="5" fill="var(--primary)" stroke="white" strokeWidth="2" />
                <circle cx={B.x} cy={B.y} r="5" fill="var(--primary)" stroke="white" strokeWidth="2" />
                <circle cx={C.x} cy={C.y} r="5" fill="var(--primary)" stroke="white" strokeWidth="2" />

                {/* Labels */}
                <text x={A.x - 15} y={A.y - 10} fill="white" fontSize="16" fontWeight="bold">A</text>
                <text x={B.x + 10} y={B.y + 5} fill="white" fontSize="16" fontWeight="bold">B</text>
                <text x={C.x - 15} y={C.y + 20} fill="white" fontSize="16" fontWeight="bold">C</text>

                {/* Angle labels */}
                <text x={A.x + 15} y={A.y + 20} fill="#60a5fa" fontSize="12">{angleA}</text>
                <text x={B.x - 25} y={B.y + 5} fill="#60a5fa" fontSize="12">{angleB}</text>
                <text x={C.x + 10} y={C.y + 5} fill="#60a5fa" fontSize="12">{angleC}</text>

                {showD && angleBAD && (
                    <text x={A.x + 20} y={A.y + 35} fill="#f87171" fontSize="11">∠BAD={angleBAD}</text>
                )}
                {showD && angleDAC && (
                    <text x={A.x - 50} y={A.y + 35} fill="#4ade80" fontSize="11">∠DAC={angleDAC}</text>
                )}
            </svg>
        );
    };

    return (
        <div className="glass-panel card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>解析几何 (Geometry)</h2>
                {!isProblemMode && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            className={`glass-button ${type === 'ellipse' ? 'active' : ''}`}
                            onClick={() => setType('ellipse')}
                        >
                            椭圆 (Ellipse)
                        </button>
                        <button
                            className={`glass-button ${type === 'hyperbola' ? 'active' : ''}`}
                            onClick={() => setType('hyperbola')}
                        >
                            双曲线 (Hyperbola)
                        </button>
                        <button
                            className={`glass-button ${type === 'triangle' ? 'active' : ''}`}
                            onClick={() => setType('triangle')}
                        >
                            三角形 (Triangle)
                        </button>
                    </div>
                )}
            </div>

            {type === 'triangle' ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {isProblemMode ? '三角形可视化（由步骤控制）' : '示例三角形'}
                    </p>
                    {renderTriangle()}
                    {triangleData && (
                        <div className="glass-panel" style={{ padding: '1rem', maxWidth: '500px' }}>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>几何信息</h4>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <p>∠A = {triangleData.angleA}</p>
                                <p>∠B = {triangleData.angleB}</p>
                                <p>∠C = {triangleData.angleC}</p>
                                {triangleData.showD && (
                                    <>
                                        <p style={{ color: '#f87171' }}>∠BAD = {triangleData.angleBAD}</p>
                                        <p style={{ color: '#4ade80' }}>∠DAC = {triangleData.angleDAC}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                    {/* Controls */}
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h3>参数 (Parameters)</h3>

                        <div style={{ marginBottom: '1rem', fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)' }}>
                            {type === 'ellipse'
                                ? `x²/${(a * a).toFixed(1)} + y²/${(b * b).toFixed(1)} = 1`
                                : `x²/${(a * a).toFixed(1)} - y²/${(b * b).toFixed(1)} = 1`
                            }
                        </div>

                        <div className="slider-container">
                            <label className="slider-label"><span>a (长半轴/Real Axis)</span><span>{a}</span></label>
                            <input type="range" min="1" max="8" step="0.1" value={a} onChange={e => setA(parseFloat(e.target.value))} />
                        </div>
                        <div className="slider-container">
                            <label className="slider-label"><span>b (短半轴/Imaginary Axis)</span><span>{b}</span></label>
                            <input type="range" min="1" max="8" step="0.1" value={b} onChange={e => setB(parseFloat(e.target.value))} />
                        </div>

                        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <p>红点表示焦点 (Red dots are foci)</p>
                            {type === 'ellipse' && <p>c² = |a² - b²|</p>}
                            {type === 'hyperbola' && <p>c² = a² + b²</p>}
                        </div>
                    </div>

                    {/* Plot */}
                    <div className="glass-panel" style={{ padding: '1rem', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
                        <div ref={rootRef} style={{ width: '100%', height: '100%' }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
