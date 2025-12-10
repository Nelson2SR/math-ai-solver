export default function Home() {
    return (
        <div className="glass-panel card">
            <h2>欢迎使用广东高考数学可视化系统</h2>
            <p>Welcome to the Guangdong Gaokao Math Visualizer. Select a module from the sidebar to begin.</p>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <h3>三角函数</h3>
                    <p>Unit Circle, Sine/Cosine waves</p>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <h3>数列</h3>
                    <p>Arithmetic & Geometric progressions</p>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <h3>函数</h3>
                    <p>Plotting & Transformations</p>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <h3>几何</h3>
                    <p>Conic Sections & Locus</p>
                </div>
            </div>
        </div>
    );
}
