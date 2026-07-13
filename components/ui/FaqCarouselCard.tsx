type FaqCarouselCardProps = {
  question: string;
  answer: string;
  index?: number;
};

export default function FaqCarouselCard({ question, answer, index }: FaqCarouselCardProps) {
  return (
    <article className="promo-card promo-card--faq" data-carousel-card>
      {index !== undefined && (
        <span className="promo-index" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3>{question}</h3>
      <p>{answer}</p>
    </article>
  );
}
