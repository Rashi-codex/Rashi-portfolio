import React from 'react';
import { Sparkles } from 'lucide-react';
import { 
  SiPython, SiMysql, SiJavascript, SiHtml5, SiTailwindcss,
  SiFlask, SiGit, SiGithub, SiScikitlearn, SiMongodb, SiSnowflake,
  SiPandas, SiNumpy, SiTensorflow, SiJupyter 
} from 'react-icons/si';
import { FaJava, FaCuttlefish, FaChartBar, FaChartLine, FaServer } from 'react-icons/fa';

const row1 = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Tableau', icon: FaChartBar, color: '#E97627' },
  { name: 'Power BI', icon: FaChartLine, color: '#F2C811' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const row2 = [
  { name: 'Machine Learning', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'IBM Watson', icon: FaServer, color: '#052FAD' },
  { name: 'Flask', icon: SiFlask, color: '#ffffff' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'C', icon: FaCuttlefish, color: '#A8B9CC' },
  { name: 'Generative AI', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
];

const MarqueeRow = ({ items, reverse }) => {
  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  
  return (
    <div className="relative flex overflow-hidden group w-full py-4 fade-edges">
      {/* Duplicate array for seamless infinite scrolling */}
      <div className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}>
        {[...items, ...items].map((item, index) => (
          <div 
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-6 py-4 mx-3 bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl shadow-lg hover:border-sky-400/20 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-max hover:-translate-y-1"
          >
            <item.icon className="w-8 h-8 drop-shadow-md" style={{ color: item.color }} />
            <span className="text-slate-300 font-semibold font-mono text-sm tracking-wide">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-[10px] uppercase font-mono tracking-wider font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" /> Technical Arsenal
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Technologies <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">& Tools</span>
          </h2>
          <p className="text-slateBody text-sm sm:text-base max-w-2xl mx-auto">
            A dynamic stack of programming languages, machine learning frameworks, business intelligence tools, and database technologies that power my solutions.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Skill Belts */}
      <div className="w-full flex flex-col gap-2 mt-8">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

    </section>
  );
}
