import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SITE } from "@/lib/site";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    { realtime: { params: { eventsPerSecond: 0 } } }
  );
}

const ITD_API_KEY = "ec9efed411da687be0fc0090f247f1cea49bc4d269630dba";

type Props = {
 trigger?: React.ReactNode;
 size?: "default" | "lg" | "xl";
 label?: string;
};

export function ContactDialog({ trigger, size = "lg", label = "Être recontacté" }: Props) {
 const [open, setOpen] = React.useState(false);
 const [loading, setLoading] = React.useState(false);

 async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
 e.preventDefault();
 setLoading(true);

 const form = e.currentTarget;
 const data = new FormData(form);

 const body =
 `NOUVEAU LEAD WEBSITE\n\n` +
 `Nom : ${data.get("name")}\n` +
 `Téléphone : ${data.get("phone")}\n` +
 `Email : ${data.get("email")}\n` +
 `Activité : ${data.get("activity")}\n` +
 `Besoin : ${data.get("need")}\n` +
 `Disponibilité : ${data.get("when")}\n\n` +
 `Site : Infinity Trade & Digital`;

 getSupabase().rpc("create_lead_from_website", {
   p_api_key: ITD_API_KEY,
   p_name: String(data.get("name") || ""),
   p_phone: String(data.get("phone") || ""),
   p_email: String(data.get("email") || ""),
   p_project: String(data.get("activity") || ""),
   p_notes: String(data.get("need") || ""),
   p_source: "site-infinity-trade-digital",
 }).then(({ error }) => {
   if (error) console.error("Erreur insertion CRM:", error);
 });

 data.append("access_key", "89f56c7d-6360-4077-a628-4292103b0864");
 data.append("subject", " Nouveau lead site web - Infinity Trade & Digital");
 data.append("from_name", "Infinity Trade & Digital");
 data.append("replyto", String(data.get("email") || ""));
 data.append("message", body);

 try {
 const response = await fetch("https://api.web3forms.com/submit", {
 method: "POST",
 body: data,
 });

 const result = await response.json();

 if (!result.success) {
 throw new Error("Erreur Web3Forms");
 }

 toast.success("Demande envoyée. Nous vous recontactons rapidement.");
 form.reset();
 setOpen(false);
 } catch (error) {
 const wa = `${SITE.whatsapp}?text=${encodeURIComponent(body)}`;
 window.open(wa, "_blank");

 toast.error("L'envoi par mail a échoué. WhatsApp s'ouvre pour envoyer la demande.");
 } finally {
 setLoading(false);
 }
 }

 return (
 <Dialog open={open} onOpenChange={setOpen}>
 <DialogTrigger asChild>
 {trigger ?? (
 <Button variant="hero" size={size}>{label}</Button>
 )}
 </DialogTrigger>

 <DialogContent className="glass-strong border-white/10 sm:max-w-lg">
 <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />

 <DialogHeader>
 <DialogTitle className="text-2xl">Être recontacté</DialogTitle>
 <DialogDescription className="text-muted-foreground">
 Réponse rapide. Échange direct, sans engagement.
 </DialogDescription>
 </DialogHeader>

 <form onSubmit={onSubmit} className="grid gap-4 mt-2">
 <input type="hidden" name="source" value="Site Infinity Trade & Digital" />

 <div className="grid gap-2">
 <Label htmlFor="name">Nom</Label>
 <Input id="name" name="name" required placeholder="Votre nom" />
 </div>

 <div className="grid gap-2">
 <Label htmlFor="phone">Téléphone</Label>
 <Input id="phone" name="phone" required type="tel" placeholder="06 ..." />
 </div>

 <div className="grid gap-2">
 <Label htmlFor="email">E-mail</Label>
 <Input id="email" name="email" required type="email" placeholder="exemple@email.com" />
 </div>

 <div className="grid gap-2">
 <Label htmlFor="activity">Activité</Label>
 <Input id="activity" name="activity" required placeholder="Ex : plombier, restaurant, e-commerce..." />
 </div>

 <div className="grid gap-2">
 <Label htmlFor="need">Description rapide du besoin</Label>
 <Textarea id="need" name="need" rows={3} placeholder="En quelques mots..." />
 </div>

 <div className="grid gap-2">
 <Label htmlFor="when">Quand souhaitez-vous être rappelé ?</Label>
 <Input id="when" name="when" placeholder="Ex : aujourd'hui à 14h" />
 </div>

 <Button type="submit" variant="hero" size="lg" disabled={loading}>
 {loading ? "Envoi..." : "Envoyer ma demande"}
 </Button>

 <p className="text-xs text-muted-foreground text-center">
 En cliquant, vous acceptez d'être recontacté par {SITE.name}.
 </p>
 </form>
 </DialogContent>
 </Dialog>
 );
}
