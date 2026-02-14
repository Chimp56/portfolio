import { memo } from "react";
import type { Project } from "../data/projects";

function ProjectCardInner({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {project.image && (
        <div className="block aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {(project.link || project.github) ? (
            <a
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
              aria-label={`${project.title} project image (opens in new tab)`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      )}
      <div className="p-6">
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
      <div className="flex flex-wrap gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded dark:text-blue-400 dark:hover:text-blue-300"
            aria-label={`View ${project.title} project (opens in new tab)`}
          >
            View project
          </a>
        )}
        {project.devpost && (
          <a
            href={project.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded dark:text-blue-400 dark:hover:text-blue-300"
            aria-label={`${project.title} on Devpost (opens in new tab)`}
          >
            Devpost
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded dark:text-blue-400 dark:hover:text-blue-300"
            aria-label={`${project.title} on GitHub (opens in new tab)`}
          >
            GitHub
          </a>
        )}
      </div>
      </div>
    </article>
  );
}

export const ProjectCard = memo(ProjectCardInner);
