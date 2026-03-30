export default function MusicModal({ album, onClose }) {
  if (!album) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-zinc-900 text-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{album.title}</h2>

        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-56 object-contain bg-black rounded mb-4"
        />

        <ul className="space-y-4">
          {album.tracks.map((track, index) => (
            <li key={index}>
              <p className="mb-1">{track.title}</p>
              <audio controls className="w-full">
                <source src={track.src} type="audio/mpeg" />
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
