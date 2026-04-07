export default function MusicModal({ album, onClose }) {
  if (!album) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

      {/* fermer */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl"
      >
        ✕
      </button>

      <div className="bg-black text-white p-6 rounded-xl max-w-xl w-full text-center">

        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{album.title}</h2>

        <p className="mb-6">{album.description}</p>

        <div className="flex justify-center gap-4">
          <a
            href={album.spotify}
            target="_blank"
            className="bg-green-500 px-4 py-2 rounded-lg"
          >
            Écouter
          </a>

          <a
            href={album.buy}
            target="_blank"
            className="bg-red-500 px-4 py-2 rounded-lg"
          >
            Acheter
          </a>
        </div>

      </div>
    </div>
  );
}