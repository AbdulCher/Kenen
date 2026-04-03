import DustParticles from "../../animations/DustParticles"
import Header from "../../components/Header";

import { useState } from "react";
import { albums } from "./Albums";
import AlbumCard from "./audio/AlbumCard";
import MusicModal from "./MusicModal";


export default function Music() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
    return(
      <>
        <DustParticles />
        <Header />
        <section className="w-full h-screen from-black to-[#c00303] bg-gradient-to-b text-white pt-28 px-5">
          <div className="flex justify-center">
            <h2 className="font-bold text-xl flex justify-center">MUSIC</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 ml-40 mr-40 gap-14 mb-10">
            {albums.map(album => (
              <AlbumCard
                key={album.id}
                album={album}
                onClick={() => setSelectedAlbum(album)}
              />
            ))}
          </div>

          <MusicModal
            album={selectedAlbum}
            onClose={() => setSelectedAlbum(null)}
        />
        <h3>ALBUMS</h3>
      </section>
    </>
  )
}