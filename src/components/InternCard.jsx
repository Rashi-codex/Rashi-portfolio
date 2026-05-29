import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Link2 } from 'lucide-react';

export default function InternCard({ role, company, duration, description, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-[1px] group overflow-hidden shadow-xl"
    >
      {/* Soft Glow Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-sky-400/30 group-hover:to-indigo-500/20 transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
      
      {/* Inner Card */}
      <div className="relative h-full bg-card/90 backdrop-blur-3xl rounded-[15px] p-6 flex flex-col justify-between m-[1px]">
        <div>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slateDark text-base leading-tight">
                {role}
              </h3>
              <p className="text-xs text-sky-400 font-semibold mt-0.5 font-display">
                {company}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800/50 border border-white/5 px-2 py-0.5 rounded-md self-start shrink-0">
            <Calendar className="w-3.5 h-3.5" /> {duration}
          </span>
        </div>
        <p className="text-slateBody text-[12px] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {link && (
        <div className="border-t border-white/5 pt-4 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-sky-400 transition-colors bg-indigo-500/5 hover:bg-sky-400/10 px-3 py-1.5 rounded-lg border border-indigo-500/10 hover:border-sky-400/20"
          >
            <Link2 className="w-3.5 h-3.5" /> Verify Certificate
          </a>
        </div>
      )}
      </div>
    </motion.div>
  );
}
