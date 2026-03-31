import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/content';

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <GraduationCap className="w-8 h-8 text-accent-green" />
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green">
            Education
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 165, 0.5)' }}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                ${edu.highlighted 
                  ? 'bg-bg-card border-accent-green/50 shadow-glow-green' 
                  : 'bg-bg-secondary border-border-subtle'
                }
              `}
            >
              <h3 className="text-lg font-mono font-semibold text-text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-text-muted text-sm mb-4">{edu.period}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-accent-green" />
                <span className="text-accent-green font-mono font-semibold">
                  {edu.score}
                </span>
              </div>

              <p className="text-text-secondary text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
