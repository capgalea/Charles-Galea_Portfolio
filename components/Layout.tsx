
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CHARLES_INFO } from '../constants.ts';
import ChatBot from './ChatBot.tsx';
import AmbientBackground from './AmbientBackground.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-emerald-400" : "text-slate-400 hover:text-emerald-400";
  };

  return (
    <div className="min-h-screen relative selection:bg-emerald-500/30">
      <AmbientBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            to="/about"
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded flex items-center justify-center text-slate-950 font-black text-xs">
              CG
            </div>
            <span className="text-sm font-bold tracking-tight hidden sm:block text-slate-100">Charles Galea</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-widest transition-colors">
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/skills" className={isActive('/skills')}>Skills</Link>
            <Link to="/experience" className={isActive('/experience')}>Experience</Link>
            <Link to="/education" className={isActive('/education')}>Education</Link>
          </div>

          <Link 
            to="/contact"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            Connect
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-32 pt-24 md:pt-32 min-h-[80vh]">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-slate-950/40 py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl font-black tracking-tight text-white">CG. <span className="text-slate-600">RESEARCH</span></h2>
          <div className="flex justify-center gap-8 text-slate-500 uppercase font-black text-[10px] tracking-[0.3em]">
            <a href="https://scholar.google.com/" target="_blank" className="hover:text-emerald-400 transition-colors">Publications</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Patents</a>
            <a href={CHARLES_INFO.links.github} target="_blank" className="hover:text-emerald-400 transition-colors">Open Source</a>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[10px] text-slate-600 font-mono">© {new Date().getFullYear()} Charles Galea — Data Scientist.</p>
             <div className="flex gap-4">
                <a href={`mailto:${CHARLES_INFO.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                <a href={CHARLES_INFO.links.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                <a href={CHARLES_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
             </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Layout;
