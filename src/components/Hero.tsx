import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-20">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">Hi, I am</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Raj <span className="gradient-text">Sharma</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl"
          >
            <TypeWriter
              words={[
                'AI Engineer & Data Scientist',
                'Multimodal Systems Architect',
                'RAG Pipeline Builder',
                'Computer Vision'
              ]}
              className="text-primary font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Based in Sillod, Maharashtra, India 🇮🇳.
            <br /><br />
            I build intelligent, scalable AI systems—architecting end-to-end pipelines from raw data to high-performance inference.
          </motion.p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10">
            <a href="https://github.com/therajsharma20" target="_blank" rel="noopener noreferrer" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/raj-sharma-datascience" target="_blank" rel="noopener noreferrer" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:r.m.sharma.1069@gmail.com" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/Raj_Sharma_Resume.pdf" download className="btn-secondary flex items-center gap-2">
              Resume <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative lg:pt-32"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 transform scale-105 blur-sm" />

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card p-1"
            >
              <img
                src="/profile.png"
                alt="Raj Sharma"
                className="w-full h-full object-cover object-top rounded-[1.8rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-black/80 border border-primary/30 p-3 rounded-xl shadow-xl backdrop-blur-md z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-white">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
