import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Library } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { ElegantShape } from '../components/ui/shape-landing-hero';

const majorProjects = [
  {
    title: 'SAARTHI – AI Career Enhancement System',
    description: 'An AI-driven career recommendation platform that matches user interests and skill profiles with personalized learning resources and career pathways.',
    tech: ['Python', 'NLP', 'Flask', 'Streamlit', 'Generative AI'],
    github: 'https://github.com/Rashi-codex/SAARTHI',
    isFeatured: true,
  },
  {
    title: 'UIDAI Enrollment Data Analysis',
    description: 'Processed and analyzed 50,000+ UIDAI enrollment records to identify demographic patterns, regional trends, and enrollment insights using EDA and visualization.',
    tech: ['Python', 'Pandas', 'Tableau', 'EDA'],
    github: 'https://github.com/Rashi-codex/UIDAI_dataanalysis',
    isFeatured: true,
  },
  {
    title: 'Women Crime Analytics Dashboard',
    description: 'Built an interactive analytics dashboard using NCRB crime data to study trends and generate visual insights.',
    tech: ['Power BI', 'Streamlit', 'Python', 'Leaflet.js'],
    github: 'https://github.com/Rashi-codex/Crime-Analysis-',
    isFeatured: true,
  },
];

const miniProjects = [
  // DATA ANALYSIS PROJECTS
  {
    title: 'Railway Data Analysis',
    description: 'Performed exploratory data analysis on railway datasets to identify operational insights and travel patterns.',
    tech: ['Data Analysis', 'EDA'],
    github: 'https://github.com/Rashi-codex',
    category: 'Data Analysis',
  },
  {
    title: 'Titanic Survivor Prediction',
    description: 'Built a machine learning model to predict passenger survival using Titanic dataset features.',
    tech: ['Machine Learning', 'Python'],
    github: 'https://github.com/Rashi-codex',
    category: 'Data Analysis',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Developed predictive models to identify customer churn patterns and improve retention analysis.',
    tech: ['Predictive Modeling', 'Analytics'],
    github: 'https://github.com/Rashi-codex',
    category: 'Data Analysis',
  },
  {
    title: 'Telecommunication Data Integration',
    description: 'Integrated and analyzed telecommunication datasets to derive operational insights.',
    tech: ['Data Integration', 'Analytics'],
    github: 'https://github.com/Rashi-codex',
    category: 'Data Analysis',
  },
  {
    title: 'Fit Guide Project',
    description: 'Developed a fitness guidance system based on user preferences and health-related inputs.',
    tech: ['Data Analysis', 'Python'],
    github: 'https://github.com/Rashi-codex',
    category: 'Data Analysis',
  },

  // AI / MACHINE LEARNING PROJECTS
  {
    title: 'Real-Time Face Recognition Attendance',
    description: 'Built a computer vision-based attendance system using facial recognition.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/Rashi-codex',
    category: 'AI/ML',
  },
  {
    title: 'AI Resume Screening System',
    description: 'Developed an NLP-powered resume screening system for resume categorization.',
    tech: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/Rashi-codex',
    category: 'AI/ML',
  },
  {
    title: 'Image Classification CNN Model',
    description: 'Built a Convolutional Neural Network model for image classification.',
    tech: ['Python', 'TensorFlow', 'CNN'],
    github: 'https://github.com/Rashi-codex',
    category: 'AI/ML',
  },
  {
    title: 'Iris KNN Classification',
    description: 'Implemented K-Nearest Neighbors algorithm for iris flower classification.',
    tech: ['Python', 'Machine Learning'],
    github: 'https://github.com/Rashi-codex',
    category: 'AI/ML',
  },
  {
    title: 'ML Model Using IBM Watson Studio',
    description: 'Developed and trained machine learning models using IBM Watson Studio.',
    tech: ['IBM Watson', 'Machine Learning'],
    github: 'https://github.com/Rashi-codex',
    category: 'AI/ML',
  },

  // PYTHON PROJECTS
  {
    title: 'Weather App',
    description: 'Built a weather forecasting application that provides real-time weather updates.',
    tech: ['Python', 'API'],
    github: 'https://github.com/Rashi-codex',
    category: 'Python',
  },

  // JAVA PROJECTS
  {
    title: 'Currency Converter',
    description: 'Built a Java-based currency conversion application.',
    tech: ['Java'],
    github: 'https://github.com/Rashi-codex',
    category: 'Java',
  },
  {
    title: 'Mini Game',
    description: 'Developed an interactive mini game using Java concepts.',
    tech: ['Java'],
    github: 'https://github.com/Rashi-codex',
    category: 'Java',
  },

  // IBM SPSS PROJECTS
  {
    title: 'Weather Prediction using SPSS',
    description: 'Developed predictive weather forecasting models using IBM SPSS Modeler.',
    tech: ['IBM SPSS Modeler'],
    github: 'https://github.com/Rashi-codex',
    category: 'IBM SPSS',
  },
  {
    title: 'Customer Churn Prediction (SPSS)',
    description: 'Built churn prediction analytics model using IBM SPSS.',
    tech: ['IBM SPSS'],
    github: 'https://github.com/Rashi-codex',
    category: 'IBM SPSS',
  },

  // COMPUTER NETWORK PROJECTS
  {
    title: 'LAN & Packet Collision Detection',
    description: 'Configured Local Area Network connectivity and analyzed packet collision behavior in Packet Tracer.',
    tech: ['Packet Tracer', 'Networking'],
    github: 'https://github.com/Rashi-codex',
    category: 'Computer Networks',
  },
  {
    title: 'DHCP & DNS Server Configuration',
    description: 'Configured DHCP and DNS servers in Cisco Packet Tracer.',
    tech: ['Packet Tracer', 'DHCP', 'DNS'],
    github: 'https://github.com/Rashi-codex',
    category: 'Computer Networks',
  },
  {
    title: 'MAC Address Detection using ARP',
    description: 'Developed a C program to retrieve MAC/physical address using ARP.',
    tech: ['C', 'Networking', 'ARP'],
    github: 'https://github.com/Rashi-codex',
    category: 'Computer Networks',
  },
  {
    title: 'Network Subnetting & Routing',
    description: 'Configured subnetting and routers using command line while analyzing datagram formats.',
    tech: ['Networking', 'Subnetting'],
    github: 'https://github.com/Rashi-codex',
    category: 'Computer Networks',
  },
  {
    title: 'NAT Configuration',
    description: 'Configured Network Address Translation for secure communication in Packet Tracer.',
    tech: ['Packet Tracer', 'NAT'],
    github: 'https://github.com/Rashi-codex',
    category: 'Computer Networks',
  },

  // SCILAB PROJECTS
  {
    title: 'Basic Arithmetic & Matrix Operations',
    description: 'Implemented arithmetic and matrix operations using Scilab.',
    tech: ['Scilab', 'Mathematics'],
    github: 'https://github.com/Rashi-codex',
    category: 'Scilab',
  },
  {
    title: 'Plotting 2D Graphs',
    description: 'Created graphical visualizations and mathematical plots using Scilab.',
    tech: ['Scilab', 'Data Visualization'],
    github: 'https://github.com/Rashi-codex',
    category: 'Scilab',
  },
  {
    title: 'User Defined Functions',
    description: 'Implemented custom user-defined functions for computational problem solving.',
    tech: ['Scilab'],
    github: 'https://github.com/Rashi-codex',
    category: 'Scilab',
  },
  {
    title: 'Mathematical Problem Solving',
    description: 'Solved vectors, matrices, polynomials, differential equations, and finite difference methods.',
    tech: ['Scilab', 'Mathematics'],
    github: 'https://github.com/Rashi-codex',
    category: 'Scilab',
  },
];

