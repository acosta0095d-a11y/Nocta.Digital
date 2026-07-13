import Image from "next/image";
import Link from "next/link";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { SitePreview } from "@/components/ui/SitePreview";
import type { PublishedWork } from "@/lib/published-works";

type WorkShowcaseProps = {
  work: PublishedWork;
  index: number;
};

export default function WorkShowcase({ work, index }: WorkShowcaseProps) {
  const scopeLabel = work.scope === "from-scratch" ? "Desde cero" : "Mejora web";

  return (
    <article className="work-showcase">
      <div className="work-showcase__visual">
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-showcase__browser-link"
          aria-label={`Abrir ${work.name}`}
        >
          <BrowserFrame
            url={work.url}
            tabLabel={work.tabLabel}
            favicon={work.logo}
            className="work-showcase__frame"
          >
            <SitePreview url={work.url} title={work.name} />
          </BrowserFrame>
        </a>
      </div>

      <div className="work-showcase__copy">
        <header className="work-showcase__header">
          <p className="work-showcase__eyebrow">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden>·</span>
            <span>{scopeLabel}</span>
            <span aria-hidden>·</span>
            <span>{work.year}</span>
          </p>

          <div className="work-showcase__identity">
            <Image
              src={work.logo}
              alt=""
              width={160}
              height={56}
              className="work-showcase__logo"
            />
            <div>
              <h3 className="work-showcase__title">{work.name}</h3>
              <p className="work-showcase__subtitle">{work.title}</p>
            </div>
          </div>
        </header>

        <p className="work-showcase__desc">{work.description}</p>

        <ul className="work-showcase__highlights">
          {work.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <footer className="work-showcase__footer">
          <Link
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            Visitar sitio <span aria-hidden>↗</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}
