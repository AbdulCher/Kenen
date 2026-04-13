// ============================================================
// BOOKME PAGE — formulaire de booking pro
// ============================================================

import { useState } from "react";
import Header from "../components/Header";
import Icons from "../components/Icons";
import Footer from "../components/Footer";

// ── Données de contact ───────────────────────────────────────
const CONTACT = {
  ville: "Paris, France",
  tel: "+33 6 12 34 56 78",
  email: "contact@barhan.com",
};

const ASSOCIATION = {
  nom: "Association Kennen Music",
  adresse: "12 rue des Arts, 75011 Paris",
  siret: "123 456 789 00012",
  email: "asso@kennenmusic.fr",
  tel: "+33 1 23 45 67 89",
};

const DOWNLOADS = [
  {
    id: "presentation",
    label: "Présentation artiste",
    description: "Biographie, univers, presse et contacts",
    accent: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
        <path d="M12 12v4M10 14h4"/>
      </svg>
    ),
    file: "/assets/docs/presentation-barhan.pdf",
  },
  {
    id: "fiche",
    label: "Fiche technique",
    description: "Besoins techniques, son, lumière, scène",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    file: "/assets/docs/fiche-technique-barhan.pdf",
  },
  {
    id: "plan",
    label: "Plan de scène",
    description: "Disposition des musiciens et équipements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
        <circle cx="15" cy="15" r="2"/>
        <path d="M6 6h.01M6 12h.01"/>
      </svg>
    ),
    file: "/assets/docs/plan-de-scene-barhan.pdf",
  },
];

const EVENT_TYPES = [
  "Concert",
  "Festival",
  "Événement privé",
  "Résidence artistique",
  "Autre",
];

// ── Icône info ───────────────────────────────────────────────
function InfoRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#ddb183]">{icon}</span>
      <span className="text-white/70 text-sm leading-relaxed">{children}</span>
    </div>
  );
}

// ── Card téléchargement ──────────────────────────────────────
function DownloadCard({ item }) {
  return (
    <div className={`flex items-center justify-between gap-4
                    bg-black/60 border rounded-2xl p-6 transition-all duration-300
                    ${item.accent
                      ? "border-[#8c0202]/50 hover:border-[#e00303]/60 border-l-[3px] border-l-[#8c0202]"
                      : "border-white/10 hover:border-[#ddb183]/40"
                    }`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center
                        ${item.accent
                          ? "bg-[#8c0202]/15 border-[#8c0202]/30 text-[#e05050]"
                          : "bg-[#ddb183]/10 border-[#ddb183]/20 text-[#ddb183]"
                        }`}>
          {item.icon}
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wide">{item.label}</p>
          <p className="text-white/40 text-xs mt-0.5">{item.description}</p>
        </div>
      </div>
      <a
        href={item.file}
        download
        className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                   px-4 py-2 rounded-full transition-all duration-200 shrink-0
                   ${item.accent
                     ? "text-white bg-[#8c0202] hover:bg-[#e00303] shadow-[0_4px_16px_rgba(140,2,2,0.35)]"
                     : "text-black bg-[#ddb183] hover:bg-[#ff7d00] shadow-[0_4px_16px_rgba(221,177,131,0.25)]"
                   }`}
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
          <path d="M8 2v9M4 7l4 4 4-4M2 14h12"/>
        </svg>
        PDF
      </a>
    </div>
  );
}

// ── Champ de formulaire ──────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] tracking-[0.18em] text-white/40 uppercase">{label}</label>
      {children}
    </div>
  );
}

const inputClass = `
  w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3
  text-white text-sm placeholder:text-white/20
  focus:outline-none focus:border-[#ddb183]/60 focus:bg-black/80
  transition-all duration-200
`;

