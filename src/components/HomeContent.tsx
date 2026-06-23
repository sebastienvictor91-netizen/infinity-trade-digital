import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { HeroVisual } from "@/components/HeroVisual";
import { CTASection } from "@/components/CTASection";
import { Link } from "@tanstack/react-router";
import { SITE, SEO_PAGES } from "@/lib/site";
import {
  ArrowRight, MessageCircle, Globe2, Smartphone, MapPin, MailCheck, Phone, Server, Search,
  Building2, MapPinned, Megaphone, Target, Filter, Users2, Workflow, Bell, ShieldCheck, Sparkles,
  Wrench, Zap, BatteryCharging, Sun, Utensils, Car, Briefcase, Store, Building,
} from "lucide-react";

export function HomeContent() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[#FF7A00] animate-pulse" /> Infrastructure digitale moderne
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">Votre site web moderne </span>
              <span className="text-gradient-orange">prêt rapidement.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Sites modernes, hébergement inclus et compatibles mobile pour professionnels.
            </p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {["Dès 99€", "Hébergement inclus", "WhatsApp intégré", "Compatible mobile", "Mise en ligne rapide", "Design moderne"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-[#FF7A00]" />{b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactDialog label="Être recontacté" size="xl" />
              <Button asChild variant="whatsapp" size="xl">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" /> Parler maintenant
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#9ad1ff]" /> SSL & sécurité</div>
              <div className="flex items-center gap-2"><Server className="size-4 text-[#9ad1ff]" /> Hébergement inclus</div>
              <div className="flex items-center gap-2"><Sparkles className="size-4 text-[#FF9A3D]" /> Design premium</div>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* LOGO STRIP / TRUST */}
      <div className="border-y border-white/5 bg-[#060608]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center text-muted-foreground/70 text-sm">
          {["Artisans", "PME", "Restaurants", "VTC", "Commerces", "Industries"].map((t) => (
            <div key={t} className="text-center tracking-wide uppercase text-xs">{t}</div>
          ))}
        </div>
      </div>

      {/* SITE WEB EXPRESS */}
      <Section
        id="creation-de-site"
        eyebrow="Création de site"
        title="Votre site web prêt rapidement dès 99€."
        description="Envoyez votre logo, vos informations et vos photos. Nous créons votre site avec une image moderne et professionnelle."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard icon={Server} title="Hébergement inclus" description="Serveurs rapides, SSL, sauvegardes." />
          <FeatureCard icon={Smartphone} title="Responsive mobile" description="Affichage parfait sur tous les écrans." />
          <FeatureCard icon={MessageCircle} title="Bouton WhatsApp" description="Vos clients vous contactent en un clic." />
          <FeatureCard icon={MapPin} title="Google Maps" description="Carte intégrée pour vous localiser." />
          <FeatureCard icon={MailCheck} title="Formulaire de contact" description="Recevez les demandes par email." />
          <FeatureCard icon={Phone} title="Numéro cliquable" description="Appel direct depuis le mobile." />
          <FeatureCard icon={Sparkles} title="Design premium" description="Image moderne et professionnelle." />
          <FeatureCard icon={Zap} title="Mise en ligne rapide" description="Site livré en quelques jours." />
        </div>
        <div className="mt-10 text-center">
          <ContactDialog label="Créer mon site" size="xl" />
        </div>
      </Section>

      {/* SEO */}
      <Section
        id="seo-visibilite"
        eyebrow="SEO & Visibilité"
        title="Soyez visible sur Google."
        description="Nous aidons les entreprises à obtenir plus de visibilité et plus de clients."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={Search} title="SEO" description="Optimisation technique et contenu." />
          <FeatureCard icon={Globe2} title="Référencement Google" description="Positionnement durable sur les requêtes clés." />
          <FeatureCard icon={Building2} title="Google Business" description="Fiche optimisée et avis pilotés." />
          <FeatureCard icon={MapPinned} title="Visibilité locale" description="Apparaissez près de vos clients." />
          <FeatureCard icon={Sparkles} title="Présence digitale" description="Image cohérente sur tous les canaux." />
          <FeatureCard icon={ArrowRight} title="Positionnement Google" description="Suivi des positions et reporting." />
        </div>
      </Section>

      {/* PUB */}
      <Section
        id="publicite"
        eyebrow="Publicité"
        title="Obtenez plus de demandes clients."
        description="Acquisition rapide et mesurable, pilotée par des experts."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={Megaphone} title="Google Ads" description="Campagnes optimisées et rentables." />
          <FeatureCard icon={Target} title="Leads" description="Génération de demandes qualifiées." />
          <FeatureCard icon={Filter} title="Conversion" description="Tunnels et pages dédiées performantes." />
          <FeatureCard icon={Users2} title="Acquisition client" description="Stratégies multi-canaux." />
          <FeatureCard icon={Workflow} title="Tunnel de conversion" description="De la visite à la vente." />
          <FeatureCard icon={Megaphone} title="Publicité ciblée" description="Audience, créa, mesure." />
        </div>
      </Section>

      {/* CRM */}
      <section id="crm-automatisation" className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[#FF7A00]" /> CRM & Automatisation
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
              Centralisez et automatisez votre activité.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Suivez vos demandes, gérez vos contacts et automatisez votre activité.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { i: Users2, t: "Gestion clients & contacts unifiée" },
                { i: Workflow, t: "Pipelines visuels et suivi des leads" },
                { i: Bell, t: "Notifications et relances automatiques" },
                { i: ShieldCheck, t: "Données sécurisées, hébergées en Europe" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="size-8 grid place-items-center rounded-lg bg-[#FF7A00]/15 border border-[#FF7A00]/20">
                    <Icon className="size-4 text-[#FF9A3D]" />
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <ContactDialog label="Demander une démo" size="lg" />
              <Button asChild variant="ghostGlass" size="lg">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
          <div><HeroVisual /></div>
        </div>
      </section>

      {/* SEO PAGES GRID */}
      <Section
        eyebrow="Sites par métier"
        title="Un site pensé pour votre activité."
        description="Pages optimisées pour chaque secteur : design, contenu, conversion."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SEO_PAGES.map((p) => {
            const Icon = ICONS[p.slug] ?? Briefcase;
            return (
              <Link
                key={p.slug}
                to={`/${p.slug}` as string}
                className="group glass rounded-xl p-5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="size-10 grid place-items-center rounded-lg bg-gradient-to-br from-[#FF9A3D]/15 to-[#FF5C00]/5 border border-[#FF7A00]/20 mb-3">
                  <Icon className="size-4 text-[#FF9A3D]" />
                </div>
                <div className="text-sm font-medium">{p.title}</div>
                <div className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:text-[#FF9A3D]">
                  Découvrir <ArrowRight className="size-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "site-internet-artisan": Wrench,
  "site-internet-plombier": Wrench,
  "site-internet-electricien": Zap,
  "site-internet-irve": BatteryCharging,
  "site-internet-photovoltaique": Sun,
  "site-internet-restaurant": Utensils,
  "site-internet-vtc": Car,
  "site-internet-pme": Briefcase,
  "site-internet-commerce": Store,
  "site-internet-entreprise": Building,
};
