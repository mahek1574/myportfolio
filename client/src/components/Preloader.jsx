import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
  
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFinished(true), 250);
          return 100;
        }
        return prev + 1;
      });
    }, 14);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none bg-[#111111] text-[#F3F0EA] font-sans"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#111111] z-10"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#111111] z-10"
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center p-6 text-center"
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4 }}
          >
            
            <div className="absolute w-72 h-72 bg-[#D6A85F]/10 rounded-full blur-3xl pointer-events-none" />

            
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#262626"
                  strokeWidth="2.5"
                  fill="transparent"
                />
               
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#D6A85F"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 42}
                  strokeDashoffset={2 * Math.PI * 42 * (1 - progress / 100)}
                  transition={{ ease: "linear" }}
                />
              </svg>

            
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#F3F0EA] font-display">
                  MS<span className="text-[#D6A85F]">.</span>
                </h1>
                <span className="text-xs font-mono text-[#A7A29A] font-medium tracking-wider mt-1">
                  {progress}%
                </span>
              </div>
            </div>

          
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A85F] animate-pulse" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D6A85F] uppercase font-semibold">
                Full Stack Developer
              </span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;




