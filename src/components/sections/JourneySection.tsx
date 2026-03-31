import { motion } from 'framer-motion';
import { timelineEntries } from '@/data/content';

export function JourneySection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green mb-4">
              My journey report
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
              I&apos;ve had the opportunity to develop software across a variety of settings – from small side-jobs to large corporation, mostly building financial systems. Here&apos;s my timeline of my journey
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border-subtle" />

          {/* Timeline Entries */}
          <div className="space-y-16">
            {timelineEntries.map((entry, index) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Year marker - Left side on desktop */}
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Dot on timeline */}
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-green z-10" />
                    
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-5xl sm:text-6xl font-mono font-bold text-text-primary/20 ml-12 lg:ml-0"
                    >
                      {entry.year}
                    </motion.span>
                  </div>

                  {/* Content - Right side on desktop */}
                  <div className={`ml-12 lg:ml-0 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {entry.content}
                    </p>

                    {/* Images */}
                    <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {entry.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                          className="w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden border border-border-subtle"
                        >
                          <img
                            src={image}
                            alt={`Journey ${entry.year} - ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
