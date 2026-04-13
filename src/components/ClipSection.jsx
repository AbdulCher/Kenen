// ============================================================
// CLIP SECTION — remplace votre <section> Clip dans Home.jsx
// ============================================================
//
// UTILISATION :
//   import ClipSection from "./ClipSection";
//   // puis dans Home.jsx :
//   <ClipSection />
// ============================================================

export default function ClipSection() {
  return (
    <section className="relative w-full bg-black py-20 flex justify-center overflow-hidden">

      {/* ── Halo rouge derrière l'iframe ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(140, 2, 2, 0.35) 0%, transparent 75%)",
        }}
      />

      {/* ── Halo secondaire plus chaud (bordeaux) en bas ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(180, 10, 10, 0.2) 0%, transparent 80%)",
        }}
      />

      {/* ── Contenu ── */}
      <div className="relative z-10 w-full max-w-[900px] px-4">

        <h2 className="text-white/70 text- font-bold text-center mb-8 tracking-wide">
          CLIP OFFICIEL
        </h2>

        {/* Iframe avec lueur rouge sur les bords */}
        <div
          className="w-full bg-black aspect-video overflow-hidden rounded-2xl border border-[#8c0202]/60"
          style={{
            boxShadow:
              "0 0 0 1px rgba(140,2,2,0.3), 0 20px 60px rgba(140,2,2,0.45), 0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/k9ZxVGJBDPE?si=ov8qyiASvZXwe2bg"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <button
          onClick={() => window.open("https://www.youtube.com/@BarhanOfficial", "_blank")}
          className="mt-10 bg-[#8c0202] hover:bg-[#e00303] text-white px-6 py-2 rounded-lg
                     transition-all duration-200 block mx-auto
                     shadow-[0_4px_20px_rgba(140,2,2,0.5)] hover:shadow-[0_4px_28px_rgba(224,3,3,0.6)]"
        >
          Voir plus
        </button>

      </div>
    </section>
  );
}
