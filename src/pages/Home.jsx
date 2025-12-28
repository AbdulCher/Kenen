import BgImage from "../assets/bgImageees.jpg"
import Icons from "../components/Icons";
import DustParticles from "../animations/DustParticles";

export default function Home() {
  return (
    
    <div className="relative w-full h-screen">
      <DustParticles />
      <img 
        src={BgImage} 
        alt="" 
        className="absolute inset-0 object-cover" 
      />

      <h1 className="absolute inset-0 mt-80 ml-20
            flex text-white text-7xl font-bold">
            KENEN
      </h1>
      <Icons />
    </div>
  );
}
