import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PORTFOLIO_CONTENT } from "../constants";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = PORTFOLIO_CONTENT;

  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Experience & Education" center />
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experience.items.map((item, i) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 border-l-2 border-glass-border hover:border-brand transition-colors group"
            >
              {/* Dot on line */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-dark border-2 border-glass-border group-hover:border-brand group-hover:bg-brand transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 font-medium">
                    {item.role.includes("B.Tech") ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                    {item.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm font-mono text-white/60">
                  <Calendar size={14} className="text-brand" />
                  {item.period}
                </div>
              </div>
              
              <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
