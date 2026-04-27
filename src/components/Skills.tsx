import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'Computer Vision', 'YOLOv8', 'CLIP (ViT)', 'Predictive Modeling', 'Scikit-learn'],
  },
  {
    title: 'GenAI & RAG Systems',
    skills: ['LangChain', 'Llama 3.3', 'ChromaDB', 'Vector Databases', 'SDXL / FLUX', 'ControlNet'],
  },
  {
    title: 'Data Science & Engineering',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Visualization', 'Exploratory Data Analysis'],
  },
  {
    title: 'Systems & Architecture',
    skills: ['Hardware Inference (CUDA)', 'Scalable Data Pipelines', 'Streamlit', 'API Integration (Groq)', 'Asynchronous Backend'],
  },
  {
    title: 'Core Computer Science',
    skills: ['Data Structures', 'Algorithms (DSA)', 'Object-Oriented Programming', 'Problem Solving', 'Optimization'],
  },
  {
    title: 'Developer Tools & Libraries',
    skills: ['Git/GitHub', 'Docker', 'OpenCV', 'Jupyter', 'VS Code'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The specialized tools, frameworks, and architecture I leverage to build high-performance AI systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
