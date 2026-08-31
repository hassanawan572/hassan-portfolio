import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export default function Sidebar() {
  return (
    <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-[220px] lg:border-r lg:border-border lg:flex lg:flex-col lg:justify-between px-8 py-10">
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
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
        )}
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </aside>
  );
}
