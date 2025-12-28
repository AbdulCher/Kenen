import Icons from "../components/Icons";
import GoldFlowParticles from "../animations/GoldFlowParticles";

export default function News() {
    return(
        <>
        <section className="w-full h-screen bg-[#940202] text-[#669bbc] pt-52">
            <h2 className="flex justify-center">ABOUT</h2>
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