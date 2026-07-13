"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoPlexus from "@/components/animations/LogoPlexus";
import TypeWriter from "@/components/animations/TypeWriter";
import Btn53 from "@/components/ui/Btn53";

export default function HomeHero() {
  const [line1Done, setLine1Done] = useState(false);
  const handleLine1Complete = useCallback(() => setLine1Done(true), []);

  return (
    <section className="home-hero border-b border-white/[0.06]">
      <div
        className="absolute inset-0 pointer-events-none anim-fade-in"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 72% 38%, rgba(255,255,255,0.04) 0%, transparent 62%)",
        }}
      />

      <div className="site-container relative w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(2rem,6vw,5rem)] items-start">
        <div className="flex flex-col pt-1">
          <span className="eyebrow mb-5 sm:mb-6 anim-fade-up delay-150">
            Soluciones digitales · IA · Marketing
          </span>

          <h1 className="headline text-balance mb-5 max-w-[54rem] min-h-[2.2em] sm:min-h-[2.4em]">
            <TypeWriter
              animId="hero-line-1"
              text="Construimos presencia digital"
              speed={34}
              delay={320}
              onComplete={handleLine1Complete}
            />
            <span className="block sm:whitespace-nowrap mt-0.5 sm:mt-1">
              <TypeWriter
                animId="hero-line-2"
                text="que genera resultados."
                speed={30}
                delay={120}
                startWhen={line1Done}
              />
            </span>
          </h1>

          <p className="body-text mb-8 sm:mb-9 max-w-[42rem] anim-fade-up delay-700">
            NOCTA impulsa marcas con tecnología, creatividad y estrategia. Creamos
            productos digitales y campañas que te ayudan a posicionarte, vender y
            crecer.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 anim-fade-up delay-800">
            <Btn53 href="/contacto" label="Comenzar un proyecto" suffix="→" />
            <Link href="#servicios" className="btn-link">
              Ver servicios <span aria-hidden>›</span>
            </Link>
          </div>
        </div>

        <div className="home-hero__visual hidden lg:flex items-start justify-center lg:justify-end pt-1 sm:pt-2 lg:pt-4">
          <div className="relative w-[min(100%,360px)] aspect-square flex items-center justify-center anim-scale-in delay-400">
            <div className="absolute inset-0">
              <LogoPlexus />
            </div>
            <Image
              src="/images/logo-primary-white.png"
              alt="NOCTA"
              width={320}
              height={320}
              priority
              className="home-hero__logo select-none relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
