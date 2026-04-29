import { PORTFOLIO_CONTENT } from "../constants";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-bold text-gradient">
          YourName.dev
        </div>
        
        <div className="text-white/40 text-sm font-mono">
          © {new Date().getFullYear()} Designed & Built with ❤️
        </div>
        
        <div className="flex gap-6">
            {Object.entries(PORTFOLIO_CONTENT.contact.socials).map(([name, url]) => (
                <a 
                    key={name} 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest"
                >
                    {name}
                </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
