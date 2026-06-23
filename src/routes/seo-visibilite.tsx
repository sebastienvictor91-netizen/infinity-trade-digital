import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { ContactDialog } from "@/components/ContactDialog";
import { CTASection } from "@/components/CTASection";
import {
  Search,
  Globe2,
  Building2,
  MapPinned,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/seo-visibilite")({
  head: () => ({
    meta: [
      {
        title: "SEO & Référencement Google — Infinity Trade & Digital",
      },
      {
        name: "description",
        content:
          "Améliorez votre visibilité sur Google grâce à notre accompagnement SEO, référencement local et optimisation Google Business.",
      },
    ],
  }),
  component: Page,
});

const packs = [
  {
    title: "SEO Starter",
    price: "199€",
    subtitle: "Pour commencer",
    features: [
      "Audit SEO",
      "Optimisation des pages",
      "Balises SEO",
      "Conseils référencement",
      "Rapport d'analyse",
    ],
  },
  {
    title: "SEO Business",
    price: "499€",
    subtitle: "Pour développer votre visibilité",
    features: [
      "Optimisation complète",
      "Google Business",
      "Référencement local",
      "Suivi positions Google",
      "Optimisation contenu",
      "Rapport détaillé",
    ],
  },
  {
    title: "SEO Premium",
    price: "À partir de 999€",
    subtitle: "Pour les entreprises ambitieuses",
    features: [
      "Stratégie SEO complète",
      "Optimisation technique",
      "Création contenus SEO",
      "Accompagnement mensuel",
      "Analyse concurrence",
      "Plan de croissance",
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
      <p className="text-sm text-orange-400 font-semibold">
        {subtitle}
      </p>

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
          label="Demander un audit"
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
        eyebrow="SEO & Visibilité"
        title="Soyez visible sur Google."
        description="Nous aidons les entreprises à obtenir plus de visibilité, plus de trafic et plus de clients."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={Search}
            title="SEO"
            description="Optimisation technique et contenu."
          />

          <FeatureCard
            icon={Globe2}
            title="Référencement Google"
            description="Positionnement durable."
          />

          <FeatureCard
            icon={Building2}
            title="Google Business"
            description="Optimisation de votre fiche."
          />

          <FeatureCard
            icon={MapPinned}
            title="Visibilité locale"
            description="Apparaissez près de vos clients."
          />

          <FeatureCard
            icon={Sparkles}
            title="Présence digitale"
            description="Image cohérente et performante."
          />

          <FeatureCard
            icon={ArrowRight}
            title="Suivi SEO"
            description="Analyse et reporting."
          />
        </div>
      </Section>

      <Section
        eyebrow="Nos packs SEO"
        title="Choisissez votre niveau de visibilité"
        description="Des offres adaptées aux artisans, PME et entreprises."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <PackCard
              key={pack.title}
              {...pack}
            />
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
