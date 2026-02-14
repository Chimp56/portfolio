import { Suspense } from "react";
import { SocialLinks } from "../components/SocialLinks";
import { HeroGraphic } from "../components/HeroGraphic";
import { PageLoader } from "../components/Loader";
import "./About.css";

const TECH_STACK = ["Firebase", "TypeScript", "React", "Node.js 24"];

export function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-bg">
          <HeroGraphic />
        </div>
        <Suspense fallback={<PageLoader />}>
          <div className="about-content">
            <span className="about-greeting">Hi, I'm</span>
            <h1 className="about-title">Vincent Tran</h1>
            <p className="about-subtitle">Software Engineer</p>
            <p className="about-desc">
              Building robust web applications with modern tools. Passionate about clean code,
              performance, and great user experiences.
            </p>
            <div className="about-tech">
              {TECH_STACK.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <SocialLinks size="large" />
          </div>
        </Suspense>
      </div>
    </section>
  );
}
