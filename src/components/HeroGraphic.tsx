import { useState, useEffect, useRef } from "react";

const PARALLAX_STRENGTH = 20;

const ORBS = [
  {
    position: "top-[8%] right-[15%]",
    size: "h-[280px] w-[320px]",
    parallax: 1.2,
    blobKeyframe: "blob-1",
    wanderDelay: "0s",
    centered: false,
  },
  {
    position: "bottom-[15%] left-[8%]",
    size: "h-[220px] w-[180px]",
    parallax: 0.8,
    blobKeyframe: "blob-2",
    wanderDelay: "-3s",
    centered: false,
  },
  {
    position: "left-1/2 top-1/2",
    size: "h-[140px] w-[170px]",
    parallax: 1.5,
    blobKeyframe: "blob-3",
    wanderDelay: "-6s",
    centered: true,
  },
  {
    position: "top-[35%] right-[35%]",
    size: "h-[100px] w-[140px]",
    parallax: 1.1,
    blobKeyframe: "blob-4",
    wanderDelay: "-9s",
    centered: false,
  },
];

export function HeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    let ticking = false;
    const handleMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = containerRef.current;
        ticking = false;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const inBounds =
          x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        if (inBounds) {
          const normX = (x / rect.width - 0.5) * 2;
          const normY = (y / rect.height - 0.5) * 2;
          targetRef.current = {
            x: normX * PARALLAX_STRENGTH,
            y: normY * PARALLAX_STRENGTH,
          };
        } else {
          targetRef.current = { x: 0, y: 0 };
        }
      });
    };

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      setOffset((prev) => ({
        x: lerp(prev.x, targetRef.current.x, 0.08),
        y: lerp(prev.y, targetRef.current.y, 0.08),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-[-20%] opacity-40 [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_70%)] [background-image:linear-gradient(rgb(229_229_229)_1px,transparent_1px),linear-gradient(90deg,rgb(229_229_229)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgb(42_42_42)_1px,transparent_1px),linear-gradient(90deg,rgb(42_42_42)_1px,transparent_1px)]"
      />
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.position} ${orb.size}`}
          style={{
            transform: orb.centered
              ? `translate(calc(-50% + ${offset.x * orb.parallax}px), calc(-50% + ${offset.y * orb.parallax}px))`
              : `translate(${offset.x * orb.parallax}px, ${offset.y * orb.parallax}px)`,
          }}
        >
          <div
            className="h-full w-full bg-blue-600 opacity-30 blur-[60px] dark:bg-blue-400"
            style={{
              animation: `${orb.blobKeyframe} 8s ease-in-out infinite, orb-wander 15s ease-in-out infinite`,
              animationDelay: orb.wanderDelay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
