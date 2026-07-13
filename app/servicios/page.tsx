import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import CarouselCard from "@/components/ui/CarouselCard";
import Btn53 from "@/components/ui/Btn53";
import { SERVICE_CATALOG } from "@/lib/service-catalog";

export default function ServiciosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicios"
        title="Un ecosistema completo para hacer crecer tu marca."
        description="Desde software e IA hasta marketing y producción audiovisual. Cada línea conecta estrategia, diseño y ejecución técnica en un solo partner."
      >
        <Btn53 href="/contacto" label="Solicitar propuesta" suffix="→" />
      </PageHero>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container mb-8 max-w-3xl">
          <p className="eyebrow mb-4">Catálogo</p>
          <h2 className="section-title mb-4">Elige tu próximo paso.</h2>
          <p className="body-text">
            Desliza el carrusel y entra a cada sesión para ver alcance, entregables y proceso.
          </p>
        </div>

        <InfiniteCarousel fadeVariant="black" autoInterval={2600}>
          {SERVICE_CATALOG.map((service, index) => (
            <CarouselCard
              key={service.id}
              href={`/servicios/${service.id}`}
              badge={service.code}
              title={service.title}
              description={service.short}
              cta="Ver sesión →"
              index={index}
            />
          ))}
        </InfiniteCarousel>
      </section>

      <section className="section-pad text-center">
        <div className="site-container max-w-xl mx-auto">
          <h2 className="section-title mb-4">¿No sabes por dónde empezar?</h2>
          <p className="body-text mb-8">
            Agenda un brief de 30 minutos. Te recomendamos la combinación ideal según tu etapa y
            presupuesto.
          </p>
          <Btn53 href="/contacto" label="Agendar brief" suffix="→" />
        </div>
      </section>
    </PageShell>
  );
}
