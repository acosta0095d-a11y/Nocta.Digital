type TiltInfoCardProps = {
  title: string;
  description?: string;
  index?: string;
  badge?: string;
  className?: string;
};

export default function TiltInfoCard({
  title,
  description,
  index,
  badge,
  className = "",
}: TiltInfoCardProps) {
  return (
    <div className={`tilt-card-wrap ${className}`}>
      <article className="tilt-card">
        <div className="tilt-card__glass" aria-hidden />
        <div className="tilt-card__content">
          {badge && <span className="tilt-card__badge">{badge}</span>}
          {index && (
            <span className="tilt-card__index" aria-hidden>
              {index}
            </span>
          )}
          <h3 className="tilt-card__title">{title}</h3>
          {description && <p className="tilt-card__text">{description}</p>}
        </div>
        <div className="tilt-card__orb" aria-hidden>
          <span className="tilt-card__circle tilt-card__circle--1" />
          <span className="tilt-card__circle tilt-card__circle--2" />
          <span className="tilt-card__circle tilt-card__circle--3" />
          <span className="tilt-card__circle tilt-card__circle--4" />
          <span className="tilt-card__circle tilt-card__circle--5">
            <span className="tilt-card__dot" />
          </span>
        </div>
      </article>
    </div>
  );
}
