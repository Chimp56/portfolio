import { RESUME_DRIVE_URL } from "../data/links";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/vincenttran-swe",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Chimp56",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://devpost.com/Chimp56",
    label: "Devpost",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" fillRule="evenodd" aria-hidden>
        <path d="M48.7,4.8H15.3L0,32l15.7,27.2h33.1L64,32L48.7,4.8z M32.2,16.9H21.4v30.3h10.8c8.2,0,14.9-6.8,14.9-15.1S40.5,16.9,32.2,16.9z M32,41.1h-4.5V22.9H32c5,0,9.1,4.1,9.1,9.1S37,41.1,32,41.1z" />
      </svg>
    ),
  },
  {
    href: RESUME_DRIVE_URL,
    label: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export function SocialLinks({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <div className={`flex gap-4 ${size === "large" ? "[&>a]:h-12 [&>a]:w-12 [&_svg]:h-6 [&_svg]:w-6" : ""}`}>
      {LINKS.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
          aria-label={`${label} (opens in new tab)`}
        >
          <span className="flex h-5 w-5 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
            {icon}
          </span>
        </a>
      ))}
    </div>
  );
}
