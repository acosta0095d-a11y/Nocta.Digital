import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import CarouselCard from "@/components/ui/CarouselCard";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { SERVICE_CATALOG } from "@/lib/service-catalog";

export default function ServicesCarouselSection() {
  return (
    <section id="servicios" className="section-pad border-b border-white/[0.06]">
      <div className="site-container mb-8 max-w-3xl">
        <RevealOnScroll animation="slide-left" delay={100}>
          <p className="eyebrow mb-4">Servicios</p>
          <h2 className="section-title mb-4">Elegimos una ruta clara para tu marca.</h2>
          <p className="body-text">
            Desliza el carrusel para explorar cada línea de servicio. La tarjeta central está en foco — haz clic para ver la sesión promocional completa.
          </p>
        </RevealOnScroll>
      </div>

      <InfiniteCarousel fadeVariant="black" autoInterval={2800}>
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
  );
}
