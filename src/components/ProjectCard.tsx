import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View project
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
