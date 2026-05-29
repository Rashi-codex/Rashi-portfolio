import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ title, icon: Icon, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card p-6 rounded-2xl border border-slate-700/30 hover:border-violet-500/10 hover:shadow-lg hover:shadow-violet-500/[0.02]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-primary/5 text-primary">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        <h3 className="font-display font-semibold text-base text-slateDark">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] px-2.5 py-1.5 rounded-lg border transition-all duration-300 ${
              skill.toLowerCase().includes('familiar')
                ? 'bg-slate-800/50 border-slate-700/40 text-slate-400 font-normal italic'
                : 'bg-slate-800 border-slate-700/40 hover:border-accent/20 hover:bg-accent/[0.02] hover:text-accent text-slateBody font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
