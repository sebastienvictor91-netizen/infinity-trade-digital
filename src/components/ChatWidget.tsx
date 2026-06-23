import * as React from "react";
import { MessageCircle, X, Send, Phone, Globe2, Headphones, ArrowRight, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

type View = "menu" | "form";

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [teaser, setTeaser] = React.useState(false);
  const [view, setView] = React.useState<View>("menu");
  const [typing, setTyping] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem("itd-chat-teaser") === "1";
    if (dismissed) return;
    const t = setTimeout(() => setTeaser(true), 4500);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 900);
    return () => clearTimeout(t);
  }, [open, view]);

  function openChat() {
    setOpen(true);
    setTeaser(false);
    if (typeof window !== "undefined") sessionStorage.setItem("itd-chat-teaser", "1");
  }

  function dismissTeaser(e: React.MouseEvent) {
    e.stopPropagation();
    setTeaser(false);
    if (typeof window !== "undefined") sessionStorage.setItem("itd-chat-teaser", "1");
  }

  function waLink(message?: string) {
    const text = message ?? "Bonjour Infinity Trade & Digital, je souhaite obtenir des informations concernant la création d'un site web.";
    return `https://wa.me/${SITE.whatsappRaw.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const body =
      `Nouvelle demande de rappel — ${SITE.name}\n\n` +
      `Nom: ${data.get("name")}\nTéléphone: ${data.get("phone")}\nActivité: ${data.get("activity")}`;
    setTimeout(() => {
      window.open(waLink(body), "_blank");
      toast.success("Demande envoyée. Nous vous rappelons rapidement.");
      setLoading(false);
      setOpen(false);
      setView("menu");
    }, 500);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Teaser bubble */}
      {teaser && !open && (
        <div
          onClick={openChat}
          className="max-w-[280px] cursor-pointer glass-strong rounded-2xl p-4 pr-9 relative shadow-[0_20px_60px_-20px_rgba(255,122,0,0.45)] animate-fade-up"
        >
          <button
            onClick={dismissTeaser}
            aria-label="Fermer"
            className="absolute top-2 right-2 size-6 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5"
          >
            <X className="size-3.5" />
          </button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            En ligne maintenant
          </div>
          <p className="mt-2 text-sm leading-snug">
            👋 Bienvenue chez <span className="font-semibold">Infinity Trade & Digital</span>.<br />
            <span className="text-muted-foreground">Réponse rapide, sans engagement. Parlez-nous de votre projet.</span>
          </p>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div className="w-[min(92vw,380px)] glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-fade-up">
          {/* Header */}
          <div className="relative p-4 bg-gradient-to-br from-[#1a1206] via-[#0c0c10] to-[#0a0a0a] border-b border-white/5">
            <div className="absolute inset-0 opacity-40 grid-bg pointer-events-none" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-[#FF9A3D] to-[#FF5C00] grid place-items-center glow-orange">
                    <Headphones className="size-5 text-black" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0a]" />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Infinity Trade & Digital</div>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Disponible immédiatement
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="size-8 grid place-items-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {/* Agent message */}
            <div className="flex items-end gap-2">
              <div className="size-7 rounded-lg bg-gradient-to-br from-[#FF9A3D] to-[#FF5C00] grid place-items-center shrink-0">
                <Globe2 className="size-3.5 text-black" />
              </div>
              <div className="rounded-2xl rounded-bl-sm bg-white/[0.04] border border-white/5 px-3.5 py-2.5 text-sm">
                👋 Bonjour, bienvenue chez <span className="font-medium">Infinity Trade & Digital</span>.
                <div className="text-muted-foreground text-xs mt-1">Réponse rapide et sans engagement.</div>
              </div>
            </div>

            {typing ? (
              <div className="mt-3 ml-9 inline-flex items-center gap-1 rounded-2xl bg-white/[0.04] border border-white/5 px-3 py-2">
                <span className="size-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="size-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "120ms" }} />
                <span className="size-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "240ms" }} />
              </div>
            ) : view === "menu" ? (
              <div className="mt-4 space-y-2 animate-fade-up">
                <p className="text-xs text-muted-foreground px-1">Comment pouvons-nous vous aider ?</p>
                <QuickAction
                  icon={<Globe2 className="size-4" />}
                  label="Créer mon site"
                  onClick={() => window.open(waLink("Bonjour, je souhaite créer un site internet professionnel."), "_blank")}
                />
                <QuickAction
                  icon={<Phone className="size-4" />}
                  label="Être rappelé"
                  onClick={() => setView("form")}
                />
                <QuickAction
                  icon={<Headphones className="size-4" />}
                  label="Parler avec un conseiller"
                  onClick={() => window.open(waLink(), "_blank")}
                  highlight
                />
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 space-y-3 animate-fade-up">
                <div className="grid gap-1.5">
                  <Label htmlFor="cw-name" className="text-xs">Nom</Label>
                  <Input id="cw-name" name="name" required placeholder="Votre nom" className="h-10 bg-white/[0.04] border-white/10" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="cw-phone" className="text-xs">Téléphone</Label>
                  <Input id="cw-phone" name="phone" type="tel" required placeholder="06 ..." className="h-10 bg-white/[0.04] border-white/10" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="cw-activity" className="text-xs">Activité</Label>
                  <Input id="cw-activity" name="activity" required placeholder="Ex : plombier, restaurant..." className="h-10 bg-white/[0.04] border-white/10" />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
                  {loading ? "Envoi..." : (<><Send className="size-4" /> Recevoir un rappel</>)}
                </Button>
                <button
                  type="button"
                  onClick={() => setView("menu")}
                  className="text-xs text-muted-foreground hover:text-foreground w-full text-center"
                >
                  ← Retour
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/5 bg-black/40">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#2AE070] text-black text-sm font-semibold py-2.5 transition-colors"
            >
              <MessageCircle className="size-4" /> WhatsApp · {SITE.whatsappNumber}
            </a>
            <p className="mt-2 text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
              <CheckCheck className="size-3 text-emerald-400" /> Conversations chiffrées · Réponse en quelques minutes
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label="Ouvrir le chat"
        className="relative size-14 grid place-items-center rounded-full bg-gradient-to-br from-[#FF9A3D] to-[#FF5C00] text-black glow-orange glow-orange-hover transition-transform hover:scale-105 animate-pulse-glow"
      >
        {open ? <X className="size-6" strokeWidth={2.5} /> : <MessageCircle className="size-6" strokeWidth={2.5} />}
        {!open && (
          <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-emerald-400 ring-2 ring-[#070707]" />
        )}
      </button>
    </div>
  );
}

function QuickAction({
  icon,
  label,
  onClick,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "group w-full flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm transition-all border " +
        (highlight
          ? "bg-gradient-to-r from-[#FF7A00]/15 to-[#FF7A00]/5 border-[#FF7A00]/30 hover:border-[#FF7A00]/60"
          : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10")
      }
    >
      <span className="flex items-center gap-2.5">
        <span className={"grid place-items-center size-7 rounded-lg " + (highlight ? "bg-[#FF7A00]/20 text-[#FFB14E]" : "bg-white/5 text-muted-foreground")}>
          {icon}
        </span>
        {label}
      </span>
      <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
    </button>
  );
}
