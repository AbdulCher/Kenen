// ============================================================
// PHOTOS PAGE — galerie pro avec zoom et navigation
// ============================================================

import { useState, useEffect, useCallback } from "react";
import Icons from "../components/Icons";
import GoldFlowParticles from "../animations/GoldFlowParticles";
import Bg from "../assets/bg.jpg";
import Header from "../components/Header";
import { albums as photos } from "./Photosdata";

// ── Galerie grid ─────────────────────────────────────────────
function Gallery({ photos, onPhotoClick, onClose }) {
  return (
    <div className="flex flex-col w-full h-full">

      {/* Header modal */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 shrink-0">
        <div>
          <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase mb-1">Galerie</p>
          <h2 className="text-xl font-bold tracking-widest text-white">PHOTOS</h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50
                     flex items-center justify-center text-white/60 hover:text-white
                     transition-all duration-200"
          aria-label="Fermer"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M3 3l10 10M13 3L3 13"/>
          </svg>
        </button>
      </div>

      {/* Grille scrollable */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(index)}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-xl
                         border border-white/10 hover:border-[#ddb183]/50 transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay titre au hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300
                              flex items-end p-3 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-bold tracking-wide">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Zoom lightbox ────────────────────────────────────────────
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  return (
    <div className="flex flex-col w-full h-full">

      {/* Header lightbox */}
      <div className="flex items-center justify-between px-8 py-5 shrink-0">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs tracking-widest uppercase
                     text-white/40 hover:text-[#ddb183] transition-colors duration-200"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M10 3L5 8l5 5"/>
          </svg>
          Retour
        </button>

        <p className="text-white/30 text-sm tabular-nums">
          {index + 1} / {photos.length}
        </p>

        <button
          onClick={() => { onClose(); }}
          className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50
                     flex items-center justify-center text-white/50 hover:text-white
                     transition-all duration-200"
          aria-label="Fermer"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M3 3l10 10M13 3L3 13"/>
          </svg>
        </button>
      </div>

      {/* Image centrale */}
      <div className="flex-1 flex items-center justify-center px-16 pb-8 relative">

        {/* Halo derrière l'image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(221,177,131,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Bouton gauche */}
        <button
          onClick={onPrev}
          className="absolute left-4 z-20 w-11 h-11 rounded-full
                     border border-white/20 bg-black/60 hover:bg-[#ddb183]/20
                     hover:border-[#ddb183]/60 transition-all duration-200
                     flex items-center justify-center group"
          aria-label="Précédent"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
               className="w-4 h-4 text-white/60 group-hover:text-[#ddb183] transition-colors">
            <path d="M10 3L5 8l5 5"/>
          </svg>
        </button>

        {/* Image */}
        <div className="relative max-w-4xl w-full flex flex-col items-center gap-4">
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="w-full max-h-[70vh] object-contain rounded-2xl
                       shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                       animate-[fadeIn_0.25s_ease]"
          />
          {/* Titre photo */}
          <p className="text-white/50 text-sm tracking-widest uppercase">{photo.alt}</p>
        </div>

        {/* Bouton droite */}
        <button
          onClick={onNext}
          className="absolute right-4 z-20 w-11 h-11 rounded-full
                     border border-white/20 bg-black/60 hover:bg-[#ddb183]/20
                     hover:border-[#ddb183]/60 transition-all duration-200
                     flex items-center justify-center group"
          aria-label="Suivant"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
               className="w-4 h-4 text-white/60 group-hover:text-[#ddb183] transition-colors">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </button>

      </div>

      {/* Strip miniatures */}
      <div className="shrink-0 px-8 pb-6 overflow-x-auto">
        <div className="flex gap-3 justify-center">
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onPrev(i)}
              className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border transition-all duration-200
                ${i === index
                  ? "border-[#ddb183] scale-110"
                  : "border-white/10 opacity-50 hover:opacity-80"
                }`}
              style={{ outline: "none" }}
            >
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Page principale ──────────────────────────────────────────
export default function Photos() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const n = photos.length;

  const openGallery = () => { setCurrentIndex(null); setIsGalleryOpen(true); };
  const closeAll    = () => { setIsGalleryOpen(false); setCurrentIndex(null); };
  const openPhoto   = (i) => setCurrentIndex(i);
  const closePhoto  = () => setCurrentIndex(null);
  const prevPhoto   = useCallback((i) => {
    if (typeof i === "number") { setCurrentIndex(i); return; }
    setCurrentIndex((prev) => (prev - 1 + n) % n);
  }, [n]);
  const nextPhoto   = useCallback(() => setCurrentIndex((prev) => (prev + 1) % n), [n]);

  // Navigation clavier
  useEffect(() => {
    if (!isGalleryOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") currentIndex !== null ? closePhoto() : closeAll();
      if (e.key === "ArrowLeft"  && currentIndex !== null) prevPhoto();
      if (e.key === "ArrowRight" && currentIndex !== null) nextPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isGalleryOpen, currentIndex, prevPhoto, nextPhoto]);

  // Bloquer le scroll quand modal ouvert
  useEffect(() => {
    document.body.style.overflow = isGalleryOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isGalleryOpen]);

  return (
    <>
      <Header />
      <GoldFlowParticles />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">

        <img
          src={Bg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(1.1) saturate(1.45) contrast(1.06)" }}
        />

        {/* Halo chaud */}
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,190,80,0.15) 0%, transparent 70%)" }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
        />
        {/* Dégradé bas */}
        <div className="absolute bottom-0 left-0 right-0 h-48 z-[3] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))" }}
        />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">Galerie</p>
            <h1 className="text-5xl font-bold tracking-[0.15em] drop-shadow-[0_2px_24px_rgba(255,180,60,0.3)]">
              PHOTOS
            </h1>
          </div>
          <Icons />
          <button
            onClick={openGallery}
            className="mt-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase
                       text-black bg-[#ddb183] hover:bg-[#ff7d00]
                       px-8 py-3 rounded-full transition-all duration-200
                       shadow-[0_4px_24px_rgba(221,177,131,0.4)] hover:shadow-[0_4px_32px_rgba(255,125,0,0.5)]"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/>
              <rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>
            </svg>
            Voir la galerie
          </button>
        </div>
      </section>

      {/* ── MODAL ── */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex flex-col
                     animate-[fadeIn_0.2s_ease]"
        >
          {currentIndex === null ? (
            <Gallery
              photos={photos}
              onPhotoClick={openPhoto}
              onClose={closeAll}
            />
          ) : (
            <Lightbox
              photos={photos}
              index={currentIndex}
              onClose={closePhoto}
              onPrev={prevPhoto}
              onNext={nextPhoto}
            />
          )}
        </div>
      )}
    </>
  );
}
