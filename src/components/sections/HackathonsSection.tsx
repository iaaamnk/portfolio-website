import { motion } from 'framer-motion';
import { hackathonsData } from '@/data/content';

export function HackathonsSection() {
  return (
    <section id="hackathons" className="py-20 relative bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green mb-4">
            Hackathons & Certifications
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A track record of my participation in global hackathons, cybersecurity CTFs, and technical certifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line spanning the entire timeline */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />

          <div className="space-y-12">
            {hackathonsData.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[3px] md:left-[27px] top-1.5 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-accent-purple bg-bg-secondary group-hover:bg-accent-purple transition-colors duration-300" />
                
                <div className="bg-bg-primary border border-border-subtle p-6 rounded-2xl hover:border-accent-purple/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                    <h3 className="text-xl font-mono font-semibold text-text-primary">
                      {hackathon.title}
                    </h3>
                    {hackathon.year && (
                      <span className="text-accent-purple font-mono text-sm mt-1 md:mt-0 font-medium bg-accent-purple/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {hackathon.year}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    {hackathon.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
