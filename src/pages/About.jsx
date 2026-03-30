import Icons from "../components/Icons";
import BgMusic from "../assets/bgMusic.jpg";

export default function About() {
    return(
        <>
            <section className="relative w-full h-screen flex flex-col pl-20 pr-20 pt-40 text-white">
                <img
                src={BgMusic}
                alt=""
                className="absolute inset-0 object-cover"
                />
                <h2 className="flex justify-center z-10 text-2xl font-bold">ABOUT</h2>
                <div className="flex z-10 row-end-3 space-x-8 mt-16">
                <div className="w-1/3 border-white rounded-lg p-4">
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
                    <p className="flex justify-center text-xl">J'ai été Alias Chico quand j'ai commencé le rap en 1999, 
                        Bakhan quand j'ai été finaliste du Prix Découvertes RFI en 2009, et Barhan quand j'ai sorti mon dernier album 
                        "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof). 
                        "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                        "Mots de tête" en 2018. Aujourd'hui, je me suis choisi le nom Kennen (Someone else) en langue africain (Wolof).
                    </p>
                </div>
                <div className="w-1/3 border-white rounded-lg p-4">
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
            {/*<p>J'adore la musique c'est tout!! Ici peu importe la langue que tu parles ou
                le pays d'ou tu viens, tout ce qui compte c'est la musique
            </p>
            <h2 className="">About</h2>
            <p>J'adore la musique c'est tout!! Ici peu importe la langue que tu parles ou
                le pays d'ou tu viens, tout ce qui compte c'est la musique
            </p>
            <h2 className="">About</h2>
            <p>J'adore la musique c'est tout!! Ici peu importe la langue que tu parles ou
                le pays d'ou tu viens, tout ce qui compte c'est la musique
            </p>*/}
            <Icons />
        </section>
        </>
    )
}