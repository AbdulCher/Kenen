import BgHero from "../assets/bgHero.jpg";
import BgMusic from "../assets/bgMusic.jpg";
import Header from "../components/Header"
import Icons from "../components/Icons";
import { useState, useRef } from "react";
import { albums } from "./music/Albums";
import AlbumCard from "./music/audio/AlbumCard";
import MusicModal from "./music/MusicModal";

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const scrollRef = useRef();

  const scrollLeft = () => {
    setActiveIndex((prev) =>
      prev === 0 ? albums.length - 1 : prev - 1
    );
  };

  const scrollRight = () => {
    setActiveIndex((prev) =>
      prev === albums.length - 1 ? 0 : prev + 1
    );
  };

 

  return (
    <>
    <Header />
      <section className="relative w-full h-screen pt-20 text-[#ffffff]">

        <img
          src={BgHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

          {/* Dégradé */}
          {/*<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        */}
          <h1 className="relative z-10 text-5xl font-bold text-center mt-40">
            BARHAN
          </h1>

          <div className="relative z-10 mt-6 flex justify-center">
            <Icons />
          </div>

      </section>

      {/* MUSIC */}
      <section className="relative w-full min-h-screen text-white">

        

        {/* Dégradé cohérent avec HERO */}
        <div className="absolute inset-0 bg-black"></div>

        
        <h2 className="relative flex justify-center mb-20 text-2xl text-white font-bold text-center">
          ALBUMS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto px-8 py-10">

          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-gradient-to-b from-black via-black/20 to-[#a00109] backdrop-blur-md border border-gray-500 rounded-2xl p-4 overflow-hidden shadow-[0_20px_40px_rgba(221,177,131,0.4)]"
            >
              <h3 className="text-lg font-bold text-center mb-4">{album.title}</h3>
              {/*<span className="text-sm font-bold text-white mb-3 text-center">{album.year}</span>*/}
              {/* IMAGE */}
              <img
                src={album.cover}
                alt=""
                className="w-full hover:scale-105 transition duration-300 h-70 object-cover"
              />
            
              {/* CONTENU */}
              <div className="p-4 text-white">

                
                

                {/* AUDIO */}
                <audio controls className="w-full mb-4">
                  <source src={album.audio} type="audio/mpeg" />
                </audio>

                {/* BOUTON */}
                <button
                  onClick={() => setSelectedAlbum(album)}
                  className="block mx-auto bg-[#e00303] text-white border border-gray-600 hover:bg-[#ff7d00] px-6 py-2 rounded-lg transition"
                >
                  Voir plus
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>
      <div className="w-full pr-12 bg-[#8c0202]"></div>
      <section className="w-full bg-black py-20 flex justify-center border-b-[#8c0202]">
  
      <section className="w-full bg-black py-20 flex justify-center">
  
        <div className="w-full max-w-[900px] px-4">
          
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            CLIP OFFICIEL
          </h2>

          <div className="w-full bg-black aspect-video overflow-hidden border border-gray-600 rounded-2xl shadow-[0_30px_50px_rgba(140,2,2,0.4)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Tmy0HGbHC58?si=WQnTs0xE15jwj5C0"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            
          </div>
          <button
  onClick={() => window.open("https://www.youtube.com/@BarhanOfficial", "_blank")}
  className="mt-10 bg-[#e00303] hover:bg-[#ff7d00] text-black px-6 py-2 rounded-lg transition block mx-auto"
>
  Voir plus
</button>

        </div>

      </section>
      </section>
      {/* MODAL */}
      <MusicModal
        album={selectedAlbum}
        onClose={() => setSelectedAlbum(null)}
      />
      
    </>
  );
}