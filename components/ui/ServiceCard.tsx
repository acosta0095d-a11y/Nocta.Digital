import Link from "next/link";

type ServiceCardProps = {
  code: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export default function ServiceCard({
  code,
  title,
  description,
  href,
  className = "",
}: ServiceCardProps) {
  const content = (
    <>
      <span className="service-card__code">{code}</span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`service-card ${className}`}>
        {content}
      </Link>
    );
  }

  return <article className={`service-card ${className}`}>{content}</article>;
}
