type FlipInfoCardProps = {
  frontTitle: string;
  frontSubtitle?: string;
  backTitle?: string;
  backItems?: string[];
  backText?: string;
  className?: string;
};

export default function FlipInfoCard({
  frontTitle,
  frontSubtitle,
  backTitle = "Detalle",
  backItems = [],
  backText,
  className = "",
}: FlipInfoCardProps) {
  return (
    <div className={`flip-card-wrap ${className}`}>
      <article className="flip-card">
        <div className="flip-card__face flip-card__front">
          <span className="flip-card__glow" aria-hidden />
          {frontSubtitle && <p className="flip-card__eyebrow">{frontSubtitle}</p>}
          <h3 className="flip-card__title">{frontTitle}</h3>
          <p className="flip-card__hint">Pasa el cursor</p>
        </div>
        <div className="flip-card__face flip-card__back">
          <span className="flip-card__glow flip-card__glow--back" aria-hidden />
          <p className="flip-card__eyebrow">{backTitle}</p>
          {backText && <p className="flip-card__text">{backText}</p>}
          {backItems.length > 0 && (
            <ul className="flip-card__list">
              {backItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </div>
  );
}
