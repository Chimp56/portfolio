import { Suspense } from "react";
import { PageLoader } from "../components/Loader";
import "./Experience.css";

const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "Company / Project",
    period: "2024 – Present",
    desc: "Building scalable web applications with React, TypeScript, and Node.js. Collaborating with cross-functional teams to deliver high-impact features.",
  },
  {
    title: "Developer / Intern",
    company: "Previous Role",
    period: "2023 – 2024",
    desc: "Developed and maintained web applications. Worked with Firebase for backend services and implemented responsive front-end solutions.",
  },
  {
    title: "Student / Learner",
    company: "Academic & Self-taught",
    period: "Ongoing",
    desc: "Continuously learning new technologies. Active on Devpost for hackathons and open-source contributions on GitHub.",
  },
];

export function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-intro">
          My journey in software development — roles, projects, and growth.
        </p>
        <Suspense fallback={<PageLoader />}>
          <div className="experience-timeline">
            {EXPERIENCES.map((exp, i) => (
              <article key={i} className="experience-card">
                <div className="experience-dot" />
                <div className="experience-content">
                  <span className="experience-period">{exp.period}</span>
                  <h2 className="experience-role">{exp.title}</h2>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-desc">{exp.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
