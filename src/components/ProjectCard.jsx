export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-border bg-panel/50 p-6 flex flex-col gap-3 transition-colors hover:border-accent">
      <span className="text-xs font-semibold tracking-wider text-accent2">
        {project.category.toUpperCase()}
      </span>
      <h3 className="text-lg font-bold text-ink">{project.title}</h3>
      <p className="text-sm text-muted flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs rounded-full border border-border px-3 py-1 text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} className="mt-2 text-sm font-semibold text-accent hover:text-accent2">
          View project →
        </a>
      )}
    </div>
  );
}
