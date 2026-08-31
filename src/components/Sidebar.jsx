import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar — visible only below lg */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background border-b border-border">
        <a href="#top" className="text-lg font-bold text-accent" onClick={() => setIsOpen(false)}>
          {profile.name}
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-ink"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu — only rendered when open, only below lg */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 z-40 bg-background border-b border-border px-6 py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-wider text-muted hover:text-ink transition-colors"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 text-muted">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
                <Github size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Desktop sidebar — unchanged, hidden below lg */}
      <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[220px] lg:border-r lg:border-border lg:flex-col lg:justify-between px-8 py-10">
        <div>
          <a href="#top" className="text-xl font-bold leading-tight text-accent">
            {profile.name.split(" ")[0]}
            <br />
            {profile.name.split(" ").slice(1).join(" ")}
          </a>

          <nav className="mt-16 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-muted hover:text-ink transition-colors"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex gap-4 text-muted">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
              <Github size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </aside>
    </>
  );
}
