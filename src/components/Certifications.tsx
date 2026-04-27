import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';

const certificationsData = [
  {
    name: 'Naukri Campus Young Turks 2025 - Data & AI Alchemists',
    authority: 'Naukri Campus in association with DoSelect',
    date: 'September 2025',
    icon: Trophy,
    highlight: 'text-yellow-500',
    description: [
      'Achieved 94.54 Percentile, securing a national rank of 14,028 out of 500,000+ students (Top 3% Nationally).',
      'Awarded Certificate of Merit and qualified for the final advanced skills assessment in the Data & AI Alchemists track.',
      'Recognized by industry experts for exceptional problem-solving and practical applications of Machine Learning and AI.'
    ]
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    authority: 'Oracle',
    date: 'September 2025',
    icon: Award,
    highlight: 'text-primary',
    description: [
      'Validated expertise in Cloud architecture, AI fundamentals, and Responsible AI practices.',
      'Demonstrated practical proficiency in deploying and managing Machine Learning workflows on Oracle Cloud Infrastructure (OCI).'
    ]
  }
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nationally recognized credentials demonstrating elite expertise in Data Science and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/30 transition-colors">
                  <cert.icon size={32} className={cert.highlight} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-foreground">
                      {cert.authority}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-auto">
                {cert.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className={`${cert.highlight} mt-1`}>▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
