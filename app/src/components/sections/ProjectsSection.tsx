import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/content';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-accent-green">
            My Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden hover:border-accent-green/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.url && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-bg-card/90 backdrop-blur text-xs font-mono text-text-primary">
                    {project.url}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-mono font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <div className="text-text-secondary text-sm mb-4">
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc pl-4 space-y-1">
                      {project.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="w-8 h-8 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-xs font-mono text-text-secondary"
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-green text-sm font-medium hover:underline"
                    >
                      Check Live Site
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-green text-sm font-medium hover:underline"
                    >
                      Github
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
