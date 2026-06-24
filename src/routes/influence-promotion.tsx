import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Music, Sparkles, Video, BarChart3, Users, Send, Target, Radio, X } from "lucide-react";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/influence-promotion")({
  component: InfluencePromotionPage,
});

const packs = [
  {
    title: "Audit & Stratégie Artiste",
    price: "449€",
    cta: "Commander mon audit",
    items: ["Analyse complète", "Positionnement artiste", "Plan d’action", "Appel stratégique 1h30"],
  },
  {
    title: "Campagne Starter",
    price: "990€",
    cta: "Commander ma campagne starter",
    items: ["Audit offert", "Stratégie de lancement", "Plan de contenu", "Suivi campagne"],
  },
  {
    title: "Influence Boost",
    price: "1 490€",
    cta: "Commander mon Influence Boost",
    items: ["TikTok", "Instagram Reels", "YouTube Shorts", "X / Twitter", "Reporting détaillé"],
  },
  {
    title: "Impact Premium",
    price: "À partir de 2490€",
    cta: "Commander mon Impact Premium",
    items: ["Budget géré de A à Z", "Multi-plateformes", "Influenceurs", "Stratégie complète", "Suivi premium"],
  },
];

function InfluencePromotionPage() {
  const [selectedPack, setSelectedPack] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const body =
      `NOUVELLE DEMANDE PROMOTION MUSICALE\n\n` +
      `Pack demandé : ${selectedPack?.title}\n` +
      `Prix affiché : ${selectedPack?.price}\n\n` +
      `Nom : ${data.get("name")}\n` +
      `Prénom : ${data.get("firstname")}\n` +
      `Téléphone / WhatsApp : ${data.get("phone")}\n` +
      `Email : ${data.get("email")}\n` +
      `Artiste / Label / Manager : ${data.get("artist")}\n` +
      `Lien musique : ${data.get("link")}\n` +
      `Budget estimé : ${data.get("budget")}\n` +
      `Objectif : ${data.get("goal")}\n` +
      `Message : ${data.get("message")}\n\n` +
      `Source : Page Influence & Promotion Musicale`;

    data.append("access_key", "89f56c7d-6360-4077-a628-4292103b0864");
    data.append("subject", `Demande ${selectedPack?.title} - Infinity Trade & Digital`);
    data.append("from_name", "Infinity Trade & Digital");
    data.append("replyto", String(data.get("email") || ""));
    data.append("message", body);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!result.success) throw new Error("Erreur Web3Forms");

      toast.success("Demande envoyée. Nous revenons vers vous rapidement.");
      form.reset();
      setSelectedPack(null);
    } catch {
      const wa = `${SITE.whatsapp}&text=${encodeURIComponent(body)}`;
      window.open(wa, "_blank");
      toast.error("L’envoi mail a échoué. WhatsApp s’ouvre pour envoyer la demande.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <section className="relative overflow-hidden px-6 py-24 text-center">

<div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-cover"
  >
    <source src="/videos/hero-musique.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/15"></div>
</div>          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff7a0035,transparent_45%)]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 mb-8">
              <Sparkles size={16} />
              TikTok • Instagram • YouTube • X • Spotify • Labels
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-tight">
              Faites décoller
              <span className="block text-orange-500">votre projet musical.</span>
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Campagnes influenceurs, stratégie de sortie, visibilité réseaux sociaux,
              gestion de budget et accompagnement pour artistes, labels et producteurs.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              ["Campagnes influenceurs", "Recherche, sélection et coordination de créateurs adaptés à votre univers musical.", Users],
              ["TikTok, Instagram, YouTube & X", "Création de trends, Reels, Shorts, contenus viraux et relais sociaux.", Video],
              ["Spotify & streaming", "Stratégie de visibilité, de lancement et d’amplification autour de vos plateformes.", Music],
              ["Gestion de budget", "Possibilité de gérer votre budget promotionnel de A à Z selon la campagne.", Target],
              ["Reporting clair", "Suivi des vues, contenus publiés, engagement, retombées et actions réalisées.", BarChart3],
              ["Réseau professionnel", "Mise en relation possible selon le projet, le niveau artistique et les opportunités.", Radio],
            ].map(([title, text, Icon]: any) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:border-orange-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="px-6 py-20 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-400 uppercase tracking-[0.3em] text-sm">Promotion musicale</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Des offres sérieuses pour artistes ambitieux</h2>
              <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                Pas de fausses promesses. Pas de faux streams. Une vraie stratégie de visibilité, de campagne et d’accompagnement.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {packs.map((pack) => (
                <div key={pack.title} className="rounded-3xl border border-orange-500/20 bg-black p-6 flex flex-col min-h-[430px]">
                  <h3 className="text-xl font-bold">{pack.title}</h3>
                  <div className="text-2xl font-black text-orange-500 mt-4 whitespace-nowrap">{pack.price}</div>
                  <ul className="mt-6 space-y-3 text-gray-300 flex-1">
                    {pack.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-orange-500">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelectedPack(pack)}
                    className="mt-6 rounded-xl bg-orange-500 text-black font-bold text-center py-3 hover:bg-orange-400 transition"
                  >
                    {pack.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-orange-500/20 bg-black p-8 md:p-12">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm">Pour aller plus loin</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Réseau, labels, subventions et opportunités</h2>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Vous avez déjà un artiste, un label ou une structure musicale ? Selon le projet, nous pouvons
              accompagner la stratégie, la mise en relation, la recherche d’opportunités, les campagnes avancées,
              les dispositifs d’aide et les possibilités de développement professionnel.
            </p>
          </div>
        </section>

        {selectedPack && (
          <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="relative w-full max-w-xl max-h-[88vh] overflow-y-auto rounded-3xl border border-orange-500/30 bg-[#090909] p-5 md:p-6">
              <button
                onClick={() => setSelectedPack(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl md:text-3xl font-black">
                {selectedPack.cta}
              </h2>
              <p className="text-orange-500 font-bold mt-2">{selectedPack.price}</p>

              <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                <input name="name" required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Nom" />
                <input name="firstname" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Prénom" />
                <input name="phone" required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Téléphone / WhatsApp" />
                <input name="email" required type="email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Email" />
                <input name="artist" required className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Nom d’artiste / label / manager" />
                <input name="link" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Lien Spotify, YouTube, TikTok ou Instagram" />
                <input name="budget" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Budget estimé" />
                <input name="goal" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500" placeholder="Objectif : vues, streams, influence, labels..." />
                <textarea name="message" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 min-h-[90px] outline-none focus:border-orange-500" placeholder="Expliquez votre projet musical" />

                <button type="submit" disabled={loading} className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-black hover:bg-orange-400 transition flex items-center justify-center gap-2 sticky bottom-0">
                  <Send size={18} />
                  {loading ? "Envoi..." : "Envoyer ma demande"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
