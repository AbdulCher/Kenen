// ============================================================
// VIDEOS PAGE — cohérente avec le reste du site
// ============================================================

import Header from "../components/Header";
import Icons from "../components/Icons";
import Footer from "../components/Footer";

export default function Videos() {
  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen bg-black text-white pt-28 pb-24 overflow-hidden">

        {/* Halo rouge derrière la vidéo */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(140,2,2,0.35) 0%, transparent 75%)",
          }}
        />

        {/* Halo bordeaux en bas */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(180,10,10,0.2) 0%, transparent 80%)",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 flex flex-col items-center gap-10">

          {/* En-tête */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Chaîne YouTube
            </p>
            <h2 className="text-3xl font-bold tracking-wide">VIDEOS</h2>
          </div>

          {/* Iframe */}
          <div
            className="w-full aspect-video overflow-hidden rounded-2xl border border-[#8c0202]/60"
            style={{
              boxShadow:
                "0 0 0 1px rgba(140,2,2,0.3), 0 20px_60px rgba(140,2,2,0.45), 0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dcdkpD6EjWs"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          {/* Bouton */}
          <button
            onClick={() => window.open("https://www.youtube.com/@BarhanNdi", "_blank")}
            className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase
                       text-black bg-[#ddb183] hover:bg-[#ff7d00]
                       px-8 py-3 rounded-full transition-all duration-200
                       shadow-[0_4px_20px_rgba(140,2,2,0.5)] hover:shadow-[0_4px_28px_rgba(224,3,3,0.6)]"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm-1 4.5l4.5 2.5-4.5 2.5V5.5z"/>
            </svg>
            Voir plus de vidéos
          </button>

          {/* Icônes */}
          <Icons />

        </div>
      </section>
      <Footer />
    </>
  );
}
