import Icons from "../components/Icons";
import BgAbout from "../assets/bgAbout.jpg";
import Header from "../components/Header";

export default function About() {
    return(
        <>
        <Header />
          <section className="relative w-full h-screen flex flex-col pl-20 pr-20 pt-40 text-white">
            <img
              src={BgAbout}
              alt=""
              className="absolute inset-0 object-cover"
            />
            <h2 className="flex justify-center z-10 text-2xl font-bold">ABOUT</h2>
            <div className="flex z-10 row-end-3 space-x-8 mt-16">
              <div className="w-1/3 bg-black/70 border-white rounded-lg p-4">
                <p className="flex justify-center text-xl">Je suis né en Afrique de l'Ouest ( Mauritanie ).
                  J'ai commencé à chanter et à danser très jeune, j'adore la musique. J'ai été influencé par 
                  diverses musiques de divers pays ( Tupac, Maalouma Mint Meidah, Edith Piaf, Ray Charles, 
                  Nina Simone, Salif Keita, Youssou Ndour, Francis Cabrel, Mc Solar ).
                  "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                  "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                  "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                </p>
              </div>
              <div className="w-1/3 border-white rounded-lg p-4">
                      
              </div>
              <div className="w-1/3 bg-black/70 border-white rounded-lg p-4">
                <p className="flex justify-center text-xl">J'ai été Alias Chico quand j'ai commencé le rap en 1999, 
                  Ma musique est une fusion d'un ensemble de culture, elle transcende les barrières éthniques et raciales, 
                  elle reflète le point commun qui lie l'humanité, je vous laisse la définir comme vous la percevez, moi je la définie comme de la Kennen music
                  "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                          
                </p>
                <p className="flex justify-center text-xl">J'ai été Alias Chico quand j'ai commencé le rap en 1999, 
                  Ma musique est une fusion d'un ensemble de culture, elle transcende les barrières éthniques et raciales, 
                  elle reflète le point commun qui lie l'humanité,
                      
                </p>
              </div>
            </div>
            <Icons />
        </section>
        </>
    )
}