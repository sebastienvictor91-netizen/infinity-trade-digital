import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/CTASection";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Infinity Trade & Digital" },
      { name: "description", content: "Contactez Infinity Trade & Digital par WhatsApp, téléphone ou e-mail. Réponse rapide." },
      { property: "og:title", content: "Contact — Infinity Trade & Digital" },
      { property: "og:description", content: "Une équipe réactive pour développer votre activité." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <Section eyebrow="Contact" title="Parlons de votre projet." description="Réponse rapide, échange direct, sans engagement.">
        <div className="grid lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors text-center">
            <div className="size-12 mx-auto grid place-items-center rounded-xl bg-[#25D366]/15 border border-[#25D366]/30">
              <MessageCircle className="size-5 text-[#25D366]" />
            </div>
            <div className="mt-4 font-semibold">WhatsApp</div>
            <div className="text-sm text-muted-foreground mt-1">{SITE.phone}</div>
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors text-center">
            <div className="size-12 mx-auto grid place-items-center rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30">
              <Phone className="size-5 text-[#FF9A3D]" />
            </div>
            <div className="mt-4 font-semibold">Téléphone</div>
            <div className="text-sm text-muted-foreground mt-1">{SITE.phone}</div>
          </a>
          <a href={`mailto:${SITE.email}`} className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors text-center">
            <div className="size-12 mx-auto grid place-items-center rounded-xl bg-[#9ad1ff]/15 border border-[#9ad1ff]/30">
              <Mail className="size-5 text-[#9ad1ff]" />
            </div>
            <div className="mt-4 font-semibold">E-mail</div>
            <div className="text-sm text-muted-foreground mt-1">{SITE.email}</div>
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <ContactDialog label="Être recontacté" size="xl" />
          <Button asChild variant="whatsapp" size="xl">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="size-5" /> WhatsApp</a>
          </Button>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
}
