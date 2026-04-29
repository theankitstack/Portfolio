import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white/40">/</span> {title}
        </h2>
        {subtitle && <p className="text-lg text-white/50 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`h-1 w-20 bg-brand mt-4 ${center ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
