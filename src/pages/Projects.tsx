import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Loader } from "../components/Loader";
import "./Projects.css";

const PAGE_SIZE = 3;

export function Projects() {
  const [displayedCount, setDisplayedCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const displayed = PROJECTS.slice(0, displayedCount);
  const hasMore = displayedCount < PROJECTS.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setDisplayedCount((c) => Math.min(c + PAGE_SIZE, PROJECTS.length));
            setLoading(false);
          }, 600);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <section className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-intro">
          A selection of projects I've worked on — scroll for more.
        </p>
        <div className="projects-grid">
          {displayed.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div ref={sentinelRef} className="projects-sentinel" />
        {loading && (
          <div className="projects-loader">
            <Loader />
          </div>
        )}
        {displayed.length >= PROJECTS.length && displayed.length > 0 && (
          <p className="projects-end">You've seen all projects.</p>
        )}
      </div>
    </section>
  );
}
