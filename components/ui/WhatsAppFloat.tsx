import WhatsAppBrandIcon from "@/components/ui/WhatsAppBrandIcon";
import { WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(WHATSAPP_MESSAGES.float)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <WhatsAppBrandIcon className="whatsapp-float__icon" />
    </a>
  );
}
