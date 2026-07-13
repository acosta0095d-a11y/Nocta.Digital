import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import Btn53 from "@/components/ui/Btn53";
import MoreInfoStrip from "@/components/ui/MoreInfoStrip";
import { WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";
import { SERVICE_CATALOG } from "@/lib/service-catalog";

export function generateStaticParams() {
  return SERVICE_CATALOG.map((service) => ({ id: service.id }));
}

export default async function ServicePromoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = SERVICE_CATALOG.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  return (
    <PageShell>
      <section className="page-hero border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="service-session__code mb-4">{service.code}</p>
          <p className="eyebrow mb-3">Sesión promocional</p>
          <h1 className="headline text-balance mb-4">{service.title}</h1>
          <p className="service-doc__lead">{service.short}</p>
          <p className="service-doc__text">{service.description}</p>
        </div>
      </section>

      <MoreInfoStrip
        serviceTitle={service.title}
        message="¿Te encaja esta línea? Escríbenos y te contamos el alcance."
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Ideal para</p>
          <p className="service-doc__text">{service.idealFor}</p>
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Qué ganas</p>
          <h2 className="section-title mb-5">Valor concreto para tu negocio</h2>
          {service.benefits.map((benefit) => (
            <p key={benefit} className="service-doc__text">
              {benefit}
            </p>
          ))}
        </div>
      </section>

      <MoreInfoStrip
        serviceTitle={service.title}
        message="¿Quieres el detalle de entregables y tiempos?"
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Entregables</p>
          <h2 className="section-title mb-5">Qué incluye esta sesión</h2>
          {service.deliverables.map((item) => (
            <div key={item.title} className="service-doc__block">
              <h3 className="service-doc__heading">{item.title}</h3>
              <p className="service-doc__text">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Administración y seguimiento</p>
          <h2 className="section-title mb-5">Qué pasa después del lanzamiento</h2>
          <p className="service-doc__text service-doc__intro">
            No desaparecemos al entregar. Gestionamos el proyecto con reportes, mantenimiento y
            mejoras continuas según la línea de servicio.
          </p>
          {service.management.map((item) => (
            <div key={item.title} className="service-doc__block">
              <h3 className="service-doc__heading">{item.title}</h3>
              <p className="service-doc__text">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <MoreInfoStrip
        serviceTitle={service.title}
        message="¿Dudas sobre administración, analítica o soporte mensual?"
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Proceso</p>
          <h2 className="section-title mb-5">Cómo lo trabajamos</h2>
          {service.process.map((step) => (
            <div key={step.title} className="service-doc__block">
              <h3 className="service-doc__heading">{step.title}</h3>
              <p className="service-doc__text">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <MoreInfoStrip
        serviceTitle={service.title}
        message="¿Listo para arrancar? Cuéntanos tu caso."
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="site-container max-w-3xl service-doc">
          <p className="eyebrow mb-3">Ejemplos</p>
          <h2 className="section-title mb-5">Casos de uso frecuentes</h2>
          {service.useCases.map((item) => (
            <p key={item} className="service-doc__text">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container max-w-3xl flex flex-wrap items-center gap-5">
          <Btn53
            href={whatsappHref(WHATSAPP_MESSAGES.service(service.title))}
            label="Más info"
            suffix="→"
            external
          />
          <Link href="/servicios" className="btn-link">
            Ver todos los servicios <span aria-hidden>›</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
