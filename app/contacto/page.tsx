import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import Btn53 from "@/components/ui/Btn53";
import ContactChannels from "@/components/ui/ContactChannels";
import FaqCarouselCard from "@/components/ui/FaqCarouselCard";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import InstagramProfilePreview from "@/components/ui/InstagramProfilePreview";
import { CONTACT, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";
import { FAQ_ITEMS } from "@/lib/site-content";

export default function ContactoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu próximo proyecto."
        description="Creamos webs, software, SaaS, contenido, banners, logos y marcas."
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container">
          <div className="contact-ig-showcase">
            <div className="contact-ig-showcase__visual">
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-ig-showcase__link"
                aria-label="Abrir perfil de NOCTA en Instagram"
              >
                <InstagramProfilePreview />
              </a>
            </div>

            <div className="contact-ig-showcase__copy">
              <p className="eyebrow mb-3">Instagram</p>
              <h2 className="section-title mb-3">{CONTACT.instagramHandle}</h2>
              <p className="body-text leading-relaxed">
                Mira el perfil en vivo: lanzamientos, proceso creativo y piezas que vamos
                publicando.
              </p>
              <div className="mt-6">
                <Btn53 href={CONTACT.instagramUrl} label="Ver perfil" suffix="→" external />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container">
          <ContactChannels />
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container mb-8 max-w-3xl">
          <p className="eyebrow mb-3">Preguntas frecuentes</p>
          <h2 className="section-title mb-4">Antes de escribirnos.</h2>
          <p className="body-text leading-relaxed">
            Desliza el carrusel para ver respuestas directas a lo que suelen preguntarnos.
          </p>
        </div>

        <InfiniteCarousel fadeVariant="black" autoInterval={2800}>
          {FAQ_ITEMS.map((item, index) => (
            <FaqCarouselCard
              key={item.q}
              question={item.q}
              answer={item.a}
              index={index}
            />
          ))}
        </InfiniteCarousel>

        <div className="site-container mt-12 text-center">
          <p className="body-text mb-6 max-w-lg mx-auto leading-relaxed">
            Si ya tienes claro qué necesitas, escríbenos y armamos la propuesta.
          </p>
          <Btn53
            href={whatsappHref(WHATSAPP_MESSAGES.contact)}
            label="Más info"
            suffix="→"
            external
          />
        </div>
      </section>
    </PageShell>
  );
}
