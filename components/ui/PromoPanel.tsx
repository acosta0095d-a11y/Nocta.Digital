import Link from "next/link";
import type { ReactNode } from "react";

type PromoPanelProps = {
  badge?: string;
  title: string;
  description?: string;
  cta?: string;
  index?: number | string;
  icon?: string;
  href?: string;
  variant?: "default" | "nav";
  className?: string;
  children?: ReactNode;
};

export default function PromoPanel({
  badge,
  title,
  description,
  cta,
  index,
  icon,
  href,
  variant = "default",
  className = "",
  children,
}: PromoPanelProps) {
  const classes = [
    "promo-card",
    "promo-card--static",
    variant === "nav" ? "promo-card--nav" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="promo-icon" aria-hidden>{icon}</span>}
      {badge && <span className="promo-badge">{badge}</span>}
      {index !== undefined && (
        <span className="promo-index" aria-hidden>
          {typeof index === "number" ? String(index + 1).padStart(2, "0") : index}
        </span>
      )}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
      {cta && <span className="promo-cta">{cta}</span>}
    </>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
