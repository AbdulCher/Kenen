import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Icons() {
  const icons = [
    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaEnvelope />, link: "mailto:abdul13un@gmail.com", label: "Email" },
    { icon: <FaInstagram />, link: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <nav 
      className="fixed top-1/2 right-6 -translate-y-1/2
                 flex flex-col gap-6 z-50"
      aria-label="Réseaux sociaux"
    >
      {icons.map((item) => (
        <a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#f3f4f6]
                     transition-all duration-300
                     hover:text-[#ff7d00] hover:scale-125 hover:rotate-12"
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
