import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <h2 className="text-sm font-semibold tracking-[0.15em] text-accent">EXPERIENCE</h2>

      <div className="mt-8 flex flex-col gap-8 max-w-2xl">
        {experience.map((item) => (
          <div key={item.role} className="border-l-2 border-border pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-ink">{item.role}</h3>
              {item.period && <span className="text-xs text-muted">{item.period}</span>}
            </div>
            <p className="text-sm text-accent2">{item.org}</p>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
