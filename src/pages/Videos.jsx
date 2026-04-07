import Header from "../components/Header";
import Icons from "../components/Icons";



export default function Videos() {
  
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-gradient-to-b from-black to-[#c00303] text-white pt-28 px-5">
        <h2 className="text-3xl font-bold text-center mb-10">VIDEOS</h2>
        <div className="bggrid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-20">
            <iframe
                className="w-full h-screen rounded-lg"
                src="https://www.youtube.com/embed/dcdkpD6EjWs?si=NYom8CtfvV2aoIeN" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            
            
        </div>
    </section>
    </>

  );
}