import BgHero from "../assets/bgHero.jpg";
import BgMusic from "../assets/bgMusic.jpg";
import Header from "../components/Header"
import Icons from "../components/Icons";
import { useState } from "react";
import { albums } from "./music/Albums";
import AlbumCard from "./music/audio/AlbumCard";
import MusicModal from "./music/MusicModal";
import ClipSection from "../components/ClipSection";
import Footer from "../components/Footer";

import CarouselSection from "../components/CarouselSection";

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <>
    <Header />
    <section className="relative w-full h-screen pt-20 text-white overflow-hidden">
      
      {/* ── 1. Image de fond avec filtres ── */}
      <img
        src={BgHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(1.12) saturate(1.55) contrast(1.08)",
        }}
      />
      
      {/* ── 2. Halo lumineux chaud au centre ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255, 190, 80, 0.18) 0%, transparent 70%)",
        }}
      />
      
      {/* ── 3. Vignette sombre sur les bords — fait ressortir le centre ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      
      {/* ── 4. Dégradé bas vers noir (raccord avec section suivante) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[3] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85))",
        }}
      />
      
      {/* ── Contenu ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 -mt-10">
        <h1 className="text-6xl text-white/80 font-bold tracking-[0.15em] drop-shadow-[0_2px_24px_rgba(255,180,60,0.35)]">
          BARHAN
        </h1>
        <Icons />
      </div>
      
    </section>

    <CarouselSection
      albums={albums}
      onAlbumClick={(album) => setSelectedAlbum(album)}
    />
    <div className="w-full pr-12 bg-[#8c0202]"></div>
    <ClipSection />
    {/* MODAL */}
    <MusicModal
      album={selectedAlbum}
      onClose={() => setSelectedAlbum(null)}
    />
    <Footer />
  </>
  );
}