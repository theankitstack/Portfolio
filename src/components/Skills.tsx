import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PORTFOLIO_CONTENT } from "../constants";

export default function Skills() {
  const { skills } = PORTFOLIO_CONTENT;

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="My Tech Stack" center />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-bold mb-6 text-brand flex items-center justify-between">
                {skillGroup.category}
                <div className="h-px bg-brand/20 flex-grow ml-4" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70 hover:text-white hover:border-brand/40 transition-all cursor-default"
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
