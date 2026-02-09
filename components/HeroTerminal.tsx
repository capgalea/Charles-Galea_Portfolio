
import React, { useState, useEffect } from 'react';

const logs = [
  "Loading environment: ford-warranty-data-v2",
  "Initializing NLP/XGBoost Ensemble...",
  "Optimization complete. Engineer workload reduced by 30%.",
  "Scanning clinical_trials.gov API...",
  "Deploying BioScout Agentic Intelligence...",
  "Analyzing Purchase Orders... Potential Savings: $200M+",
  "System Ready. User: charles_galea"
];

const HeroTerminal: React.FC = () => {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs(prev => {
        if (prev.length >= logs.length) {
          clearInterval(interval);
          return prev;
        }
        // Strict bounds check
        const nextIndex = prev.length;
        if (nextIndex >= logs.length) return prev;

        const nextLog = logs[nextIndex];
        // Ensure we never add undefined to the state
        return typeof nextLog === 'string' ? [...prev, nextLog] : prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full glass-card rounded-xl p-4 code-font text-xs text-emerald-500/80 shadow-2xl relative overflow-hidden scanner">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-slate-500 text-[10px] ml-2">bash — scientific-research-env</span>
      </div>
      <div className="space-y-1">
        <div className="flex gap-2 text-slate-400">
          <span>$</span>
          <span>whoami</span>
        </div>
        <div className="text-white mb-2">charles_galea</div>
        {visibleLogs.map((log, i) => {
          if (typeof log !== 'string') return null;
          
          const isSuccess = log.includes('Savings') || log.includes('Ready') || log.includes('reduced');
          
          return (
            <div key={i} className="flex gap-2">
              <span className="text-slate-600">[{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}]</span>
              <span className={isSuccess ? 'text-emerald-400 font-bold' : ''}>
                {log}
              </span>
            </div>
          );
        })}
        <div className="flex gap-2 animate-pulse">
          <span>$</span>
          <span className="w-2 h-4 bg-emerald-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
