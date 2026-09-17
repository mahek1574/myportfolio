import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((res) => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error submitting contact form:", err);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#111111] text-[#F3F0EA] relative overflow-hidden font-sans"
    >
  
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#D6A85F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
      
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-xs font-mono font-medium uppercase tracking-wider mb-4 backdrop-blur-md">
              <Mail size={13} />
              <span>// 05. GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0EA] tracking-tight font-display mb-6">
              Let's Build <span className="text-[#D6A85F]">Something Great.</span>
            </h2>

            <div className="space-y-5 text-[#A7A29A] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                As a passionate{" "}
                <strong className="text-[#F3F0EA] font-semibold underline decoration-[#D6A85F]/40 underline-offset-4">Full Stack Developer</strong>, I
                specialize in creating end-to-end web applications that combine
                visually stunning user interfaces with highly performant backend APIs.
              </p>

              <p>
                I work with modern technologies like{" "}
                <b className="text-[#F3F0EA] font-semibold">MongoDB, Express, React, Node.js, and Tailwind CSS</b>
                {" "}to build scalable, interactive, and user-friendly products with
                clean, maintainable code architectures.
              </p>

              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#262626] text-[#D6A85F] text-sm font-medium pt-4 backdrop-blur-md flex items-start gap-3">
                <Sparkles size={20} className="shrink-0 text-[#D6A85F] mt-0.5" />
                <span>
                  I am always excited to work on creative projects and bring ideas
                  to life. Whether you have a project or just want to connect,
                  feel free to reach out!
                </span>
              </div>
            </div>
          </motion.div>


          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#1A1A1A] border border-[#262626] p-8 sm:p-10 rounded-2xl backdrop-blur-xl shadow-xl relative overflow-hidden group hover:border-[#D6A85F]/40 transition-all duration-300">
              
          
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D6A85F]" />

              <h3 className="text-xl font-bold text-[#F3F0EA] font-display mb-6 pb-4 border-b border-[#262626] flex items-center justify-between">
                <span>Send A Direct Message</span>
                <span className="text-xs font-mono text-[#D6A85F] bg-[#111111] px-2.5 py-1 rounded border border-[#262626]">DIRECT MAIL</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                
              
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7A29A] mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name" 
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#262626] rounded-xl text-[#F3F0EA] placeholder-[#A7A29A]/50 text-sm focus:outline-none focus:border-[#D6A85F] transition-all font-sans"
                    placeholder="mahek"
                  />
                </div>

          
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7A29A] mb-2 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#262626] rounded-xl text-[#F3F0EA] placeholder-[#A7A29A]/50 text-sm focus:outline-none focus:border-[#D6A85F] transition-all font-sans"
                    placeholder="mahek@gmail.com"
                  />
                </div>

        
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7A29A] mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message" 
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#262626] rounded-xl text-[#F3F0EA] placeholder-[#A7A29A]/50 text-sm focus:outline-none focus:border-[#D6A85F] transition-all resize-none font-sans"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative w-full py-4 bg-[#D6A85F] hover:bg-[#E5B869] text-[#111111] font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 rounded-full border-2 border-[#111111] border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 font-mono uppercase tracking-wider">
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>

            
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#D6A85F]/10 border border-[#D6A85F]/30 text-[#D6A85F] text-sm flex items-center gap-2 font-mono"
                  >
                    <CheckCircle2 size={18} className="text-[#D6A85F] shrink-0" />
                    <span>Message sent successfully! I'll be in touch soon.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-2 font-mono"
                  >
                    <AlertCircle size={18} className="text-rose-400 shrink-0" />
                    <span>Something went wrong. Please try again later.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

