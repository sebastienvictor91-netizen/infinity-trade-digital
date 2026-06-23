import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { HeroVisual } from "@/components/HeroVisual";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Users2,
  Workflow,
  Bell,
  ShieldCheck,
  Database,
  Zap,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/crm-automatisation")({
  head: () => ({
    meta: [
      { title: "CRM & Automatisation — Infinity Trade & Digital" },
      {
        name: "description",
        content:
          "CRM, automatisation, gestion des prospects, WhatsApp Business, tunnels de vente et plateformes métier.",
      },
    ],
  }),
  component: Page,
});

const packs = [
  {
    title: "CRM Starter",
    price: "299€",
    subtitle: "Organisation des contacts",
    features: [
      "Gestion prospects",
      "Gestion clients",
      "Historique des échanges",
      "Tableau de bord",
      "Suivi commercial",
    ],
  },

  {
    title: "CRM Business",
    price: "999€",
    subtitle: "Automatisation avancée",
    features: [
      "CRM complet",
      "Automatisation des relances",
      "WhatsApp Business",
      "Notifications",
      "Gestion commerciale",
      "Pipeline de vente",
    ],
  },

  {
    title: "CRM Premium",
    price: "À partir de 2499€",
    subtitle: "Plateforme métier sur mesure",
    features: [
      "CRM personnalisé",
      "Gestion utilisateurs",
      "Espace client",
      "Espace administrateur",
      "Tableau de bord avancé",
      "Automatisations avancées",
      "API et intégrations",
      "Développement sur mesure",
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
          label="Demander une démo"
          size="lg"
        />
      </div>
    </div>
  );
}

function Page() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 lg:pt-24 pb-12 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[#FF7A00]" />
              CRM & Automatisation
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient">
              Centralisez et automatisez votre activité.
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Gérez vos prospects, vos clients et automatisez vos tâches pour gagner du temps et augmenter vos ventes.
            </p>

            <div className="mt-7">
              <ContactDialog
                label="Demander une démo"
                size="xl"
              />
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <Section
        eyebrow="Fonctionnalités"
        title="Une plateforme business moderne"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={Users2} title="Gestion clients" description="Tous vos contacts au même endroit." />
          <FeatureCard icon={Workflow} title="Pipelines visuels" description="Suivez vos leads étape par étape." />
          <FeatureCard icon={Bell} title="Notifications" description="Soyez alerté à chaque demande." />
          <FeatureCard icon={Zap} title="Automatisations" description="Relances, emails, SMS automatiques." />
          <FeatureCard icon={Database} title="Données centralisées" description="Historique complet par client." />
          <FeatureCard icon={ShieldCheck} title="Sécurité" description="Sauvegardes et hébergement sécurisé." />
        </div>
      </Section>

      <Section
        eyebrow="Nos offres"
        title="Choisissez votre CRM"
        description="De la gestion simple des prospects à la plateforme métier complète."
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