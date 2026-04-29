import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PORTFOLIO_CONTENT } from "../constants";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
  const { contact } = PORTFOLIO_CONTENT;

  const socialIcons = [
    { name: "GitHub", icon: <Github size={24} />, link: contact.socials.github },
    { name: "LinkedIn", icon: <Linkedin size={24} />, link: contact.socials.linkedin },
    { name: "Twitter", icon: <Twitter size={24} />, link: contact.socials.twitter },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <SectionHeader title="Get In Touch" center />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card max-w-2xl mx-auto p-12"
        >
          <div className="mb-8">
            <div className="p-4 rounded-full bg-brand/10 w-fit mx-auto mb-6 text-brand">
              <Mail size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Let's work together</h3>
            <p className="text-white/60 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href={`mailto:${contact.email}`} 
              className="btn-primary inline-flex items-center gap-3 py-4 px-10 text-lg group"
            >
              Send an Email <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-12 border-t border-glass-border">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-brand hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