const categories = [
  'All',
  'Data Analysis',
  'AI/ML',
  'Python',
  'Java',
  'IBM SPSS',
  'Computer Networks',
  'Scilab',
  'Additional'
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredMiniProjects = activeTab === 'All'
    ? miniProjects
    : miniProjects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 bg-bg relative overflow-hidden">
      
      {/* Elegant Geometric Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <ElegantShape
              delay={0.3}
              width={700}
              height={140}
              rotate={12}
              gradient="from-sky-500/[0.15]"
              className="left-[-10%] md:left-[-5%] top-[10%] md:top-[15%]"
          />
          <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-indigo-500/[0.15]"
              className="right-[-5%] md:right-[0%] top-[40%] md:top-[45%]"
          />
          <ElegantShape
              delay={0.4}
              width={400}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[10%] md:left-[15%] bottom-[10%] md:bottom-[15%]"
          />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] uppercase font-mono tracking-wider font-semibold mb-4">
            <Sparkles className="w-3 h-3" /> Creative Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slateDark">
            Featured Projects
          </h2>
          <p className="text-slateBody text-sm max-w-xl mt-4">
            Highlighting data science, machine learning, and business intelligence solutions designed to solve real-world problems.
          </p>
        </div>

        {/* Major Projects Grid */}
        <div className="flex flex-col gap-8 mb-24">
          {majorProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              isFeatured={project.isFeatured}
              index={index}
            />
          ))}
        </div>

        {/* Mini Projects Header */}
        <div className="border-t border-slate-700/40 pt-16 mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] uppercase font-mono tracking-wider font-semibold mb-4">
            <Library className="w-3 h-3" /> Archive Repository
          </div>
          <h3 className="text-2xl font-extrabold text-slateDark">
            Mini Projects
          </h3>
          
          {/* Filters Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl">
            <AnimatePresence>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 border ${
                    activeTab === cat
                      ? 'bg-sky-400 border-sky-400 text-slate-900 shadow-sm shadow-sky-400/20 scale-105'
                      : 'bg-card/40 border-white/5 text-slateBody hover:bg-white/5 hover:text-slateDark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mini Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[220px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredMiniProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                isFeatured={false}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
