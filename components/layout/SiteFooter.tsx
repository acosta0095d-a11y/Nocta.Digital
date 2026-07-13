import Link from "next/link";
import { CONTACT, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/contact";
import { FOOTER_COLUMNS } from "@/lib/footer-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__intro">
          <p className="site-footer__logo">NOCTA</p>
          <p className="site-footer__pitch">
            Creadores de <strong>webs</strong>, <strong>software</strong>,{" "}
            <strong>SaaS</strong>, <strong>posts</strong>, <strong>banners</strong>,{" "}
            <strong>logos</strong> y <strong>marcas</strong>. Tecnología, creatividad y
            estrategia en un solo partner.
          </p>
        </div>

        <div className="site-footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="site-footer__column">
              <p className="site-footer__column-title">{column.title}</p>
              <ul className="site-footer__links">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    {link.href.startsWith("mailto:") || link.href.startsWith("http") ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 NOCTA Solutions Group SAS · Colombia · Remoto global</p>
          <div className="site-footer__bottom-links">
            <Link href="/contacto">Contacto</Link>
            <a href={whatsappHref(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
