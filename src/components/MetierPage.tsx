import { Layout } from "@/components/Layout";
import { Section, FeatureCard } from "@/components/Section";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";
import { CheckCircle2, MessageCircle } from "lucide-react";
import * as React from "react";

export function MetierPage({
  metier,
  title,
  intro,
  benefits,
  features,
}: {
  metier: string;
  title: string;
  intro: string;
  benefits: string[];
  features: { icon: React.ComponentType<{ className?: string }>; title: string; description?: string }[];
}) {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="mx-auto max-w-5xl px-5 lg:px-8 pt-16 lg:pt-24 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#FF7A00]" /> Site web pour {metier}
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">{intro}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ContactDialog label="Créer mon site" size="xl" />
            <Button asChild variant="whatsapp" size="xl">
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Avantages" title={`Pourquoi un site dédié pour ${metier} ?`}>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="glass rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#FF9A3D] mt-0.5 shrink-0" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Inclus" title="Tout ce qu'il vous faut">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
