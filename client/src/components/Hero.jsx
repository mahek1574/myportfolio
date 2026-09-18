import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Code2, Cpu, Database, Terminal, ShieldCheck, Copy, Check } from "lucide-react";

const codeSnippets = {
  architecture: `{
  "developer": "Mahek",
  "role": "Full-Stack Developer",
  "stack": {
    "frontend": ["React.js", "Tailwind CSS", "Framer Motion"],
    "backend": ["Node.js", "Express.js", "REST APIs"],
    "database": ["MongoDB", "Mongoose ORM"],
    "auth": ["JWT", "Role-Based Access"]
  },
  "status": "Ready for Opportunities"
}`,
  capabilities: `export const DeveloperProfile = () => {
  return (
    <MahekPortfolio 
      specialty="MERN Stack Architecture"
      experience="Production Web Applications"
      quality="Clean Code & High Performance"
      available={true}
    />
  );
};`,
  status: `// SYSTEM INTEGRITY STATUS
[OK] Frontend: React 19 Engine
[OK] Backend API: Express Router
[OK] Database: MongoDB Atlas
[OK] Auth: JSON Web Tokens
// STATUS: 100% PRODUCTION READY`
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState("architecture");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden bg-[#111111] text-[#F3F0EA] font-sans"
    >
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[480px] bg-[#D6A85F]/5 rounded-full blur-[190px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
           
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-xs font-mono font-medium tracking-wider mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A85F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6A85F]"></span>
              </span>
              <span>[ 01 // FULL-STACK DEVELOPER ]</span>
            </motion.div>

            
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F3F0EA] mb-6 leading-[1.08] tracking-tight font-display"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block text-[#A7A29A] text-[0.55em] font-normal tracking-normal mb-2 font-sans">
                Hello, I'm Mahek
              </span>

              <span className="text-[#D6A85F] text-glow-gold inline-block">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2200,
                    "MERN Stack Developer",
                    2200,
                    "React & Node Developer",
                    2200,
                    "Backend API Developer",
                    2200,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </motion.h1>

            
            <motion.p
              className="text-base sm:text-lg text-[#A7A29A] max-w-xl mb-10 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I build robust full-stack web applications from front-end user
              experiences to back-end databases and APIs. Turning ideas into
              smooth, interactive, and production-ready products.
            </motion.p>

            
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <a
                  href="#works"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#D6A85F] hover:bg-[#E5B869] text-[#111111] font-bold text-sm transition-all duration-300 shadow-md text-center group"
                >
                  <span>View My Work</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#F3F0EA] hover:border-[#D6A85F] hover:text-[#D6A85F] font-bold text-sm transition-all duration-300 text-center backdrop-blur-md"
                >
                  <span>Contact Me</span>
                </a>
              </div>

              
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-4 sm:border-l sm:border-[#262626]">
                <a
                  href="https://github.com/mahek1574"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter Profile"
                  className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 transition-all duration-200"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#contact"
                  aria-label="Contact Email"
                  className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] hover:border-[#D6A85F]/50 transition-all duration-200"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

          </div>

          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-md rounded-2xl bg-[#1A1A1A] border border-[#262626] backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-[#D6A85F]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              
              <div className="bg-[#111111] px-4 py-3 border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#D6A85F] font-bold flex items-center gap-1.5">
                    <Terminal size={13} />
                    <span>WORKSTATION</span>
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-[#1A1A1A] border border-[#262626] text-[#A7A29A] hover:text-[#D6A85F] transition-colors text-xs font-mono flex items-center gap-1"
                  aria-label="Copy code"
                >
                  {copied ? <Check size={12} className="text-[#D6A85F]" /> : <Copy size={12} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              
              <div className="flex items-center bg-[#111111]/90 border-b border-[#262626] px-2 pt-2 gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "architecture"
                      ? "bg-[#1A1A1A] text-[#D6A85F] border-t-2 border-[#D6A85F] font-bold"
                      : "text-[#A7A29A] hover:text-[#F3F0EA]"
                  }`}
                >
                  <Code2 size={13} />
                  <span>MERN_Stack.json</span>
                </button>
                <button
                  onClick={() => setActiveTab("capabilities")}
                  className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "capabilities"
                      ? "bg-[#1A1A1A] text-[#D6A85F] border-t-2 border-[#D6A85F] font-bold"
                      : "text-[#A7A29A] hover:text-[#F3F0EA]"
                  }`}
                >
                  <Cpu size={13} />
                  <span>Capabilities.jsx</span>
                </button>
                <button
                  onClick={() => setActiveTab("status")}
                  className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "status"
                      ? "bg-[#1A1A1A] text-[#D6A85F] border-t-2 border-[#D6A85F] font-bold"
                      : "text-[#A7A29A] hover:text-[#F3F0EA]"
                  }`}
                >
                  <Database size={13} />
                  <span>Status.config</span>
                </button>
              </div>

              
              <div className="p-5 font-mono text-xs text-[#F3F0EA] bg-[#1A1A1A] overflow-x-auto min-h-[200px] leading-relaxed">
                <pre className="text-[#A7A29A] whitespace-pre-wrap">
                  {codeSnippets[activeTab]}
                </pre>
              </div>

              
              <div className="bg-[#111111] px-5 py-3 border-t border-[#262626] flex items-center justify-between text-xs text-[#A7A29A] font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#D6A85F]" />
                  <span>Interview Ready</span>
                </span>
                <span className="text-[#D6A85F] font-semibold flex items-center gap-2 bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#262626]">
                  <span className="w-2 h-2 rounded-full bg-[#D6A85F] animate-pulse" />
                  <span>Open for Hiring</span>
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

