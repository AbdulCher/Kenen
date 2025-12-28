import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full bg-black/50 backdrop-blur-md fixed top-0 left-0 z-50">
      <nav className="max-w-6xl font-bold mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo / Nom du site */}
        <Link to="/" className="text-white text-2xl tracking-wide">
          Kennen
        </Link>

        {/* Navigation */}
        <ul className="flex gap-8 text-white text-lg">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-300 transition duration-200"
            >
              HOME
            </Link>
          </li>

          <li>
            <Link 
              to="/about" 
              className="hover:text-gray-300 transition duration-200"
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link 
              to="/music" 
              className="hover:text-gray-300 transition duration-200"
            >
              MUSIC
            </Link>
          </li>

          <li>
            <Link 
              to="/news" 
              className="hover:text-gray-300 transition duration-200"
            >
              NEWS
            </Link>
          </li>

          <li>
            <Link 
              to="/news" 
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
