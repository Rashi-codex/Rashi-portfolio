import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'internships', label: 'Internships' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 transition-all duration-500">
      <div className={`pointer-events-auto flex items-center justify-between lg:justify-center w-full lg:w-auto px-6 lg:px-4 py-3 lg:py-2 rounded-full transition-all duration-500 shadow-2xl ${
        isScrolled 
          ? 'bg-slate-900/70 backdrop-blur-xl border border-white/10' 
          : 'bg-slate-900/40 backdrop-blur-md border border-white/5 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent lg:shadow-none'
      }`}>
        
        {/* Mobile Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="lg:hidden font-display font-bold text-lg tracking-tight text-slateDark flex items-center gap-1.5"
        >
          <span className="text-white">Rashi</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-sky-400 bg-sky-400/10 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/Rashi-codex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="ml-2 flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-100 text-slate-900 hover:bg-white hover:scale-105 transition-all shadow-sm"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 flex flex-col gap-2 z-40 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-5 py-3.5 rounded-2xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'text-sky-400 bg-sky-400/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
