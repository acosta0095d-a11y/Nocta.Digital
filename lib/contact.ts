const WHATSAPP_NUMBER = "573209223364";

export const WHATSAPP_MESSAGES = {
  general:
    "Hola NOCTA, me interesa conocer más sobre sus servicios. ¿Podemos hablar?",
  contact:
    "Hola NOCTA, vi su página de contacto y me gustaría recibir más información sobre un proyecto.",
  float:
    "Hola NOCTA, me interesa trabajar con ustedes. ¿Tienen disponibilidad para un nuevo proyecto?",
  service: (serviceName: string) =>
    `Hola NOCTA, me interesa el servicio de ${serviceName}. ¿Podemos agendar una llamada para contarles mi idea?`,
  home:
    "Hola NOCTA, quiero comenzar un proyecto digital con ustedes. ¿Me cuentan cómo funciona?",
  portfolio:
    "Hola NOCTA, vi su portafolio y me gustaría un proyecto similar. ¿Podemos hablar?",
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  email: "nocta.org@gmail.com",
  emailHref: "mailto:nocta.org@gmail.com",
  whatsappDisplay: "320 922 3364",
  whatsappHref: whatsappHref(WHATSAPP_MESSAGES.general),
  instagramHandle: "@nocta_digital",
  instagramUrl: "https://www.instagram.com/nocta_digital?igsh=d2dza3N3cjN0cHpl",
  instagramEmbed: "https://www.instagram.com/nocta_digital/embed",
} as const;
