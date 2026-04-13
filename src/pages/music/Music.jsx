// ============================================================
// MUSIC PAGE — cohérente avec Home.jsx et About.jsx
// ============================================================

import { useState } from "react";
import Header from "../../components/Header";
import MusicModal from "./MusicModal";
import { albums } from "./Albums";
import Icons from "../../components/Icons";
import Footer from "../../components/Footer";

function AlbumCard({ album, onListen }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        relative flex flex-col
        bg-black/60 backdrop-blur-sm
        border border-white/10 rounded-2xl overflow-hidden
        transition-all duration-500
        ${open ? "border-[#ddb183]/40" : "hover:border-white/20"}
      `}
    >
      {/* Halo doré quand ouvert */}
      {open && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(221,177,131,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Pochette */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={album.cover}
          alt={album.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            open ? "scale-105 brightness-75" : "hover:scale-102"
          }`}
        />

        {/* Overlay dégradé bas */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85))",
          }}
        />

        {/* Année */}
        <span className="absolute bottom-3 left-4 text-[11px] tracking-[0.18em] text-white/50 uppercase">
          {album.year}
        </span>
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col p-8 gap-4">

        {/* Titre */}
        <h3 className="text-lg font-bold tracking-widest text-white">
          {album.title}
        </h3>

        {/* Description + musiciens déroulables */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-1">

            {/* Description */}
            <p className="text-white/70 text-base leading-loose">
              {album.description}
            </p>

            {/* Musiciens */}
            {album.musicians?.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                <p className="text-[11px] tracking-[0.18em] text-[#ddb183]/70 uppercase mb-1">
                  Musiciens
                </p>
                {album.musicians.map((m, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-white/40 text-sm">{m.role}</span>
                    <span className="text-white/80 text-sm font-bold">{m.name}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2">

          {/* Bouton Voir plus */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`
              flex items-center gap-2 text-xs font-bold tracking-widest uppercase
              transition-all duration-200
              ${open ? "text-[#ddb183]" : "text-white/40 hover:text-white/70"}
            `}
          >
            <span
              className={`
                inline-flex items-center justify-center
                w-4 h-4 rounded-full border text-sm
                transition-all duration-300
                ${open ? "border-[#ddb183] rotate-45" : "border-white/30"}
              `}
            >
              +
            </span>
            {open ? "Réduire" : "Voir plus"}
          </button>

          {/* Bouton Écouter */}
          <button
            onClick={() => onListen(album)}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                       text-black bg-[#ddb183] hover:bg-[#ff7d00]
                       px-4 py-2 rounded-full transition-all duration-200
                       shadow-[0_4px_16px_rgba(221,177,131,0.3)]"
          >
            ▶ Écouter
          </button>

        </div>
      </div>
    </div>
  );
}

export default function Music() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen bg-black text-white pt-28 pb-24 overflow-hidden">

        {/* Halo ambiance */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(221,177,131,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">

          {/* En-tête */}
          <p className="text-[11px] tracking-[0.18em] text-white/90 text-center uppercase mb-2">
            Discographie
          </p>
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wide">
            MUSIC
          </h2>

          {/* Grille albums */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onListen={setSelectedAlbum}
              />
            ))}
          </div>

          {/* Icônes réseaux sociaux */}
          <div className="flex justify-center mt-16">
            <Icons />
          </div>

        </div>
      </section>

      {/* MODAL */}
      {selectedAlbum && (
        <MusicModal
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
      <Footer />
    </>
  );
}
