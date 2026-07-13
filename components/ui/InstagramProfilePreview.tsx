"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/contact";

const PHONE_W = 390;
const PHONE_H = 720;

export default function InstagramProfilePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.55);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(w / PHONE_W, 1));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="ig-preview">
      <div
        className="ig-preview__embed-wrap"
        style={{
          width: PHONE_W,
          height: PHONE_H,
          transform: `scale(${scale})`,
        }}
      >
        <iframe
          src={CONTACT.instagramEmbed}
          title="Perfil de NOCTA en Instagram"
          className="ig-preview__iframe"
          loading="lazy"
        />
      </div>
    </div>
  );
}
