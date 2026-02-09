
import React, { useEffect, useRef } from 'react';

const HeroGeometric: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // --- OUTER OBJECT: Icosahedron ---
    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
    const icoVertices = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ];

    // --- INNER OBJECT: Fibonacci Sphere ---
    const sphereVertices: number[][] = [];
    const numSpherePoints = 24; 
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numSpherePoints; i++) {
      const spacing = i / numSpherePoints;
      const inclination = Math.acos(1 - 2 * spacing);
      const azimuth = angleIncrement * i;

      const x = Math.sin(inclination) * Math.cos(azimuth);
      const y = Math.sin(inclination) * Math.sin(azimuth);
      const z = Math.cos(inclination);
      sphereVertices.push([x, y, z]);
    }

    let time = 0;

    const draw = () => {
      // Guard against zero dimensions to prevent NaN calculations
      if (width <= 0 || height <= 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      
      // Evolving scale pulse
      const pulse = 1 + Math.sin(time * 1.5) * 0.08;
      // Ensure baseScale is strictly positive to prevent division by zero
      const baseScale = Math.max(Math.min(width, height) * 0.22 * pulse, 1);

      time += 0.008;

      // Project 3D points to 2D canvas
      const projectPoints = (points: number[][], rotX: number, rotY: number, sizeMult: number) => {
        return points.map((v) => {
          let x = v[0] * baseScale * sizeMult;
          let y = v[1] * baseScale * sizeMult;
          let z = v[2] * baseScale * sizeMult;

          // Rotate Y
          const cosY = Math.cos(rotY);
          const sinY = Math.sin(rotY);
          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;

          // Rotate X
          const cosX = Math.cos(rotX);
          const sinX = Math.sin(rotX);
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;

          // Perspective
          const fov = 400; 
          const distance = 500;
          const scale = fov / (distance + z2);
          
          return {
            x: cx + x1 * scale,
            y: cy + y2 * scale,
            z: z2,
            scale: scale
          };
        });
      };

      // 1. Calculate Outer Object (Rotate +X, +Y)
      const icoProjected = projectPoints(icoVertices, time * 0.4, time * 0.2, 1.0);

      // 2. Calculate Inner Object (Rotate -X, -Y for different direction)
      const sphereProjected = projectPoints(sphereVertices, -time * 3.0, -time * 2.0, 0.45);

      // --- Draw Outer Connections (Icosahedron) ---
      for (let i = 0; i < icoProjected.length; i++) {
        for (let j = i + 1; j < icoProjected.length; j++) {
          const v1 = icoVertices[i];
          const v2 = icoVertices[j];
          const dist = Math.sqrt((v1[0]-v2[0])**2 + (v1[1]-v2[1])**2 + (v1[2]-v2[2])**2);
          
          if (dist < 2.1) {
            const p1 = icoProjected[i];
            const p2 = icoProjected[j];
            
            const avgZ = (p1.z + p2.z) / 2;
            const normalizedZ = (avgZ + baseScale) / (baseScale * 2);
            let alpha = Math.max(0.05, Math.min(0.6, 1 - normalizedZ));
            if (isNaN(alpha)) alpha = 0.05;
            
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // --- Draw Inner Connections (Sphere) ---
      for (let i = 0; i < sphereProjected.length; i++) {
        for (let j = i + 1; j < sphereProjected.length; j++) {
          const v1 = sphereVertices[i];
          const v2 = sphereVertices[j];
          const dist = Math.sqrt((v1[0]-v2[0])**2 + (v1[1]-v2[1])**2 + (v1[2]-v2[2])**2);

          if (dist < 1.1) {
            const p1 = sphereProjected[i];
            const p2 = sphereProjected[j];
            
            const avgZ = (p1.z + p2.z) / 2;
            const normalizedZ = (avgZ + baseScale * 0.45) / (baseScale * 0.45 * 2); 
            let alpha = Math.max(0.1, Math.min(0.5, 1 - normalizedZ));
            if (isNaN(alpha)) alpha = 0.1;
            
            ctx.strokeStyle = `rgba(217, 70, 239, ${alpha})`; 
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // --- Draw Outer Nodes ---
      icoProjected.forEach(p => {
        const normalizedZ = (p.z + baseScale) / (baseScale * 2);
        let alpha = Math.max(0.2, Math.min(1, 1 - normalizedZ));
        if (isNaN(alpha)) alpha = 0.5; // Safety fallback
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10 * p.scale);
        gradient.addColorStop(0, `rgba(52, 211, 153, ${alpha * 0.6})`);
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10 * p.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Draw Inner Nodes ---
      sphereProjected.forEach(p => {
        const normalizedZ = (p.z + baseScale * 0.45) / (baseScale * 0.45 * 2);
        let alpha = Math.max(0.2, Math.min(1, 1 - normalizedZ));
        if (isNaN(alpha)) alpha = 0.5; // Safety fallback
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6 * p.scale);
        gradient.addColorStop(0, `rgba(217, 70, 239, ${alpha * 0.6})`);
        gradient.addColorStop(1, 'rgba(217, 70, 239, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6 * p.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] lg:h-[500px] glass-card rounded-3xl relative overflow-hidden flex items-center justify-center group border border-white/5">
       {/* Background ambient glow */}
       <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-blue-500/5 opacity-50 pointer-events-none" />
       
       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
       
       {/* Decorative Tech Elements */}
       <div className="absolute top-6 right-6 z-20 flex flex-col items-end">
         <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">Model Active</span>
         </div>
       </div>

       <div className="absolute bottom-6 left-8 z-20">
         <div className="flex items-center gap-2 mb-1">
           <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Architecture</span>
         </div>
         <p className="text-xs text-white font-mono font-bold">Neural Geometric Projection</p>
       </div>
    </div>
  );
};

export default HeroGeometric;
