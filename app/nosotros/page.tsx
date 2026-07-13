import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import CarouselCard from "@/components/ui/CarouselCard";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Btn53 from "@/components/ui/Btn53";
import PromoPanel from "@/components/ui/PromoPanel";
import {
  TEAM_VALUES,
  COMPANY_TIMELINE,
  ABOUT_PILLARS,
  NAV_CARDS,
} from "@/lib/site-content";

export default function NosotrosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nosotros"
        title="Recién empezando. Obsesionados con hacerlo bien."
        description="NOCTA es un equipo nuevo con estándares altos. No inflamos números — mostramos trabajo real, comunicación clara y proyectos que sí llegan a producción."
      >
        <Btn53 href="/contacto" label="Trabajar con NOCTA" suffix="→" />
      </PageHero>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container">
          <RevealOnScroll>
            <div className="about-intro max-w-3xl mb-14">
              <p className="eyebrow mb-4">Quiénes somos</p>
              <h2 className="section-title mb-6">
                Pequeños por ahora.
                <br />
                Serios en cada entrega.
              </h2>
              <p className="body-text text-[1.0625rem] leading-relaxed">
                Unimos diseño, desarrollo y estrategia digital para marcas que quieren verse
                profesionales desde el primer día. Estamos en etapa de crecimiento — y eso se
                nota en el cuidado que ponemos en cada proyecto.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16">
            {ABOUT_PILLARS.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} delay={index * 80} animation="fade-up">
                <PromoPanel
                  title={pillar.title}
                  description={pillar.description}
                  index={index}
                />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="eyebrow mb-4">Valores</p>
            <h2 className="section-title mb-8">Lo que no negociamos.</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEAM_VALUES.map((value, index) => (
              <RevealOnScroll key={value.title} delay={index * 80} animation="fade-up">
                <PromoPanel
                  title={value.title}
                  description={value.description}
                  index={index}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06] bg-[#111]">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Historia</p>
            <h2 className="section-title mb-8">Lo que llevamos hecho.</h2>
            <div>
              {COMPANY_TIMELINE.map((item) => (
                <div key={`${item.year}-${item.title}`} className="timeline-item">
                  <p className="text-[0.75rem] text-[#6e6e73] mb-1">{item.year}</p>
                  <h3 className="text-white text-[0.9375rem] font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="body-text">{item.description}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="promo-card promo-card--static promo-card--panel h-fit">
              <p className="eyebrow mb-3">Modelo de trabajo</p>
              <h3 className="text-white text-[1.125rem] font-medium mb-4">
                Cercano, claro y sin sorpresas.
              </h3>
              <p className="body-text mb-5">
                Trabajamos en paralelo: estrategia, diseño y desarrollo avanzan juntos. Sin
                reuniones eternas ni entregas que nadie entiende.
              </p>
              <ul className="space-y-3">
                {[
                  "Diagnóstico y brief en los primeros días",
                  "Propuesta con alcance, precio y fechas reales",
                  "Avances semanales que puedes ver y probar",
                  "Soporte después del lanzamiento",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[0.8125rem] text-[#a1a1a6] pl-3 border-l border-white/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/trabajos" className="btn-link mt-6 inline-flex">
                Ver proyectos en vivo <span aria-hidden>→</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container mb-8 max-w-3xl">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Ecosistema</p>
            <h2 className="section-title mb-4">Todo lo que hacemos, conectado.</h2>
            <p className="body-text">
              Software, web, branding y marketing — un solo equipo para que no tengas que
              coordinar cinco proveedores distintos.
            </p>
          </RevealOnScroll>
        </div>

        <InfiniteCarousel fadeVariant="charcoal" autoInterval={2600}>
          {NAV_CARDS.filter((c) => c.id !== "nosotros").map((card) => (
            <CarouselCard
              key={card.id}
              href={card.href}
              badge={card.badge}
              title={card.title}
              description={card.description}
              cta={card.cta}
              icon={card.icon}
              variant="nav"
            />
          ))}
        </InfiniteCarousel>
      </section>

      <section className="section-pad text-center">
        <div className="site-container max-w-xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <h2 className="section-title mb-4">¿Buscas un partner, no una agencia genérica?</h2>
            <p className="body-text mb-8">
              Estamos abiertos a nuevos proyectos. Si tienes una idea clara — o necesitas
              ayuda para definirla — hablemos.
            </p>
            <Btn53 href="/contacto" label="Contactar al equipo" suffix="→" />
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
