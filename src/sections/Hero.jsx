import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Download, Mail, Award, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GodRays, MeshGradient } from "@paper-design/shaders-react";

const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Hackathons' },
  { value: '5+', label: 'Certifications' },
  { value: '2+', label: 'Internships' },
];

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formStep, setFormStep] = useState("idle");

  const handleExpand = () => setIsExpanded(true);
  
  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setFormStep("idle"), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("submitting");
    setTimeout(() => {
      setFormStep("success");
    }, 1500);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isExpanded]);

  return (
    <>
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-300">
        
        {/* GodRays Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <GodRays
            colorBack="#00000000"
            colors={["#38bdf840", "#818cf840", "#a78bfa40", "#3b82f640"]}
            colorBloom="#38bdf8"
            offsetX={0.5}
            offsetY={-0.5}
            intensity={0.25}
            spotty={0.3}
            midSize={10}
            midIntensity={0}
            density={0.25}
            bloom={0.15}
            speed={0.3}
            scale={1.8}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center pt-16">
          {/* Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-2"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-sky-400 to-indigo-500 relative z-10 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
              <img src="/avatar.jpg" alt="Rashi Gupta" className="w-full h-full object-cover rounded-full border-4 border-bg" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-md shadow-lg"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
            Aspiring Data Scientist
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl font-display drop-shadow-2xl"
          >
            Hi, I am <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 via-indigo-300 to-violet-300 drop-shadow-[0_0_25px_rgba(129,140,248,0.2)]">
              Rashi Gupta
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl px-4 leading-relaxed font-medium"
          >
            Data Analyst • Business Intelligence • Machine Learning & AI
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-4"
          >
             {stats.map((stat, idx) => (
               <div 
                 key={idx}
                 className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center"
               >
                 <span className="font-mono text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-400">
                   {stat.value}
                 </span>
                 <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                   {stat.label}
                 </span>
               </div>
             ))}
          </motion.div>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-flex gap-4 items-center relative mt-4 z-20 flex-wrap justify-center">
                
                {/* The expanding Contact button */}
                <motion.div className="inline-block relative">
                  <motion.div
                    style={{ borderRadius: "100px" }}
                    layout
                    layoutId="cta-card"
                    className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 shadow-lg"
                  />
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout={false}
                    onClick={handleExpand}
                    className="relative flex items-center gap-2 h-14 px-8 py-3 text-lg font-bold text-white tracking-wide hover:opacity-90 transition-opacity drop-shadow-md"
                  >
                    Start your journey
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
                
                {/* Other CTA Buttons */}
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.6 }}
                   className="flex gap-3"
                >
                  <a 
                    href="/resume.pdf" 
                    download="Rashi_Gupta_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 h-14 px-6 rounded-full bg-slate-800/60 border border-white/5 text-slate-200 text-sm font-semibold hover:bg-slate-700/80 hover:scale-105 transition-all backdrop-blur-md shadow-sm"
                  >
                    <Download className="w-4 h-4" /> Resume
                  </a>
                  <a href="https://github.com/Rashi-codex" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/60 border border-white/5 text-slate-200 hover:bg-slate-700/80 hover:scale-105 transition-all backdrop-blur-md shadow-sm">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/rashi-gupta-12b7a728a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/60 border border-white/5 text-sky-400 hover:bg-slate-700/80 hover:scale-105 transition-all backdrop-blur-md shadow-sm">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Expanded Modal Overlay */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 lg:p-12">
            <motion.div
              layoutId="cta-card"
              transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
              style={{ borderRadius: "32px" }}
              layout
              className="relative flex h-full max-h-[900px] w-full max-w-6xl overflow-hidden bg-bg sm:rounded-[32px] shadow-2xl ring-1 ring-white/10"
            >
              {/* Mesh Gradient Background inside Modal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
              >
                <MeshGradient
                  speed={0.4}
                  colors={["#38bdf8", "#818cf8", "#a78bfa", "#020617"]} // Deep Slate Aurora palette
                  distortion={0.6}
                  swirl={0.05}
                  grainMixer={0.15}
                  grainOverlay={0}
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden"
              >
                {/* Left Side: Contact Info */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 gap-8 text-white">
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl font-display">
                      Let's Build Together.
                    </h2>
                    <p className="text-slate-200 text-lg max-w-md font-medium">
                      Whether you have a data-driven project, a machine learning idea, or just want to connect, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6 mt-8">
                    <div className="flex gap-4 items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Mail className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Direct Email</h3>
                        <p className="text-slate-300 text-sm mt-1">rashigupta16103@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <MapPin className="w-6 h-6 text-fuchsia-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-slate-300 text-sm mt-1">Lucknow, India (Open to Remote)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-12 lg:p-16 bg-black/10 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                  <div className="w-full max-w-md bg-card/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl">
                    
                    {formStep === "success" ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center h-[400px] space-y-6"
                      >
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                          <Check className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                          <p className="text-slate-300">I have received your message and will get back to you shortly.</p>
                        </div>
                        <button 
                          onClick={handleClose}
                          className="px-6 py-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          Return to Portfolio
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1 mb-6">
                          <h3 className="text-2xl font-bold text-white font-display">Send a Message</h3>
                          <p className="text-sm text-slate-300">Fill out the form below to reach me directly.</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <input
                              required
                              type="text"
                              placeholder="Your Name"
                              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                          </div>

                          <div>
                            <input
                              required
                              type="email"
                              placeholder="Your Email"
                              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                            />
                          </div>

                          <div>
                            <textarea
                              required
                              rows="4"
                              placeholder="How can I help you?"
                              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-sm"
                            />
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold hover:opacity-90 focus:ring-4 focus:ring-cyan-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-lg"
                        >
                          {formStep === "submitting" ? (
                             <span className="flex items-center gap-2">
                               <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                               Sending...
                             </span>
                          ) : "Send Message"}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
