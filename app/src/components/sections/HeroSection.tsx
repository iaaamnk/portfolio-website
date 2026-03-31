import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { CircularProfile } from '@/components/shared/CircularProfile';
import { SocialIcons } from '@/components/shared/SocialIcons';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-text-secondary font-mono text-sm mb-4"
            >
              Machine Learning Developer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-2"
            >
              <span className="text-text-primary">Hello I&apos;m</span>
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-6"
            >
              <span className="text-accent-green">Anamika</span>
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-8"
            >
              <span className="text-accent-green">Vinesh</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-text-secondary text-sm sm:text-base max-w-2xl mb-8 leading-relaxed space-y-2"
            >
              <p>Machine Learning Developer & Software Engineer | India</p>
              <p className="pt-2"><strong>Email:</strong> anamikavinesh12@gmail.com</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.a
                href="/Anamika_Vinesh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-green text-accent-green font-mono text-sm font-medium hover:bg-accent-green/10 transition-colors duration-200"
              >
                VIEW CV
                <ChevronRight className="w-4 h-4" />
              </motion.a>

              <SocialIcons />
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <CircularProfile
              src="/images/profile.png"
              alt="Anamika Vinesh"
              size={350}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
