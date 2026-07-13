export type ServiceDeliverable = {
  title: string;
  detail: string;
};

export type ServiceStep = {
  title: string;
  detail: string;
};

export type Service = {
  id: string;
  code: string;
  title: string;
  short: string;
  description: string;
  idealFor: string;
  benefits: string[];
  deliverables: ServiceDeliverable[];
  management: ServiceDeliverable[];
  process: ServiceStep[];
  useCases: string[];
  cta: string;
};

export const SERVICE_CATALOG: Service[] = [
  {
    id: "software",
    code: "software01",
    title: "Desarrollo de Software",
    short: "Sistemas internos, paneles y plataformas a medida.",
    description:
      "Diseñamos y construimos software que ordena tu operación: menos Excel, menos WhatsApp desordenado y más control sobre clientes, ventas e inventario. Desde un panel interno hasta una plataforma completa.",
    idealFor:
      "Empresas que crecieron rápido y ya no pueden operar solo con herramientas genéricas o procesos manuales.",
    benefits: [
      "Procesos centralizados en un solo lugar",
      "Menos errores humanos y retrabajo",
      "Datos en tiempo real para decidir mejor",
      "Base lista para escalar sin rehacer todo",
    ],
    deliverables: [
      {
        title: "Paneles administrativos",
        detail: "Dashboards con métricas, usuarios, permisos y gestión de la operación diaria.",
      },
      {
        title: "Módulos de clientes y ventas",
        detail: "CRM ligero, seguimiento de pedidos, cotizaciones y historial por cliente.",
      },
      {
        title: "Automatizaciones internas",
        detail: "Alertas, flujos de aprobación, notificaciones y tareas que se disparan solas.",
      },
      {
        title: "Integraciones",
        detail: "Conexión con pagos, facturación, WhatsApp, email o herramientas que ya uses.",
      },
    ],
    management: [
      {
        title: "Administración del proyecto",
        detail:
          "Tablero compartido con avances, pendientes y entregas por sprint. Sabes qué está hecho, qué sigue y quién lo tiene asignado.",
      },
      {
        title: "Soporte post-lanzamiento",
        detail:
          "Corrección de bugs, ajustes menores y acompañamiento las primeras semanas para que tu equipo use el sistema con confianza.",
      },
      {
        title: "Reporte mensual de operación",
        detail:
          "Resumen de uso, incidencias resueltas y métricas clave del sistema para decisiones con datos.",
      },
      {
        title: "Evolución por módulos",
        detail:
          "Nuevas funciones priorizadas por impacto — sin rehacer todo cada vez que creces.",
      },
    ],
    process: [
      {
        title: "Diagnóstico",
        detail: "Mapeamos cómo trabajas hoy y qué duele de verdad en el día a día.",
      },
      {
        title: "Arquitectura y alcance",
        detail: "Definimos módulos, prioridades y un MVP que puedas usar pronto.",
      },
      {
        title: "Desarrollo en sprints",
        detail: "Entregas semanales que puedes probar — no un paquete sorpresa al final.",
      },
      {
        title: "Lanzamiento y soporte",
        detail: "Deploy, capacitación breve y ajustes post-lanzamiento.",
      },
    ],
    useCases: [
      "Panel de pedidos para restaurante o retail",
      "Sistema de citas y seguimiento para clínicas",
      "Plataforma interna para equipos comerciales",
      "Portal de clientes con estado de proyectos",
    ],
    cta: "Quiero mi sistema",
  },
  {
    id: "ia",
    code: "ia02",
    title: "Inteligencia Artificial",
    short: "Automatiza respuestas, tareas y procesos con IA.",
    description:
      "La IA no es un adorno: es una capa que responde más rápido, filtra solicitudes y libera a tu equipo de lo repetitivo. La integramos donde aporta — WhatsApp, web, correo o procesos internos — sin complicar lo que ya funciona.",
    idealFor:
      "Negocios con alto volumen de consultas, leads o tareas repetitivas que hoy consumen tiempo del equipo.",
    benefits: [
      "Respuesta inmediata 24/7 en canales clave",
      "Menos carga operativa en preguntas frecuentes",
      "Leads y solicitudes clasificados automáticamente",
      "Experiencia más fluida para el cliente final",
    ],
    deliverables: [
      {
        title: "Asistentes para WhatsApp y web",
        detail: "Bots entrenados con tu información real: servicios, precios, horarios y tono de marca.",
      },
      {
        title: "Clasificación de solicitudes",
        detail: "La IA etiqueta y enruta mensajes según urgencia, tipo de cliente o intención de compra.",
      },
      {
        title: "Flujos de atención inteligente",
        detail: "Secuencias que califican leads, agendan citas o derivan a un humano cuando hace falta.",
      },
      {
        title: "Conexión con CRM y formularios",
        detail: "Todo queda registrado: contactos, conversaciones y datos listos para tu equipo comercial.",
      },
    ],
    management: [
      {
        title: "Monitoreo de conversaciones",
        detail:
          "Revisión periódica de chats reales para afinar respuestas y detectar preguntas nuevas.",
      },
      {
        title: "Actualización de conocimiento",
        detail:
          "Cuando cambian precios, horarios o servicios, actualizamos lo que el asistente sabe.",
      },
      {
        title: "Reporte mensual de desempeño",
        detail:
          "Volumen de consultas, temas frecuentes, leads generados y puntos donde escala a humano.",
      },
      {
        title: "Mejora continua",
        detail:
          "Ajustes basados en datos — no en suposiciones — para que la IA sea más útil cada mes.",
      },
    ],
    process: [
      {
        title: "Auditoría de conversaciones",
        detail: "Revisamos qué preguntan tus clientes y dónde se pierde tiempo hoy.",
      },
      {
        title: "Diseño del asistente",
        detail: "Definimos personalidad, límites, respuestas clave y cuándo escalar a humano.",
      },
      {
        title: "Entrenamiento e integración",
        detail: "Conectamos canales, probamos escenarios reales y afinamos respuestas.",
      },
      {
        title: "Monitoreo y mejora",
        detail: "Ajustes según conversaciones reales para que mejore con el uso.",
      },
    ],
    useCases: [
      "Clínica que recibe consultas de precios y citas por WhatsApp",
      "E-commerce con preguntas sobre envíos y stock",
      "Servicio técnico que clasifica tickets de soporte",
      "Inmobiliaria que califica leads antes de llamar",
    ],
    cta: "Quiero automatizar con IA",
  },
  {
    id: "marketing",
    code: "marketing03",
    title: "Marketing y Promoción",
    short: "Estrategia digital para generar visibilidad y demanda.",
    description:
      "No se trata solo de publicar: construimos un sistema para que te vean, te recuerden y te contacten. Campañas, contenido y landings alineados a un objetivo comercial claro.",
    idealFor:
      "Marcas que necesitan más leads, más ventas o reposicionarse en un mercado competitivo.",
    benefits: [
      "Mensaje claro y coherente en todos los canales",
      "Campañas orientadas a conversión, no solo likes",
      "Embudos medibles con datos reales",
      "Presupuesto invertido con intención",
    ],
    deliverables: [
      {
        title: "Campañas en Meta y Google",
        detail: "Setup, creatividades, audiencias, píxeles y optimización continua.",
      },
      {
        title: "Estrategia de contenido",
        detail: "Calendario editorial, pilares de mensaje y piezas alineadas a tu objetivo.",
      },
      {
        title: "Landing pages de conversión",
        detail: "Páginas enfocadas en un solo CTA: cotizar, agendar o comprar.",
      },
      {
        title: "Optimización de embudos",
        detail: "Análisis de puntos de fuga y mejoras en cada paso del recorrido.",
      },
    ],
    management: [
      {
        title: "Gestión de campañas activas",
        detail:
          "Monitoreo semanal de anuncios, presupuesto y creatividades — ajustes según rendimiento real.",
      },
      {
        title: "Calendario editorial",
        detail:
          "Planificación y seguimiento de posts, reels y piezas alineadas a objetivos comerciales.",
      },
      {
        title: "Reporte mensual de marketing",
        detail:
          "Alcance, leads, costo por resultado y recomendaciones para el siguiente mes.",
      },
      {
        title: "Reuniones de revisión",
        detail:
          "Sesión breve cada mes para revisar números, aprendizajes y prioridades.",
      },
    ],
    process: [
      {
        title: "Objetivo y audiencia",
        detail: "Definimos a quién le hablamos, qué queremos que hagan y cómo lo medimos.",
      },
      {
        title: "Plan de campaña",
        detail: "Canales, presupuesto sugerido, creatividades y cronograma.",
      },
      {
        title: "Ejecución y pruebas",
        detail: "Lanzamos, medimos y ajustamos variantes según rendimiento.",
      },
      {
        title: "Reporte y siguiente paso",
        detail: "Resultados claros y recomendaciones para escalar o pivotar.",
      },
    ],
    useCases: [
      "Lanzamiento de nuevo servicio o sucursal",
      "Generación de leads para B2B o servicios profesionales",
      "Remarketing a visitantes que no convirtieron",
      "Crecimiento de marca en Instagram o TikTok",
    ],
    cta: "Quiero promocionar mi marca",
  },
  {
    id: "audiovisual",
    code: "audiovisual04",
    title: "Media y Audiovisual",
    short: "Video, reels y piezas visuales para posicionar tu marca.",
    description:
      "Contenido que se ve profesional y comunica en segundos. Desde reels para redes hasta video corporativo — siempre con dirección visual alineada a tu marca.",
    idealFor:
      "Marcas que necesitan verse modernas en redes, lanzar productos o humanizar su comunicación.",
    benefits: [
      "Contenido listo para publicar, no borradores eternos",
      "Estética consistente con tu identidad",
      "Piezas optimizadas para cada plataforma",
      "Mayor retención y engagement visual",
    ],
    deliverables: [
      {
        title: "Reels y clips comerciales",
        detail: "Formato vertical, hooks claros y CTA para redes sociales.",
      },
      {
        title: "Video corporativo",
        detail: "Presentación de empresa, servicios o cultura para web y presentaciones.",
      },
      {
        title: "Edición de piezas sociales",
        detail: "Adaptación de material existente o grabación guiada con guion.",
      },
      {
        title: "Dirección visual de marca",
        detail: "Paleta, ritmo, tipografía en movimiento y look & feel unificado.",
      },
    ],
    management: [
      {
        title: "Gestión de producción",
        detail:
          "Cronograma de grabación, edición y entregas con fechas claras y revisiones por etapa.",
      },
      {
        title: "Banco de contenido",
        detail:
          "Organización de piezas entregadas por campaña, formato y fecha para reutilizar sin perder tiempo.",
      },
      {
        title: "Reporte mensual de piezas",
        detail:
          "Qué se publicó, rendimiento estimado por formato y propuesta de contenido para el mes siguiente.",
      },
      {
        title: "Ajustes post-entrega",
        detail:
          "Versiones alternativas, subtítulos o recortes según feedback sin renegociar desde cero.",
      },
    ],
    process: [
      {
        title: "Brief creativo",
        detail: "Objetivo del video, público, referencias y mensaje principal.",
      },
      {
        title: "Guion y storyboard",
        detail: "Estructura clara antes de grabar o editar.",
      },
      {
        title: "Producción y edición",
        detail: "Grabación (si aplica), montaje, música, subtítulos y entrega en formatos.",
      },
      {
        title: "Paquete de publicación",
        detail: "Versiones para feed, stories y ads listas para subir.",
      },
    ],
    useCases: [
      "Restaurante o retail con reels de producto",
      "Empresa de servicios con video de confianza",
      "Lanzamiento con piezas para ads en Meta",
      "Testimoniales de clientes editados para web",
    ],
    cta: "Quiero contenido profesional",
  },
  {
    id: "branding",
    code: "branding05",
    title: "Branding y Diseño",
    short: "Identidad visual sólida para destacar en el mercado.",
    description:
      "Tu marca es la primera impresión. Construimos un sistema visual coherente — logo, colores, tipografía y aplicaciones — para que todo lo que publiques se sienta premium y reconocible.",
    idealFor:
      "Negocios nuevos o en reposicionamiento que necesitan verse serios y memorables.",
    benefits: [
      "Imagen profesional desde el primer contacto",
      "Coherencia en web, redes y material impreso",
      "Diferenciación frente a competidores genéricos",
      "Base visual lista para escalar comunicación",
    ],
    deliverables: [
      {
        title: "Logo y sistema visual",
        detail: "Isotipo, logotipo, variantes, fondos y usos correctos.",
      },
      {
        title: "Lineamientos de marca",
        detail: "Manual breve con colores, tipografías, tono y ejemplos de aplicación.",
      },
      {
        title: "Diseño UI para web y apps",
        detail: "Componentes, botones, tarjetas y layouts alineados a la identidad.",
      },
      {
        title: "Piezas para campañas",
        detail: "Templates para redes, presentaciones y material comercial.",
      },
    ],
    management: [
      {
        title: "Control de activos de marca",
        detail:
          "Repositorio ordenado con logos, paletas, fuentes y templates listos para tu equipo.",
      },
      {
        title: "Revisiones de coherencia",
        detail:
          "Validamos que web, redes y material nuevo respeten el sistema visual acordado.",
      },
      {
        title: "Extensiones del sistema",
        detail:
          "Nuevas aplicaciones de marca (banners, posts, presentaciones) sin romper la identidad.",
      },
      {
        title: "Soporte de handoff",
        detail:
          "Acompañamiento breve para que diseñadores o proveedores externos usen bien el kit.",
      },
    ],
    process: [
      {
        title: "Investigación y moodboard",
        detail: "Referencias, competencia y personalidad de marca.",
      },
      {
        title: "Propuestas conceptuales",
        detail: "2–3 direcciones visuales para elegir con criterio.",
      },
      {
        title: "Sistema y refinamiento",
        detail: "Pulimos la opción elegida y armamos el kit completo.",
      },
      {
        title: "Entrega y handoff",
        detail: "Archivos fuente y guía para que tu equipo los use bien.",
      },
    ],
    useCases: [
      "Startup que lanza su primera identidad",
      "Clínica o estudio que renueva imagen",
      "Marca local que quiere verse internacional",
      "Rebranding tras cambio de servicios o mercado",
    ],
    cta: "Quiero renovar mi marca",
  },
  {
    id: "web",
    code: "web06",
    title: "Web Comercial",
    short: "Sitios pensados para vender, informar y convertir.",
    description:
      "Una web bonita que no convierte es un gasto. Diseñamos sitios rápidos, claros y con estructura comercial: cada sección empuja hacia contacto, cotización o compra.",
    idealFor:
      "Empresas que necesitan presencia digital seria, más leads o reemplazar un sitio desactualizado.",
    benefits: [
      "Primera impresión profesional y memorable",
      "Carga rápida y buena experiencia en móvil",
      "CTAs visibles y recorrido de conversión claro",
      "Base SEO y analítica desde el lanzamiento",
    ],
    deliverables: [
      {
        title: "Landing pages premium",
        detail: "Una página, un objetivo: captar leads o vender un servicio específico.",
      },
      {
        title: "Sitio corporativo moderno",
        detail: "Home, servicios, nosotros, contacto y secciones a medida.",
      },
      {
        title: "Secciones de servicios y casos",
        detail: "Jerarquía clara que explica qué haces y por qué confiar.",
      },
      {
        title: "CTAs orientados a conversión",
        detail: "Formularios, WhatsApp, botones y microcopy que invitan a actuar.",
      },
    ],
    management: [
      {
        title: "Administración del sitio web",
        detail:
          "Hosting, SSL, dominio, backups y actualizaciones técnicas para que tu web esté siempre en línea.",
      },
      {
        title: "Analítica mensual",
        detail:
          "Reporte de tráfico, páginas más visitadas, fuentes de visita, conversiones y comportamiento en móvil.",
      },
      {
        title: "Mantenimiento de contenido",
        detail:
          "Cambios de textos, imágenes, precios o secciones sin que tengas que tocar código.",
      },
      {
        title: "Monitoreo de rendimiento",
        detail:
          "Velocidad de carga, errores y SEO básico revisados cada mes con acciones concretas.",
      },
    ],
    process: [
      {
        title: "Estructura y wireframe",
        detail: "Mapa del sitio y flujo del visitante antes del diseño visual.",
      },
      {
        title: "Diseño UI",
        detail: "Mockups responsive con tu marca y copy orientado a conversión.",
      },
      {
        title: "Desarrollo y contenido",
        detail: "Código limpio, animaciones sutiles y textos finales integrados.",
      },
      {
        title: "Publicación",
        detail: "Dominio, SSL, analítica y revisión post-lanzamiento.",
      },
    ],
    useCases: [
      "Laboratorio o clínica con web de cotización",
      "Empresa de servicios B2B con portfolio",
      "Landing para campaña de ads específica",
      "Rediseño de sitio lento o poco claro",
    ],
    cta: "Quiero una web que convierta",
  },
];
