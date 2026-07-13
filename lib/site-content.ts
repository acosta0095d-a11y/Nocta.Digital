import { CONTACT, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";

export type NavCard = {
  id: string;
  href: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
  icon: string;
};

export type TeamValue = {
  title: string;
  description: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  note: string;
};

export const NAV_CARDS: NavCard[] = [
  {
    id: "servicios",
    href: "/servicios",
    badge: "Catálogo",
    title: "Servicios",
    description:
      "Software, IA, marketing, audiovisual, branding y web comercial en un solo ecosistema.",
    cta: "Ver catálogo →",
    icon: "◈",
  },
  {
    id: "trabajos",
    href: "/trabajos",
    badge: "Portfolio",
    title: "Trabajos",
    description:
      "Dos proyectos en producción. Casos reales, sin relleno.",
    cta: "Ver proyectos →",
    icon: "◎",
  },
  {
    id: "nosotros",
    href: "/nosotros",
    badge: "Equipo",
    title: "Nosotros",
    description:
      "Equipo nuevo, estándares altos. Sin números inflados.",
    cta: "Conocer más →",
    icon: "◇",
  },
  {
    id: "contacto",
    href: "/contacto",
    badge: "Proyecto",
    title: "Contacto",
    description:
      "Cuéntanos tu idea. Respondemos rápido y armamos una propuesta clara.",
    cta: "Hablemos →",
    icon: "→",
  },
];

export const TEAM_VALUES: TeamValue[] = [
  {
    title: "Calidad antes que volumen",
    description:
      "Preferimos pocas cuentas bien atendidas que muchas promesas vacías. Cada entrega sale lista para producción.",
  },
  {
    title: "Diseño con intención",
    description:
      "Cada decisión visual y técnica responde a un objetivo real: vender, convertir o simplificar la operación.",
  },
  {
    title: "Comunicación directa",
    description:
      "Sin capas ni rodeos. Sabes en qué vamos, qué falta y cuándo sale — en lenguaje claro.",
  },
  {
    title: "Ambición con los pies en la tierra",
    description:
      "Estamos creciendo. No inventamos trayectoria: mostramos lo que está en vivo y lo que viene.",
  },
];

export const ABOUT_PILLARS = [
  {
    title: "Estamos empezando",
    description:
      "Somos un equipo nuevo. Eso nos obliga a cuidar cada detalle y a tratar cada proyecto como si fuera el único.",
  },
  {
    title: "Lo que ya está en vivo",
    description:
      "Dos sitios publicados en producción — construidos y mejorados con el mismo estándar que ofrecemos a nuevos clientes.",
  },
  {
    title: "Cómo trabajamos",
    description:
      "Brief claro, propuesta honesta, ejecución en sprints. Si no encajamos, te lo decimos antes de empezar.",
  },
];

export const COMPANY_TIMELINE: TimelineItem[] = [
  {
    year: "2025",
    title: "Primeros proyectos en producción",
    description:
      "EstDent y RK Electric salen en vivo — uno desde cero, otro como mejora integral de su web.",
  },
  {
    year: "2025",
    title: "NOCTA Solutions Group",
    description:
      "Formalizamos la operación como estudio digital: software, web, branding y marketing bajo un solo equipo.",
  },
  {
    year: "2026",
    title: "Hoy",
    description:
      "Creciendo con marcas que buscan un partner serio, no una agencia que promete de más.",
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: whatsappHref(WHATSAPP_MESSAGES.contact),
    note: "Respuesta en menos de 24 horas",
  },
  {
    id: "email",
    label: "Correo",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: "Propuestas y documentación",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramUrl,
    note: "Proceso, lanzamientos y trabajo en vivo",
  },
];

export const FAQ_ITEMS = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Landings desde 2 semanas. Software y plataformas según alcance — definimos timeline en el brief.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Operamos remoto con clientes en Latinoamérica, EE.UU. y Europa.",
  },
  {
    q: "¿Pueden integrar IA a mi negocio actual?",
    a: "Sí. Conectamos asistentes a WhatsApp, web, CRM y flujos internos sin reemplazar todo.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Escríbenos por WhatsApp o correo. Agendamos una llamada de 30 min y te enviamos propuesta.",
  },
];
