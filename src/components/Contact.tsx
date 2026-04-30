import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    formData.append("access_key", "7b9da5b8-9fde-4aa2-8a69-ec97d0734084");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-primary/10 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Subject of your message"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm text-center font-medium">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again or email me directly.</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
