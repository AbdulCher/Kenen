import BgHero from "../assets/bgHero.jpg";
import BgMusic from "../assets/bgMusic.jpg";

import Icons from "../components/Icons";
import { useState, useRef } from "react";
import { albums } from "./music/Albums";
import AlbumCard from "./music/audio/AlbumCard";
import MusicModal from "./music/MusicModal";

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const scrollRef = useRef();

  const scrollLeft = () => {
  setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
  setActiveIndex((prev) =>
    Math.min(prev + 1, albums.length - 1)
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">

        <img
          src={BgHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        <h1 className="z-10 text-5xl font-bold">BARHAN</h1>

        <div className="z-10 mt-6">
          <Icons />
        </div>
      </section>

      {/* MUSIC */}
      <section className="relative w-full min-h-screen py-20 text-white">

        <img
          src={BgMusic}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dégradé cohérent avec HERO */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>

        <h2 className="relative z-10 text-3xl font-bold text-center mb-12">
          MUSIC
        </h2>

        {/* CARROUSEL */}
        <div className="relative z-10 max-w-[1400px] mx-auto bg-[#780000] rounded-lg p-4">

          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            ←
          </button>

          <div className="relative z-10 w-full max-w-[900px] mx-auto overflow-hidden">

            <div
              ref={scrollRef}
              className="flex justify-center items-center gap-10 py-16"
            >
              {albums.map((album, index) => {
                const offset = index - activeIndex;

                let style = "";

                if (offset === 0) {
                  // centre
                  style = "scale-110 rotate-0 z-20 opacity-100";
                } else if (offset === -1) {
                  // gauche
                  style = "-rotate-12 scale-90 opacity-60";
                } else if (offset === 1) {
                  // droite
                  style = "rotate-12 scale-90 opacity-60";
                } else {
                  // loin
                  style = "scale-75 opacity-20";
                }

                return (
                  <div
                    key={album.id}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      transition-all duration-500 ease-in-out
                      transform
                      ${style}
                    `}
                  >
                    <div className="w-[200px] md:w-[260px]">
                      <AlbumCard
                        album={album}
                        onClick={() => {
                          setSelectedAlbum(album);
                          setActiveIndex(index);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            →
          </button>

        </div>
      </section>
      <section className="relative w-full py-20 text-white">

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

          <div className="relative z-10 max-w-[900px] mx-auto px-4">

            <h2 className="text-3xl font-bold text-center mb-10">
              CLIP OFFICIEL
            </h2>

            <video
              controls
              className="w-full rounded-2xl shadow-2xl"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
            </video>

          </div>

      </section>
      {/* MODAL */}
      <MusicModal
        album={selectedAlbum}
        onClose={() => setSelectedAlbum(null)}
      />
      
    </>
  );
}