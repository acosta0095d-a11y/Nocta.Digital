import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import CarouselCard from "@/components/ui/CarouselCard";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { NAV_CARDS } from "@/lib/site-content";

export default function NavCarouselSection() {
  return (
    <section className="section-pad border-b border-white/[0.06] bg-black">
      <div className="site-container mb-8 max-w-3xl">
        <RevealOnScroll animation="slide-left">
          <p className="eyebrow mb-4">Explora NOCTA</p>
          <h2 className="section-title mb-4">Todo lo que necesitas, en un solo lugar.</h2>
          <p className="body-text">
            Navega por nuestras secciones principales. Cada tarjeta te lleva a una experiencia completa con información detallada.
          </p>
        </RevealOnScroll>
      </div>

      <InfiniteCarousel fadeVariant="black" autoInterval={4200}>
        {NAV_CARDS.map((card) => (
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
  );
}
