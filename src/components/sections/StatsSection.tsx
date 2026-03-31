import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { stats } from '@/data/content';

export function StatsSection() {
  return (
    <section id="stats" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-center lg:text-left"
            >
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <AnimatedCounter
                  value={stat.value}
                  className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-text-primary"
                />
              </div>
              <p className="text-text-muted text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
