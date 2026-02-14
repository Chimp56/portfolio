import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string>("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = SECTIONS.map((s) => ({
      id: s.id,
      el: document.getElementById(s.id),
    }));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ el }) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-neutral-200 bg-white px-8 py-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <button
        type="button"
        className="font-mono text-xl font-medium tracking-wide text-neutral-900 transition-colors hover:text-blue-600 dark:text-neutral-100 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
        onClick={() => scrollToSection("about")}
        aria-label="Vincent Tran - Home"
      >
        VT
      </button>
      <nav
        id="main-nav"
        aria-label="Main navigation"
        className={`${mobileOpen ? "flex" : "hidden"} gap-8 md:flex max-md:fixed max-md:left-0 max-md:right-0 max-md:top-14 max-md:flex-col max-md:gap-2 max-md:border-b max-md:border-neutral-200 max-md:bg-white max-md:px-4 max-md:py-4 max-md:transition-all max-md:duration-300 dark:max-md:border-neutral-800 dark:max-md:bg-neutral-900 ${
          mobileOpen
            ? "max-md:translate-y-0 max-md:opacity-100 max-md:pointer-events-auto"
            : "max-md:-translate-y-full max-md:opacity-0 max-md:pointer-events-none"
        }`}
      >
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`border-0 bg-transparent p-0 font-sans text-[0.95rem] cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded ${
              activeId === id
                ? "font-medium text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            }`}
            onClick={() => {
              scrollToSection(id);
              setMobileOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative h-6 w-11 rounded-xl border-0 bg-neutral-200 cursor-pointer dark:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <span
            className={`absolute left-1.5 top-1/2 -translate-y-1/2 text-xs transition-opacity ${
              theme === "light" ? "opacity-100" : "opacity-30"
            }`}
          >
            ☀
          </span>
          <span
            className={`absolute right-1.5 top-1/2 -translate-y-1/2 text-xs transition-opacity ${
              theme === "dark" ? "opacity-100" : "opacity-30"
            }`}
          >
            ☾
          </span>
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
              theme === "dark" ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <button
          type="button"
          className="flex flex-col gap-1.5 border-0 bg-transparent p-2 cursor-pointer md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
        >
          <span className="h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100" />
          <span className="h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100" />
          <span className="h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100" />
        </button>
      </div>
    </header>
  );
}
