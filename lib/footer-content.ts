export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Creación web",
    links: [
      { label: "Sitios web comerciales", href: "/servicios/web" },
      { label: "Landing pages", href: "/servicios/web" },
      { label: "Sitios corporativos", href: "/servicios/web" },
      { label: "Secciones de servicios", href: "/servicios/web" },
      { label: "CTAs de conversión", href: "/servicios/web" },
    ],
  },
  {
    title: "Software y SaaS",
    links: [
      { label: "Desarrollo de software", href: "/servicios/software" },
      { label: "Plataformas SaaS", href: "/servicios/software" },
      { label: "Paneles administrativos", href: "/servicios/software" },
      { label: "CRM y ventas", href: "/servicios/software" },
      { label: "Automatizaciones", href: "/servicios/software" },
      { label: "Integraciones", href: "/servicios/software" },
    ],
  },
  {
    title: "Marca y diseño",
    links: [
      { label: "Branding e identidad", href: "/servicios/branding" },
      { label: "Logotipos", href: "/servicios/branding" },
      { label: "Banners y piezas", href: "/servicios/branding" },
      { label: "Lineamientos de marca", href: "/servicios/branding" },
      { label: "Diseño UI", href: "/servicios/branding" },
    ],
  },
  {
    title: "Contenido y marketing",
    links: [
      { label: "Posts y estrategia", href: "/servicios/marketing" },
      { label: "Campañas Meta y Google", href: "/servicios/marketing" },
      { label: "Reels y video", href: "/servicios/audiovisual" },
      { label: "Media audiovisual", href: "/servicios/audiovisual" },
      { label: "Landing de campaña", href: "/servicios/marketing" },
    ],
  },
  {
    title: "Inteligencia artificial",
    links: [
      { label: "Asistentes IA", href: "/servicios/ia" },
      { label: "Bots para WhatsApp", href: "/servicios/ia" },
      { label: "Automatización de leads", href: "/servicios/ia" },
      { label: "Flujos inteligentes", href: "/servicios/ia" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre NOCTA", href: "/nosotros" },
      { label: "Proyectos", href: "/trabajos" },
      { label: "Todos los servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
      { label: "nocta.org@gmail.com", href: "mailto:nocta.org@gmail.com" },
    ],
  },
];
