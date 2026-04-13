// ============================================================
// CARROUSEL MODERNE — à intégrer dans Home.jsx
// Remplacez la section {/* 🎬 CARROUSEL */} par ce composant
// ============================================================

import { useState } from "react";

// ── Utilitaire de positionnement ─────────────────────────────
function getPosition(index, activeIndex, total) {
  const diff = ((index - activeIndex) % total + total) % total;
  const sym = diff > total / 2 ? diff - total : diff;
  if (sym === 0) return "center";
  if (sym === -1) return "left";
  if (sym === 1) return "right";
  return sym < 0 ? "far-left" : "far-right";
}

// ── Classes Tailwind par position ────────────────────────────
const POSITION_CLASSES = {
  center:
    "translate-x-0 scale-100 rotate-y-0 z-20 opacity-100",
  left:
    "-translate-x-[340px] scale-[0.78] z-10 opacity-55",
  right:
    "translate-x-[340px] scale-[0.78] z-10 opacity-55",
  "far-left":
    "-translate-x-[530px] scale-[0.60] z-0 opacity-20 hidden md:block",
  "far-right":
    "translate-x-[530px] scale-[0.60] z-0 opacity-20 hidden md:block",
};

// ── Composant CarouselSection ─────────────────────────────────
export default function CarouselSection({ albums, onAlbumClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = albums.length;

  const prev = () => setActiveIndex((i) => (i - 1 + n) % n);
  const next = () => setActiveIndex((i) => (i + 1) % n);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 overflow-hidden">

      {/* Halo d'ambiance derrière la carte active */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-700"
        style={{ background: "#ddb183" }}
      />

      {/* En-tête */}
      <p className="relative z-10 text-[13px] tracking-[0.18em] text-white/40 text-center uppercase mb-2">
        Discographie
      </p>
      

      {/* Track */}
      <div className="relative max-w-[1300px] mx-auto flex items-center justify-center min-h-[460px]">

        {/* Bouton gauche */}
        <button
          onClick={prev}
          aria-label="Précédent"
          className="absolute left-2 md:left-0 z-30 w-10 h-10 rounded-full
                     border border-white/20 bg-black/60 hover:bg-[#ddb183]/20
                     hover:border-[#ddb183]/60 transition-all duration-200
                     flex items-center justify-center group"
        >
          <svg
            className="w-4 h-4 text-white/60 group-hover:text-[#ddb183] transition-colors"
            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
          >
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>

        {/* Cartes */}
        <div className="relative flex items-center justify-center w-full h-[440px]">
          {albums.map((album, index) => {
            const pos = getPosition(index, activeIndex, n);
            const posClass = POSITION_CLASSES[pos] ?? "opacity-0 pointer-events-none";

            return (
              <div
                key={album.id}
                onClick={() => (pos === "center" ? onAlbumClick?.(album) : setActiveIndex(index))}
                className={`
                  absolute flex flex-col items-center
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  cursor-pointer
                  ${posClass}
                `}
              >
                {/* Pochette */}
                <div className="relative w-[280px] md:w-[310px]">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-[310px] object-cover rounded-2xl
                               shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    draggable={false}
                  />

                  {/* Badge "Écouter" — visible uniquement sur la carte active */}
                  {pos === "center" && (
                    <div
                      className="absolute flex items-center gap-1 bottom-3 left-1/2 -translate-x-1/2
                      bg-[#ddb183] text-black text-[11px] font-bold
                      px-3 py-1 rounded-full
                      animate-[fadeIn_0.3s_ease]"
                    >
                      ▶ Écouter
                    </div>
                  )}
                </div>

                {/* Infos */}
                <div className="mt-4 text-center">
                  <h3
                    className={`font-bold tracking-wide transition-all duration-300 ${
                      pos === "center" ? "text-white/80 text-base" : "text-white/50 text-sm"
                    }`}
                  >
                    {album.title}
                  </h3>
                  {album.year && pos === "center" && (
                    <p className="text-[#ddb183]/70 text-xs mt-1 tracking-widest">
                      {album.year}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton droite */}
        <button
          onClick={next}
          aria-label="Suivant"
          className="absolute right-2 md:right-0 z-30 w-10 h-10 rounded-full
                     border border-white/20 bg-black/60 hover:bg-[#ddb183]/20
                     hover:border-[#ddb183]/60 transition-all duration-200
                     flex items-center justify-center group"
        >
          <svg
            className="w-4 h-4 text-white/60 group-hover:text-[#ddb183] transition-colors"
            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {albums.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Album ${i + 1}`}
            className={`
              h-[5px] rounded-full transition-all duration-300
              ${i === activeIndex
                ? "w-6 bg-[#ddb183]"
                : "w-[5px] bg-white/25 hover:bg-white/50"}
            `}
          />
        ))}
      </div>
    </section>
  );
}


// ============================================================
// UTILISATION DANS Home.jsx
// ============================================================
//
// 1. Importez le composant :
//    import CarouselSection from "./CarouselSection";
//
// 2. Remplacez votre section MUSIC par :
//
//    <CarouselSection
//      albums={albums}
//      onAlbumClick={(album) => setSelectedAlbum(album)}
//    />
//
// 3. Assurez-vous que vos albums ont bien les champs :
//    { id, title, cover, year? }
//
// 4. Pour activer la navigation clavier, ajoutez dans Home.jsx :
//
//    useEffect(() => {
//      const handleKey = (e) => {
//        if (e.key === "ArrowLeft")  /* déclencher prev */
//        if (e.key === "ArrowRight") /* déclencher next */
//      };
//      window.addEventListener("keydown", handleKey);
//      return () => window.removeEventListener("keydown", handleKey);
//    }, []);
//
// ============================================================
