
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="space-y-2">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic text-white">Experiments & <span className="text-emerald-500">Models</span></h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Selected Production Systems</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((p, i) => {
          const content = (
            <>
              <div className="h-64 overflow-hidden relative">
                <img src={p.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">{p.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {p.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] font-bold text-emerald-400 font-mono bg-emerald-400/10 px-2 py-0.5 rounded uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="text-white/40 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                
                {/* Full tag list displayed in body for detail */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-blue-200 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {p.metrics?.map(m => (
                    <div key={m.label} className="p-3 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{m.label}</p>
                      <p className="text-lg font-black text-white">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          );

          if (p.link) {
            return (
              <motion.a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group border border-white/5 block text-left cursor-pointer hover:shadow-emerald-500/10"
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/5"
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
