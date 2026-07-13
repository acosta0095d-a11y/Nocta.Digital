"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TypeWriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  startWhen?: boolean;
  onComplete?: () => void;
  className?: string;
  cursor?: boolean;
  /** Unique key so animation runs once per page load (survives Strict Mode remount) */
  animId?: string;
};

const completedAnimations = new Set<string>();

export default function TypeWriter({
  text,
  speed = 38,
  delay = 0,
  startWhen = true,
  onComplete,
  className = "",
  cursor = true,
  animId,
}: TypeWriterProps) {
  const cacheKey = animId ?? text;
  const alreadyDone = completedAnimations.has(cacheKey);

  const [displayed, setDisplayed] = useState(alreadyDone ? text : "");
  const [done, setDone] = useState(alreadyDone);
  const onCompleteRef = useRef(onComplete);
  const firedCompleteRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!startWhen) return;

    if (completedAnimations.has(cacheKey)) {
      setDisplayed(text);
      setDone(true);
      if (!firedCompleteRef.current) {
        firedCompleteRef.current = true;
        onCompleteRef.current?.();
      }
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      if (cancelled) return;

      let i = 0;
      intervalId = setInterval(() => {
        if (cancelled) return;
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          completedAnimations.add(cacheKey);
          setDone(true);
          onCompleteRef.current?.();
        }
      }, speed);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, startWhen, cacheKey]);

  return (
    <span className={`typewriter ${className}`}>
      {displayed}
      {cursor && (
        <span
          className={`typewriter-cursor ${done ? "typewriter-cursor--done" : ""}`}
          aria-hidden
        >
          |
        </span>
      )}
    </span>
  );
}
