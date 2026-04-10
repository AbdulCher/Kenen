import Header from "../components/Header";
import Icons from "../components/Icons";



export default function Videos() {
  
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-gradient-to-b from-black to-[#c00303] text-white pt-28 px-5">
  
  <h2 className="text-3xl font-bold text-center mb-10">VIDEOS</h2>

  {/* container centré */}
  <div className="flex justify-center items-center">

    {/* wrapper ratio vidéo */}
    <div className="w-full max-w-3xl aspect-video">

      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/dcdkpD6EjWs"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

    </div>

  </div>
  <button
    onClick={() => window.open("https://www.youtube.com/@BarhanNdi", "_blank")}
    className="flex justify-center items-center bg-black text-white px-6 py-3 rounded-full z-50 shadow-lg hover:scale-105 transition"
    >
      Voir plus de vidéos
    </button>


</section>
    </>

  );
}