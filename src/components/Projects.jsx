import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <h2 className="text-sm font-semibold tracking-[0.15em] text-accent">PROJECTS</h2>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}