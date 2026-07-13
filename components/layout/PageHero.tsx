"use client";

import { useCallback, useState } from "react";
import TypeWriter from "@/components/animations/TypeWriter";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  typewriter?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  typewriter = true,
}: PageHeroProps) {
  const [titleDone, setTitleDone] = useState(false);
  const handleTitleComplete = useCallback(() => setTitleDone(true), []);
  const pageAnimId = `page-hero-${title.slice(0, 24)}`;

  return (
    <section className="page-hero border-b border-white/[0.06]">
      <div className="site-container max-w-4xl">
        <p className="eyebrow mb-5 anim-fade-up delay-150">{eyebrow}</p>

        <h1 className="headline text-balance mb-5 min-h-[1.15em]">
          {typewriter ? (
            <TypeWriter
              animId={pageAnimId}
              text={title}
              speed={28}
              delay={300}
              onComplete={handleTitleComplete}
            />
          ) : (
            title
          )}
        </h1>

        <p
          className={`body-text max-w-2xl ${
            typewriter ? (titleDone ? "anim-fade-up" : "opacity-0") : "anim-fade-up delay-400"
          }`}
          style={typewriter && titleDone ? { animationDelay: "0.1s" } : undefined}
        >
          {description}
        </p>

        {children && (
          <div
            className={`mt-8 ${
              typewriter
                ? titleDone
                  ? "anim-fade-up"
                  : "opacity-0"
                : "anim-fade-up delay-500"
            }`}
            style={typewriter && titleDone ? { animationDelay: "0.25s" } : undefined}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
