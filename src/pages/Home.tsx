import { useRef, useState, useEffect } from "react";
import { SocialLinks } from "../components/SocialLinks";
import { HeroGraphic } from "../components/HeroGraphic";
import { ProjectCard } from "../components/ProjectCard";
import { Loader } from "../components/Loader";
import { PROJECTS } from "../data/projects";
import {
  RESUME_DRIVE_URL,
  RESUME_DRIVE_EMBED,
  CV_DRIVE_URL,
  CV_DRIVE_EMBED,
} from "../data/links";

function ExperienceIcon({
  icon,
  company,
}: {
  icon?: string;
  company: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = icon && !imgFailed;
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800">
      {showImg ? (
        <img
          src={icon}
          alt=""
          className="h-8 w-8 object-contain"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="text-lg font-semibold text-neutral-500 dark:text-neutral-400"
          aria-hidden
        >
          {company.charAt(0)}
        </span>
      )}
    </div>
  );
}

const TECH_STACK = ["Python", "TypeScript", "React", "Django", "AWS", "Docker"];

const EXPERIENCES: {
  title: string;
  company: string;
  period: string;
  desc: string;
  /** Optional path to company/role logo, e.g. "/logos/ou.svg". Add assets to public/logos/ and set here. */
  icon?: string;
}[] = [
  {
    title: "ML Graduate Research Assistant",
    company: "University of Oklahoma",
    period: "Aug. 2025 – Present",
    desc: "Designed, deployed, and maintained 3 production-grade backend services using Django, Python, and SQL on AWS. Built end-to-end data pipelines generating 50K+ synthetic samples to fine-tune a sequence-to-sequence LLM. Implemented authentication, role-based access control, and API contracts. Improved system scalability and productivity by 50%.",
    icon: "/logos/ou.png",
  },
  {
    title: "Software Development Intern",
    company: "Paycom",
    period: "May 2025 – Aug. 2025",
    desc: "Built and deployed a production recommendation service using FastAPI, Docker, and Kubernetes, increasing user engagement by 13%. Designed ETL pipelines for ML models, sustaining 81% minimum relevance rate. Implemented CI/CD pipelines reducing developer overhead by 2+ hours/week.",
    icon: "/logos/payc.png",
  },
  {
    title: "Software Undergraduate Research Assistant",
    company: "University of Oklahoma",
    period: "May 2023 – May 2025",
    desc: "Developed backend analytics service using Python, Django, PostgreSQL, and NLP models, improving processing speed by 25%. Designed microservice-based backend architecture. Optimized caching and query strategies, reducing API calls by 60% and cloud costs by 30%.",
    icon: "/logos/ou.png",
  },
  {
    title: "Software Development Intern",
    company: "Paycom",
    period: "May 2024 – Aug. 2024",
    desc: "Designed SQL sharding strategy for 100K+ records. Deployed full-stack web application with React SPA and PHP MVC backend. Collaborated in agile sprints to build C# backend REST API for applicant tracking system.",
    icon: "/logos/payc.png"
  },
];

const PAGE_SIZE = 3;

type DocTab = "resume" | "cv";

