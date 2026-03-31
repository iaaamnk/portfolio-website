import { motion } from 'framer-motion';
import { skillsCategories } from '@/data/content';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            A comprehensive overview of my technical capabilities. I focus on building robust, scalable applications and machine learning models, grouped by the domains I specialize in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="p-8 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-green/50 transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-accent-green/5 rounded-full blur-3xl group-hover:bg-accent-green/10 transition-colors duration-500" />
              
              <h3 className="text-xl font-mono font-semibold text-text-primary mb-4 relative z-10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-bg-primary/50 border border-border-subtle rounded-full text-sm text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
