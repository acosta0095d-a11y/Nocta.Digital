import Link from "next/link";
import HomeHero from "@/components/sections/HomeHero";
import ServicesCarouselSection from "@/components/sections/ServicesCarouselSection";
import PageShell from "@/components/layout/PageShell";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Btn53 from "@/components/ui/Btn53";
import PromoPanel from "@/components/ui/PromoPanel";

function SimpleWorkflow() {
  const steps = [
    { title: "Brief rápido", desc: "Entendemos tu negocio y objetivos en una sesión corta." },
    { title: "Propuesta estratégica", desc: "Alcance, timeline y entregables claros desde el día uno." },
    { title: "Producción y ejecución", desc: "Diseño, código y contenido en sprints semanales." },
    { title: "Lanzamiento y optimización", desc: "Deploy, métricas y ajustes post-launch." },
  ];

  return (
    <section className="section-pad border-b border-white/[0.06]">
      <div className="site-container">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Metodología</p>
          <h2 className="section-title mb-8 max-w-2xl">
            Proceso simple, ejecución profesional.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 80} animation="scale-in">
              <PromoPanel
                title={step.title}
                description={step.desc}
                index={index}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad text-center border-b border-white/[0.06]">
      <div className="site-container">
        <RevealOnScroll animation="fade-up">
          <h2 className="section-title mb-5 max-w-2xl mx-auto">
            ¿Listo para subir de nivel
            <br />
            tu presencia digital?
          </h2>
          <p className="body-text mb-8 max-w-xl mx-auto">
            Te ayudamos a construir una identidad fuerte, una web profesional y
            campañas que sí mueven resultados.
          </p>
          <Btn53 href="/contacto" label="Hablemos" suffix="→" />
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <ServicesCarouselSection />
      <SimpleWorkflow />
      <FinalCTA />
    </PageShell>
  );
}
