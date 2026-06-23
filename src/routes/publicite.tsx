import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { ContactDialog } from "@/components/ContactDialog";
import { CTASection } from "@/components/CTASection";
import {
  Megaphone,
  Target,
  Filter,
  Users2,
  Workflow,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/publicite")({
  head: () => ({
    meta: [
      {
        title:
          "Google Ads, Facebook Ads et génération de prospects — Infinity Trade & Digital",
      },
      {
        name: "description",
        content:
          "Nous créons et optimisons vos campagnes Google Ads et Facebook Ads afin de générer davantage de prospects qualifiés.",
      },
    ],
  }),
  component: Page,
});

const packs = [
  {
    title: "Lancement",
    price: "199€",
    subtitle: "Pour commencer",
    features: [
      "Création campagne Google Ads",
      "Recherche mots-clés",
      "Paramétrage conversion",
      "Suivi des performances",
      "Rapport mensuel",
    ],
  },
  {
    title: "Croissance",
    price: "399€",
    subtitle: "Pour accélérer",
    features: [
      "Google Ads",
      "Facebook Ads",
      "Landing Page",
      "Optimisation hebdomadaire",
      "Suivi des leads",
      "Rapport détaillé",
    ],
  },
  {
    title: "Performance",
    price: "699€",
    subtitle: "Pour aller plus loin",
    features: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "Création visuels",
      "Optimisation avancée",
      "Reporting complet",
      "Accompagnement stratégique",
    ],
  },
];

function PackCard({
  title,
  price,
  subtitle,
  features,
}: {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl hover:bg-white/[0.07] transition">
      <p className="text-sm text-orange-400 font-semibold">{subtitle}</p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-5xl font-extrabold text-orange-400">
        {price}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-sm text-white/75"
          >
            <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <ContactDialog
          label="Demander un devis"
          size="lg"
        />
      </div>
    </div>
  );
}

function Page() {
  return (
    <Layout>
      <Section
        eyebrow="Publicité"
        title="Google Ads, Facebook Ads et génération de prospects."
        description="Nous créons, gérons et optimisons vos campagnes publicitaires pour générer davantage de prospects qualifiés."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={Megaphone}
            title="Google Ads"
            description="Campagnes optimisées et rentables."
          />

          <FeatureCard
            icon={Target}
            title="Prospects qualifiés"
            description="Génération de demandes ciblées."
          />

          <FeatureCard
            icon={Filter}
            title="Conversion"
            description="Pages et formulaires performants."
          />

          <FeatureCard
            icon={Users2}
            title="Acquisition client"
            description="Développez votre activité."
          />

          <FeatureCard
            icon={Workflow}
            title="Tunnel de vente"
            description="De la visite à la conversion."
          />

          <FeatureCard
            icon={Megaphone}
            title="Publicité ciblée"
            description="Audience, créatifs et analyse."
          />
        </div>
      </Section>

      <Section
        eyebrow="Nos packs"
        title="Choisissez votre niveau d'acquisition"
        description="Des offres adaptées à votre budget et à vos objectifs."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <PackCard
              key={pack.title}
              {...pack}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-white/60">
          Budget publicitaire non inclus.
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}