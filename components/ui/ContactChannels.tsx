import Btn53 from "@/components/ui/Btn53";
import WhatsAppBrandIcon from "@/components/ui/WhatsAppBrandIcon";
import ContactIcon from "@/components/ui/ContactIcon";
import { CONTACT, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";

const WA_TIPS = [
  "Qué necesitas (web, software, marca, etc.)",
  "Plazo o urgencia del proyecto",
  "Presupuesto aproximado si lo tienes",
];

const EMAIL_TIPS = [
  "Propuestas formales y documentación",
  "Briefs con archivos adjuntos",
  "Seguimiento de proyectos en curso",
];

export default function ContactChannels() {
  return (
    <div className="contact-channels">
      <header className="contact-channels__header">
        <p className="eyebrow mb-3">Hablemos</p>
        <h2 className="section-title mb-4">Escríbenos directo.</h2>
        <p className="body-text max-w-2xl leading-relaxed">
          Sin formularios. Elige el canal que prefieras — respondemos en menos de 24 horas hábiles
          con alcance, tiempos y próximos pasos claros.
        </p>
      </header>

      <div className="contact-channels__grid">
        <a
          href={whatsappHref(WHATSAPP_MESSAGES.contact)}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-panel contact-channel-panel--wa"
        >
          <div className="contact-channel-panel__top">
            <span className="contact-channel-panel__icon contact-channel-panel__icon--wa">
              <WhatsAppBrandIcon />
            </span>
            <div>
              <p className="contact-channel-panel__label">WhatsApp</p>
              <p className="contact-channel-panel__value">{CONTACT.whatsappDisplay}</p>
            </div>
          </div>
          <p className="contact-channel-panel__desc">
            El canal más rápido. Ideal para arrancar hoy: cuéntanos tu idea y agendamos una llamada
            corta sin compromiso.
          </p>
          <ul className="contact-channel-panel__list">
            {WA_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <span className="contact-channel-panel__cta">Abrir chat →</span>
        </a>

        <a href={CONTACT.emailHref} className="contact-channel-panel contact-channel-panel--email">
          <div className="contact-channel-panel__top">
            <span className="contact-channel-panel__icon contact-channel-panel__icon--email">
              <ContactIcon id="email" />
            </span>
            <div>
              <p className="contact-channel-panel__label">Correo</p>
              <p className="contact-channel-panel__value contact-channel-panel__value--email">
                {CONTACT.email}
              </p>
            </div>
          </div>
          <p className="contact-channel-panel__desc">
            Para propuestas escritas, contratos o cuando necesitas dejar todo documentado en un solo
            hilo.
          </p>
          <ul className="contact-channel-panel__list">
            {EMAIL_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <span className="contact-channel-panel__cta">Enviar correo →</span>
        </a>
      </div>

      <div className="contact-channels__footer">
        <Btn53
          href={whatsappHref(WHATSAPP_MESSAGES.contact)}
          label="Más info"
          suffix="→"
          external
        />
      </div>
    </div>
  );
}
