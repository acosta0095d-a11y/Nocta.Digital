"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "slide-left" | "scale-in";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
};

const ANIM_CLASS: Record<Animation, string> = {
  "fade-up": "reveal reveal--up",
  "fade-in": "reveal reveal--fade",
  "slide-left": "reveal reveal--left",
  "scale-in": "reveal reveal--scale",
};

export default function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${ANIM_CLASS[animation]} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
