import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? 'py-3.5 bg-[#111111]/85 backdrop-blur-xl border-b border-[#262626] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
       
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-[#262626] group-hover:border-[#D6A85F] flex items-center justify-center text-[#D6A85F] transition-all duration-300 shadow-md">
            <Terminal size={17} className="text-[#D6A85F] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm sm:text-base font-extrabold text-[#F3F0EA] font-display tracking-tight group-hover:text-[#D6A85F] transition-colors">
              MAHEK<span className="text-[#D6A85F]">.DEV</span>
            </span>
            <span className="text-[9px] font-mono text-[#A7A29A] tracking-widest uppercase mt-1">
              Full Stack Developer
            </span>
          </div>
        </a>

        
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#262626] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 uppercase ${
                  isActive
                    ? 'text-[#F3F0EA]'
                    : 'text-[#A7A29A] hover:text-[#D6A85F]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-[#D6A85F]/20 border border-[#D6A85F]/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

       
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6A85F] hover:bg-[#E5B869] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={15} className="stroke-[2.5]" />
          </a>

          <button
            className="md:hidden p-2.5 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#F3F0EA] hover:text-[#D6A85F] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

  
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-2xl flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between pb-4 border-b border-[#262626] text-2xl font-bold font-display text-[#F3F0EA] hover:text-[#D6A85F] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <Sparkles size={16} className="text-[#D6A85F] opacity-70" />
                    <span>{link.name}</span>
                  </span>
                  <span className="text-xs font-mono text-[#D6A85F] bg-[#1A1A1A] px-2.5 py-1 rounded-full border border-[#262626]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                className="mt-6 text-center py-4 rounded-xl bg-[#D6A85F] text-[#111111] font-bold text-sm uppercase tracking-wider shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;


