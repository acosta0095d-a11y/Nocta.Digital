import type { CSSProperties } from "react";

type GlassFanItem = {
  id: string;
  label: string;
  icon?: string;
};

type GlassFanRowProps = {
  items: GlassFanItem[];
  className?: string;
};

const ROTATIONS = [-14, 4, 18, -8];

export default function GlassFanRow({ items, className = "" }: GlassFanRowProps) {
  return (
    <div className={`glass-fan ${className}`}>
      {items.map((item, i) => (
        <div
          key={item.id}
          className="glass-fan__item"
          data-text={item.label}
          style={{ "--r": ROTATIONS[i % ROTATIONS.length] } as CSSProperties}
        >
          <span className="glass-fan__icon" aria-hidden>
            {item.icon ?? "◈"}
          </span>
        </div>
      ))}
    </div>
  );
}
