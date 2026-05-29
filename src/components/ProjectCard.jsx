import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const SAARTHIVisual = () => (
  <div className="w-full h-full min-h-[180px] bg-card/50 rounded-2xl border border-white/5 flex items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div className="flex flex-col items-center gap-4 z-10 w-full max-w-[280px]">
      <div className="flex justify-between w-full items-center">
        <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[10px] font-mono text-slateDark">Interests</div>
        <div className="flex-1 h-[1px] border-t border-dashed border-slate-300 mx-2"></div>
        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[11px] font-bold shadow-inner">AI</div>
        <div className="flex-1 h-[1px] border-t border-dashed border-slate-300 mx-2"></div>
        <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[10px] font-mono text-slateDark">Resources</div>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[10px] font-mono text-slateDark">Skills</div>
        <div className="flex-1 h-[1px] border-t border-dashed border-slate-300 mx-2"></div>
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[11px] font-bold shadow-inner">NLP</div>
        <div className="flex-1 h-[1px] border-t border-dashed border-slate-300 mx-2"></div>
        <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[10px] font-mono text-slateDark">Pathways</div>
      </div>
    </div>
  </div>
);

const UIDAIVisual = () => (
  <div className="w-full h-full min-h-[180px] bg-card/50 rounded-2xl border border-white/5 flex flex-col justify-end p-4 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div className="z-10 w-full flex flex-col gap-2">
      <div className="flex justify-between items-end h-24 px-4 border-b border-slate-700/40 pb-1">
        <div className="w-6 bg-primary/15 border-t-2 border-primary rounded-t-sm h-14 transition-all hover:bg-primary/25"></div>
        <div className="w-6 bg-accent/15 border-t-2 border-accent rounded-t-sm h-20 transition-all hover:bg-accent/25"></div>
        <div className="w-6 bg-primary/25 border-t-2 border-primary/80 rounded-t-sm h-10 transition-all hover:bg-primary/35"></div>
        <div className="w-6 bg-accent/25 border-t-2 border-accent/80 rounded-t-sm h-24 transition-all hover:bg-accent/35"></div>
        <div className="w-6 bg-primary/35 border-t-2 border-primary/95 rounded-t-sm h-16 transition-all hover:bg-primary/45"></div>
      </div>
      <div className="flex justify-between text-[9px] font-mono text-slate-400 px-1">
        <span>18-25</span>
        <span>26-35</span>
        <span>36-45</span>
        <span>46-60</span>
        <span>60+</span>
      </div>
    </div>
  </div>
);

const CrimeVisual = () => (
  <div className="w-full h-full min-h-[180px] bg-card/50 rounded-2xl border border-white/5 flex flex-col justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div className="w-full z-10 flex flex-col gap-2.5">
      <div className="flex items-center justify-between border-b border-slate-700/30 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="font-mono text-[9px] font-bold text-rose-500 tracking-tight">Live Trend Index</span>
        </div>
        <span className="font-mono text-[9px] text-slate-400">NCRB (10y data)</span>
      </div>
      <svg viewBox="0 0 200 60" className="w-full overflow-visible">
        <path
          d="M0 45 C30 35, 60 52, 90 25 C120 -2, 150 18, 200 12"
          fill="none"
          stroke="url(#roseGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="90" cy="25" r="3.5" className="fill-rose-500 stroke-white stroke-2 shadow-sm" />
        <circle cx="200" cy="12" r="3.5" className="fill-rose-500 stroke-white stroke-2 shadow-sm" />
        <defs>
          <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex justify-between text-[8px] font-mono text-slate-400 px-0.5">
        <span>Year 1</span>
        <span>Year 5</span>
        <span>Year 10</span>
      </div>
    </div>
  </div>
);

const getVisualizer = (title) => {
  if (title.includes('SAARTHI')) return <SAARTHIVisual />;
  if (title.includes('UIDAI')) return <UIDAIVisual />;
  if (title.includes('Women Crime')) return <CrimeVisual />;
  return null;
};

export default function ProjectCard({ title, description, tech, github, isFeatured, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const visualizer = getVisualizer(title);

  if (isFeatured) {
    return (
      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card glow-card rounded-3xl p-6 lg:p-8 flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-stretch cursor-pointer group hover:shadow-xl hover:border-sky-400/20 transition-all duration-500 relative z-10 bg-card/40"
      >
        {/* Left Column: Visual Mockup */}
        <div className="md:col-span-5 flex items-stretch">
          {visualizer}
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-accent font-semibold px-2 py-0.5 bg-accent/5 rounded-md border border-accent/10">
                Major Project
              </span>
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-slateDark mb-3">
              {title}
            </h3>
            <p className="text-slateBody text-sm leading-relaxed mb-6">
              {description}
            </p>
          </div>

          <div>
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] px-2.5 py-1 bg-slate-800/50 border border-slate-700/40 rounded-md text-slateBody"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1.5 text-xs font-semibold px-4.5 py-2.5 bg-white text-slate-900 rounded-xl group-hover:scale-105 transition-all shadow-sm"
              >
                <FaGithub className="w-3.5 h-3.5" /> Code Repository
              </div>
            </div>
          </div>
        </div>
      </motion.a>
    );
  }

  // Mini project card
  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card glow-card rounded-2xl p-5 border border-white/5 hover:border-indigo-400/20 flex flex-col justify-between cursor-pointer group hover:shadow-lg transition-all duration-500 bg-card/40 relative z-10"
    >
      <div>
        <h4 className="font-display text-base font-semibold text-slateDark mb-2 hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-slateBody text-xs leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] px-2 py-0.5 bg-slate-800/30 border border-slate-700/20 rounded-md text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>
        {github && (
          <div
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 group-hover:text-primary transition-colors mt-2"
          >
            <FaGithub size={18} />
            <span>Source</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}
