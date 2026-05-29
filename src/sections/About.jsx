import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, TerminalSquare } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { ElegantShape } from '../components/ui/shape-landing-hero';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>
      
      {/* Multiple Glowing Orbs and Geometric Shapes for Depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '7s' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '5s' }}></div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <ElegantShape
              delay={0.4}
              width={400}
              height={100}
              rotate={15}
              gradient="from-fuchsia-500/[0.15]"
              className="right-[-5%] top-[10%]"
          />
          <ElegantShape
              delay={0.6}
              width={300}
              height={80}
              rotate={-15}
              gradient="from-cyan-500/[0.15]"
              className="left-[5%] bottom-[20%]"
          />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Header Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] uppercase font-mono tracking-wider font-semibold mb-6 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
            <Sparkles className="w-3 h-3 animate-pulse" /> Get To Know Me
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 font-display tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            About Me
          </h2>

          {/* Glowing Glass Card */}
          <div className="relative group max-w-4xl w-full mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0A0F1C]/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.2)] mb-8 mx-auto">
                <MapPin className="w-4 h-4 text-fuchsia-400 animate-bounce" />
                <span className="text-xs font-semibold text-slate-200 font-mono tracking-wide">Lucknow, India</span>
              </div>

              <div className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium min-h-[150px]">
                <TypeAnimation
                  sequence={[
                    'I am a Computer Science student specializing in Data Science & Artificial Intelligence with a strong interest in analytics, business intelligence, machine learning, and AI-powered systems. I enjoy building real-world projects that transform complex datasets into meaningful insights through interactive dashboards, predictive modelling, and intelligent applications.',
                    1000
                  ]}
                  wrapper="p"
                  speed={75}
                  cursor={true}
                  repeat={0}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
