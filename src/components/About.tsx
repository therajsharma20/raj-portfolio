import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Database, Zap, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Vector Databases, Multimodal Embeddings, Computer Vision, and Predictive Modeling (Scikit-learn).',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Python, Pandas, NumPy, SQL, Data Visualization, and unstructured data processing.',
  },
  {
    icon: Cpu,
    title: 'Systems & Architecture',
    description: 'Hardware-Accelerated Inference (CUDA) and high-performance scalable Data Pipelines.',
  },
  {
    icon: Zap,
    title: 'Generative AI',
    description: 'Fast-inference pipelines (SDXL/FLUX) and state-preserving integrations (IP-Adapters/ControlNet).',
  },
  {
    icon: Code2,
    title: 'Algorithmic Focus',
    description: 'Strong foundation in Data Structures and Algorithms (DSA) for optimized backend architecture.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Driven',
    description: 'Bridging the gap between raw data and actionable insights in high-impact environments.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Architecting scalable AI systems and high-performance data pipelines
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an <span className="text-foreground font-medium">AI Engineer and Data Scientist</span> focused on architecting scalable, multimodal AI systems and transforming complex datasets into actionable insights. I don't just analyze data; I build the pipelines that make it searchable, scalable, and intelligent.
              </p>
              <p>
                My core expertise lies at the intersection of data engineering and machine learning. I have a strong foundation in architecting <span className="text-primary font-medium">zero-shot semantic search pipelines</span>, leveraging vector databases, latent embeddings, and computer vision models. I specialize in bridging the gap between raw, unstructured data and high-performance inference.
              </p>
              <p>
                <span className="text-primary font-medium">Continuous Growth:</span> I treat my tech stack as a constantly evolving toolkit. Currently, I am expanding my expertise into Generative AI workflows, focusing on fast-inference pipelines (SDXL/FLUX), state-preserving integrations (IP-Adapters/ControlNet), and asynchronous backend architectures.
              </p>
              <p>
                I thrive in performance-driven environments where the code speaks for itself. I am actively seeking high-impact roles at product-based tech companies and am always eager to connect with founders and engineers building the next generation of AI.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
