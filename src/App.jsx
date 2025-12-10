import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { Calculator, Activity, TrendingUp, Shapes, Home as HomeIcon, BookOpen } from 'lucide-react';
import Home from './modules/Home';
import Trigonometry from './modules/Trigonometry';
import Sequences from './modules/Sequences';
import Functions from './modules/Functions';
import Geometry from './modules/Geometry';
import ProblemList from './components/ProblemList';
import ProblemSolver from './components/ProblemSolver';
import UploadSolver from './components/UploadSolver';

function App() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div style={{ padding: '0 0.5rem 1rem' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Math Viz</h1>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Guangdong Gaokao Edition</p>
        </div>

        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HomeIcon size={20} />
          <span>首页 (Home)</span>
        </NavLink>

        <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0.5rem 0' }}></div>

        <NavLink to="/trig" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Activity size={20} />
          <span>三角函数 (Trig)</span>
        </NavLink>

        <NavLink to="/sequences" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <TrendingUp size={20} />
          <span>数列 (Sequences)</span>
        </NavLink>

        <NavLink to="/functions" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Calculator size={20} />
          <span>函数 (Functions)</span>
        </NavLink>

        <NavLink to="/geometry" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Shapes size={20} />
          <span>几何 (Geometry)</span>
        </NavLink>

        <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0.5rem 0' }}></div>

        <NavLink to="/problems" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={20} />
          <span>真题演练 (Problems)</span>
        </NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trig" element={<Trigonometry />} />
          <Route path="/sequences" element={<Sequences />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/geometry" element={<Geometry />} />
          <Route path="/problems" element={<ProblemsRoute />} />
        </Routes>
      </main>
    </div>
  );
}

// Sub-component to handle Problem List <-> Solver navigation
function ProblemsRoute() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isUploadMode, setIsUploadMode] = useState(false);

  if (selectedProblem) {
    return <ProblemSolver problem={selectedProblem} onBack={() => setSelectedProblem(null)} />;
  }

  if (isUploadMode) {
    return <UploadSolver />; // We'll need to add a back button inside UploadSolver later or rely on sidebar
  }

  return <ProblemList onSelectProblem={setSelectedProblem} onUploadMode={() => setIsUploadMode(true)} />;
}

export default App;
