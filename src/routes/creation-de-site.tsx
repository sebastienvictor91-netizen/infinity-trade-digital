import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { ContactDialog } from "@/components/ContactDialog";
import { CTASection } from "@/components/CTASection";
import {
  Server,
  Smartphone,
  MessageCircle,
  MapPin,
  MailCheck,
  Phone,
  Sparkles,
  Zap,
  CheckCircle,
  Megaphone,
  Store,
} from "lucide-react";

export const Route = createFileRoute("/creation-de-site")({
  head: () => ({
    meta: [
      { title: "Commander un site internet dès 99€ sans abonnement — Infinity Trade & Digital" },
      {
        name: "description",
        content:
          "Commandez votre site internet professionnel : landing page, site vitrine, site premium ou pack avec publicité. Paiement unique, sans abonnement obligatoire.",
      },
    ],
  }),
  component: Page,
});

const packs = [
  {
    title: "Landing Page",
    price: "99€",
    subtitle: "Pour démarrer rapidement",
    features: [
      "1 page professionnelle",
      "Design moderne",
      "Compatible mobile",
      "Bouton WhatsApp",
      "Formulaire de contact",
      "Livraison 24 à 48h",
    ],
  },

  {
    title: "Site Vitrine Pro",
    price: "299€",
    subtitle: "Artisan, beauté, restaurant, garage",
    features: [
      "Site professionnel complet",
      "Présentation de l'activité",
      "Services et réalisations",
      "Google Maps",
      "WhatsApp intégré",
      "Nom de domaine inclus",
      "Hébergement inclus",
    ],
  },

  {
    title: "Site avec Admin",
    price: "499€",
    subtitle: "Gestion de contenu avancée",
    features: [
      "Back-office administrateur",
      "Ajout photos et contenus",
      "Gestion services ou véhicules",
      "Base de données Supabase",
      "Gestion catalogue",
      "Espace administration",
      "Formation prise en main",
    ],
  },

  {
    title: "Plateforme Pro",
    price: "999€",
    subtitle: "Front-office + Back-office",
    features: [
      "Front-office client",
      "Back-office administrateur",
      "Gestion clients",
      "Gestion demandes",
      "Tableau de bord",
      "Automatisations",
      "Base de données",
      "Développement sur mesure",
      "Espace utilisateur",
    ],
  },

  {
    title: "Projet Premium",
    price: "À partir de 3499€",
    subtitle: "Plateforme complète sur mesure",
    features: [
      "Espace client complet",
      "Espace administrateur complet",
      "Gestion membres et utilisateurs",
      "Catalogue dynamique",
      "Paiement en ligne possible",
      "CRM personnalisé",
      "API et intégrations",
      "Automatisations avancées",
      "Application métier",
      "Gestion équipes",
      "Solution entreprise",
      "Développement 100% sur mesure",
    ],
  },
];

const activities = [
  "Artisan",
  "Salon de beauté",
  "Garage automobile",
  "Restaurant",
  "VTC",
  "Cabinet RH",
  "Immobilier",
  "Sécurité privée",
  "Commerce",
  "Autre activité",
];

function PackCard({ title, price, subtitle, features }: any) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl hover:bg-white/[0.07] transition">
      <p className="text-sm text-orange-400 font-semibold">{subtitle}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-5xl font-extrabold text-orange-400">{price}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature: string) => (
          <li key={feature} className="flex gap-2 text-sm text-white/75">
            <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <ContactDialog label="Commander ce pack" size="lg" />
      </div>
    </div>
  );
}

function Page() {
  return (
    <Layout>
      <Section
        eyebrow="Création de site internet"
        title="Commandez votre site internet dès 99€ sans abonnement."
        description="Choisissez votre pack, indiquez votre activité, envoyez votre logo et vos informations. Nous préparons votre site professionnel rapidement."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard icon={Server} title="Hébergement inclus" description="Serveurs rapides, SSL, sauvegardes." />
          <FeatureCard icon={Smartphone} title="Mobile ready" description="Parfait sur téléphone et ordinateur." />
          <FeatureCard icon={MessageCircle} title="WhatsApp intégré" description="Vos clients vous contactent en un clic." />
          <FeatureCard icon={Zap} title="Livraison rapide" description="Site livré rapidement selon le pack." />
        </div>
      </Section>

      <Section
        eyebrow="Nos packs"
        title="Un paiement unique. Aucun abonnement obligatoire."
        description="Des offres simples et cohérentes selon votre besoin : présence en ligne, site professionnel ou acquisition de clients."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packs.map((pack) => (
            <PackCard key={pack.title} {...pack} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Activités"
        title="Choisissez votre type de site"
        description="Le prix dépend du pack choisi et du niveau de personnalisation demandé."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activities.map((activity) => (
            <div key={activity} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/80">
              <Store className="h-5 w-5 text-orange-400 mb-3" />
              {activity}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ContactDialog label="Demander mon prix maintenant" size="xl" />
        </div>
      </Section>

      <Section
        eyebrow="Publicité"
        title="Besoin de clients ? Ajoutez une campagne."
        description="Nous pouvons créer votre campagne Meta Ads ou Google Ads pour générer des prospects après la mise en ligne."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Megaphone} title="Meta Ads" description="Facebook et Instagram Ads à partir de 199€/mois." />
          <FeatureCard icon={MapPin} title="Google Ads" description="Campagnes Google à partir de 299€/mois." />
          <FeatureCard icon={Sparkles} title="Vidéos publicitaires" description="Création de vidéos à partir de 99€." />
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}