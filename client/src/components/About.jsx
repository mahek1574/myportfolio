import { motion } from "framer-motion";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { User, Cpu, Sparkles, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Core Programming & Frontend",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Advanced" },
      { name: "React.js", icon: FaReact, level: "Advanced" },
      { name: "Tailwind CSS", icon: TbBrandTailwind, level: "Advanced" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Proficient" },
      { name: "Express.js", icon: SiExpress, level: "Proficient" },
      { name: "MongoDB", icon: SiMongodb, level: "Proficient" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, level: "Proficient" },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-[#111111] text-[#F3F0EA] relative overflow-hidden font-sans">
    
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D6A85F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
      
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-xs font-mono font-medium uppercase tracking-wider mb-4 backdrop-blur-md">
            <User size={13} />
            <span>// 02. PROFILE & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0EA] tracking-tight font-display">
            About <span className="text-[#D6A85F]">Me</span>
          </h2>
        </motion.div>

  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 sm:p-9 rounded-2xl bg-[#1A1A1A] border border-[#262626] backdrop-blur-xl shadow-xl hover:border-[#D6A85F]/50 transition-all duration-300 h-full flex flex-col justify-between group">
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#A7A29A]">
                <div className="flex items-center gap-2 text-[#D6A85F] font-mono text-xs font-bold uppercase tracking-widest pb-2 border-b border-[#262626]">
                  <Sparkles size={15} />
                  <span>Developer Philosophy</span>
                </div>
                <p>
                  As a passionate{" "}
                  <strong className="text-[#F3F0EA] font-semibold underline decoration-[#D6A85F]/50 underline-offset-4">Full Stack Developer</strong>, I
                  craft modern, secure, and robust web applications using the MERN stack (MongoDB, Express, React, Node.js).
                </p>
                <p className="text-[#A7A29A] text-sm leading-relaxed">
                  My goal is to deliver seamless end-to-end user experiences through high-performance front-ends, structured databases, and scalable REST APIs.
                </p>
              </div>

          
              <div className="pt-8 border-t border-[#262626] flex gap-4 mt-8">
                <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 flex-1 text-center group/stat hover:border-[#D6A85F]/50 transition-all duration-300">
                  <div className="text-3xl font-extrabold text-[#F3F0EA] font-display group-hover/stat:text-[#D6A85F] transition-colors">
                    Fast
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A7A29A] mt-1">
                    Learner
                  </div>
                </div>
                
                <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 flex-1 text-center group/stat hover:border-[#D6A85F]/50 transition-all duration-300">
                  <div className="text-3xl font-extrabold text-[#D6A85F] font-display">
                    5+
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A7A29A] mt-1">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

  
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="p-8 sm:p-9 rounded-2xl bg-[#1A1A1A] border border-[#262626] backdrop-blur-xl shadow-xl hover:border-[#D6A85F]/50 transition-all duration-300 space-y-6 h-full">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <Cpu size={18} className="text-[#D6A85F]" />
                  <h3 className="text-lg font-bold text-[#F3F0EA] font-display">Technical Proficiency</h3>
                </div>
                <span className="text-xs font-mono text-[#D6A85F] bg-[#111111] px-3 py-1 rounded-full border border-[#262626] font-semibold">
                  CATEGORIZED STACK
                </span>
              </div>

              <div className="space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#A7A29A] font-semibold flex items-center gap-2">
                      <Code size={13} className="text-[#D6A85F]" />
                      <span>{cat.title}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cat.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="p-3.5 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-between group/skill hover:border-[#D6A85F]/50 transition-all duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={20} className="text-[#D6A85F] group-hover/skill:scale-110 transition-transform" />
                              <span className="text-sm font-semibold text-[#F3F0EA] group-hover/skill:text-[#D6A85F] transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[#A7A29A] bg-[#1A1A1A] px-2 py-0.5 rounded border border-[#262626]">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;


