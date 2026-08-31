import { GraduationCap } from "lucide-react";
import { about, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <h2 className="text-sm font-semibold tracking-[0.15em] text-accent">
        {about.heading.toUpperCase()}
      </h2>

      <div className="mt-6 max-w-2xl rounded-2xl border border-accent/40 bg-panel/40 p-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
        <h3 className="text-xl font-bold text-ink">{about.title}</h3>
        <div className="mt-4 flex flex-col gap-4">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-accent2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-2xl flex items-start gap-4 rounded-2xl border border-accent/40 bg-panel/40 p-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent shadow-[0_0_10px_rgba(34,211,238,0.45)]">
          <GraduationCap size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-ink">{education.degree}</h3>
          <p className="text-sm text-accent2">{education.institution}</p>
          <p className="mt-1 text-xs text-muted">{education.period}</p>
        </div>
      </div>
    </section>
  );
}