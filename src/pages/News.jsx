import Icons from "../components/Icons";
import GoldFlowParticles from "../animations/GoldFlowParticles";

export default function News() {
    return(
        <>
        <section className="w-full h-screen bg-[#940202] text-white pt-52">
            <h2 className="flex justify-center font-bold ">ABOUT</h2>
            <div className="flex justify-center flex-row mt-10">
                <h3 className="text-2xl">J'adore</h3>
                <h3 className="text-2xl">J'adore</h3>
                <h3 className="text-2xl">J'adore</h3>
            </div>
            
            <GoldFlowParticles />
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