import React from 'react';
import { Award, Sparkles } from 'lucide-react';
import TimelineCard from '../components/TimelineCard';

const achievements = [
  {
    title: 'IBM Technovate',
    subtitle: 'Collaborator & Solution Engineer',
    date: '2026',
    description: 'Participated in IBM Technovate, collaborating with cross-functional teams to build innovation-driven technical software models and resolve live coding challenges.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_ibm-technovate2026-collaboration-activity-7430640796359434240-cwL5',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    subtitle: 'SIH National Participant - Team CivicWave',
    date: '2025',
    description: 'Participated in the prestigious national Smart India Hackathon. Contributed core analytical solutions, database pipelines, and visualization features to the team project.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_smartindiahackathon-sih2025-civicwave-activity-7410365660138180608-xC3z',
  },
  {
    title: 'Dragon Pitch – 3rd Position',
    subtitle: 'Pitch Competition Winner',
    date: '2024',
    description: 'Secured 3rd position for presenting innovative business and data-oriented proposals, demonstrating exceptional research, analytical reasoning, and visual pitch presentation skills.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_achievement-innovation-dragonpitch-activity-7185182995601920000-UdGd',
  },
  {
    title: 'IIT Kharagpur',
    subtitle: 'Technical Workshop Participant',
    date: '2024',
    description: 'Participated in advanced technical workshops, completing hands-on learning labs and exploring machine learning modeling approaches.',
    link: '', // Placeholder (no external link)
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-bg relative overflow-hidden">
      
      {/* Animated Glowing Background Orbs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Soft background grid lines */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Pulsing Neon Orbs - Increased opacity and removed blend modes for visibility */}
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-[5%] left-[20%] w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 text-[10px] uppercase font-mono tracking-wider font-semibold mb-4">
            <Sparkles className="w-3 h-3" /> Honors & Awards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slateDark">
            Key Achievements
          </h2>
          <p className="text-slateBody text-sm max-w-xl mt-4">
            Awards, hackathon milestones, and national participations representing competitive engineering spirit.
          </p>
        </div>

        {/* Circular Orbit Layout */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center mt-12 mb-12 mx-auto">
          
          {/* Center Focal Point */}
          <div className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-500/5 border border-sky-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.15)] animate-pulse backdrop-blur-sm" style={{ animationDuration: '4s' }}>
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-sky-400" />
          </div>

          {/* Orbiting Achievements */}
          {achievements.map((ach, index) => {
            const angle = (index * 360) / achievements.length;
            return (
              <div
                key={index}
                className="absolute z-30 w-[160px] sm:w-[220px] md:w-[260px] transition-all duration-500"
                style={{
                  transform: `rotate(${angle}deg) translate(clamp(140px, 25vw, 280px)) rotate(-${angle}deg)`,
                }}
              >
                <a 
                  href={ach.link || '#'} 
                  target={ach.link ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block glass-card glow-card rounded-2xl p-4 sm:p-5 bg-card/70 text-center hover:scale-105 transition-transform duration-500 border border-white/5 hover:border-sky-400/30 hover:shadow-lg cursor-pointer"
                >
                  <h4 className="text-[11px] sm:text-sm font-bold text-white mb-1 leading-tight">{ach.title}</h4>
                  <p className="text-[9px] sm:text-[10px] text-indigo-400 font-mono mb-2">{ach.date}</p>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 line-clamp-3 sm:line-clamp-none leading-relaxed">{ach.description}</p>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
