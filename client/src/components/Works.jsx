import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ArrowUpRight, Layers, Sparkles, FolderGit2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CarePlus - Doctor Appointment System",
    shortDesc:
      "A full-stack healthcare platform for booking and managing doctor appointments",
    description:
      "CarePlus is a full-stack doctor appointment management system built with React, Node.js, Express.js, MongoDB, and Tailwind CSS. Patients can register, browse doctors, book appointments, and manage their schedules. Doctors can view and manage appointment requests, while administrators can manage users, doctors, and platform data. The application includes authentication, role-based access control, responsive UI, and secure backend APIs.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    badge: "Flagship Full-Stack System",
    githubLink:
      "https://github.com/mahek1574/NODE_PROJECTS/tree/main/carepulse",
    liveLink: "https://carepulse-azure-nine.vercel.app/",
  },
  {
    id: 2,
    title: "FurniShop - Furniture Website",
    shortDesc: "A modern furniture shopping website with elegant UI.",
    description:
      "FurniShop is a stylish and user-friendly furniture website designed to showcase and sell modern home decor products. It features a clean UI, product listings with categories, add-to-cart functionality, and a smooth browsing experience. The design focuses on aesthetics and usability, making it easy for users to explore and purchase furniture online.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    badge: "E-Commerce Experience",
    githubLink:
      "https://github.com/mahek1574/portfolio/tree/main/Furnishop",
    liveLink:"https://portfolio-black-ten-18.vercel.app/",
  },
  {
    id: 3,
    title: "MovieVerse - Movie Streaming Platform",
    shortDesc: "A full-stack movie discovery and streaming platform",
    description:
      "MovieVerse is a full-stack movie platform built using React, Node.js, Express.js, MongoDB, and Tailwind CSS. Users can browse movies, search by title, view detailed movie information, explore categories, and manage their favorite movies. The application features a modern responsive UI, secure authentication, REST APIs, dynamic content management, and an optimized user experience across devices.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    badge: "Full-Stack Media App",
    githubLink:
      "https://github.com/mahek1574/NODE_PROJECTS/tree/main/MOVIE_PROJECT",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Image gallery",
    shortDesc: "Responsive Image & Video Gallery with Advanced Filtering",
    description:
      "A responsive image and video gallery built with React and Tailwind CSS. It features category-based filtering, search functionality, and rating-based sorting. Users can view media in a modal with detailed information and navigate through items using next and previous controls, along with dynamic suggestions for a better browsing experience.",
    techStack: ["Framer Motion", "JavaScript", "React.js", "Lucide-icons"],
    badge: "Interactive UI Gallery",
    githubLink:
      "https://github.com/mahek1574/portfolio/commit/3a2d01dffc1f4ad937dee51552ea2ae809f021b2",
    liveLink: "https://image-gallery-fzdf3hwpa-mahek-1574.vercel.app/",
  },
  {
    id: 5,
    title: "Nail Art Studio",
    shortDesc: "Modern and interactive nail art portfolio website.",
    description:
      "A beautifully designed Nail Art portfolio website showcasing creative nail designs with smooth animations and a premium user experience. Built using React.js, Tailwind CSS, Framer Motion, and Lenis for seamless scrolling and engaging UI interactions.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    badge: "Live Deployed Site",
    githubLink: "https://github.com/mahek1574/PROJECTS_/tree/main/nail_studio",
    liveLink: "https://projects-td18.vercel.app/",
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-28 bg-[#111111] text-[#F3F0EA] relative overflow-hidden font-sans">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#D6A85F]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
       
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-xs font-mono font-medium uppercase tracking-wider mb-4 backdrop-blur-md">
              <Layers size={13} />
              <span>// 04. SELECTED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0EA] tracking-tight font-display">
              Featured <span className="text-[#D6A85F]">Projects</span>
            </h2>
          </div>
          <p className="text-[#A7A29A] text-base max-w-md leading-relaxed font-normal">
            Explore some of my standout web projects, highlighting my full-stack and frontend development expertise.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          
          <motion.div
            key={projects[0].id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(projects[0])}
            className="lg:col-span-12 group relative rounded-2xl bg-[#1A1A1A] border border-[#262626] p-8 sm:p-12 overflow-hidden cursor-pointer backdrop-blur-xl shadow-xl hover:border-[#D6A85F]/60 transition-all duration-300"
          >
           
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D6A85F]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#D6A85F] px-3 py-1 rounded-full bg-[#111111] border border-[#262626]">
                    01 // FEATURED PLATFORM
                  </span>
                  <span className="text-xs font-medium text-[#A7A29A] font-mono flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#D6A85F]" />
                    <span>{projects[0].badge}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F3F0EA] font-display group-hover:text-[#D6A85F] transition-colors">
                  {projects[0].title}
                </h3>

                <p className="text-[#A7A29A] text-base sm:text-lg leading-relaxed font-normal">
                  {projects[0].shortDesc}
                </p>

              
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#111111] text-[#D6A85F] border border-[#262626]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 inline-flex items-center gap-2 text-[#D6A85F] font-bold text-sm tracking-wide group-hover:translate-x-1.5 transition-transform">
                  <span>View Case Study</span>
                  <ArrowUpRight size={17} className="stroke-[2.5]" />
                </div>
              </div>

          
              <div className="lg:col-span-5 flex items-center justify-center p-10 rounded-xl bg-[#111111] border border-[#262626] group-hover:border-[#D6A85F]/40 transition-colors shadow-inner">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center mx-auto text-[#D6A85F] font-black text-2xl font-display shadow-md">
                    CP
                  </div>
                  <div className="text-xl font-bold text-[#F3F0EA] font-display">
                    CarePlus Platform
                  </div>
                  <div className="text-xs text-[#A7A29A] font-mono">
                    Healthcare Management System
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

    
          {projects.slice(1).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="lg:col-span-6 group relative rounded-2xl bg-[#1A1A1A] border border-[#262626] p-8 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-xl shadow-xl hover:border-[#D6A85F]/50 transition-all duration-300 min-h-[300px]"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D6A85F] px-3 py-1 rounded-full bg-[#111111] border border-[#262626]">
                    0{idx + 2} // CASE STUDY
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#A7A29A] group-hover:text-[#D6A85F] group-hover:border-[#D6A85F]/40 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F3F0EA] font-display group-hover:text-[#D6A85F] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#A7A29A] text-sm leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-[#262626] flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#111111] text-[#A7A29A] border border-[#262626]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

     
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           
            <div
              className="absolute inset-0 bg-[#111111]/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

           
            <motion.div
              className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col z-10"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
            >
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-[#111111] text-[#A7A29A] hover:text-[#F3F0EA] rounded-full border border-[#262626] hover:bg-[#D6A85F] hover:text-[#111111] transition-all"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              
              <div className="p-6 sm:p-8 bg-[#111111] border-b border-[#262626] relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D6A85F] uppercase tracking-wider flex items-center gap-1.5">
                    <FolderGit2 size={13} />
                    <span>Project Detail Overview</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0EA] font-display pr-8">
                  {selectedProject.title}
                </h3>
              </div>

              
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#D6A85F] uppercase tracking-widest mb-2">
                    Description & Specifications
                  </h4>
                  <p className="text-[#A7A29A] text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-[#D6A85F] uppercase tracking-widest mb-3">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#111111] border border-[#262626] text-[#F3F0EA] rounded-lg text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                <div className="pt-6 border-t border-[#262626] flex flex-wrap gap-3">
                  {selectedProject.liveLink && selectedProject.liveLink !== "#" ? (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#D6A85F] hover:bg-[#E5B869] text-[#111111] font-bold rounded-xl text-sm transition-all shadow-md"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] border border-[#262626] text-[#A7A29A] font-semibold rounded-xl text-sm cursor-not-allowed font-mono">
                      <ExternalLink size={16} />
                      <span>Live Demo (Local / Internal)</span>
                    </span>
                  )}

                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#1A1A1A] text-[#F3F0EA] border border-[#262626] hover:border-[#D6A85F]/40 rounded-xl font-bold text-sm transition-all"
                    >
                      <Github size={16} className="text-[#D6A85F]" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;


