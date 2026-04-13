// ============================================================
// HEADER — responsive avec menu hamburger
// ============================================================
//
// Ajouter dans index.html ou index.css :
// <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "HOME",    to: "/",       color: "#ffffff", text: "#000000" },
  { label: "ABOUT",  to: "/about",  color: "#f8db47", text: "#000000" },
  { label: "MUSIC",  to: "/music",  color: "#15c9f2", text: "#ffffff" },
  { label: "PHOTOS", to: "/photos", color: "#ff75da", text: "#000000" },
  { label: "VIDEOS", to: "/videos", color: "#ab81cd", text: "#000000" },
  { label: "BOOK ME",to: "/bookme", color: "#ff9595", text: "#000000" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  // Fermer le menu au changement de page
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">

      {/* Fond flouté */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/8" />

      <nav className="relative max-w-6xl mx-auto flex items-center justify-between py-3 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-white tracking-[0.2em] font-bold hover:text-[#ddb183] transition-colors duration-200"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem" }}
        >
          BARHAN
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  className="relative flex flex-col items-center px-3 py-1.5 text-xs font-bold
                  tracking-widest transition-all duration-200 rounded-sm select-none"
                  style={{
                    color: active ? link.text : "rgba(255,255,255,0.55)",
                    backgroundColor: active ? link.color : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = link.text;
                      e.currentTarget.style.backgroundColor = link.color + "99";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2
                                 w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: link.color }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 z-10"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
            ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300
            ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
            ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

      </nav>

      {/* Menu mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[53px] bg-black/97 backdrop-blur-md
        transition-all duration-400 ease-in-out flex flex-col
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Halo ambiance */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(221,177,131,0.06) 0%, transparent 70%)",
          }}
        />

        <ul className="relative z-10 flex flex-col items-stretch px-6 pt-8 gap-2">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.to);
            return (
              <li
                key={link.to}
                className="transition-all duration-300"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <Link
                  to={link.to}
                  className="flex items-center justify-between px-5 py-4 rounded-xl
                             text-sm font-bold tracking-widest transition-all duration-200"
                  style={{
                    backgroundColor: active ? link.color : "rgba(255,255,255,0.04)",
                    color: active ? link.text : "rgba(255,255,255,0.6)",
                    borderLeft: active ? `3px solid ${link.color}` : "3px solid transparent",
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: active ? link.text : link.color }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bas du menu mobile */}
        <div className="relative z-10 mt-auto px-6 pb-10 flex flex-col items-center gap-3">
          <div className="w-full h-px bg-white/8 mb-4" />
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Barhan
          </p>
        </div>
      </div>

    </header>
  );
}
