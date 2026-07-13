"use client";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
}

export function StatItem({ prefix = "", value, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(value);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center py-10 px-6">
      <div className="text-6xl lg:text-7xl font-black text-white mb-3 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-neutral-500 text-xs tracking-[0.25em] uppercase">{label}</div>
    </div>
  );
}
