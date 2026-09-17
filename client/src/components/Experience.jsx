import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    period: "2026 — PRESENT",
    role: "Full Stack Developer",
    organization: "Independent Case Studies & Open Source",
    type: "Full-Stack Development",
    description:
      "Architecting and building production-ready web platforms using React.js, Node.js, Express, and MongoDB. Developed healthcare management systems, streaming applications, and dynamic UI showcases.",
    highlights: [
      "Engineered CarePlus - full-stack doctor appointment system with role-based JWT auth and scheduling workflows.",
      "Developed MovieVerse platform with REST APIs, movie categorization, and search optimization.",
      "Designed responsive UI component suites with Tailwind CSS and Framer Motion interactions.",
    ],
  },
  {
    period: "2025— 2026",
    role: "Frontend & MERN Web Developer",
    organization: "Personal & Client Projects",
    type: "Web Application Development",
    description:
      "Specialized in building high-performance frontend interfaces and connecting them with back-end database models and API endpoints.",
    highlights: [
      "Built FurniShop e-commerce frontend showcasing clean UI aesthetics and interactive shopping cart controls.",
      "Created interactive Nail Art Studio portfolio deployed on Vercel with smooth Lenis scrolling.",
      "Implemented responsive media gallery with category filtering, modal views, and rating filters.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-[#111111] text-[#F3F0EA] relative overflow-hidden font-sans">
     
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D6A85F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

       
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-xs font-mono font-medium uppercase tracking-wider mb-4 backdrop-blur-md">
            <Briefcase size={13} />
            <span>// 03. CAREER & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0EA] tracking-tight font-display">
            Developer <span className="text-[#D6A85F]">Experience</span>
          </h2>
        </motion.div>

       
        <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-3 sm:before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-[#D6A85F]/60 before:via-[#262626] before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col sm:flex-row gap-8 ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
             
              <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 top-3 w-5 h-5 rounded-full bg-[#111111] border-2 border-[#D6A85F] z-20 shadow-[0_0_15px_rgba(214,168,95,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A85F] animate-ping" />
              </div>

              
              <div className={`sm:w-1/2 pl-12 sm:pl-0 ${idx % 2 === 0 ? 'sm:text-left sm:pl-10' : 'sm:text-right sm:pr-10'}`}>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D6A85F] font-bold bg-[#1A1A1A] px-3.5 py-1.5 rounded-full border border-[#262626] mb-2 shadow-sm">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
                <div className="text-xs font-mono text-[#A7A29A] uppercase tracking-widest font-medium">
                  {exp.type}
                </div>
              </div>

              
              <div className="sm:w-1/2 pl-12 sm:pl-0">
                <div className="p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626] backdrop-blur-xl shadow-xl hover:border-[#D6A85F]/50 transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D6A85F] font-semibold mb-1">
                    <Sparkles size={13} />
                    <span>{exp.organization}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F3F0EA] font-display mb-3 group-hover:text-[#D6A85F] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#A7A29A] leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#262626]">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F3F0EA]">
                        <CheckCircle2 size={15} className="text-[#D6A85F] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

