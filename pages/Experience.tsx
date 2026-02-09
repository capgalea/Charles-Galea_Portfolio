
import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { EXPERIENCES } from '../constants.ts';

const Experience: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-white">Career <span className="text-slate-500">Logbook</span></h2>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-8 relative"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
              <div>
                <h3 className="text-xl font-black text-white">{exp.role}</h3>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mt-1">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 bg-white/5 px-3 py-1 rounded-full text-xs font-mono">
                <Network className="w-3 h-3" />
                {exp.period}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {exp.description.map((bullet, i) => (
                  <div key={i} className="flex gap-3 items-start">
                      <span className="text-emerald-500/50 mt-1.5 text-[8px] font-black">▶</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{bullet}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
