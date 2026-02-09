
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Terminal, FlaskConical, BarChart3, Database, Cloud } from 'lucide-react';
import SkillsRadar from '../components/SkillsRadar.tsx';
import { SKILLS } from '../constants.ts';

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <motion.div 
        className="lg:col-span-4 sticky top-32"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <SkillsRadar />
      </motion.div>
      <div className="lg:col-span-8 space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl font-black uppercase text-white">Deep <span className="text-gradient">Capability</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A unique hybrid of advanced data science engineering and biomedical research expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: BrainCircuit, label: 'ML / Agentic AI', cat: 'ML/DL' },
            { icon: Terminal, label: 'Languages', cat: 'Languages' },
            { icon: FlaskConical, label: 'Scientific Research', cat: 'Scientific' },
            { icon: BarChart3, label: 'Data Vis & Apps', cat: 'Visualization' },
            { icon: Database, label: 'Tools & DevOps', cat: 'Tools' },
            { icon: Cloud, label: 'Cloud & Data', cat: 'Cloud' },
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 glass-card rounded-2xl border border-white/5"
            >
              <item.icon className="w-5 h-5 text-emerald-500 mb-4" />
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-3">{item.label}</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === item.cat).slice(0, 5).map(s => (
                  <span key={s.name} className="text-[10px] text-slate-400 font-mono hover:text-emerald-400 transition-colors">{s.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
