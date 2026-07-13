import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import Btn53 from "@/components/ui/Btn53";
import WorkShowcase from "@/components/ui/WorkShowcase";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { SitePreviewPlaceholder } from "@/components/ui/SitePreview";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { PUBLISHED_WORKS } from "@/lib/published-works";

export default function TrabajosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trabajos · 2 publicados"
        title="Proyectos reales en producción."
        description="Solo mostramos lo que está en vivo. Buscamos más marcas que quieran el siguiente slot."
      >
        <Btn53 href="/contacto" label="Quiero un proyecto así" suffix="→" />
      </PageHero>

      <section className="works-section border-b border-white/[0.06]">
        <div className="site-container works-stack">
          {PUBLISHED_WORKS.map((work, index) => (
            <RevealOnScroll key={work.id} delay={index * 80}>
              <WorkShowcase work={work} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="works-section works-section--cta border-b border-white/[0.06] bg-[#111]">
        <div className="site-container">
          <RevealOnScroll>
            <article className="work-showcase work-showcase--cta">
              <div className="work-showcase__visual">
                <div className="work-showcase__browser-link">
                  <BrowserFrame
                    url="nocta.studio"
                    tabLabel="NOCTA"
                    favicon="/images/nocta-mark.png"
                    className="work-showcase__frame"
                  >
                    <SitePreviewPlaceholder />
                  </BrowserFrame>
                </div>
              </div>

              <div className="work-showcase__copy">
                <header className="work-showcase__header">
                  <p className="work-showcase__eyebrow">
                    <span>03</span>
                    <span aria-hidden>·</span>
                    <span>Próximo proyecto</span>
                  </p>
                  <h3 className="work-showcase__title work-showcase__title--solo">
                    La promoción podría ser la tuya.
                  </h3>
                </header>

                <p className="work-showcase__desc">
                  Listo para nuestro próximo caso: landing, rediseño o plataforma a medida. Tu
                  marca puede ser la que aparezca aquí.
                </p>

                <footer className="work-showcase__footer">
                  <Btn53 href="/contacto" label="Ser el próximo caso" suffix="→" />
                </footer>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
