import { motion } from "motion/react";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../constants";

export default function Hero() {
  const { hero } = PORTFOLIO_CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6">
            <Terminal size={16} className="text-brand" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">Ready to build</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient leading-tight">{hero.name}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-medium text-white/80 mb-4 font-display">
            {hero.title} | {hero.subtitle}
          </p>
          
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            {hero.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group flex items-center gap-2">
              {hero.cta.primary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              {hero.cta.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative group cursor-pointer">
            {/* Main Image Container - Made Circular */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-glass-border transition-all duration-500 group-hover:border-brand group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src={hero.photo} 
                  alt={hero.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
            </motion.div>
            
            {/* Lighting / Glow Effect - Pulses on hover */}
            <div className="absolute -inset-8 bg-brand/20 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-brand via-white to-brand-secondary rounded-full -z-10 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700 group-hover:scale-110" />
            
            <div className="absolute inset-0 rounded-full border-2 border-brand/0 group-hover:border-brand/50 group-hover:scale-125 transition-all duration-1000 opacity-0 group-hover:opacity-100 -z-10" />

            {/* Floating badges - repositioned for circle */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-6 py-4 shadow-xl border border-white/10 z-20"
            >
              <div className="text-2xl font-bold">10+</div>
              <div className="text-[10px] uppercase tracking-tighter text-white/60">Projects Built</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-6 py-4 shadow-xl border border-white/10 z-20"
            >
              <div className="text-brand font-mono text-xs mb-1">Current Focus:</div>
              <div className="text-sm font-semibold">Full Stack Apps</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
