import React, { useState, useEffect, useRef } from 'react';

export default function Trigonometry({ externalState, isProblemMode }) {
    const [internalAngle, setInternalAngle] = useState(45); // Degrees
    const [isDragging, setIsDragging] = useState(false);
    const svgRef = useRef(null);

    // Use external state if provided, otherwise internal
    const angle = externalState?.angle ?? internalAngle;

    // Convert to radians for calculation
    const rad = (angle * Math.PI) / 180;
    const radius = 120;
    const centerX = 150;
    const centerY = 150;

    // Calculate point position on circle
    const x = centerX + radius * Math.cos(rad);
    const y = centerY - radius * Math.sin(rad); // SVG y-axis is inverted

    const handleMouseDown = (e) => {
        if (isProblemMode) return;
        setIsDragging(true);
        updateAngle(e);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            updateAngle(e);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updateAngle = (e) => {
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate angle relative to center
        const deltaX = mouseX - centerX;
        const deltaY = centerY - mouseY; // Invert Y for standard math coordinates

        let newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        if (newAngle < 0) newAngle += 360;

        setInternalAngle(newAngle);
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging]);

    return (
        <div className="glass-panel card">
            <h2>三角函数可视化 (Trigonometry)</h2>
            <p style={{ marginBottom: '2rem' }}>
                {isProblemMode
                    ? "当前为解题模式，动画由步骤控制。"
                    : "拖动圆上的点来观察角度 θ 对三角函数值的影响。"
                }
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                {/* Unit Circle */}
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem' }}>单位圆 (Unit Circle)</h3>
                    <svg
                        ref={svgRef}
                        width="300"
                        height="300"
                        style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '50%', cursor: isProblemMode ? 'default' : 'pointer' }}
                        onMouseDown={handleMouseDown}
                    >
                        {/* Axes */}
                        <line x1="0" y1={centerY} x2="300" y2={centerY} stroke="rgba(255,255,255,0.2)" />
                        <line x1={centerX} y1="0" x2={centerX} y2="300" stroke="rgba(255,255,255,0.2)" />

                        {/* Circle */}
                        <circle cx={centerX} cy={centerY} r={radius} stroke="var(--text-muted)" strokeWidth="2" fill="none" />

                        {/* Angle Arc */}
                        <path d={`M ${centerX + 30} ${centerY} A 30 30 0 ${angle > 180 ? 1 : 0} 0 ${centerX + 30 * Math.cos(rad)} ${centerY - 30 * Math.sin(rad)}`} stroke="var(--primary)" fill="none" />

                        {/* Radius Line */}
                        <line x1={centerX} y1={centerY} x2={x} y2={y} stroke="var(--text-main)" strokeWidth="2" />

                        {/* Cosine Line (Green) */}
                        <line x1={centerX} y1={centerY} x2={x} y2={centerY} stroke="#4ade80" strokeWidth="3" />

                        {/* Sine Line (Red) */}
                        <line x1={x} y1={centerY} x2={x} y2={y} stroke="#f87171" strokeWidth="3" />

                        {/* Point */}
                        <circle cx={x} cy={y} r="6" fill="var(--primary)" stroke="white" strokeWidth="2" />

                        {/* Labels */}
                        <text x={centerX + radius + 10} y={centerY} fill="white" fontSize="12">0°</text>
                        <text x={centerX} y={centerY - radius - 10} fill="white" fontSize="12">90°</text>
                    </svg>
                </div>

                {/* Data Panel */}
                <div style={{ minWidth: '250px' }}>
                    <h3 style={{ marginBottom: '1rem' }}>数值 (Values)</h3>
                    <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>角度 (Angle)</label>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{angle.toFixed(1)}°</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{(rad / Math.PI).toFixed(2)}π rad</div>
                        </div>

                        <div style={{ padding: '0.5rem', background: 'rgba(74, 222, 128, 0.1)', borderLeft: '4px solid #4ade80', borderRadius: '4px' }}>
                            <label style={{ color: '#4ade80', fontWeight: 'bold' }}>cos(θ)</label>
                            <div style={{ fontSize: '1.2rem' }}>{Math.cos(rad).toFixed(4)}</div>
                        </div>

                        <div style={{ padding: '0.5rem', background: 'rgba(248, 113, 113, 0.1)', borderLeft: '4px solid #f87171', borderRadius: '4px' }}>
                            <label style={{ color: '#f87171', fontWeight: 'bold' }}>sin(θ)</label>
                            <div style={{ fontSize: '1.2rem' }}>{Math.sin(rad).toFixed(4)}</div>
                        </div>

                        <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', borderRadius: '4px' }}>
                            <label style={{ color: '#3b82f6', fontWeight: 'bold' }}>tan(θ)</label>
                            <div style={{ fontSize: '1.2rem' }}>
                                {Math.abs(Math.tan(rad)) > 100 ? '∞' : Math.tan(rad).toFixed(4)}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <label className="slider-label">
                            <span>Adjust Angle</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => !isProblemMode && setInternalAngle(parseFloat(e.target.value))}
                            disabled={isProblemMode}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
