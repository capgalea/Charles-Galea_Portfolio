
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants.ts';

const Education: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-3xl p-8 space-y-8"
        >
          <h3 className="text-2xl font-black flex items-center gap-3 text-white">
            <BookOpen className="w-6 h-6 text-emerald-500" />
            Formal Education
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="border-l-2 border-white/10 pl-6 relative">
                <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-emerald-500" />
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
                {edu.year && <p className="text-emerald-500/80 text-xs font-mono mt-1">{edu.year}</p>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8 space-y-8"
        >
          <h3 className="text-2xl font-black flex items-center gap-3 text-white">
            <Award className="w-6 h-6 text-emerald-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-sm font-bold text-white mb-1">{cert.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{cert.issuer}</p>
                {cert.id && <p className="text-[9px] text-slate-600 font-mono mt-2 truncate">ID: {cert.id}</p>}
              </div>
            ))}
          </div>
        </motion.div>
    </div>
  );
};

export default Education;
