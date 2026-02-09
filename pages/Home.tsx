
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ChevronRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroGeometric from '../components/HeroGeometric.tsx';
import { CHARLES_INFO } from '../constants.ts';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={stagger}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]"
    >
      <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
        <motion.h1 
          variants={fadeIn}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white"
        >
          Founder and <br />
          <span>Data Scientist.</span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
          {CHARLES_INFO.bio}
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Link to="/projects" className="px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2 group">
            Case Studies
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex gap-4 items-center px-4">
            <a href={CHARLES_INFO.links.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href={CHARLES_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn} className="lg:col-span-5 hidden lg:block">
        <HeroGeometric />
      </motion.div>
    </motion.section>
  );
};

export default Home;
