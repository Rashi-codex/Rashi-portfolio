import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Link2 } from 'lucide-react';

export default function TimelineCard({ title, subtitle, date, description, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative pl-8 pb-8 border-l border-slate-700/60 last:pb-0"
    >
      {/* Node circle */}
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-[#030712] shadow-[0_0_10px_rgba(217,70,239,0.8)] ring-4 ring-accent/20 animate-pulse"></div>

      <div className="glass-card glow-card rounded-2xl p-5 hover:border-fuchsia-500/40 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] transition-all duration-300 cursor-pointer group bg-[#0A0F1C]/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h4 className="font-display font-bold text-slateDark text-[15px] leading-tight">
              {title}
            </h4>
            {subtitle && (
              <p className="text-xs text-primary font-medium mt-0.5 font-display">{subtitle}</p>
            )}
          </div>
          {date && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/30 px-2 py-0.5 rounded-md self-start">
              <Calendar className="w-3 h-3" /> {date}
            </span>
          )}
        </div>
        <p className="text-slateBody text-[12px] leading-relaxed mb-4">{description}</p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors bg-accent/5 hover:bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/10"
          >
            <Link2 className="w-3.5 h-3.5" /> Verify Credential
          </a>
        )}
      </div>
    </motion.div>
  );
}
