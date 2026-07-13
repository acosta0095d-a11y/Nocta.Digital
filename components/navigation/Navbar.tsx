"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Btn53 from "@/components/ui/Btn53";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hasEntered = useRef(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!hasEntered.current) {
      hasEntered.current = true;
      setEntered(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navigate = (href: string) => {
    closeMenu();
    if (href !== pathname) {
      router.push(href);
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const enterClass = entered ? "navbar--entered" : "";

  return (
    <>
      <header
        className={`navbar ${enterClass} fixed top-0 left-0 right-0 z-50 h-12 sm:h-14 lg:h-16 bg-black/75 backdrop-blur-xl border-b border-white/[0.06] ${
          scrolled ? "navbar--scrolled" : ""
        } ${menuOpen ? "navbar--menu-open" : ""}`}
      >
        <div className="site-container h-full flex items-center justify-between gap-3">
          <Link href="/" className="navbar-brand group shrink-0">
            <Image
              src="/images/logo-primary-white.png"
              alt="NOCTA logo"
              width={32}
              height={32}
              className="navbar-brand__logo object-contain transition-transform duration-300 group-hover:scale-110 w-7 h-7 sm:w-8 sm:h-8"
              priority
            />
            <span className="font-horizon text-white text-[10px] sm:text-[11px] lg:text-xs tracking-[0.14em] sm:tracking-[0.16em] uppercase">
              NOCTA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link nav-link--desktop ${
                  isActive(link.href) ? "nav-link--active" : ""
                } ${entered ? "nav-link--entered" : ""}`}
                style={{ transitionDelay: entered ? `${0.08 + i * 0.05}s` : undefined }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Btn53
              href="/contacto"
              label="Hablemos"
              suffix="→"
              size="sm"
              className={`hidden sm:inline-flex ${entered ? "navbar-cta--entered" : ""}`}
            />

            <button
              type="button"
              className={`navbar-toggle lg:hidden ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="navbar-drawer"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`navbar-backdrop lg:hidden ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <nav
        id="navbar-drawer"
        className={`navbar-drawer lg:hidden ${menuOpen ? "is-open" : ""}`}
        aria-label="Móvil"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className="navbar-drawer-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              className={`nav-link nav-link--drawer ${
                isActive(link.href) ? "nav-link--active" : ""
              }`}
              onClick={() => navigate(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className={`navbar-drawer-footer ${menuOpen ? "is-visible" : ""}`}>
          <p className="body-text text-xs sm:text-sm mb-3">
            Cuéntanos tu proyecto. Respondemos en menos de 24 horas.
          </p>
          <Btn53
            href="/contacto"
            label="Hablemos"
            suffix="→"
            fullWidth
            onClick={closeMenu}
          />
        </div>
      </nav>
    </>
  );
}
