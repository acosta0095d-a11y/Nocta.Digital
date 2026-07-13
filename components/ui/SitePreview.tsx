"use client";

import { useEffect, useRef, useState } from "react";

const VIEWPORT_W = 1440;
const VIEWPORT_H = 810;

type SitePreviewProps = {
  url: string;
  title: string;
};

function shotUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${VIEWPORT_W}`;
}

export function SitePreview({ url, title }: SitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.28);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / VIEWPORT_W);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="site-preview">
      {/* Fallback: captura del inicio del sitio si el iframe está bloqueado */}
      <img
        src={shotUrl(url)}
        alt={`Inicio de ${title}`}
        className="site-preview__shot"
        style={{
          width: VIEWPORT_W,
          height: VIEWPORT_H,
          transform: `scale(${scale})`,
        }}
        loading="lazy"
      />
      <iframe
        src={url}
        title={`Vista previa de ${title}`}
        className="site-preview__iframe"
        style={{
          width: VIEWPORT_W,
          height: VIEWPORT_H,
          transform: `scale(${scale})`,
        }}
        loading="lazy"
        tabIndex={-1}
      />
      <div className="site-preview__shade" aria-hidden />
    </div>
  );
}

export function SitePreviewPlaceholder() {
  return (
    <div className="site-preview site-preview--placeholder">
      <div className="site-preview__placeholder-grid" aria-hidden />
      <p className="site-preview__placeholder-label">Próximo caso</p>
    </div>
  );
}
