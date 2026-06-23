import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { SITE } from "@/lib/site";
import { MessageCircle, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 lg:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.35),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
              <Sparkles className="size-3 text-[#FF9A3D]" /> Lancement rapide
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient">
              Prêt à développer votre activité ?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg">
              Site web premium, visibilité Google, publicité et CRM. Une équipe, une infrastructure, des résultats.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ContactDialog label="Créer mon projet" size="xl" />
              <ContactDialog
                size="xl"
                trigger={<Button variant="ghostGlass" size="xl">Être recontacté</Button>}
              />
              <Button asChild variant="whatsapp" size="xl">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
