import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import InternCard from '../components/InternCard';

const internships = [
  {
    role: 'Data Analytics & GenAI Intern',
    company: 'IBM SkillsBuild',
    duration: '2024',
    description: 'Completed IBM virtual training in Data Analytics and Generative AI, gaining hands-on exposure working with IBM SPSS Modeler, Watson Studio, and IBM Cognos. Developed predictive models, parsed datasets, and created visual executive dashboards for KPI reporting.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_generativeai-activity-7438925476817084416-CJo_',
  },
  {
    role: 'Space Tech Virtual Intern',
    company: 'Agninirava Space',
    duration: '2024',
    description: 'Gained structured exposure to space technology concepts, satellite telemetry outlines, collaborative innovation modules, and aerospace design fundamentals through virtual labs.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_agnirva-space-activity-7418620664108208128-9Jn7',
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 bg-bg relative overflow-hidden">
      
      {/* Subtle Digital Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-400/5 border border-sky-400/10 text-sky-400 text-[10px] uppercase font-mono tracking-wider font-semibold mb-4">
            <Sparkles className="w-3 h-3" /> Industry Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slateDark">
            Virtual Internships
          </h2>
          <p className="text-slateBody text-sm max-w-xl mt-4">
            Practical workspace experiences collaborating with industry leaders on data systems and technical concepts.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {internships.map((intern, index) => (
            <InternCard
              key={index}
              role={intern.role}
              company={intern.company}
              duration={intern.duration}
              description={intern.description}
              link={intern.link || null}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
