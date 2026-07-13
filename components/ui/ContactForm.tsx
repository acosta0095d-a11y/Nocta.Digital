import Btn53 from "@/components/ui/Btn53";
import { SERVICE_CATALOG } from "@/lib/service-catalog";

export default function ContactForm() {
  return (
    <form className="contact-form" action="mailto:hola@nocta.co" method="post">
      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="contact-nombre">Nombre</label>
          <input id="contact-nombre" type="text" name="nombre" autoComplete="name" required />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">Correo</label>
          <input id="contact-email" type="email" name="email" autoComplete="email" required />
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-servicio">Servicio de interés</label>
          <select id="contact-servicio" name="servicio" defaultValue="">
            <option value="" disabled>
              Selecciona una línea
            </option>
            {SERVICE_CATALOG.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-mensaje">Sobre tu proyecto</label>
          <textarea
            id="contact-mensaje"
            name="mensaje"
            rows={5}
            placeholder="Cuéntanos qué necesitas, plazos y contexto del negocio."
            required
          />
        </div>
      </div>

      <div className="contact-form__footer">
        <Btn53 type="submit" label="Enviar mensaje" suffix="→" />
        <p className="contact-form__note">Respondemos en menos de 24 horas hábiles.</p>
      </div>
    </form>
  );
}
