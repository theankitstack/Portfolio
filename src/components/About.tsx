import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PORTFOLIO_CONTENT } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const { about } = PORTFOLIO_CONTENT;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {about.content.map((p, i) => (
              <p key={i} className="text-lg text-white/70 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {about.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card aspect-[4/3] flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center p-8">
                  <div className="text-6xl font-black text-white/5 mb-4 group-hover:scale-110 transition-transform duration-500 font-display uppercase tracking-widest">Growth</div>
                  <p className="text-white/40 italic font-mono text-sm max-w-xs">"The only way to do great work is to love what you do."</p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand/20 rounded-tr-3xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand/20 rounded-bl-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