// ── Page principale ──────────────────────────────────────────
export default function Bookme() {
  const [form, setForm] = useState({
    nom: "", email: "", tel: "", type: "", date: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à EmailJS / Formspree / backend
    setSent(true);
  };

  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen bg-black text-white pt-28 pb-24 overflow-hidden">

        {/* Halo rouge en bas */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(140,2,2,0.22) 0%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(221,177,131,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col gap-16">

          {/* ── En-tête ── */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Réservation & Contact
            </p>
            <h2 className="text-3xl font-bold tracking-wide">BOOK ME</h2>
          </div>

          {/* ── Bloc contact + association ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contact artiste */}
            <div className="bg-black/60 border border-white/10 border-l-[3px] border-l-[#8c0202] rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-[#ddb183]/70 uppercase mb-4">
                  Artiste
                </p>
                <h3 className="text-xl font-bold tracking-widest mb-6">BARHAN</h3>
                <div className="flex flex-col gap-4">
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M8 1C5.8 1 4 2.8 4 5c0 3 4 9 4 9s4-6 4-9c0-2.2-1.8-4-4-4z"/>
                      <circle cx="8" cy="5" r="1.5"/>
                    </svg>
                  }>
                    {CONTACT.ville}
                  </InfoRow>
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M2 3h3l1.5 3.5-1.5 1a9 9 0 0 0 3.5 3.5l1-1.5L13 11v3a1 1 0 0 1-1 1C5.4 15 1 10.6 1 5a1 1 0 0 1 1-2z"/>
                    </svg>
                  }>
                    <a href={`tel:${CONTACT.tel}`} className="hover:text-[#ddb183] transition-colors">
                      {CONTACT.tel}
                    </a>
                  </InfoRow>
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="1" y="3" width="14" height="10" rx="1.5"/>
                      <path d="M1 4l7 5 7-5"/>
                    </svg>
                  }>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#ddb183] transition-colors">
                      {CONTACT.email}
                    </a>
                  </InfoRow>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <Icons />
              </div>
            </div>

            {/* Association */}
            <div className="bg-black/60 border border-white/10 border-l-[3px] border-l-[#8c0202] rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-[#ddb183]/70 uppercase mb-4">
                  Association
                </p>
                <h3 className="text-xl font-bold tracking-widest mb-6">{ASSOCIATION.nom.toUpperCase()}</h3>
                <div className="flex flex-col gap-4">
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M8 1C5.8 1 4 2.8 4 5c0 3 4 9 4 9s4-6 4-9c0-2.2-1.8-4-4-4z"/>
                      <circle cx="8" cy="5" r="1.5"/>
                    </svg>
                  }>
                    {ASSOCIATION.adresse}
                  </InfoRow>
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="1" y="3" width="14" height="10" rx="1.5"/>
                      <path d="M1 4l7 5 7-5"/>
                    </svg>
                  }>
                    <a href={`mailto:${ASSOCIATION.email}`} className="hover:text-[#ddb183] transition-colors">
                      {ASSOCIATION.email}
                    </a>
                  </InfoRow>
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M2 3h3l1.5 3.5-1.5 1a9 9 0 0 0 3.5 3.5l1-1.5L13 11v3a1 1 0 0 1-1 1C5.4 15 1 10.6 1 5a1 1 0 0 1 1-2z"/>
                    </svg>
                  }>
                    <a href={`tel:${ASSOCIATION.tel}`} className="hover:text-[#ddb183] transition-colors">
                      {ASSOCIATION.tel}
                    </a>
                  </InfoRow>
                  <InfoRow icon={
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="1" y="1" width="14" height="14" rx="1.5"/>
                      <path d="M4 6h8M4 9h5"/>
                    </svg>
                  }>
                    <span className="text-white/40">SIRET</span>{" "}
                    {ASSOCIATION.siret}
                  </InfoRow>
                </div>
              </div>
            </div>

          </div>

          {/* ── Téléchargements ── */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 mb-2">
              <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">Documents</p>
              <h3 className="text-xl font-bold tracking-wide">Fiches techniques</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DOWNLOADS.map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">Formulaire</p>
              <h3 className="text-xl font-bold tracking-wide">Faire une demande</h3>
            </div>

            {sent ? (
              <div className="bg-black/60 border border-[#ddb183]/40 rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#ddb183]/10 border border-[#ddb183]/30
                                flex items-center justify-center text-[#ddb183]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-white font-bold tracking-wide">Message envoyé !</p>
                <p className="text-white/40 text-sm">Nous reviendrons vers vous dans les plus brefs délais.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs tracking-widest uppercase text-[#ddb183] hover:text-white transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-black/60 border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
              >
                {/* Ligne 1 : nom + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Nom complet">
                    <input
                      name="nom" type="text" required
                      placeholder="Votre nom"
                      value={form.nom} onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email" type="email" required
                      placeholder="votre@email.com"
                      value={form.email} onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Ligne 2 : téléphone + type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Téléphone">
                    <input
                      name="tel" type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={form.tel} onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Type d'événement">
                    <select
                      name="type" required
                      value={form.type} onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Date */}
                <Field label="Date souhaitée">
                  <input
                    name="date" type="date"
                    value={form.date} onChange={handleChange}
                    className={`${inputClass} color-scheme-dark`}
                  />
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    name="message" required rows={5}
                    placeholder="Décrivez votre événement, le lieu, le contexte..."
                    value={form.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="self-end flex items-center gap-2 text-sm font-bold tracking-widest uppercase
                             text-black bg-[#ddb183] hover:bg-[#ff7d00]
                             px-8 py-3 rounded-full transition-all duration-200
                             shadow-[0_4px_16px_rgba(221,177,131,0.3)]"
                >
                  Envoyer la demande
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M2 8h12M9 3l5 5-5 5"/>
                  </svg>
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