export function Home() {
  const [displayedCount, setDisplayedCount] = useState(PAGE_SIZE);
  const [activeDoc, setActiveDoc] = useState<DocTab>("resume");
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
            setDisplayedCount((c) =>
              Math.min(c + PAGE_SIZE, PROJECTS.length)
            );
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
    <>
      {/* About */}
      <section id="about" className="relative flex min-h-screen items-center justify-center pt-20 px-8">
        <div className="absolute inset-0">
          <HeroGraphic />
        </div>
        <div className="relative max-w-2xl text-center">
          <span className="mb-2 block text-base text-neutral-500 dark:text-neutral-400">
            Hi, I'm
          </span>
          <h1 className="mb-1 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Vincent Tran
          </h1>
          <p className="mb-6 text-xl font-medium text-blue-600 dark:text-blue-400">
            Software Engineer
          </p>
          <p className="mb-8 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            Building robust web applications with modern tools. Passionate
            about clean code, performance, and great user experiences.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-mono text-sm text-neutral-500 transition-all duration-200 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <SocialLinks size="large" />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative min-h-screen pt-24">
        <div className="mx-auto max-w-3xl px-8 py-16">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mb-12 text-lg text-neutral-500 dark:text-neutral-400">
            My journey in software development — roles, projects, and growth.
          </p>
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, i) => (
              <article
                key={i}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-neutral-200 py-8 last:border-b-0 dark:border-neutral-800"
              >
                <ExperienceIcon icon={exp.icon} company={exp.company} />
                <div className="min-w-0">
                  <span className="mb-1 block font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {exp.period}
                  </span>
                  <h3 className="mb-1 text-xl font-semibold">{exp.title}</h3>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-400">
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {exp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative min-h-screen pt-24">
        <div className="mx-auto max-w-[900px] px-8 py-16">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mb-10 text-lg text-neutral-500 dark:text-neutral-400">
            A selection of projects I've worked on — scroll for more.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayed.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div ref={sentinelRef} className="h-px w-full invisible col-span-full" />
          {loading && (
            <div className="col-span-full flex justify-center py-8">
              <Loader />
            </div>
          )}
          {displayed.length >= PROJECTS.length && displayed.length > 0 && (
            <p className="col-span-full py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
              You've seen all projects.
            </p>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative pt-24">
        <div className="mx-auto max-w-[900px] px-8 py-16">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mb-10 text-lg text-neutral-500 dark:text-neutral-400">
            Let's connect — open to opportunities and conversations.
          </p>
          <div className="mb-6 flex justify-center">
            <SocialLinks size="large" />
          </div>
          <p className="text-center text-base text-neutral-500 dark:text-neutral-400">
            <a
              href="https://www.linkedin.com/in/vincenttran-swe"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              aria-label="Reach out on LinkedIn (opens in new tab)"
            >
              Reach out on LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/Chimp56"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>

      {/* Resume & CV */}
      <section id="resume" className="relative min-h-screen pt-24">
        <div className="mx-auto max-w-[880px] px-8 py-16 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Resume & CV
          </h2>
          <p className="mb-10 text-lg text-neutral-500 dark:text-neutral-400">
            View or download my resume or full CV.
          </p>
          <div role="region" aria-label="Resume and CV documents">
            <div
              role="tablist"
              aria-label="Document type"
              className="mb-4 flex justify-center gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeDoc === "resume"}
                aria-controls="doc-panel"
                id="resume-tab"
                onClick={() => setActiveDoc("resume")}
                className={`rounded-lg px-5 py-2 text-[0.95rem] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  activeDoc === "resume"
                    ? "border border-blue-600 bg-blue-600/10 text-blue-600 dark:border-blue-400 dark:bg-blue-400/10 dark:text-blue-400"
                    : "border border-neutral-200 bg-transparent text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
                }`}
              >
                Resume
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeDoc === "cv"}
                aria-controls="doc-panel"
                id="cv-tab"
                onClick={() => setActiveDoc("cv")}
                className={`rounded-lg px-5 py-2 text-[0.95rem] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  activeDoc === "cv"
                    ? "border border-blue-600 bg-blue-600/10 text-blue-600 dark:border-blue-400 dark:bg-blue-400/10 dark:text-blue-400"
                    : "border border-neutral-200 bg-transparent text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
                }`}
              >
                Full CV
              </button>
            </div>
            <div
              id="doc-panel"
              role="tabpanel"
              aria-labelledby={activeDoc === "resume" ? "resume-tab" : "cv-tab"}
              tabIndex={0}
              className="relative mb-6 w-full rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-3 shadow-lg dark:from-neutral-900 dark:to-neutral-800 dark:shadow-2xl"
            >
              <div className="absolute inset-[6px] pointer-events-none rounded-xl border border-black/5 shadow-inner dark:border-white/5" />
              <iframe
                src={activeDoc === "resume" ? RESUME_DRIVE_EMBED : CV_DRIVE_EMBED}
                title={activeDoc === "resume" ? "Vincent Tran Resume" : "Vincent Tran CV"}
                className="relative block h-[78vh] min-h-[560px] w-full rounded-xl border-0 bg-white shadow-sm dark:bg-neutral-900"
                key={activeDoc}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={activeDoc === "resume" ? RESUME_DRIVE_URL : CV_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-neutral-900"
                aria-label={`Open ${activeDoc === "resume" ? "resume" : "CV"} in new tab`}
              >
                Open in new tab
              </a>
              {activeDoc === "cv" && (
                <a
                  href={CV_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
                  aria-label="View CV on Google Drive (opens in new tab)"
                >
                  View on Google Drive
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
