"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Btn53Props = {
  label: string;
  suffix?: ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
};

function Btn53Content({ label, suffix }: { label: string; suffix?: ReactNode }) {
  const chars = Array.from(label);

  return (
    <>
      <span className="btn-53__original">
        {label}
        {suffix}
      </span>
      <span className="btn-53__letters" aria-hidden>
        {chars.map((char, index) => (
          <span key={`${char}-${index}`}>{char === " " ? "\u00A0" : char}</span>
        ))}
        {suffix && <span className="btn-53__suffix">{suffix}</span>}
      </span>
    </>
  );
}

export default function Btn53({
  label,
  suffix,
  href,
  className = "",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  external = false,
}: Btn53Props) {
  const classes = [
    "btn-53",
    size === "sm" ? "btn-53--sm" : "",
    fullWidth ? "btn-53--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = <Btn53Content label={label} suffix={suffix} />;

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          aria-label={label}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={label}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={label}>
      {content}
    </button>
  );
}
