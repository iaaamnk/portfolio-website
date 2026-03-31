import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SocialIcons } from '@/components/shared/SocialIcons';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-mono font-bold mb-6">
            <span className="text-text-primary">Let&apos;s </span>
            <span className="text-accent-green">Talk</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            What led you here? What are you looking for? I would love to hear from you over a virtual coffee chat!
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="mailto:anamikavinesh12@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-bg-card border border-border-subtle text-text-primary font-medium hover:border-accent-green transition-colors duration-200"
          >
            Let&apos;s get in touch
            <Send className="w-4 h-4" />
          </motion.a>
        </motion.div>


        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border-subtle"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-text-primary font-mono font-medium">
              Anamika Vinesh
            </p>
            <SocialIcons variant="outline" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
