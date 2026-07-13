"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "¿En cuánto tiempo entregan un proyecto?",
    a: "El tiempo varía según la complejidad. Un sitio web corporativo puede estar listo en 2–3 semanas, una aplicación web compleja puede llevar 2–4 meses. En todos los casos entregamos un cronograma detallado antes de comenzar.",
  },
  {
    q: "¿Cómo es el proceso de trabajo con NOCTA?",
    a: "Trabajamos en sprints iterativos: descubrimiento, planeación, diseño, desarrollo, pruebas y lanzamiento. Cada etapa incluye revisiones contigo para asegurarnos de que el resultado sea exactamente lo que necesitas.",
  },
  {
    q: "¿Cómo cotizan sus proyectos?",
    a: "Tenemos reuniones de discovery sin costo donde entendemos tus necesidades. Luego entregamos una propuesta detallada con alcance, tiempos y precio. No cobramos por hora — cotizamos por proyecto completo.",
  },
  {
    q: "¿Qué tecnologías utilizan?",
    a: "Usamos el stack moderno más sólido: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Node.js, Docker, OpenAI, y más. La tecnología se elige según las necesidades del proyecto.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. Todos nuestros proyectos incluyen un período de soporte post-lanzamiento. Además ofrecemos planes de mantenimiento continuo que incluyen actualizaciones, monitoreo y soporte técnico.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Absolutamente. Trabajamos con clientes en toda Latinoamérica y también en España, Estados Unidos y otros países. Nuestra operación es 100% remota y manejamos proyectos internacionales con fluidez.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
          >
            <span className="text-white font-medium text-sm lg:text-base">
              {faq.q}
            </span>
            <span
              className={`text-neutral-400 text-xl font-light shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-7 pb-6 text-neutral-400 text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
