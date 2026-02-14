import { render, screen } from "../test/utils";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../data/projects";

const mockProject: Project = {
  id: "test-1",
  title: "Test Project",
  description: "A test project description.",
  tech: ["React", "TypeScript"],
  link: "https://example.com",
  github: "https://github.com/example",
};

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole("heading", { name: /test project/i })).toBeInTheDocument();
    expect(screen.getByText(/a test project description/i)).toBeInTheDocument();
  });

  it("renders tech tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders View project and GitHub links when provided", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole("link", { name: /view test project project/i })).toHaveAttribute(
      "href",
      mockProject.link
    );
    expect(screen.getByRole("link", { name: /test project on github/i })).toHaveAttribute(
      "href",
      mockProject.github
    );
  });
});
