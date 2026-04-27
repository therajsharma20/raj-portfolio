import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    document.title = 'Raj Sharma | AI Engineer & Data Scientist';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Portfolio of Raj Mahesh Sharma - AI Engineer and Data Scientist based in Amravati, Maharashtra, India. Expertise in Machine Learning, Computer Vision, and RAG Systems.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        {showAllCertifications ? (
          <Certifications />
        ) : (
          <>
            <Certifications />
          </>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
