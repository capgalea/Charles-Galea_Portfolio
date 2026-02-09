
import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';

const data = [
  { subject: 'Machine Learning', A: 95, fullMark: 100 },
  { subject: 'Data Engineering', A: 85, fullMark: 100 },
  { subject: 'Process Auto', A: 90, fullMark: 100 },
  { subject: 'Domain (Bio/Auto)', A: 95, fullMark: 100 },
  { subject: 'Visualization', A: 88, fullMark: 100 },
  { subject: 'Agentic AI', A: 92, fullMark: 100 },
];

const CustomTick = (props: any) => {
  const { payload, x, y, textAnchor } = props;
  const words = payload.value.split(' ');
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={0}
        textAnchor={textAnchor}
        fill="#94a3b8"
        fontSize={10}
        fontWeight={500}
      >
        {words.map((word: string, index: number) => (
          <tspan x={0} dy={index === 0 ? 0 : 12} key={index}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const SkillsRadar: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-[450px] glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col">
      <div className="absolute top-0 right-0 p-4">
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
      </div>
      <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2 shrink-0">
        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
        <span className="text-slate-100 uppercase tracking-widest text-sm">Competence Matrix</span>
      </h3>
      
      <div className="flex-1 min-h-0 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.05)" strokeWidth={2} />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={(props) => <CustomTick {...props} />}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={false} 
              axisLine={false} 
            />
            <Radar
              name="Charles"
              dataKey="A"
              stroke="#10b981"
              strokeWidth={3}
              fill="#10b981"
              fillOpacity={0.15}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute bottom-6 left-8">
        <p className="text-[10px] text-slate-500 font-mono tracking-tighter uppercase">
          Normalized score based on 5+ years industry exp
        </p>
      </div>
    </div>
  );
};

export default SkillsRadar;
