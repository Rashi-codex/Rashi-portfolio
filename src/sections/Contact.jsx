import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ElegantShape } from '../components/ui/shape-landing-hero';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ursrashi24@gmail.com',
        },
        'YOUR_PUBLIC_KEY'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden z-10">
      
      {/* Light Aurora / Glowing Background Effects & Elegant Shapes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Soft Aurora Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Elegant Geometric Shapes (adapted for white bg) */}
        <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-cyan-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-fuchsia-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-blue-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-amber-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] uppercase font-mono tracking-wider font-semibold mb-4 shadow-sm">
            What's Next?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-display">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or ways I can contribute to your team.
          </p>
        </motion.div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto relative overflow-hidden border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)] transition-all duration-500 group">
          {/* Inner Card Subtle Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full opacity-20 blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Let's Connect</h3>
          <p className="text-slate-600 mb-6 font-medium">
            Currently looking for Data Analyst and Software Engineering roles.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-900 placeholder-slate-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-900 placeholder-slate-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-900 placeholder-slate-500 resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(15,23,42,0.2)] hover:shadow-[0_0_30px_rgba(15,23,42,0.4)] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm font-medium">Failed to send message. Please try again or use the email button below.</p>
            )}
          </form>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:ursrashi24@gmail.com" 
              className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(15,23,42,0.2)] hover:shadow-[0_0_30px_rgba(15,23,42,0.4)] font-semibold"
            >
              <Mail size={20} />
              <span>Say Hello</span>
            </a>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/rashi-gupta-b11874221/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a 
                href="https://github.com/rashi-02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 rounded-xl transition-all border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-[0_0_20px_rgba(15,23,42,0.15)]"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Minimalist Footer */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 text-xs font-mono font-medium tracking-widest uppercase">
            Designed & Built by Rashi Gupta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;