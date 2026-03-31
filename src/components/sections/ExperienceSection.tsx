import { motion } from 'framer-motion';
import { experiences } from '@/data/content';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green">
            Internship
          </h2>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 165, 0.3)' }}
              className="relative p-6 rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden group"
            >
              {/* Green glow effect for some cards */}
              {(index === 1 || index === 3) && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl" />
              )}
              {(index === 0 || index === 2) && (
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl" />
              )}

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden"
                >
                  <img
                    src={exp.icon}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-mono font-semibold text-text-primary mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-text-secondary text-sm leading-relaxed">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc pl-4 space-y-1">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
