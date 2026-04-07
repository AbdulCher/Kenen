import Header from "../../components/Header";
import MusicModal from "./MusicModal";
import { albums } from "./Albums";
import { useState } from "react";

export default function Music() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <>
      <Header />

      <section className="w-full min-h-screen bg-gradient-to-b from-black to-[#c00303] text-white pt-28 px-5">
        <h2 className="text-3xl font-bold text-center mb-10">
          MUSIC
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-20">
          {albums.map((album) => (
            <img
              key={album.id}
              src={album.cover}
              alt={album.title}
              onClick={() => setSelectedAlbum(album)}
              className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedAlbum && (
        <MusicModal
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
    </>
  );
}