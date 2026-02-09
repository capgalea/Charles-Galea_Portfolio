
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Skills from './pages/Skills.tsx';
import Experience from './pages/Experience.tsx';
import Education from './pages/Education.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route to handle 404s or direct access to unknown paths */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
