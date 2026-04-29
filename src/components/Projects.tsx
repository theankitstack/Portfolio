import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PORTFOLIO_CONTENT } from "../constants";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Projects() {
  const { projects } = PORTFOLIO_CONTENT;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Featured Projects" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card flex flex-col group h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-brand/10 border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <Layers size={24} />
                </div>
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-white/40 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-white/40 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-glass-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href={PORTFOLIO_CONTENT.contact.socials.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} /> View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
