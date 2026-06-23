import { createFileRoute } from "@tanstack/react-router";
import { MetierPage } from "@/components/MetierPage";
import { Server, Smartphone, MessageCircle, MapPin, MailCheck, Phone, Sparkles, Zap, Briefcase } from "lucide-react";

export const Route = createFileRoute("/site-internet-pme")({
  head: () => ({
    meta: [
      { title: "Site internet pour PME dès 99€ — Infinity Trade & Digital" },
      { name: "description", content: "Image professionnelle, génération de leads et présentation claire de vos services pour PME." },
      { property: "og:title", content: "Site internet pour PME premium" },
      { property: "og:description", content: "Image professionnelle, génération de leads et présentation claire de vos services pour PME." },
    ],
  }),
  component: () => (
    <MetierPage
      metier="PME"
      title="Site internet pour PME — moderne, rapide, efficace."
      intro="Image professionnelle, génération de leads et présentation claire de vos services pour PME."
      benefits={["Plus de demandes clients depuis Google","Image moderne et professionnelle","Affichage parfait sur mobile et tablette","Contact direct par WhatsApp et téléphone","Présence locale renforcée","Mise en ligne rapide et hébergement inclus"]}
      features={[
        { icon: Briefcase, title: "Conçu pour PME", description: "Un site pensé pour votre métier." },
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
