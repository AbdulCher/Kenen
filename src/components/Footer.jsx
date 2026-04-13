// ============================================================
// FOOTER — pro et moderne, cohérent avec le site
// ============================================================
//
// UTILISATION dans App.jsx ou layout principal :
//   import Footer from "./components/Footer";
//   <Footer />
// ============================================================

import { Link } from "react-router-dom";
import Icons from "./Icons";

const NAV_LINKS = [
  { label: "Home",   to: "/" },
  { label: "About",  to: "/about" },
  { label: "Music",  to: "/music" },
  { label: "Photos", to: "/photos" },
  { label: "Videos", to: "/videos" },
  { label: "Book Me", to: "/bookme" },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", to: "/mentions-legales" },
  { label: "Politique de confidentialité", to: "/confidentialite" },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">

      {/* ── Séparateur rouge ── */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#8c0202] to-transparent" />

      {/* ── Halo rouge haut ── */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(140,2,2,0.18) 0%, transparent 80%)",
        }}
      />

      {/* ── Contenu principal ── */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-16 pb-10 flex flex-col gap-12">

        {/* Ligne haute : nom + nav + contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Colonne 1 — Identité */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-3xl font-bold tracking-[0.2em]">BARHAN</h2>
              <p className="text-[11px] tracking-[0.18em] text-white/70 uppercase mt-1">
                Kennen Music
              </p>
            </div>
            <p className="text-white/70 text-md leading-relaxed max-w-[240px]">
              Artiste aux sonorités métissées, entre Afrique de l'Ouest, soul et hip-hop. Basé à Paris.
            </p>
            <div className="mt-1">
              <Icons />
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] tracking-[0.18em] text-[#ddb183]/90 uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-md text-white/70 hover:text-white transition-colors duration-200
                             hover:translate-x-1 inline-flex items-center gap-2 group w-fit"
                >
                  <span className="w-3 h-px bg-[#8c0202] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] tracking-[0.18em] text-[#ddb183]/90 uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@barhan.com"
                className="text-md text-white/70 hover:text-[#ddb183] transition-colors duration-200 w-fit"
              >
                contact@barhan.com
              </a>
              <a
                href="tel:+33612345678"
                className="text-md text-white/70 hover:text-[#ddb183] transition-colors duration-200 w-fit"
              >
                +33 6 12 34 56 78
              </a>
              <p className="text-md text-white/70">Paris, France</p>
            </div>

            {/* CTA Book */}
            <Link
              to="/bookme"
              className="mt-3 w-fit flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                         text-black bg-[#ddb183] hover:bg-[#ff7d00]
                         px-5 py-2.5 rounded-full transition-all duration-200
                         shadow-[0_4px_16px_rgba(221,177,131,0.25)]"
            >
              Réserver
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </Link>
          </div>

        </div>

        {/* ── Séparateur ── */}
        <div className="w-full h-px bg-white/8" />

        {/* ── Ligne basse : copyright + légal ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-white/70 text-xs tracking-wide">
            © {YEAR} Barhan — Tous droits réservés
          </p>

          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/70 text-xs hover:text-white/50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
