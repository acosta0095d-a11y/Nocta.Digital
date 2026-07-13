import Btn53 from "@/components/ui/Btn53";
import { WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";

type MoreInfoStripProps = {
  message?: string;
  serviceTitle?: string;
};

export default function MoreInfoStrip({
  message = "¿Quieres saber más sobre este punto?",
  serviceTitle,
}: MoreInfoStripProps) {
  const href = serviceTitle
    ? whatsappHref(WHATSAPP_MESSAGES.service(serviceTitle))
    : whatsappHref(WHATSAPP_MESSAGES.general);

  return (
    <div className="more-info-strip">
      <p className="more-info-strip__text">{message}</p>
      <Btn53 href={href} label="Más info" suffix="→" external size="sm" />
    </div>
  );
}
