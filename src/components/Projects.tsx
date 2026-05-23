import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '🧠 AI Agents & RAG',
  '👁️ Computer Vision',
  '🌐 Scalable Pipelines'
];

const projects = [
  {
    title: 'Dynamic Multi-Agent Orchestrator',
    description: 'Architected a Dockerized multi-agent orchestrator using FastAPI and LangGraph, dynamically routing tasks across 4 specialized sub-agents. Integrated distinct tool interfaces (Python sandbox, SQL) streaming token-by-token responses via Server-Sent Events. Engineered a dynamic context manager and adversarial evaluation pipeline, deployed as a REST API with zero-touch Docker Compose setup.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Docker', 'SQL', 'SSE'],
    categories: ['🧠 AI Agents & RAG', '🌐 Scalable Pipelines'],
    github: 'https://github.com/therajsharma20/your-repo-name', // Update with actual repo link
    live: '',
    image: '/dynamic-multiagent.png', 
  },
  {
    title: 'VidQuery: Multimodal AI Video Search Engine',
    description: 'An end-to-end pipeline that searches video footage using semantic text queries and zero-shot detection. Features a 1 FPS frame-extraction system using CLIP (ViT-B-32) and ChromaDB for sub-second vector retrieval, alongside cross-frame object tracking via IoU.',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'CLIP', 'ChromaDB', 'PyTorch'],
    categories: ['👁️ Computer Vision', '🌐 Scalable Pipelines'],
    github: 'https://github.com/therajsharma20/vidquery', 
    live: '', 
    image: '/vidquery.png', 
  },
  {
    title: 'AI Document Intelligence Agent (RAG System)',
    description: 'Engineered a highly scalable Retrieval-Augmented Generation pipeline capable of processing 200MB PDFs. Built a LangChain text pipeline generating Llama-3.3-70b embeddings for sub-second retrieval, achieving inference speeds of 100+ tokens/sec via Streamlit and Groq API.',
    tags: ['Python', 'LangChain', 'Llama 3.3', 'ChromaDB', 'Groq API', 'Streamlit'],
    categories: ['🧠 AI Agents & RAG', '🌐 Scalable Pipelines'],
    github: 'https://github.com/therajsharma20/ai-pdf-agent', 
    live: 'https://ai-pdf-agent.streamlit.app/',
    image: '/ragagent.png', 
  }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative bg-background" ref={ref}>
      <div className="section-container max-w-7xl mx-auto">
        
        {/* --- HEADER & FILTERS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto mb-8">
            A selection of my recent work in multimodal systems, computer vision, and high-performance AI pipelines.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(20,184,166,0.3)]'
                    : 'bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all shadow-lg cursor-pointer group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="w-full h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-background/80 text-foreground px-4 py-2 rounded-full font-medium shadow-xl">
                    View Details
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button (If you add more than 6 projects later) */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary group flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight className={`transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} size={18} />
            </button>
          </motion.div>
        )}
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full transition-colors z-20 backdrop-blur-md border border-primary/20"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto p-0">
                <div className="w-full h-64 sm:h-80 overflow-hidden relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                <div className="p-6 sm:p-8 -mt-12 relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-wrap">
                    {selectedProject.description}
                  </p>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                        <Github size={18} /> View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
