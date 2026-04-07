import Icons from "../components/Icons";
import GoldFlowParticles from "../animations/GoldFlowParticles";
import Bg from "../assets/bg.jpg";
import Header from "../components/Header";
import { useState } from "react";


export default function Photos() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // navigation infinie
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? albums.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === albums.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Header />
      <GoldFlowParticles />

      {/* HERO */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-black via-black/20 to-[#a00109]">

        <img
          src={Bg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        <button
          onClick={() => setIsGalleryOpen(true)}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#e00303] text-white px-6 py-3 rounded-full z-50 shadow-lg hover:scale-105 transition"
        >
          View Gallery
        </button>

        <div className="relative z-10 flex flex-col items-center">
          <Icons />
        </div>
      </section>

      {/* ===================== */}
      {/* ✅ MODAL UNIQUE */}
      {/* ===================== */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">

          {/* fermer */}
          <button
            onClick={() => {
              setIsGalleryOpen(false);
              setCurrentIndex(null);
            }}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ✕
          </button>

          {/* ===================== */}
          {/* 🖼 GALLERY */}
          {/* ===================== */}
          {currentIndex === null && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full px-6">

              {albums.map((album, index) => (
                <img
                  key={album.id}
                  src={album.cover}
                  alt={album.title}
                  onClick={() => setCurrentIndex(index)}
                  className="w-full h-60 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                />
              ))}

            </div>
          )}

          {/* ===================== */}
          {/* 🎬 CARROUSEL */}
          {/* ===================== */}
          {currentIndex !== null && (
            <>
              {/* bouton retour */}
              <button
                onClick={() => setCurrentIndex(null)}
                className="absolute top-6 left-6 text-white text-2xl"
              >
                ← Back
              </button>

              {/* gauche */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-4xl"
              >
                ←
              </button>

              {/* image */}
              <div className="max-w-4xl w-full px-6">
                <img
                  src={albums[currentIndex].cover}
                  alt=""
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              </div>

              {/* droite */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-4xl"
              >
                →
              </button>
            </>
          )}

        </div>
      )}
    </>
  );
}