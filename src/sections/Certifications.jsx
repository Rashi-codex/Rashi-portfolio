import React from 'react';
import { Sparkles } from 'lucide-react';
import { LampContainer } from '../components/ui/lamp';
import { Radar, IconContainer } from '../components/ui/radar-effect';

const certifications = [
  {
    title: 'AI Impact Summit',
    subtitle: 'Emerging AI Technologies & Innovation',
    date: '2026',
    description: 'Participated in AI Impact Summit exploring emerging trends in Artificial Intelligence, NLP models, and machine learning innovation.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_indiaaiimpactsummit2026-ai-artificialintelligence-activity-7436749532593385472-ZNlI',
  },
  {
    title: 'Viveka Hackathon',
    subtitle: 'Problem Solving & Collaborative Engineering',
    date: '2025',
    description: 'Participated in Viveka Hackathon focused on rapid software prototyping, technical innovation, teamwork, and business-focused problem-solving.',
    link: 'https://drive.google.com/file/d/1SRbjUD5qRaEaSZ9b9FrqJqAqf9lEVpUw/view',
  },
  {
    title: 'NASA International Space Apps Challenge',
    subtitle: 'Collaborative Technology Challenge',
    date: '2024',
    description: 'Participated in NASA International Space Apps Challenge, collaborating on technology-driven solutions for asteroid detection and astronomical visualization.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_nasainternationalspaceappschallenge-asteroid-activity-7411362014645878784-ri9b',
  },
  {
    title: 'Deloitte Data Analytics',
    subtitle: 'Data Analytics Virtual Experience',
    date: '2024',
    description: 'Completed Deloitte Data Analytics virtual experience focused on practical business case studies, data parsing, KPI representation, and executive analytics reports.',
    link: 'https://www.linkedin.com/posts/rashi-gupta-12b7a728a_deloitte-dataanalytics-activity-7338944107471376389-R_2b',
  },
  {
    title: 'IIT Bombay Placement Preparation',
    subtitle: 'Technical & Professional Placement Readiness',
    date: '2024',
    description: 'Completed placement preparation training focused on quantitative aptitude, technical mock assessments, communication readiness, and professional skills.',
    link: '', // Placeholder (no external link)
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg relative">
      <LampContainer>
        <div className="max-w-4xl mx-auto w-full pb-24">
          
          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/5 border border-sky-400/20 text-sky-400 text-[10px] uppercase font-mono tracking-wider font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3 h-3" /> Credentials & Courses
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              Certifications & Summits
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mt-6 font-medium">
              Professional milestones, virtual assessments, and hackathon participations verifying core analytical and technical expertise.
            </p>
          </div>

          {/* Radar Layout */}
          <div className="relative flex h-[500px] md:h-[600px] w-full max-w-3xl flex-col items-center justify-center space-y-6 overflow-hidden px-4 mt-8 mx-auto">
            {/* Row 1: 3 Items */}
            <div className="mx-auto w-full max-w-3xl z-50">
              <div className="flex w-full items-center justify-center space-x-6 sm:space-x-12 md:justify-between md:space-x-0">
                <IconContainer
                  text={certifications[0].title}
                  subtitle={certifications[0].date}
                  delay={0.2}
                  icon={
                    <a href={certifications[0].link || '#'} target={certifications[0].link ? "_blank" : undefined} className="flex items-center justify-center w-full h-full">
                      <Sparkles className="h-6 w-6 text-sky-400" />
                    </a>
                  }
                />
                <IconContainer
                  text={certifications[1].title}
                  subtitle={certifications[1].date}
                  delay={0.4}
                  icon={
                    <a href={certifications[1].link || '#'} target={certifications[1].link ? "_blank" : undefined} className="flex items-center justify-center w-full h-full">
                      <Sparkles className="h-6 w-6 text-indigo-400" />
                    </a>
                  }
                />
                <IconContainer
                  text={certifications[2].title}
                  subtitle={certifications[2].date}
                  delay={0.3}
                  icon={
                    <a href={certifications[2].link || '#'} target={certifications[2].link ? "_blank" : undefined} className="flex items-center justify-center w-full h-full">
                      <Sparkles className="h-6 w-6 text-violet-400" />
                    </a>
                  }
                />
              </div>
            </div>
            
            {/* Row 2: 2 Items */}
            <div className="mx-auto w-full max-w-md z-50 pt-8 md:pt-16">
              <div className="flex w-full items-center justify-center space-x-12 sm:space-x-20 md:justify-between md:space-x-0">
                <IconContainer
                  text={certifications[3].title}
                  subtitle={certifications[3].date}
                  delay={0.5}
                  icon={
                    <a href={certifications[3].link || '#'} target={certifications[3].link ? "_blank" : undefined} className="flex items-center justify-center w-full h-full">
                      <Sparkles className="h-6 w-6 text-sky-300" />
                    </a>
                  }
                />
                <IconContainer
                  text={certifications[4].title}
                  subtitle={certifications[4].date}
                  delay={0.8}
                  icon={
                    <a href={certifications[4].link || '#'} target={certifications[4].link ? "_blank" : undefined} className="flex items-center justify-center w-full h-full">
                      <Sparkles className="h-6 w-6 text-indigo-300" />
                    </a>
                  }
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12 md:-bottom-24 z-10" />
            <div className="absolute bottom-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
          </div>

        </div>
      </LampContainer>
    </section>
  );
}
