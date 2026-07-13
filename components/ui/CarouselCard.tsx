import Link from "next/link";

type CarouselCardProps = {
  href: string;
  badge?: string;
  title: string;
  description: string;
  cta?: string;
  index?: number;
  icon?: string;
  variant?: "default" | "nav";
  external?: boolean;
};

export default function CarouselCard({
  href,
  badge,
  title,
  description,
  cta = "Explorar →",
  index,
  icon,
  variant = "default",
  external = false,
}: CarouselCardProps) {
  const className = `promo-card${variant === "nav" ? " promo-card--nav" : ""}`;

  const content = (
    <>
      {icon && <span className="promo-icon" aria-hidden>{icon}</span>}
      {badge && <span className="promo-badge">{badge}</span>}
      {index !== undefined && (
        <span className="promo-index" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="promo-cta">{cta}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        data-carousel-card
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} data-carousel-card>
      {content}
    </Link>
  );
}
