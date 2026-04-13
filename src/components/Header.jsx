import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="max-w-6xl font-bold mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo / Nom du site */}
        <Link to="/" className="text-white text-2xl tracking-wide">
          Kenen
        </Link>

        {/* Navigation */}
        <ul className="flex gap-8 text-black text-lg">
          <li className="relative border border-white/40 bg-white/50 px-2">
            <Link 
              to="/" 
              className="hover:text-gray-300 transition duration-200"
            >
              HOME
            </Link>
          </li>

                    <li className="relative border border-white/40 bg-[#b3730b] px-2">

            <Link 
              to="/about" 
              className="hover:text-gray-300 transition duration-200"
            >
              ABOUT
            </Link>
          </li>

                    <li className="relative border border-white/40 bg-[#3e4485] px-2">

            <Link 
              to="/music" 
              className="hover:text-gray-300 transition duration-200"
            >
              MUSIC
            </Link>
          </li>

                    <li className="relative border border-white/40 bg-[#c1970d] px-2">

            <Link 
              to="/photos" 
              className="hover:text-gray-300 transition duration-200"
            >
            PHOTOS
            </Link>
          </li>

                    <li className="relative border border-white/40 bg-[#ab81cd] px-2">

            <Link 
              to="/videos" 
              className="hover:text-gray-300 transition duration-200"
            >
              VIDEOS
            </Link>
          </li>

                    <li className="relative border border-white/40 bg-[#ff9595] px-2">

            <Link 
              to="/bookme" 
              className="hover:text-gray-300 transition duration-200"
            >
              BOOKME
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
