import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';

export function ProfileSection() {
  return (
    <section id="profile" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


          {/* CURRENTLY WORKING ON */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl bg-bg-secondary border border-border-subtle flex flex-col justify-center"
          >
            <p className="text-text-muted text-sm mb-2">Currently Working On</p>
            <h3 className="text-lg font-mono font-semibold text-text-primary mb-2">
              EV Charging Station Finder
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Real-time system showing EV charging station availability with smart routing and map integration.
            </p>
          </motion.div>

          {/* LEARNING */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-bg-secondary border border-border-subtle flex flex-col justify-center"
          >
            <p className="text-text-muted text-sm mb-2">Currently Learning</p>
            <h3 className="text-lg font-mono font-semibold text-text-primary mb-2">
              Cloud & Microservices Architecture
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Exploring scalable systems, containerization, and distributed backend design.
            </p>
          </motion.div>

          {/* GITHUB */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-bg-secondary border border-border-subtle"
          >
            <h3 className="text-lg font-mono font-semibold text-text-primary mb-2">
              GitHub
            </h3>
            <p className="text-text-muted text-sm mb-3">
              Explore my projects & code
            </p>
            <a
              href="https://github.com/iaaamnk"
              target="_blank"
              className="text-accent-green text-sm hover:underline"
            >
              github.com/iaaamnk →
            </a>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-bg-secondary border border-border-subtle"
          >
            <h3 className="text-lg font-mono font-semibold text-text-primary mb-2">
              LinkedIn
            </h3>
            <p className="text-text-muted text-sm mb-3">
              Professional profile & achievements
            </p>
            <a
              href="https://www.linkedin.com/in/iaaamnk"
              target="_blank"
              className="text-accent-green text-sm hover:underline"
            >
              Connect with me →
            </a>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-bg-secondary border border-border-subtle flex flex-col justify-center"
          >
            <h3 className="text-lg font-mono font-semibold text-text-primary mb-4">
              Email
            </h3>
            <button
              onClick={() =>
                navigator.clipboard.writeText("anamikavinesh12@gmail.com")
              }
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-bg-card border border-border-subtle text-text-primary text-sm hover:border-accent-green transition break-all"
            >
              <Copy className="w-4 h-4 flex-shrink-0" />
              anamikavinesh12@gmail.com
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
