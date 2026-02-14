import { useState, useEffect, useRef } from "react";

export function HeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const isFirstRef = useRef(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inBounds =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (inBounds) {
        const next = { x, y };
        setPointer(next);
        targetRef.current = next;
        if (isFirstRef.current) {
          setSmooth(next);
          isFirstRef.current = false;
        }
      } else {
        setPointer(null);
        isFirstRef.current = true;
      }
    };

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      if (pointer) {
        setSmooth((prev) => ({
          x: lerp(prev.x, targetRef.current.x, 0.12),
          y: lerp(prev.y, targetRef.current.y, 0.12),
        }));
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pointer]);

  const sx = pointer ? smooth.x : -9999;
  const sy = pointer ? smooth.y : -9999;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-[-20%] opacity-40 [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_70%)] [background-image:linear-gradient(rgb(229_229_229)_1px,transparent_1px),linear-gradient(90deg,rgb(229_229_229)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgb(42_42_42)_1px,transparent_1px),linear-gradient(90deg,rgb(42_42_42)_1px,transparent_1px)]"
      />
      <div className="absolute top-[10%] right-[20%] h-[300px] w-[300px] animate-orb-float rounded-full bg-blue-600 opacity-30 blur-[60px] dark:bg-blue-400" />
      <div
        className="absolute bottom-[20%] left-[10%] h-[200px] w-[200px] animate-orb-float rounded-full bg-blue-600 opacity-30 blur-[60px] dark:bg-blue-400"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 animate-orb-float rounded-full bg-blue-600 opacity-30 blur-[60px] dark:bg-blue-400"
        style={{ animationDelay: "-8s" }}
      />
      {pointer && (
        <>
          <div
            className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/80 bg-blue-500/20 transition-opacity duration-150 dark:border-blue-400/80 dark:bg-blue-400/20"
            style={{
              left: sx,
              top: sy,
            }}
          />
          <div
            className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-md dark:bg-blue-400/10"
            style={{
              left: sx,
              top: sy,
            }}
          />
        </>
      )}
    </div>
  );
}
