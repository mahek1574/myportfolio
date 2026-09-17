import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#262626] py-14 relative overflow-hidden font-sans text-[#F3F0EA]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-extrabold text-[#F3F0EA] font-display mb-1.5 flex items-center gap-1">
              <span>Full Stack Developer</span>
              <span className="text-[#D6A85F] font-black">.</span>
            </h2>
            <p className="text-[#A7A29A] text-sm max-w-sm font-normal leading-relaxed">
              Designing and developing elegant, high-performance web applications that deliver smooth user experiences.
            </p>
          </div>

          
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/mahek1574"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 flex items-center justify-center transition-all duration-200 group shadow-sm"
              >
                <Github
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 flex items-center justify-center transition-all duration-200 group shadow-sm"
              >
                <Linkedin
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 flex items-center justify-center transition-all duration-200 group shadow-sm"
              >
                <Twitter
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#contact"
                aria-label="Contact Email"
                className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 flex items-center justify-center transition-all duration-200 group shadow-sm"
              >
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] hover:bg-[#D6A85F] hover:text-[#111111] flex items-center justify-center transition-all duration-200 shadow-md"
            >
              <ArrowUp size={18} className="stroke-[2.5]" />
            </button>
          </div>

        </div>

        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A7A29A] text-xs font-mono">
          <span>&copy; {new Date().getFullYear()} Mahek. Built with React & Tailwind CSS.</span>
          <span className="text-[#D6A85F]">Designed for Peak Performance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


