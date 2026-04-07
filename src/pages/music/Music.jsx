import Header from "../../components/Header";
import AlbumCard from "./audio/AlbumCard";
import MusicModal from "./MusicModal";


export default function Music() {
  
   return(
      <>
       
      <Header />
      <section className="w-full h-screen from-black to-[#c00303] bg-gradient-to-b text-white pt-28 px-5">
        <div className="flex justify-center">
          <h2 className="font-bold text-xl flex justify-center">MUSIC</h2>
        </div>
        <img
          src="/assets/motsdetetecover.jpg"
          alt="Album Cover"/>
          <img
          src="/images/album-cover.jpg"
          alt="Album Cover"/>
          
          

         
       
      </section>
    </>
  )
}