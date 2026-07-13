"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";

const LOOP_COPIES = 3;
const TRANSITION_MS = 480;

type InfiniteCarouselProps = {
  children: ReactElement | ReactElement[];
  fadeVariant?: "charcoal" | "dark" | "black";
  autoInterval?: number;
  className?: string;
  initialIndex?: number;
};

function getCenterIndex(count: number) {
  return count > 0 ? Math.floor((count - 1) / 2) : 0;
}

export default function InfiniteCarousel({
  children,
  fadeVariant = "charcoal",
  autoInterval = 0,
  className = "",
  initialIndex,
}: InfiniteCarouselProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement[];
  const count = items.length;
  const startIndex = initialIndex ?? getCenterIndex(count);

  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const positionIndexRef = useRef(0);
  const gapRef = useRef(17.6);
  const sidePadRef = useRef(0);
  const cardWidthRef = useRef(300);
  const viewportWidthRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const isResettingRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(false);

  const loopedItems =
    count > 0
      ? Array.from({ length: LOOP_COPIES }, (_, loopIndex) =>
          items.map((item, itemIndex) =>
            cloneElement(item, { key: `loop-${loopIndex}-${itemIndex}` })
          )
        ).flat()
      : [];

  const getViewport = useCallback(() => {
    return carouselRef.current?.querySelector(
      ".materials-carousel"
    ) as HTMLElement | null;
  }, []);

  const measureLayout = useCallback(() => {
    const viewport = getViewport();
    const track = trackRef.current;
    if (!viewport || !track || count === 0) return;

    const cards = track.querySelectorAll("[data-carousel-card]");
    const sample = (cards[0] as HTMLElement | undefined)?.offsetWidth || cardWidthRef.current;
    const viewportWidth = viewport.clientWidth;
    const isMobile = viewportWidth <= 767;
    const cardWidth = isMobile ? Math.min(viewportWidth, 280) : sample;
    const sidePad = Math.max(0, (viewportWidth - cardWidth) / 2);
    const gap = parseFloat(getComputedStyle(track).gap) || 17.6;

    cardWidthRef.current = cardWidth;
    viewportWidthRef.current = viewportWidth;
    sidePadRef.current = sidePad;
    gapRef.current = gap;

    if (isMobile) {
      viewport.style.setProperty("--carousel-card-w", `${cardWidth}px`);
    } else {
      viewport.style.removeProperty("--carousel-card-w");
    }

    track.style.paddingLeft = `${sidePad}px`;
    track.style.paddingRight = `${sidePad}px`;
    viewport.style.setProperty("--carousel-viewport-w", `${viewportWidth}px`);
  }, [count, getViewport]);

  const getOffsetForIndex = useCallback((index: number) => {
    const stride = cardWidthRef.current + gapRef.current;
    return (
      sidePadRef.current +
      index * stride +
      cardWidthRef.current / 2 -
      viewportWidthRef.current / 2
    );
  }, []);

  const applyCenterClasses = useCallback((posIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll("[data-carousel-card]");
    cards.forEach((card, i) => {
      card.classList.toggle("is-center", i === posIndex);
      card.classList.toggle("is-side", i === posIndex - 1 || i === posIndex + 1);
    });
  }, []);

  const setPosition = useCallback(
    (posIndex: number, withAnimation: boolean) => {
      positionIndexRef.current = posIndex;
      applyCenterClasses(posIndex);
      isAnimatingRef.current = withAnimation;
      setAnimate(withAnimation);
      setOffset(getOffsetForIndex(posIndex));
    },
    [applyCenterClasses, getOffsetForIndex]
  );

  const normalizePosition = useCallback(() => {
    if (count <= 1) return;

    const pos = positionIndexRef.current;
    let nextPos = pos;

    if (pos >= count * 2) nextPos = pos - count;
    else if (pos < count) nextPos = pos + count;

    if (nextPos === pos) return;

    isResettingRef.current = true;
    isAnimatingRef.current = false;
    setPosition(nextPos, false);
    requestAnimationFrame(() => {
      isResettingRef.current = false;
    });
  }, [count, setPosition]);

  const snapByDirection = useCallback(
    (direction: 1 | -1) => {
      if (count === 0 || isResettingRef.current) return;
      if (isAnimatingRef.current) return;

      setPosition(positionIndexRef.current + direction, true);
    },
    [count, setPosition]
  );

  const refreshLayout = useCallback(() => {
    measureLayout();
    setOffset(getOffsetForIndex(positionIndexRef.current));
    applyCenterClasses(positionIndexRef.current);
  }, [measureLayout, getOffsetForIndex, applyCenterClasses]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count === 0) return;

    const initialPos = count + startIndex;
    positionIndexRef.current = initialPos;

    const id = requestAnimationFrame(() => {
      measureLayout();
      setPosition(initialPos, false);
      requestAnimationFrame(() => {
        measureLayout();
        setOffset(getOffsetForIndex(initialPos));
      });
    });

    return () => cancelAnimationFrame(id);
  }, [count, startIndex, measureLayout, setPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transform = `translate3d(-${offset}px, 0, 0)`;
    track.style.transition = animate
      ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
      : "none";
  }, [offset, animate]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== track || event.propertyName !== "transform") return;
      isAnimatingRef.current = false;
      normalizePosition();
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [normalizePosition]);

  useEffect(() => {
    let frame = 0;

    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(refreshLayout);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [refreshLayout]);

  useEffect(() => {
    if (!autoInterval || count < 2 || !isVisible) return;

    const id = window.setInterval(() => {
      snapByDirection(1);
    }, autoInterval);

    return () => window.clearInterval(id);
  }, [autoInterval, count, isVisible, snapByDirection]);

  const fadeBase = `materials-fade-${fadeVariant}`;

  return (
    <div className={`materials-carousel-wrap ${className}`} ref={carouselRef}>
      <div className={`materials-fade materials-fade-left ${fadeBase}`} aria-hidden />
      <div className="materials-carousel">
        <div ref={trackRef} className="materials-track">
          {loopedItems}
        </div>
      </div>
      <div className={`materials-fade materials-fade-right ${fadeBase}`} aria-hidden />
      <button
        type="button"
        className="materials-nav materials-nav-prev"
        onClick={() => snapByDirection(-1)}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        type="button"
        className="materials-nav materials-nav-next"
        onClick={() => snapByDirection(1)}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
