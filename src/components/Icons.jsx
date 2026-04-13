// ============================================================
// ICONS — responsive
// Sur desktop : barre verticale fixe à droite
// Sur mobile  : barre horizontale en bas de section
// ============================================================

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const ICONS = [
  { icon: <FaInstagram />, link: "https://instagram.com",          label: "Instagram" },
  { icon: <FaTwitter />,   link: "https://twitter.com",            label: "Twitter" },
  { icon: <FaEnvelope />,  link: "mailto:abdul13un@gmail.com",     label: "Email" },
  { icon: <FaGithub />,    link: "https://github.com",             label: "GitHub" },
  { icon: <FaLinkedin />,  link: "https://linkedin.com",           label: "LinkedIn" },
];

export default function Icons() {
  return (
    <>
      {/* ── Desktop : barre verticale fixe à droite ── */}
      <nav
        className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2
                   flex-col gap-5 z-50"
        aria-label="Réseaux sociaux"
      >
        {ICONS.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="text-3xl text-white/50 transition-all duration-300
                       hover:text-[#ff7d00] hover:scale-125 hover:rotate-12"
          >
            {item.icon}
          </a>
        ))}
      </nav>

      {/* ── Mobile : barre horizontale inline ── */}
      <nav
        className="flex md:hidden items-center justify-center gap-6"
        aria-label="Réseaux sociaux"
      >
        {ICONS.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="text-3xl text-white/50 transition-all duration-300
                       hover:text-[#ff7d00] hover:scale-125"
          >
            {item.icon}
          </a>
        ))}
      </nav>
    </>
  );
}
