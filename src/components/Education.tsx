import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science',
    institution: 'Yeshwantrao Chavan College',
    location: 'Maharashtra, India',
    period: 'Expected 05/2027',
    grade: '8.44 / 10 CGPA', 
    logo: 'BSc',
    description: 'A rigorous academic program establishing a strong foundation in computational theory, software engineering, and advanced mathematics.',
    learnings: [
      'Data Structures & Algorithms',
      'Database Management Systems (SQL)',
      'Object-Oriented Programming (OOP)',
      'Applied Mathematics & Statistics'
    ]
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The theoretical foundation driving my practical implementations.
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="flex flex-col gap-8 md:flex-row md:gap-8 w-full justify-center items-stretch"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 min-w-[260px] max-w-xl bg-card/70 rounded-2xl shadow-lg hover:shadow-xl border border-border px-6 py-8 flex flex-col md:min-h-[410px] mx-auto backdrop-blur-[2px] transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.25)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-xl gradient-text">{edu.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-left group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap size={18} /> <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <MapPin size={14} className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                    <Award size={14} className="text-primary" />
                    <span className="font-bold text-primary">{edu.grade}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-normal text-balance">
                  {edu.description}
                </p>
                
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm font-semibold text-foreground mb-2">Relevant Coursework:</p>
                  <ul className="space-y-2 mb-2">
                    {edu.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
