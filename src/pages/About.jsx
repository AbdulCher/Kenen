// ============================================================
// ABOUT PAGE — cohérente avec Home.jsx
// ============================================================

import { useState } from "react";
import Icons from "../components/Icons";
import BgAbout from "../assets/bgAbout.jpg";
import Header from "../components/Header";

const BLOCKS = [
  {
    id: "origins",
    label: "Origines",
    preview: "Né en Afrique de l'Ouest (Mauritanie), la musique a toujours fait partie de ma vie.",
    full: `Je suis né en Afrique de l'Ouest (Mauritanie). J'ai commencé à chanter et à danser très jeune, j'adore la musique. J'ai été influencé par diverses musiques de divers pays : Tupac, Maalouma Mint Meidah, Edith Piaf, Ray Charles, Nina Simone, Salif Keita, Youssou Ndour, Francis Cabrel, MC Solar.

Ces influences variées ont façonné une sensibilité musicale unique, à la croisée des cultures et des continents.`,
  },
  {
    id: "parcours",
    label: "Parcours",
    preview: "Alias Chico en 1999, puis Kennen — un nom qui porte tout un univers.",
    full: `J'ai été Alias Chico quand j'ai commencé le rap en 1999. Un premier album "Mots de tête" en 2018 a marqué un tournant. Aujourd'hui, je me suis choisi le nom Kennen — "Someone else" en langue africaine (Wolof).

Ce nom n'est pas une fuite, c'est une transformation. Devenir autre pour mieux se retrouver.`,
  },
  {
    id: "vision",
    label: "Vision",
    preview: "Une musique qui transcende les barrières ethniques et raciales.",
    full: `Ma musique est une fusion d'un ensemble de cultures. Elle transcende les barrières ethniques et raciales, elle reflète le point commun qui lie l'humanité.

Je vous laisse la définir comme vous la percevez. Moi, je la définis comme de la Kennen Music — une musique qui appartient à tous, née de partout, destinée à chacun.`,
  },
];

function ExpandableBlock({ block }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        relative flex flex-col justify-between
        bg-black/60 backdrop-blur-sm
        border border-white/10 rounded-2xl p-10
        transition-all duration-500
        ${open ? "border-[#ddb183]/40" : "hover:border-white/20"}
      `}
    >
      {/* Halo subtil quand ouvert */}
      {open && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(221,177,131,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10">
        {/* Label */}
        <p className="text-[12px] tracking-[0.18em] text-[#ddb183]/70 uppercase mb-3">
          {block.label}
        </p>

        {/* Texte */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[600px]" : "max-h-[80px]"
          }`}
        >
          {open ? (
            <p className="text-white/80 text-base leading-loose whitespace-pre-line">
              {block.full}
            </p>
          ) : (
            <p className="text-white/50 text-base leading-loose line-clamp-2">
              {block.preview}
            </p>
          )}
        </div>
      </div>

      {/* Bouton */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          relative z-10 mt-5 self-start
          flex items-center gap-2
          text-xs font-bold tracking-widest uppercase
          transition-all duration-200
          ${open ? "text-[#ddb183]" : "text-white/40 hover:text-white/70"}
        `}
      >
        <span
          className={`
            inline-block w-4 h-4 rounded-full border
            flex items-center justify-center transition-all duration-300
            ${open ? "border-[#ddb183] rotate-45" : "border-white/30"}
          `}
          style={{ fontSize: 14, lineHeight: 1 }}
        >
          +
        </span>
        {open ? "Réduire" : "Voir plus"}
      </button>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Header />

      {/* ── HERO ABOUT ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden">

        {/* Image de fond avec filtres */}
        <img
          src={BgAbout}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(1.1) saturate(1.45) contrast(1.06)" }}
        />

        {/* Halo chaud central */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,190,80,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Vignette bords */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Dégradé bas → noir */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-[3] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))",
          }}
        />

        {/* Contenu hero */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
            Biographie
          </p>
          <h1 className="text-5xl font-bold tracking-[0.15em] drop-shadow-[0_2px_24px_rgba(255,180,60,0.3)]">
            BARHAN
          </h1>
          <Icons />
        </div>
      </section>

      {/* ── CONTENU ABOUT ── */}
      <section className="relative w-full bg-black text-white py-24 overflow-hidden">

        {/* Halo ambiance */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(221,177,131,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">

          {/* Titre section */}
          <p className="text-[11px] tracking-[0.18em] text-white/40 text-center uppercase mb-2">
            Mon histoire
          </p>
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wide">
            ABOUT
          </h2>

          {/* Grille de blocs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOCKS.map((block) => (
              <ExpandableBlock key={block.id} block={block} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
