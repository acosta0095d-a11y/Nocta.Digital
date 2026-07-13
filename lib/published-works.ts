export type PublishedWork = {
  id: string;
  name: string;
  url: string;
  tabLabel: string;
  logo: string;
  category: string;
  year: string;
  scope: "from-scratch" | "improvement";
  title: string;
  description: string;
  highlights: string[];
};

export const PUBLISHED_WORKS: PublishedWork[] = [
  {
    id: "estdent",
    name: "EstDent",
    url: "https://estdent.com.co/",
    tabLabel: "EstDent",
    logo: "/images/clients/estdent-logo.png",
    category: "Web comercial",
    year: "2025",
    scope: "from-scratch",
    title: "Centro de fresado digital CAD/CAM",
    description:
      "Sitio construido desde cero para un laboratorio dental en Neiva. Landing minimal tipo Apple/Awwwards con carruseles de materiales, flujo de proceso y CTAs de cotización.",
    highlights: [
      "Diseño y desarrollo completo",
      "Carrusel lateral de servicios",
      "Tipografía fluida y animaciones sutiles",
      "Optimizado para conversión clínica",
    ],
  },
  {
    id: "rk-electric",
    name: "RK Electric",
    url: "https://rkelectricpro.com/",
    tabLabel: "RK Electric",
    logo: "/images/clients/rk-electric-logo.png",
    category: "Mejora web",
    year: "2025",
    scope: "improvement",
    title: "Ingeniería eléctrica nacional",
    description:
      "Mejora integral del sitio existente: estructura visual, jerarquía de servicios, secciones comerciales y experiencia de contacto para una empresa de ingeniería eléctrica en Georgia, EE.UU.",
    highlights: [
      "Rediseño de UI y layout",
      "Secciones de servicios y proceso",
      "CTAs de cotización optimizados",
      "Mejor lectura en móvil",
    ],
  },
];

export const WORKS_META = {
  publishedCount: 2,
  tagline: "2 proyectos publicados — buscamos más marcas que quieran crecer con nosotros.",
};
