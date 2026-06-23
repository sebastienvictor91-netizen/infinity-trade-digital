import { createFileRoute } from "@tanstack/react-router";
import { MetierPage } from "@/components/MetierPage";
import { Server, Smartphone, MessageCircle, MapPin, MailCheck, Phone, Sparkles, Zap, Building } from "lucide-react";

export const Route = createFileRoute("/site-internet-entreprise")({
  head: () => ({
    meta: [
      { title: "Site internet pour entreprise dès 99€ — Infinity Trade & Digital" },
      { name: "description", content: "Un site corporate premium pour renforcer votre crédibilité et générer du business." },
      { property: "og:title", content: "Site internet pour entreprise premium" },
      { property: "og:description", content: "Un site corporate premium pour renforcer votre crédibilité et générer du business." },
    ],
  }),
  component: () => (
    <MetierPage
      metier="entreprise"
      title="Site internet pour entreprise — moderne, rapide, efficace."
      intro="Un site corporate premium pour renforcer votre crédibilité et générer du business."
      benefits={["Plus de demandes clients depuis Google","Image moderne et professionnelle","Affichage parfait sur mobile et tablette","Contact direct par WhatsApp et téléphone","Présence locale renforcée","Mise en ligne rapide et hébergement inclus"]}
      features={[
        { icon: Building, title: "Conçu pour entreprise", description: "Un site pensé pour votre métier." },
        { icon: Server, title: "Hébergement inclus", description: "Serveurs rapides, SSL, sauvegardes." },
        { icon: Smartphone, title: "Responsive mobile", description: "Affichage parfait sur tous les écrans." },
        { icon: MessageCircle, title: "Bouton WhatsApp", description: "Vos clients vous contactent en un clic." },
        { icon: MapPin, title: "Google Maps", description: "Carte intégrée pour vous localiser." },
        { icon: MailCheck, title: "Formulaire", description: "Recevez les demandes par email." },
        { icon: Phone, title: "Numéro cliquable", description: "Appel direct depuis le mobile." },
        { icon: Zap, title: "Mise en ligne rapide", description: "Site livré en quelques jours." },
      ]}
    />
  ),
});
