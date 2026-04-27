import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Animated Background Waves (Behind the content) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,40.44c58,10.79,114.16,40.13,172,51.86,82.39,16.72,168.19,17.73,250.45-.39C823.78,70,906.67,30,985.66,10.83c70.05-18.48,146.53-26.09,214.34-3V0H0V27.35A600.21,600.21,0,0,0,321.39,40.44Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            fill="rgba(20, 184, 166, 0.05)"
          />
          <motion.path
            animate={{ x: [-100, 0, -100] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.38,57.18,28.73,114,51.18,174.8,55,74.42,4.66,147.16-16.77,218.3-52.45,52-25.92,104.22-42.34,158.7-44.58A555.51,555.51,0,0,1,1200,53.1V0Z"
            fill="rgba(20, 184, 166, 0.08)"
          />
        </svg>
      </div>

      {/* FIXED: items-center restored and extra padding removed */}
      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
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
                'Computer Vision',
                'Predictive Modeling'
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
            I build intelligent, scalable AI systems—architecting end-to-end pipelines from raw data to high-performance inference. My focus is on vector databases, computer vision, and bridging the gap between complex datasets and actionable insights.
          </motion.p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10">
            <a href="https://github.com/therajsharma20" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/raj-sharma-datascience" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:r.m.sharma.1069@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={18} className="-rotate-90" />
            </a>
            <a href="/Raj_Sharma_Resume.pdf" download className="btn-secondary flex items-center gap-2">
              Resume <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Image - Size Locked to Perfect Dimensions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 transform scale-105 blur-sm" />

            {/* Perfect Framing Kept */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm"
            >
              <img
                src="/profile.png"
                alt="Raj Sharma"
                className="w-full h-full object-cover object-top p-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Open to Work Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
